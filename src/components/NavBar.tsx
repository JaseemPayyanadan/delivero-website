"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/8 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" aria-label="Delivero home">
          <Image
            src="/delivro-logo.svg"
            alt="Delivero"
            width={132}
            height={35}
            className="h-7 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-(--color-secondary) ${
                pathname === l.href ? "text-(--color-secondary)" : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-(--color-secondary) transition-colors hover:bg-black/5"
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

        <div id="mobile-menu" className="md:hidden">
          <div
            className={`mx-auto max-w-[1200px] overflow-hidden rounded-3xl border border-black/10 bg-white transition-all duration-200 ease-out ${
              isOpen ? "mt-4 max-h-[70vh] opacity-100" : "mt-0 max-h-0 opacity-0"
            }`}
            aria-hidden={!isOpen}
          >
            <div className="flex flex-col gap-1 p-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-colors hover:bg-black/5 ${
                    pathname === l.href ? "text-(--color-secondary)" : "text-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
