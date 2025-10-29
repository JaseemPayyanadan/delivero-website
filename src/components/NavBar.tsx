"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/6 bg-surface/80 backdrop-blur-md dark:border-white/8">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold" aria-label="Food Distribution home">
          <img
            src="/logo.png"
            alt="Delivero logo"
            width={160}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop nav - Center */}
        <div className="hidden items-center gap-6 md:flex absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-base font-medium transition-colors hover:text-(--color-primary) ${
                pathname === l.href ? "text-(--color-primary)" : "text-(--color-secondary)"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop Button - Right */}
        <div className="hidden md:flex">
          <Link
            href="#get-app"
            className="rounded-full px-4 py-2 text-sm font-medium btn-primary"
          >
            Get the App
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 text-(--color-secondary) hover:bg-black/5 dark:border-white/20"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="sr-only">Open main menu</span>
          {/* Icon: hamburger/close */}
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
      </nav>

      {/* Mobile menu panel below header */}
      <div id="mobile-menu" className="md:hidden">
        <div
          className={`mx-auto max-w-6xl overflow-hidden border-b border-black/10 bg-surface transition-all duration-200 ease-out dark:border-white/10 ${
            isOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="flex flex-col gap-2 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:text-(--color-primary) ${
                  pathname === l.href ? "text-(--color-primary)" : "text-(--color-secondary)"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#get-app"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Get the App
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}


