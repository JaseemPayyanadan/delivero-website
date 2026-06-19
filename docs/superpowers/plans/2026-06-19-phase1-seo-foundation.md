# Phase 1 SEO Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Kerala-first SEO foundation to delivero.app — centralized metadata helper, sitewide H1 hierarchy fix, Kerala keyword copy, expanded JSON-LD schema, INR pricing, and nav/footer links.

**Architecture:** Create `src/lib/seo.ts` as the single metadata factory; all pages call `buildMetadata()` instead of inlining raw objects. `Section.tsx` gains an optional `as` prop so inner pages can render their first section title as `<h1>`. All other changes are surgical edits to existing components and page files.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript 5, Tailwind CSS v4. No test framework — use `npx tsc --noEmit` for type verification and `pnpm build` for integration check.

## Global Constraints

- Node package manager: `pnpm` (use `pnpm` not `npm` or `yarn`)
- Build command: `pnpm build` (runs `next build --webpack`)
- TypeScript strict mode is on — no `any`, no type errors
- All titles ≤ 60 chars total (raw title + " – Delivero" = 11 chars, so raw title ≤ 49 chars)
- All meta descriptions ≤ 155 chars
- Do not add or remove dependencies
- Do not change visual styling — only copy text, HTML tags, and data/schema
- Do not touch `src/app/privacy/page.tsx` or `src/app/terms/page.tsx` (legal pages, out of scope)

---

## File Map

| Action | Path | Responsibility |
|--------|------|---------------|
| Create | `src/lib/seo.ts` | `buildMetadata()` and `buildBreadcrumbJsonLd()` helpers |
| Modify | `src/components/Section.tsx` | Add `as?: "h1" \| "h2"` prop |
| Modify | `src/components/Hero.tsx` | Kerala H1, badge, subcopy |
| Modify | `src/app/layout.tsx` | Expanded SoftwareApplication JSON-LD |
| Modify | `src/components/NavBar.tsx` | Add Pricing link |
| Modify | `src/components/Footer.tsx` | Add Pricing, Solutions, Kerala columns |
| Modify | `src/app/page.tsx` | Kerala use-case titles + problem copy |
| Modify | `src/app/features/page.tsx` | 3 new FeatureCards + `as="h1"` + buildMetadata |
| Modify | `src/app/pricing/page.tsx` | INR prices, Offer JSON-LD, 2 FAQ items, buildMetadata |
| Modify | `src/app/faq/page.tsx` | `as="h1"` + buildMetadata |
| Modify | `src/app/contact/page.tsx` | `as="h1"` + buildMetadata |
| Modify | `src/app/screenshots/page.tsx` | `as="h1"` + buildMetadata |

---

### Task 1: Create SEO utilities (`src/lib/seo.ts`)

**Files:**
- Create: `src/lib/seo.ts`

**Interfaces:**
- Produces:
  - `buildMetadata(opts: SeoOptions): Metadata` — used by every page
  - `buildBreadcrumbJsonLd(items: BreadcrumbItem[]): object` — used by inner pages (Phase 2+)

- [ ] **Step 1: Create `src/lib/seo.ts`**

