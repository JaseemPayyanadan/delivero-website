import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-black/6 bg-surface dark:border-white/8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">
            <span className="text-(--color-primary)">Food</span> Distribution
          </div>
          <p className="mt-2 text-sm text-muted">
            Deliver Faster. Manage Smarter.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:col-span-2 sm:grid-cols-4">
          <div>
            <div className="mb-2 text-sm font-semibold">Product</div>
            <ul className="space-y-1 text-sm text-muted">
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/screenshots">Screenshots</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold">Company</div>
            <ul className="space-y-1 text-sm text-muted">
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
            <div className="mb-2 text-sm font-semibold">Get the app</div>
            <a href="#get-app" className="inline-block rounded-full px-3 py-1 text-xs btn-primary">Get the App</a>
          </div>
        </div>
      </div>
      <div className="border-t border-black/6 py-4 text-center text-xs text-muted dark:border-white/8">
        © {year} Food Distribution
      </div>
    </footer>
  );
}


