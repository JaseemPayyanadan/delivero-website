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
  "delivery management app",
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