```typescript
import type { Metadata } from "next";

const BASE_URL = "https://delivero.app";
const SITE_NAME = "Delivero";
const DEFAULT_OG_IMAGE = "/hero.png";

const DEFAULT_KEYWORDS = [
  "delivery management software",
  "last mile delivery software",
  "route optimization software",
  "subscription delivery management",
  "milk delivery software",
  "proof of delivery app",
  "delivery driver app",
  "daily delivery management",
  "delivery management app Kerala",
  "delivery operations software",
  "order tracking app",
];

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
};

type BreadcrumbItem = { name: string; url: string };

export function buildMetadata(opts: SeoOptions): Metadata {
  const { title, description, path, keywords = [], ogImage = DEFAULT_OG_IMAGE } = opts;
  const fullTitle = `${title} – ${SITE_NAME}`;
  const canonical = `${BASE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [...DEFAULT_KEYWORDS, ...keywords],
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: canonical,
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      images: [{ url: ogImage, alt: `${title} – Delivero` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}
```

- [ ] **Step 2: Verify types**

```bash
cd /Users/pickcel/Jaseem/GitWorks/delivero-website && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/seo.ts
git commit -m "feat(seo): add buildMetadata and buildBreadcrumbJsonLd helpers"
```

---

### Task 2: Add `as` prop to Section component

**Files:**
- Modify: `src/components/Section.tsx`

**Interfaces:**
- Consumes: nothing new
- Produces: `<Section as="h1" title="...">` renders `<h1>` instead of `<h2>`

- [ ] **Step 1: Update `src/components/Section.tsx`**

Replace the entire file with:

```typescript
import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2";
};

export default function Section({ id, title, subtitle, children, className = "", as: Tag = "h2" }: SectionProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-[1200px] px-6 py-20 md:py-24 ${className}`}>
      {title ? (
        <div className="mb-12 text-center md:mb-14">
          <Tag className="text-balance text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.02em] text-(--color-secondary)">
            {title}
          </Tag>
          {subtitle ? (
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
```

- [ ] **Step 2: Verify types**

```bash
cd /Users/pickcel/Jaseem/GitWorks/delivero-website && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Section.tsx
git commit -m "feat(ui): add optional 'as' prop to Section for H1 hierarchy"
```

---

### Task 3: Update Hero with Kerala copy

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Update `src/components/Hero.tsx`**

Replace only the badge text, h1, and subcopy paragraph. The rest of the file (buttons, image) stays identical:

```typescript
import Button from "@/components/Button";
import Image from "next/image";

export default function Hero() {
  const androidDownloadHref = "https://play.google.com/store/apps/details?id=delivero.com";

  return (
    <section className="relative mx-auto w-full max-w-none bg-hero px-4 pb-10 pt-10 sm:px-6 md:pb-12 md:pt-12">
      <div className="mx-auto grid max-w-[1200px] items-center gap-8 md:grid-cols-2 md:gap-10">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-(--color-secondary)">
            <span className="rounded-full bg-(--color-primary)/12 px-2 py-0.5 text-[10px] font-semibold tracking-[0.08em] uppercase text-(--color-primary)">
              New
            </span>
            Built for Kerala&apos;s daily delivery businesses.
          </div>

          <h1 className="mt-4 text-balance text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-(--color-secondary)">
            Delivery management software for Kerala businesses.
          </h1>

          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted md:text-lg">
            Manage last-mile delivery, route optimization, and subscription orders.
            Proof of delivery and driver app included.
            <br />
            Works on web and Android.
          </p>

          <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Button href="https://delivero-flutter.vercel.app/#/owner" className="rounded-full px-7 py-3.5 text-base font-semibold">
              Get Started
            </Button>
            <div className="flex flex-wrap items-center gap-3">
            <a
              href={androidDownloadHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Delivero on Google Play"
              className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-3 shadow-sm transition hover:bg-black/90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="110" height="26" viewBox="0 0 110 26" fill="none">
                <path d="M55.2156 14.266C52.9818 14.266 51.161 15.969 51.161 18.3147C51.161 20.6461 52.9818 22.3635 55.2156 22.3635C57.4504 22.3635 59.2711 20.6461 59.2711 18.3147C59.2701 15.969 57.4495 14.266 55.2156 14.266ZM55.2156 20.7698C53.9914 20.7698 52.9362 19.7579 52.9362 18.3157C52.9362 16.8582 53.9923 15.8615 55.2156 15.8615C56.4398 15.8615 57.495 16.8582 57.495 18.3157C57.495 19.7569 56.4398 20.7698 55.2156 20.7698ZM46.3695 14.266C44.1356 14.266 42.3149 15.969 42.3149 18.3147C42.3149 20.6461 44.1356 22.3635 46.3695 22.3635C48.6043 22.3635 50.425 20.6461 50.425 18.3147C50.425 15.969 48.6043 14.266 46.3695 14.266ZM46.3695 20.7698C45.1452 20.7698 44.09 19.7579 44.09 18.3157C44.09 16.8582 45.1462 15.8615 46.3695 15.8615C47.5937 15.8615 48.6489 16.8582 48.6489 18.3157C48.6499 19.7569 47.5937 20.7698 46.3695 20.7698ZM35.848 17.2266H39.9491C39.8265 18.1929 39.5055 18.8983 39.0154 19.3885C38.419 19.9864 37.4854 20.6461 35.848 20.6461C33.3235 20.6461 31.3499 18.606 31.3499 16.0757C31.3499 13.5453 33.3235 11.5052 35.848 11.5052C37.2099 11.5052 38.2043 12.0421 38.9385 12.7323L40.1476 11.5205C39.1218 10.539 37.7608 9.78786 35.848 9.78786C32.3899 9.78786 29.4826 12.6095 29.4826 16.0757C29.4826 19.5418 32.3899 22.3635 35.848 22.3635C37.7143 22.3635 39.1228 21.7494 40.2235 20.5994C41.3557 19.4647 41.708 17.8692 41.708 16.5812C41.708 16.1832 41.6776 15.8148 41.6159 15.5083H35.848V17.2266ZM78.88 16.843C78.5438 15.9386 77.518 14.266 75.4219 14.266C73.3409 14.266 71.6114 15.9072 71.6114 18.3147C71.6114 20.5842 73.3257 22.3635 75.6204 22.3635C77.4715 22.3635 78.5428 21.2287 78.9873 20.569L77.6101 19.6484C77.1514 20.3234 76.5236 20.7679 75.6204 20.7679C74.7181 20.7679 74.0751 20.3538 73.662 19.5408L79.0633 17.3018L78.88 16.843ZM73.3713 18.1929C73.3257 16.6278 74.5804 15.831 75.4836 15.831C76.1874 15.831 76.7838 16.1842 76.9833 16.6897L73.3713 18.1929ZM68.9806 22.1188H70.7547V10.2182H68.9806V22.1188ZM66.0116 15.1713C65.6136 14.6953 64.8481 14.266 63.8851 14.266C61.8649 14.266 60.0138 16.0452 60.0138 18.3309C60.0138 20.6004 61.8649 22.3644 63.8851 22.3644C64.8491 22.3644 65.6136 21.9351 66.0116 21.4448H66.0724V22.0274C66.0724 23.5763 65.2461 24.4045 63.9155 24.4045C62.8289 24.4045 62.1555 23.6229 61.8801 22.9632L60.3348 23.6077C60.7784 24.6806 61.9561 26 63.9155 26C65.9964 26 67.7563 24.7729 67.7563 21.7818V14.5125H66.0733V15.1713H66.0116ZM64.038 20.7698C62.8137 20.7698 61.7889 19.7417 61.7889 18.3309C61.7889 16.9039 62.8137 15.8615 64.038 15.8615C65.2461 15.8615 66.1949 16.9039 66.1949 18.3309C66.1949 19.7417 65.2461 20.7698 64.038 20.7698ZM87.1942 10.2182H82.9478V22.1188H84.7191V17.6102H87.1933C89.1574 17.6102 91.0892 16.1851 91.0892 13.9147C91.0892 11.6442 89.1583 10.2182 87.1942 10.2182ZM87.2398 15.9538H84.7191V11.8746H87.2398C88.5647 11.8746 89.317 12.9741 89.317 13.9147C89.317 14.8362 88.5647 15.9538 87.2398 15.9538ZM98.1925 14.245C96.9094 14.245 95.5807 14.8114 95.0307 16.0671L96.6036 16.7249C96.9398 16.0671 97.5666 15.8519 98.2229 15.8519C99.1394 15.8519 100.071 16.4031 100.086 17.3827V17.5055C99.7653 17.3218 99.0777 17.0467 98.2381 17.0467C96.5428 17.0467 94.8161 17.9806 94.8161 19.7255C94.8161 21.3182 96.2066 22.3435 97.7642 22.3435C98.9552 22.3435 99.6124 21.8075 100.025 21.1792H100.085V22.0979H101.797V17.535C101.798 15.4236 100.223 14.245 98.1925 14.245ZM97.9779 20.767C97.3985 20.767 96.5884 20.4757 96.5884 19.756C96.5884 18.8373 97.597 18.4851 98.468 18.4851C99.2458 18.4851 99.6134 18.6536 100.086 18.883C99.9486 19.9864 99.0017 20.767 97.9779 20.767ZM108.029 14.5049L105.998 19.6646H105.937L103.828 14.5049H101.919L105.081 21.7161L103.279 25.7277H105.127L110 14.5049H108.029ZM92.0675 22.1188H93.8388V10.2182H92.0675V22.1188Z" fill="white"></path>
                <path d="M35.5384 3.31092C35.5384 4.10868 35.3028 4.74365 34.8308 5.21773C34.2951 5.7813 33.5961 6.06308 32.7375 6.06308C31.915 6.06308 31.2151 5.77749 30.6404 5.20631C30.0649 4.63417 29.7771 3.9259 29.7771 3.08055C29.7771 2.23424 30.0649 1.52597 30.6404 0.954786C31.2151 0.382649 31.915 0.0970575 32.7375 0.0970575C33.1459 0.0970575 33.5363 0.177023 33.9067 0.336003C34.2781 0.495934 34.5753 0.708225 34.7976 0.973826L34.2971 1.47647C33.92 1.02428 33.4005 0.798663 32.7366 0.798663C32.1363 0.798663 31.6178 1.01 31.1799 1.43268C30.7421 1.85536 30.5236 2.40464 30.5236 3.07959C30.5236 3.75454 30.7421 4.30383 31.1799 4.72651C31.6178 5.14919 32.1363 5.36053 32.7366 5.36053C33.3729 5.36053 33.9038 5.14824 34.3284 4.7227C34.6038 4.44568 34.7634 4.06013 34.8061 3.56605H32.7366V2.87968H35.4976C35.526 3.02914 35.5384 3.17289 35.5384 3.31092Z" fill="white"></path>
                <path d="M39.9169 0.925329H37.3221V2.73599H39.6624V3.42236H37.3221V5.23302H39.9169V5.93557H36.5899V0.223724H39.9169V0.925329Z" fill="white"></path>
                <path d="M43.0045 5.93557H42.2722V0.925329H40.6804V0.223724H44.5963V0.925329H43.0045V5.93557Z" fill="white"></path>
                <path d="M47.4294 5.93557V0.223724H48.1617V5.93557H47.4294Z" fill="white"></path>
                <path d="M51.4091 5.93557H50.6768V0.925329H49.085V0.223724H53.0009V0.925329H51.4091V5.93557Z" fill="white"></path>
                <path d="M60.4136 5.19778C59.8532 5.77468 59.1571 6.06313 58.3241 6.06313C57.4912 6.06313 56.795 5.77468 56.2356 5.19778C55.6752 4.62089 55.396 3.91452 55.396 3.07964C55.396 2.24476 55.6752 1.53839 56.2356 0.961494C56.795 0.384598 57.4912 0.0951974 58.3241 0.0951974C59.1523 0.0951974 59.8475 0.385549 60.4098 0.965302C60.9721 1.54505 61.2532 2.24952 61.2532 3.07964C61.2532 3.91452 60.973 4.62089 60.4136 5.19778ZM56.776 4.71894C57.1977 5.14733 57.7134 5.36057 58.3241 5.36057C58.9348 5.36057 59.4515 5.14638 59.8722 4.71894C60.2939 4.29055 60.5057 3.74412 60.5057 3.07964C60.5057 2.41516 60.2939 1.86873 59.8722 1.44034C59.4515 1.01195 58.9348 0.798707 58.3241 0.798707C57.7134 0.798707 57.1977 1.0129 56.776 1.44034C56.3552 1.86873 56.1435 2.41516 56.1435 3.07964C56.1435 3.74412 56.3552 4.29055 56.776 4.71894Z" fill="white"></path>
                <path d="M62.2809 5.93557V0.223724H63.1717L65.9413 4.66659H65.9726L65.9413 3.56611V0.223724H66.6735V5.93557H65.909L63.0112 1.27661H62.9799L63.0112 2.37709V5.93557H62.2809Z" fill="white"></path>
                <path d="M10.2006 11.9133L0.0950693 22.6706C0.408492 23.8415 1.47223 24.6983 2.73542 24.6983C3.2388 24.6983 3.71368 24.565 4.12208 24.3175L4.15057 24.2985L15.5288 17.7203L10.2006 11.9038V11.9133Z" fill="#EA4335"></path>
                <path d="M20.4387 10.0856H20.4292L15.519 7.22014L9.98182 12.1609L15.5379 17.7299L20.4292 14.9026C21.284 14.4361 21.8634 13.5317 21.8634 12.4941C21.8634 11.4564 21.2935 10.552 20.4387 10.0951V10.0856Z" fill="#FBBC04"></path>
                <path d="M0.0949766 2.26038C0.0379906 2.48886 0 2.71733 0 2.96484V21.9758C0 22.2233 0.028493 22.4518 0.0949766 22.6802L10.5519 12.199L0.0949766 2.26038Z" fill="#4285F4"></path>
                <path d="M10.2766 12.4659L15.5098 7.22051L4.14107 0.6138C3.73267 0.366287 3.24829 0.223491 2.72592 0.223491C1.47223 0.223491 0.398994 1.08979 0.0950693 2.2512L10.2861 12.4564L10.2766 12.4659Z" fill="#34A853"></path>
              </svg>
            </a>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up md:justify-self-end">
          <div className="relative mx-auto max-w-[520px]">
            <Image
              src="/hero-1.png"
              alt="Delivero app preview"
              width={1200}
              height={675}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify types**

```bash
cd /Users/pickcel/Jaseem/GitWorks/delivero-website && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat(seo): update Hero with Kerala keyword copy"
```

---

### Task 4: Expand root layout JSON-LD schema

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update the `SoftwareApplication` node in `src/app/layout.tsx`**

Replace only the `SoftwareApplication` object inside the `@graph` array (lines 108–115 in the current file). The Organization and WebSite nodes stay unchanged. The new SoftwareApplication object:

```typescript
{
  "@type": "SoftwareApplication",
  "@id": "https://delivero.app/#software",
  name: "Delivero",
  description:
    "Delivery management software for Kerala businesses. Manage last-mile delivery, route optimization, subscription orders, and driver assignments from one system.",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "DeliveryManagement",
  operatingSystem: ["Android", "Web"],
  url: "https://delivero.app",
  downloadUrl: androidDownloadHref,
  publisher: { "@id": "https://delivero.app/#organization" },
  featureList: [
    "Last-mile delivery tracking",
    "Route optimization",
    "Subscription delivery management",
    "Proof of delivery",
    "Driver app",
    "Payment tracking",
  ],
  areaServed: { "@type": "State", name: "Kerala" },
  offers: { "@type": "Offer", url: "https://delivero.app/pricing" },
},
```

Also update the root `metadata` export — replace the existing `title.default` and `description` and `keywords`:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://delivero.app"),
  title: {
    default: "Delivero – Delivery Management Software for Kerala",
    template: "%s – Delivero",
  },
  description:
    "Delivery management software for Kerala businesses. Manage last-mile delivery, routes, subscription orders, and drivers in one system.",
  applicationName: "Delivero",
  keywords: [
    "delivery management software",
    "last mile delivery software",
    "route optimization software",
    "subscription delivery management",
    "milk delivery software",
    "proof of delivery app",
    "delivery driver app",
    "daily delivery management Kerala",
    "delivery management app Kerala",
  ],
  // ... rest unchanged (icons, openGraph, twitter, robots)
```

- [ ] **Step 2: Verify types**

```bash
cd /Users/pickcel/Jaseem/GitWorks/delivero-website && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat(seo): expand SoftwareApplication schema with Kerala areaServed and featureList"
```

---

### Task 5: Add Pricing to NavBar

**Files:**
- Modify: `src/components/NavBar.tsx`

- [ ] **Step 1: Update the `links` array in `src/components/NavBar.tsx`**

Replace:
```typescript
const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
```

With:
```typescript
const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
```

- [ ] **Step 2: Verify types**

```bash
cd /Users/pickcel/Jaseem/GitWorks/delivero-website && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/NavBar.tsx
git commit -m "feat(nav): add Pricing link to navbar"
```

---

### Task 6: Expand Footer with Pricing, Solutions, Kerala columns

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Update `src/components/Footer.tsx`**

Replace the inner grid `<div className="grid grid-cols-2 gap-6 sm:col-span-2 sm:grid-cols-3">` and its contents with a 4-column grid that adds Solutions and Kerala:

```typescript
<div className="grid grid-cols-2 gap-6 sm:col-span-2 sm:grid-cols-4">
  <div>
    <div className="mb-3 text-xs font-semibold tracking-[0.08em] uppercase text-(--color-secondary)">Links</div>
    <ul className="space-y-2 text-sm">
      <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/">Home</Link></li>
      <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/features">Features</Link></li>
      <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/pricing">Pricing</Link></li>
      <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/#how-it-works">How It Works</Link></li>
      <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/faq">FAQ</Link></li>
      <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/contact">Contact</Link></li>
    </ul>
  </div>
  <div>
    <div className="mb-3 text-xs font-semibold tracking-[0.08em] uppercase text-(--color-secondary)">Solutions</div>
    <ul className="space-y-2 text-sm">
      <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/solutions/milk-delivery">Milk Delivery</Link></li>
      <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/solutions/bakery-delivery">Bakery Delivery</Link></li>
      <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/solutions/grocery-delivery">Grocery Delivery</Link></li>
    </ul>
  </div>
  <div>
    <div className="mb-3 text-xs font-semibold tracking-[0.08em] uppercase text-(--color-secondary)">Kerala</div>
    <ul className="space-y-2 text-sm">
      <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/kerala">Kerala Hub</Link></li>
    </ul>
  </div>
  <div>
    <div className="mb-3 text-xs font-semibold tracking-[0.08em] uppercase text-(--color-secondary)">Legal</div>
    <ul className="space-y-2 text-sm">
      <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/terms">Terms</Link></li>
      <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/privacy">Privacy</Link></li>
    </ul>
  </div>
</div>
```

Remove the old Legal `<div>` and the old `<div className="grid grid-cols-2 ...">` wrapper since we're replacing it entirely. The Get Started column (CTA + Play badge) that was in the third column is now removed from the grid — the footer CTA lives in the branded blurb section only. Keep the brand blurb (`<div>`) and the copyright bar unchanged.

The full updated footer body (inside `<footer>`):
```typescript
<div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-[1fr_2fr]">
  <div>
    <div className="text-lg font-semibold text-(--color-secondary)">Delivero</div>
    <p className="mt-2 text-sm text-muted">
      Delivero helps delivery businesses run orders, routes, drivers, and payments in one simple system.
    </p>
  </div>
  <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
    <div>
      <div className="mb-3 text-xs font-semibold tracking-[0.08em] uppercase text-(--color-secondary)">Links</div>
      <ul className="space-y-2 text-sm">
        <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/">Home</Link></li>
        <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/features">Features</Link></li>
        <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/pricing">Pricing</Link></li>
        <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/#how-it-works">How It Works</Link></li>
        <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/faq">FAQ</Link></li>
        <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/contact">Contact</Link></li>
      </ul>
    </div>
    <div>
      <div className="mb-3 text-xs font-semibold tracking-[0.08em] uppercase text-(--color-secondary)">Solutions</div>
      <ul className="space-y-2 text-sm">
        <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/solutions/milk-delivery">Milk Delivery</Link></li>
        <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/solutions/bakery-delivery">Bakery Delivery</Link></li>
        <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/solutions/grocery-delivery">Grocery Delivery</Link></li>
      </ul>
    </div>
    <div>
      <div className="mb-3 text-xs font-semibold tracking-[0.08em] uppercase text-(--color-secondary)">Kerala</div>
      <ul className="space-y-2 text-sm">
        <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/kerala">Kerala Hub</Link></li>
      </ul>
    </div>
    <div>
      <div className="mb-3 text-xs font-semibold tracking-[0.08em] uppercase text-(--color-secondary)">Legal</div>
      <ul className="space-y-2 text-sm">
        <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/terms">Terms</Link></li>
        <li><Link className="text-muted hover:text-(--color-secondary) transition-colors" href="/privacy">Privacy</Link></li>
      </ul>
    </div>
  </div>
</div>
<div className="border-t border-black/8 py-6 text-center text-xs text-muted">
  © {year} Delivero
</div>
```

- [ ] **Step 2: Verify types**

```bash
cd /Users/pickcel/Jaseem/GitWorks/delivero-website && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat(nav): expand footer with Pricing, Solutions, and Kerala columns"
```

---

### Task 7: Update home page use-case copy

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Update the use-case cards array in `src/app/page.tsx`**

Find the use-cases array (currently inside the `id="use-cases"` Section, around line 91–122). Replace only the `t` (title) and `d` (description) values:

```typescript
{
  t: "Bakery delivery software",
  d: "Create morning routes, assign drivers, and track delivered vs pending orders by customer. Popular with Kerala bakeries that run daily drops.",
  img: { src: "/image1.png", alt: "Bakery delivery software", position: "50% 50%" },
},
{
  t: "Milk delivery software",
  d: "Manage recurring quantities, subscription orders, and payment status while keeping drivers focused on assigned drops. Built for Kerala milk and dairy runs.",
  img: { src: "/image copy 2.png", alt: "Milk delivery software", position: "50% 50%" },
},
{
  t: "Meal delivery software",
  d: "Handle daily order creation, route grouping, and status updates so owners can monitor delivery progress in real time.",
  img: { src: "/image copy 3.png", alt: "Meal delivery software", position: "50% 50%" },
},
{
  t: "Water supply delivery management",
  d: "Keep large, route-based deliveries organized with clear driver assignment and customer contact access on the go.",
  img: { src: "/image copy 4.png", alt: "Water supply delivery management", position: "50% 50%" },
},
{
  t: "Grocery delivery management",
  d: "Track customer records, orders, and payments across routes while replacing spreadsheets and WhatsApp chats with one connected workflow.",
  img: { src: "/image copy 5.png", alt: "Grocery delivery management", position: "50% 50%" },
},
{
  t: "Local distributor management",
  d: "Manage multiple products, customers, and drivers with role-based access so the right people see the right data.",
  img: { src: "/image copy 6.png", alt: "Local distributor management", position: "50% 50%" },
},
```

Also update the Problem card description (find `<p className="mt-3 text-sm leading-relaxed text-muted">` inside the Problem card):

```typescript
<p className="mt-3 text-sm leading-relaxed text-muted">
  Manual delivery operations often lead to missed deliveries, duplicate orders, payment confusion, and poor visibility for both owners and drivers. Replace spreadsheets and WhatsApp chats with a system built for daily delivery runs.
</p>
```

Also update the home page `metadata` export to use `buildMetadata`:

```typescript
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Delivery management software for Kerala",
  description:
    "Manage last-mile delivery, route optimization, and subscription orders in one system. Delivero connects owners and drivers across web and Android.",
  path: "/",
});
```

- [ ] **Step 2: Verify types**

```bash
cd /Users/pickcel/Jaseem/GitWorks/delivero-website && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(seo): update home use-case titles with Kerala keyword phrases"
```

---

### Task 8: Update features page

**Files:**
- Modify: `src/app/features/page.tsx`

- [ ] **Step 1: Update `src/app/features/page.tsx`**

Replace the entire file:

```typescript
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Last-mile delivery & route management features",
  description:
    "Explore Delivero features: last-mile delivery tracking, route optimization, proof of delivery, driver app, and subscription order management for Kerala businesses.",
  path: "/features",
});

const iconClassName = "h-5 w-5";

export default function FeaturesPage() {
  return (
    <>
      <Section
        as="h1"
        title="Last-mile delivery & route management features"
        subtitle="Owner dashboard + driver app in one connected system."
      >
        <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-relaxed text-muted md:text-base">
          Delivero connects products, customers, orders, routes, drivers, and payments so owners and drivers work from the same workflow.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Owner Dashboard"
            description="Run your business from one dashboard with quick access to products, customers, routes, drivers, and orders."
            icon={
              <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v6H4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 14h7v6H4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 14h7v6h-7z" />
              </svg>
            }
          />
          <FeatureCard
            title="Product Catalog"
            description="Add and manage products with pricing, search your catalog quickly, and keep ordering accurate."
            icon={
              <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10H7z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 12h10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v10" />
              </svg>
            }
          />
          <FeatureCard
            title="Customer Management"
            description="Store addresses, phone numbers, assigned routes, order history, and pending payment details in one place."
            icon={
              <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
              </svg>
            }
          />
          <FeatureCard
            title="Smart Orders"
            description="Create daily, one-time, and special orders with fast quantity entry, payment tracking, and clear order statuses."
            icon={
              <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h13" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h13" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 18h13" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h.01M3 12h.01M3 18h.01" />
              </svg>
            }
          />
          <FeatureCard
            title="Routes and Drivers"
            description="Create routes by area, assign drivers, and keep route-to-driver syncing clear across operations."
            icon={
              <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
            }
          />
          <FeatureCard
            title="Driver App"
            description="Drivers view assigned deliveries, open customer details, and mark orders delivered with a focused delivery screen."
            icon={
              <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6" />
              </svg>
            }
          />
          <FeatureCard
            title="Last-mile delivery tracking"
            description="Track every delivery from dispatch to doorstep. Owners see real-time order status across all active routes."
            icon={
              <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            }
          />
          <FeatureCard
            title="Route optimization & driver assignment"
            description="Build optimized routes by area, assign drivers, and keep daily runs organized without manual coordination."
            icon={
              <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 18h18" />
              </svg>
            }
          />
          <FeatureCard
            title="Proof of delivery & order status"
            description="Drivers mark orders delivered and owners see instant status updates — no calls needed to confirm completed drops."
            icon={
              <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
              </svg>
            }
          />
        </div>
      </Section>

      <CTASection
        title="Ready to get started?"
        description="Get started and see how Delivero fits your routes, drivers, and daily orders."
      />
    </>
  );
}
```

- [ ] **Step 2: Verify types**

```bash
cd /Users/pickcel/Jaseem/GitWorks/delivero-website && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/features/page.tsx
git commit -m "feat(seo): add 3 gap-keyword feature cards and H1 to features page"
```

---

### Task 9: Update pricing page with INR, Offer JSON-LD, and new FAQs

**Files:**
- Modify: `src/app/pricing/page.tsx`

- [ ] **Step 1: Update `src/app/pricing/page.tsx`**

Replace the entire file:

```typescript
import Section from "@/components/Section";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Delivery management software pricing",
  description:
    "Transparent delivery management software pricing for Kerala small businesses. Free plan available. INR pricing for milk, bakery, grocery, and meal delivery teams.",
  path: "/pricing",
  keywords: [
    "how much does delivery software cost",
    "delivery management software pricing India",
    "free delivery management app",
    "delivery software pricing Kerala",
  ],
});

const plans = [
  {
    name: "Starter",
    price: "Free",
    priceInr: null,
    note: "Free forever",
    desc: "For small teams getting started.",
    cta: "Get started",
    tone: "border-black/8",
    features: [
      "Up to 5 driver accounts",
      "1 owner/dispatch account",
      "Customers, orders, and routes",
      "Live status tracking",
      "Basic reports",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$49",
    priceInr: "₹3,999",
    note: "per month",
    desc: "For growing restaurants that dispatch daily.",
    cta: "Get started",
    highlight: true,
    tone: "border-black/12",
    features: [
      "Unlimited drivers",
      "Up to 5 dispatch/staff accounts",
      "Advanced customer management",
      "Smart route planning",
      "Realtime status updates",
      "Advanced reports",
      "Priority support",
    ],
  },
  {
    name: "Business",
    price: "Custom",
    priceInr: null,
    note: "Let's talk",
    desc: "For multi-location operations.",
    cta: "Contact us",
    tone: "border-black/8",
    features: [
      "Unlimited everything",
      "Custom reporting",
      "Integrations / API options",
      "Dedicated onboarding",
      "24/7 priority support",
      "Training for teams",
    ],
  },
];

const offerJsonLd = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  priceCurrency: "USD",
  lowPrice: "0",
  highPrice: "49",
  offerCount: "3",
  offers: [
    { "@type": "Offer", name: "Starter", price: "0", priceCurrency: "USD" },
    { "@type": "Offer", name: "Professional", price: "49", priceCurrency: "USD" },
    { "@type": "Offer", name: "Business", price: "0", priceCurrency: "USD", description: "Custom pricing" },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerJsonLd) }}
      />
      <Section as="h1" title="Delivery management software pricing" subtitle="Simple plans for restaurants and delivery teams.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border bg-surface p-6 shadow-sm transition-all duration-200 ease-out hover:border-black/12 hover:-translate-y-0.5 hover:shadow-md md:p-8 ${p.tone}`}
            >
              {p.highlight ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-black/10 bg-white px-4 py-1 text-xs font-semibold tracking-[0.08em] uppercase text-muted shadow-sm">
                  Most popular
                </div>
              ) : null}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className={`text-sm font-semibold ${p.highlight ? "text-(--color-primary)" : "text-(--color-secondary)"}`}>{p.name}</div>
                  <div className="mt-2 text-sm text-muted">{p.desc}</div>
                </div>
                <div className={`rounded-full px-3 py-1 text-xs font-semibold ${p.highlight ? "bg-(--color-primary)/12 text-(--color-primary)" : "bg-black/5 text-(--color-secondary)"}`}>
                  {p.note}
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-end gap-2">
                  <div className="text-4xl font-bold tracking-tight">{p.price}</div>
                  {p.priceInr ? (
                    <div className="pb-1 text-sm text-muted">/ {p.priceInr} /mo</div>
                  ) : p.price !== "Custom" ? (
                    <div className="pb-1 text-sm text-muted">/mo</div>
                  ) : null}
                </div>
              </div>

              <div className="mt-6">
                <Button
                  href="/contact"
                  className={`w-full rounded-full px-6 py-3.5 text-base font-semibold ${p.highlight ? "" : "btn-secondary"}`}
                >
                  {p.cta}
                </Button>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700">
                      ✓
                    </span>
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section title="Frequently Asked Questions" subtitle="Common questions about Delivero pricing.">
        <div className="grid gap-4 lg:grid-cols-2">
          {[
            {
              q: "How much does delivery management software cost?",
              a: "Delivero offers a free Starter plan with no time limit, suitable for small teams. The Professional plan starts at $49/month (₹3,999/month) for growing delivery businesses.",
            },
            {
              q: "Is there a free plan for small delivery businesses in Kerala?",
              a: "Yes. The Starter plan is free forever and includes up to 5 driver accounts, order management, routes, and live tracking — no credit card required.",
            },
            {
              q: "How do I install the app?",
              a: "Download from the Play Store (package: delivero.com) and sign in with your account credentials.",
            },
            {
              q: "Which devices are supported?",
              a: "The app supports Android 8.0+ and works on phones and small tablets.",
            },
            {
              q: "Does it work offline?",
              a: "Core actions are cached offline and automatically sync when you're back online.",
            },
            {
              q: "What roles are available?",
              a: "There are two main roles: Owner/Manager (for managing customers, orders, and reports) and Driver (for viewing orders and updating delivery status).",
            },
            {
              q: "How is my data secured?",
              a: "All data is encrypted in transit and at rest. We use role-based access controls to ensure only authorized users can access relevant information.",
            },
            {
              q: "How do I get support?",
              a: "Email support is included with all plans. Priority support and SLA options are available on Professional and Business plans.",
            },
          ].map((item) => (
            <details key={item.q} className="group rounded-2xl border border-black/8 bg-surface p-5 shadow-sm transition-all duration-200 ease-out hover:border-black/12">
              <summary className="cursor-pointer text-base font-semibold text-(--color-secondary) transition-colors [&::-webkit-details-marker]:hidden">
                <div className="flex items-center justify-between">
                  <span>{item.q}</span>
                  <svg className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180 text-black/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/faq" variant="ghost" className="text-base">
            View all FAQs →
          </Button>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
```

- [ ] **Step 2: Verify types**

```bash
cd /Users/pickcel/Jaseem/GitWorks/delivero-website && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/pricing/page.tsx
git commit -m "feat(seo): add INR pricing, Offer JSON-LD, Kerala FAQ items, and H1 to pricing page"
```

---

### Task 10: Update inner pages (FAQ, Contact, Screenshots)

**Files:**
- Modify: `src/app/faq/page.tsx`
- Modify: `src/app/contact/page.tsx`
- Modify: `src/app/screenshots/page.tsx`

- [ ] **Step 1: Update `src/app/faq/page.tsx`**

Replace the `metadata` export and add `as="h1"` to the first Section:

```typescript
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Delivery software FAQ",
  description:
    "Answers to common questions about Delivero delivery management software for owners and drivers in Kerala.",
  path: "/faq",
});
```

And change:
```typescript
<Section title="FAQ" subtitle="Quick answers for owners and drivers.">
```
to:
```typescript
<Section as="h1" title="Delivery software FAQ" subtitle="Quick answers for owners and drivers.">
```

- [ ] **Step 2: Update `src/app/contact/page.tsx`**

Replace the `metadata` export:

```typescript
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Delivero",
  description:
    "Contact Delivero for onboarding, setup guidance, and support for your Kerala delivery business.",
  path: "/contact",
});
```

And change the first Section's `title` prop:
```typescript
<Section
  as="h1"
  title="Contact Delivero"
  subtitle="See how Delivero can help your business manage orders, routes, drivers, payments, and delivery updates from one connected system."
