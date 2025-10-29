"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/screenshots", label: "Screenshots" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/6 bg-surface/80 backdrop-blur-md dark:border-white/8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold" aria-label="Food Distribution home">
          {/* Logo image if available */}
          <img
            src="/logo.png"
            alt="Delivero logo"
            width={160}
            height={40}
            className="object-contain"
          />
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors hover:text-(--color-primary) ${
                pathname === l.href ? "text-(--color-primary)" : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#get-app"
            className="rounded-full px-4 py-2 text-sm font-medium btn-primary"
          >
            Get the App
          </Link>
        </div>
      </nav>
    </header>
  );
}


