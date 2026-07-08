import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { industries } from "@/content/solutions/industries";

const webAppHref = "https://app.delivro.in/#/intro";
const supportEmail = "support@delivero.app";

const productLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/screenshots", label: "Screenshots" },
  { href: "/faq", label: "FAQ" },
];

const companyLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/solutions", label: "All solutions" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-white/75 transition-colors hover:text-white"
      >
        {label}
      </Link>
    </li>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <div className="mb-4 text-xs font-semibold tracking-[0.1em] uppercase text-white">
        {title}
      </div>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 overflow-hidden bg-(--color-primary) text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,255,255,0.14)_0%,transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_100%_100%,rgba(191,224,3,0.12)_0%,transparent_45%)]"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 pt-14 pb-10 md:pt-16 md:pb-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] lg:gap-16">
          <div className="max-w-sm">
            <Link href="/" aria-label="Delivero home">
              <Image
                src="/delivro-logo.svg"
                alt="Delivero"
                width={150}
                height={40}
                className="h-7 w-auto brightness-0 invert"
              />
            </Link>
            <span aria-hidden="true" className="lime-accent-bar mt-5" />
            <p className="mt-5 text-sm leading-relaxed text-white/80">
              Delivery management software for orders, routes, drivers, and payments — built for daily and recurring delivery businesses.
            </p>
            <a
              href={`mailto:${supportEmail}`}
              className="mt-4 inline-block text-sm font-medium text-white transition-colors hover:text-white/90"
            >
              {supportEmail}
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={webAppHref}
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white px-5 py-2.5 text-sm font-semibold text-(--color-primary) transition-colors hover:bg-white/90"
              >
                Get started
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=delivero.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/35 hover:bg-white/10"
              >
                Android app
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <FooterColumn title="Product">
              {productLinks.map((link) => (
                <FooterLink key={link.href} {...link} />
              ))}
            </FooterColumn>

            <FooterColumn title="Solutions">
              {industries.map((industry) => (
                <FooterLink
                  key={industry.slug}
                  href={`/solutions/${industry.slug}`}
                  label={industry.name}
                />
              ))}
            </FooterColumn>

            <FooterColumn title="Company">
              {companyLinks.map((link) => (
                <FooterLink key={link.href} {...link} />
              ))}
            </FooterColumn>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/15">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/65 sm:flex-row">
          <p>© {year} Delivero. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
