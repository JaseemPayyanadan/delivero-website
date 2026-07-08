# Solutions Pages — Design

**Date:** 2026-07-08
**Status:** Approved

## Problem

The site footer (`src/components/Footer.tsx`) links to three Solutions routes that do not exist, so all three currently return 404:

- `/solutions/milk-delivery`
- `/solutions/bakery-delivery`
- `/solutions/grocery-delivery`

These were wired ahead of the pages during the Phase 1 SEO work; the industry pages themselves (Phase 2 in `docs/SEO_PLAN_KERALA.md`) were never built.

## Goal

Build industry Solutions pages that fix the dead footer links and add SEO landing pages for Delivero's core delivery verticals. Content is **general / national — no Kerala localization** (per product decision). Kerala combo pages, the `/kerala` hub, blog, and competitor-comparison pages are out of scope.

## Scope

**6 industry verticals** (covers the footer's 3 and rounds out the set):

| Slug | Name |
|------|------|
| `milk-delivery` | Milk Delivery |
| `bakery-delivery` | Bakery Delivery |
| `grocery-delivery` | Grocery Delivery |
| `water-delivery` | Water Delivery |
| `tiffin-delivery` | Tiffin Delivery |
| `meal-delivery` | Meal Delivery |

Plus a `/solutions` hub index page linking to all six.

## Architecture

Dynamic route driven by a single typed content file. One template to maintain; adding an industry later is a data-only change.

### 1. Content data — `src/content/solutions/industries.ts`

Exports a typed array plus lookup helpers. Each entry:

```ts
type SolutionFeature = { title: string; description: string };
type SolutionFaq = { q: string; a: string };

type Industry = {
  slug: string;            // URL segment, e.g. "milk-delivery"
  name: string;            // short label, e.g. "Milk Delivery"
  title: string;           // <title> / H1 base, e.g. "Milk delivery software"
  metaDescription: string; // ~150 chars, unique per industry
  h1: string;              // page H1
  intro: string;           // 1–2 sentence lead paragraph
  painPoints: string[];    // 3–4 "the old way" problems
  features: SolutionFeature[]; // 5–6 how Delivero solves it
  useCases: string[];      // short bullets
  faq: SolutionFaq[];      // 3 industry-specific Q&A
  ctaText: string;         // CTA subtitle
};

export const industries: Industry[];
export function getIndustry(slug: string): Industry | undefined;
export function getIndustrySlugs(): string[];
```

Content is written per-vertical (no Kerala references), reusing Delivero's real capabilities (owner dashboard, routes/drivers, subscription/daily orders, proof of delivery, payment tracking).

### 2. Dynamic route — `src/app/solutions/[industry]/page.tsx`

- `generateStaticParams()` → returns all six slugs (fully static-generated).
- `generateMetadata({ params })` → looks up the industry, builds metadata via the existing `buildMetadata` helper (`src/lib/seo.ts`); returns empty/`notFound`-safe metadata for unknown slugs.
- Page component: `notFound()` when the slug is unknown.
- Layout, built from existing components (`Section`, `FeatureCard`, `CTASection`, `Reveal`):
  1. **Breadcrumb** — Home / Solutions / {name}, plus `buildBreadcrumbJsonLd` (already in `src/lib/seo.ts`) emitted as `application/ld+json`.
  2. **Hero** — `Section as="h1"` with `h1` + `intro`.
  3. **Pain points** — the "old way" list.
  4. **Feature grid** — `FeatureCard`s from `features` (reuse a shared icon or a small icon set).
  5. **Use cases** — bullet list.
  6. **FAQ** — industry `faq`, plus `FAQPage` JSON-LD.
  7. **CTA** — `CTASection` with `ctaText`.

### 3. Hub index — `src/app/solutions/page.tsx`

- Static page with its own `buildMetadata`.
- Intro `Section`, then a responsive grid of cards (one per industry) linking to `/solutions/{slug}`, each showing `name` + a one-line summary.
- Closes with `CTASection`.

### 4. Sitemap — `src/app/sitemap.ts`

Add `/solutions` and the six `/solutions/{slug}` routes to the generated sitemap (priority consistent with existing non-home entries, `0.7`). Derive the industry list from `getIndustrySlugs()` so the sitemap stays in sync with the content file.

## Components & conventions reused

- `buildMetadata`, `buildBreadcrumbJsonLd` — `src/lib/seo.ts`
- `Section`, `FeatureCard`, `CTASection`, `Reveal` — `src/components/`
- Tailwind token classes and page structure matching `src/app/features/page.tsx`

## Out of scope

- NavBar Solutions link/dropdown
- `/kerala` hub and `/solutions/[industry]/kerala/[city]` combo pages
- Blog and competitor-comparison pages
- Any Kerala-specific copy

## Success criteria

- All three footer links resolve (no 404s); all six industry pages render.
- Each industry page has unique title, meta description, and canonical.
- `/solutions` hub lists and links to all six.
- Breadcrumb + FAQ JSON-LD present on industry pages.
- Sitemap includes `/solutions` and all six industry routes.
- `next build` / lint passes.