>
```

- [ ] **Step 3: Update `src/app/screenshots/page.tsx`**

Replace the `metadata` export:

```typescript
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "See Delivero in action",
  description:
    "Preview Delivero screens for the owner dashboard and driver delivery app. Built for Kerala delivery businesses.",
  path: "/screenshots",
});
```

And change the first Section:
```typescript
<Section
  as="h1"
  title="See Delivero in action"
  subtitle="From business setup to final delivery updates, Delivero keeps every step connected across owner and driver workflows."
>
```

- [ ] **Step 4: Verify types**

```bash
cd /Users/pickcel/Jaseem/GitWorks/delivero-website && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/app/faq/page.tsx src/app/contact/page.tsx src/app/screenshots/page.tsx
git commit -m "feat(seo): add H1 and buildMetadata to FAQ, Contact, Screenshots pages"
```

---

### Task 11: Full build verification

- [ ] **Step 1: Run full build**

```bash
cd /Users/pickcel/Jaseem/GitWorks/delivero-website && pnpm build
```

Expected: build completes with no errors. Pages generated:
- `/` ✓
- `/features` ✓
- `/pricing` ✓
- `/faq` ✓
- `/contact` ✓
- `/screenshots` ✓

- [ ] **Step 2: Spot-check H1s**

Run dev server and visit each page. Each page should have exactly one `<h1>`:

```bash
pnpm dev
```

| URL | Expected H1 |
|-----|-------------|
| `/` | Delivery management software for Kerala businesses. |
| `/features` | Last-mile delivery & route management features |
| `/pricing` | Delivery management software pricing |
| `/faq` | Delivery software FAQ |
| `/contact` | Contact Delivero |
| `/screenshots` | See Delivero in action |

- [ ] **Step 3: Check SEO_PLAN_KERALA.md checklist**

Mark Phase 1 item 1 as done in `docs/SEO_PLAN_KERALA.md`:

```markdown
- [x] Create `src/lib/seo.ts`, fix H1 hierarchy, update Hero/layout metadata with category keywords and Kerala positioning
- [x] Add gap keywords to features/pricing/home copy, INR pricing, Offer schema, nav/footer links to Pricing and new sections
```

- [ ] **Step 4: Final commit**

```bash
git add docs/SEO_PLAN_KERALA.md
git commit -m "docs: mark Phase 1 SEO foundation complete in checklist"
```
