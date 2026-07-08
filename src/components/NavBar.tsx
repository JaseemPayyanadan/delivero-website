"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import {
  WEB_APP_HREF,
  isNavLinkActive,
  mainNavLinks,
  type SiteLink,
} from "@/content/navigation";

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    );
  }

  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function NavItem({
  link,
  active,
  onNavigate,
  variant,
}: {
  link: SiteLink;
  active: boolean;
  onNavigate?: () => void;
  variant: "desktop" | "mobile";
}) {
  if (variant === "desktop") {
    return (
      <Link
        href={link.href}
        className={`relative text-sm font-medium transition-colors hover:text-foreground ${
          active
            ? "text-foreground after:absolute after:-bottom-4 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-(--color-secondary)"
            : "text-muted"
        }`}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-colors hover:bg-black/5 ${
        active ? "bg-lime-soft text-foreground" : "text-muted"
      }`}
    >
      {link.label}
    </Link>
  );
}

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-soft bg-white/75 backdrop-blur-lg">
      <nav
        className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8 md:py-5"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex shrink-0 items-center" aria-label="Delivero home">
          <Image
            src="/delivro-logo.svg"
            alt="Delivero"
            width={132}
            height={35}
            className="h-6 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-6 lg:gap-7 md:flex">
          {mainNavLinks.map((link) => (
            <NavItem
              key={link.href}
              link={link}
              active={isNavLinkActive(pathname, link.href)}
              variant="desktop"
            />
          ))}
          <Button href={WEB_APP_HREF} className="ml-1 px-4 py-2">
            Get started
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-foreground transition-colors hover:bg-black/5 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <MenuIcon open={isOpen} />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-soft bg-white/90 backdrop-blur-lg transition-all duration-200 ease-out ${
          isOpen ? "max-h-[85vh] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
          <div className="flex flex-col gap-1">
            {mainNavLinks.map((link) => (
              <NavItem
                key={link.href}
                link={link}
                active={isNavLinkActive(pathname, link.href)}
                onNavigate={closeMenu}
                variant="mobile"
              />
            ))}
          </div>
          <div className="mt-4 border-t border-soft pt-4">
            <Button href={WEB_APP_HREF} className="w-full justify-center py-3" onClick={closeMenu}>
              Get started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
