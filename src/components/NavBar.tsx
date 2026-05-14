"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const demoHref = "https://delivero-flutter.vercel.app/#/owner";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 w-full px-4">
      <nav className="relative mx-auto max-w-[1200px]">
        <div className="pointer-events-auto grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div className="justify-self-start">
            <Link
              href="/"
              aria-label="Delivero home"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#1a1a1a]/85 px-3 py-2 backdrop-blur-[16px]"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-(--color-primary)/15 text-(--color-primary)">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4-9 4-9-4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l9 4 9-4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9 4 9-4" />
                </svg>
              </span>
              <span className="text-sm font-semibold tracking-tight text-white whitespace-nowrap">
                Delivero
              </span>
            </Link>
          </div>

          <div className="hidden justify-self-center md:block">
            <div className="rounded-full border border-white/10 bg-[#1a1a1a]/85 px-6 py-3 backdrop-blur-[16px]">
              <div className="flex items-center gap-6">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`text-sm font-medium transition-colors hover:text-white ${
                      pathname === l.href ? "text-white" : "text-white/60"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="justify-self-end flex items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              <Link
                href={demoHref}
                aria-label="Get started"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#1a1a1a]/85 text-white backdrop-blur-[16px] transition-colors hover:bg-white/10"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link
                href="/contact"
                aria-label="Request demo"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#1a1a1a]/85 text-white backdrop-blur-[16px] transition-colors hover:bg-white/10"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </Link>
            </div>

            <button
              type="button"
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#1a1a1a]/85 text-white backdrop-blur-[16px] transition-colors hover:bg-white/10"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((v) => !v)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-5 w-5 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <svg
                className={`h-5 w-5 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        <div id="mobile-menu" className="md:hidden">
          <div
            className={`mt-3 overflow-hidden rounded-3xl border border-white/10 bg-[#1a1a1a]/90 backdrop-blur-[16px] transition-all duration-200 ease-out ${
              isOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
            }`}
            aria-hidden={!isOpen}
          >
            <div className="flex flex-col gap-1 p-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-colors hover:bg-white/5 hover:text-white ${
                    pathname === l.href ? "text-white" : "text-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <div className="grid gap-2 pt-2">
                <Link
                  href={demoHref}
                  className="inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold btn-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
