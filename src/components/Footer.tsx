import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-black/6 bg-surface dark:border-white/8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">
            <span className="inline-flex items-baseline tracking-tight leading-none whitespace-nowrap">
              <span className="text-(--color-primary)">Del</span>
              <span>ivero</span>
            </span>
          </div>
          <p className="mt-2 text-sm text-muted">
            Delivero helps delivery businesses run orders, routes, drivers, and payments in one simple system.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:col-span-2 sm:grid-cols-3">
          <div>
            <div className="mb-2 text-sm font-semibold">Links</div>
            <ul className="space-y-1 text-sm text-muted">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/#how-it-works">How It Works</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold">Legal</div>
            <ul className="space-y-1 text-sm text-muted">
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold">Get started</div>
            <a
              href="https://delivero-flutter.vercel.app/#/owner"
              className="inline-block rounded-full px-3 py-1 text-xs btn-primary"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-black/6 py-4 text-center text-xs text-muted dark:border-white/8">
        © {year} Delivero
      </div>
    </footer>
  );
}
