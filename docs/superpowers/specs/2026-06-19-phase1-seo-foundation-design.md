# Phase 1 SEO Foundation — Design Spec

**Date:** 2026-06-19  
**Scope:** Kerala-first SEO foundation for delivero.app  
**Feeds into:** `docs/SEO_PLAN_KERALA.md` Phase 1 checklist

---

## A. SEO utilities — `src/lib/seo.ts`

### Purpose
Single source of truth for page metadata. All pages call `buildMetadata()` instead of inlining raw `Metadata` objects.

### Exports

**`buildMetadata(options)`**
```ts
type SeoOptions = {
  title: string;           // raw title, ≤52 chars (template adds " – Delivero")
  description: string;     // ≤155 chars
  path: string;            // e.g. "/features" — used for canonical + OG url
  keywords?: string[];     // merged with defaults
  openGraph?: Partial<OpenGraph>;
}
```
Returns a Next.js `Metadata` object with:
- `title`: `"${title} – Delivero"` (≤60 chars total)
- `description`
- `alternates.canonical`: `https://delivero.app${path}`
- `keywords`: default array merged with page-specific keywords
- `openGraph`: url, title, description, siteName, images (inherits `/hero.png` default)
- `twitter`: card, title, description, images

Default keywords array (expanded from current):
```
delivery management software, last mile delivery software,
route optimization software, subscription delivery management,
milk delivery software, proof of delivery app, delivery driver app,
daily delivery management, delivery management app Kerala,
delivery operations software, order tracking app
```

**`buildBreadcrumbJsonLd(items)`**
```ts
type BreadcrumbItem = { name: string; url: string };
```
Returns a `BreadcrumbList` JSON-LD object. Used by inner pages via an inline `<script type="application/ld+json">`.

---

## B. H1 hierarchy fix — `src/components/Section.tsx`

Add optional `as` prop:
```ts
type SectionProps = {
  as?: "h1" | "h2";   // default "h2"
  // ...existing props
}
```
When `as="h1"`, the section title renders as `<h1>` instead of `<h2>`. Styling identical — only the tag changes.

### H1 assignments per page

| Page | Component | H1 text |
|------|-----------|---------|
| Home | `Hero.tsx` (existing `<h1>`) | Delivery management software for Kerala businesses |
| `/features` | First `<Section as="h1">` | Last-mile delivery & route management features |
| `/pricing` | First `<Section as="h1">` | Delivery management software pricing — Kerala |
| `/faq` | First `<Section as="h1">` | Delivery software FAQ |
| `/contact` | First `<Section as="h1">` | Contact Delivero |
| `/screenshots` | First `<Section as="h1">` | See Delivero in action |

---

## C. Hero & home copy — `src/components/Hero.tsx` + `src/app/page.tsx`

### Hero.tsx changes
- **Badge text:** `Built for Kerala's daily delivery businesses`
- **H1:** `Delivery management software for Kerala businesses`
- **Subopy:** `Manage last-mile delivery, route optimization, and subscription orders. Proof of delivery and driver app included. Works on web and Android.`

### page.tsx changes

**Problem card:** Existing copy + add: "…replace spreadsheets and WhatsApp chats with a system built for daily delivery runs."

**Use-case card titles** (keyword-rich replacements):

| Old title | New title |
|-----------|-----------|
| Bakery deliveries | Bakery delivery software |
| Milk / subscription delivery | Milk delivery software |
| Meal deliveries | Meal delivery software |
| Water supply runs | Water supply delivery management |
| Grocery distribution | Grocery delivery management |
| Local distributors | Local distributor management |

Each description adds a Kerala context phrase, e.g. "Popular with Kerala bakeries that run morning routes."

---

## D. Features page — `src/app/features/page.tsx`

### Metadata
```ts
buildMetadata({
  title: "Last-mile delivery & route management features",
  description: "Explore Delivero features: last-mile delivery tracking, route optimization, proof of delivery, driver app, and subscription order management for Kerala businesses.",
  path: "/features",
})
```

### 3 new FeatureCards (appended to existing 6)

