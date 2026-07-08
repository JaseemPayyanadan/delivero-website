export const WEB_APP_HREF = "https://app.delivro.in/#/intro";
export const ANDROID_APP_HREF = "https://play.google.com/store/apps/details?id=delivero.com";
export const SUPPORT_EMAIL = "support@delivero.app";

export type SiteLink = { href: string; label: string };

export const mainNavLinks: SiteLink[] = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/solutions", label: "Solutions" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/contact", label: "Contact" },
];

export const footerProductLinks: SiteLink[] = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/screenshots", label: "Screenshots" },
  { href: "/faq", label: "FAQ" },
];

export const footerCompanyLinks: SiteLink[] = [
  { href: "/contact", label: "Contact" },
  { href: "/solutions", label: "All solutions" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

export function isNavLinkActive(pathname: string, href: string): boolean {
  const [path, hash] = href.split("#");

  if (hash) {
    return pathname === (path || "/");
  }

  if (href === "/solutions") {
    return pathname === "/solutions" || pathname.startsWith("/solutions/");
  }

  return pathname === href;
}
