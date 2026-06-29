import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-black/8 bg-transparent">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-[1fr_2fr]">
        <div>
          <Image
            src="/delivro-logo.svg"
            alt="Delivero"
            width={150}
            height={40}
            className="h-7 w-auto"
          />
          <p className="mt-2 text-sm text-muted">
            Delivero helps delivery businesses run orders, routes, drivers, and payments in one simple system.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
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
    </footer>
  );
}