1. **Last-mile delivery tracking** — "Track every delivery from dispatch to doorstep. Owners see real-time order status across all active routes."
2. **Route optimization & driver assignment** — "Build optimized routes by area, assign drivers, and keep daily runs organized without manual coordination."
3. **Proof of delivery & order status** — "Drivers mark orders delivered and owners see instant status updates — no calls needed to confirm completed drops."

---

## E. Pricing page — `src/app/pricing/page.tsx`

### Metadata
```ts
buildMetadata({
  title: "Delivery management software pricing — Kerala",
  description: "Transparent delivery management software pricing for Kerala small businesses. Free plan available. INR pricing for milk, bakery, grocery, and meal delivery teams.",
  path: "/pricing",
  keywords: ["how much does delivery software cost", "delivery management software pricing India", "free delivery management app"],
})
```

### INR pricing display
Show INR alongside USD in each plan card:

| Plan | Price display |
|------|---------------|
| Starter | Free forever |
| Professional | $49 / ₹3,999 per month |
| Business | Custom |

### Offer JSON-LD (inline on pricing page)
```json
{
  "@type": "AggregateOffer",
  "priceCurrency": ["USD", "INR"],
  "lowPrice": "0",
  "highPrice": "49",
  "offerCount": "3",
  "offers": [
    { "@type": "Offer", "name": "Starter", "price": "0", "priceCurrency": "USD" },
    { "@type": "Offer", "name": "Professional", "price": "49", "priceCurrency": "USD" },
    { "@type": "Offer", "name": "Business", "price": "0", "priceCurrency": "USD", "priceSpecification": { "price": "Custom" } }
  ]
}
```

### 2 new pricing FAQ items
- "How much does delivery management software cost?" → Answer references free plan + Professional at ₹3,999/mo
- "Is there a free plan for small delivery businesses in Kerala?" → Yes, Starter plan is free forever

---

## F. Root layout schema — `src/app/layout.tsx`

Expand `SoftwareApplication` node:
```json
{
  "@type": "SoftwareApplication",
  "name": "Delivero",
  "description": "Delivery management software for Kerala businesses. Manage last-mile delivery, route optimization, subscription orders, and driver assignments from one system.",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "DeliveryManagement",
  "featureList": [
    "Last-mile delivery tracking",
    "Route optimization",
    "Subscription delivery management",
    "Proof of delivery",
    "Driver app",
    "Payment tracking"
  ],
  "areaServed": { "@type": "State", "name": "Kerala" },
  "offers": { "@type": "Offer", "url": "https://delivero.app/pricing" }
}
```

---

## G. NavBar — `src/components/NavBar.tsx`

Add `Pricing` to the links array between Features and How It Works:
```ts
{ href: "/pricing", label: "Pricing" }
```

---

## H. Footer — `src/components/Footer.tsx`

**Links column:** Add `Pricing` entry.

**New Solutions column:**
```
Milk Delivery    → /solutions/milk-delivery
Bakery Delivery  → /solutions/bakery-delivery
Grocery Delivery → /solutions/grocery-delivery
```
(These routes don't exist yet — Phase 2 builds them. Links are present now for internal linking graph.)

**New Kerala column:**
```
Kerala Hub → /kerala
```
(Phase 2 builds this route. Link present now.)

---

## Files changed

| Action | File |
|--------|------|
| Create | `src/lib/seo.ts` |
| Modify | `src/components/Section.tsx` |
| Modify | `src/components/Hero.tsx` |
| Modify | `src/components/NavBar.tsx` |
| Modify | `src/components/Footer.tsx` |
| Modify | `src/app/layout.tsx` |
| Modify | `src/app/page.tsx` |
| Modify | `src/app/features/page.tsx` |
| Modify | `src/app/pricing/page.tsx` |

---

## Success criteria

- Every page has exactly one H1
- Every page uses `buildMetadata()` with unique title + description
- Kerala keyword appears in home H1, Hero badge, Hero subcopy, and root metadata
- Gap keywords (`last mile delivery`, `route optimization`, `subscription delivery`, `proof of delivery`) appear naturally in Hero, features, and pricing copy
- Pricing page shows INR alongside USD with `AggregateOffer` JSON-LD
- NavBar includes Pricing link
- Footer has Solutions + Kerala columns (links to Phase 2 routes)
- Root schema has `areaServed: Kerala`, `featureList`, and `applicationSubCategory`
- No duplicate thin content introduced
