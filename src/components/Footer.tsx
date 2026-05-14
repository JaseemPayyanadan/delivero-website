import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-white/8 bg-[#0d0d0d]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <div className="text-lg font-semibold text-white">
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
            <div className="mb-3 text-xs font-semibold tracking-[0.08em] uppercase text-white">Links</div>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-white/50 hover:text-white transition-colors" href="/">Home</Link></li>
              <li><Link className="text-white/50 hover:text-white transition-colors" href="/features">Features</Link></li>
              <li><Link className="text-white/50 hover:text-white transition-colors" href="/#how-it-works">How It Works</Link></li>
              <li><Link className="text-white/50 hover:text-white transition-colors" href="/faq">FAQ</Link></li>
              <li><Link className="text-white/50 hover:text-white transition-colors" href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold tracking-[0.08em] uppercase text-white">Legal</div>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-white/50 hover:text-white transition-colors" href="/terms">Terms</Link></li>
              <li><Link className="text-white/50 hover:text-white transition-colors" href="/privacy">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold tracking-[0.08em] uppercase text-white">Get started</div>
            <a
              href="https://delivero-flutter.vercel.app/#/owner"
              className="inline-block rounded-full px-4 py-2 text-sm font-semibold btn-primary"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8 py-6 text-center text-xs text-white/35">
        © {year} Delivero
      </div>
    </footer>
  );
}
