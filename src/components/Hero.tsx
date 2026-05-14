import Button from "@/components/Button";

export default function Hero() {
  const tickerItems = [
    { t: "Owner dashboard + driver app", d: "One system for the whole team." },
    { t: "Real-time visibility", d: "Track routes and order status live." },
    { t: "Web + Android", d: "Works on Flutter Web and Android." },
    { t: "Recurring + one-time", d: "Built for daily and special deliveries." },
    { t: "Role-based access", d: "Owners see all; drivers see assigned work." },
    { t: "Payment tracking", d: "Paid, unpaid, partial—record amounts." },
    { t: "Routes + drivers", d: "Clear route-to-driver assignment." },
    { t: "Order status updates", d: "Keep owners and drivers in sync." },
  ];

  return (
    <section className="relative mx-auto w-full max-w-none bg-hero px-4 pb-16 pt-14 sm:px-6 md:pb-24 md:pt-20">
      {/* Ambient animated blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-(--color-primary)/20 blur-3xl animate-float" />
        <div className="absolute -bottom-28 right-[-3rem] h-80 w-80 rounded-full bg-(--color-accent)/20 blur-3xl animate-float" style={{ animationDelay: "0.8s" }} />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-start gap-10 md:grid-cols-2 md:gap-12">
        {/* Left: message + CTAs */}
        <div className="animate-fade-in-up text-center md:pt-6 md:text-left">

          <h1 className="mt-5 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Manage daily deliveries, orders, routes, and drivers
            <span className="text-(--color-primary)"> in one simple system.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg md:mx-0 md:text-xl">
            Delivero helps delivery-based businesses create customer orders, assign routes and drivers, track delivery status, and monitor sales faster on web and mobile.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted md:mx-0 md:text-base">
            Built for bakeries, milk delivery, meals, water supply, groceries, and local distribution businesses still managing operations on WhatsApp, spreadsheets, or paper.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center md:justify-start">
            <Button
              href="https://delivero-flutter.vercel.app/#/owner"
              className="rounded-full px-6 py-3.5 text-base shadow-lg transition-all hover:scale-105 sm:px-7 sm:py-4"
            >
              Get Started
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              className="rounded-full px-6 py-3.5 text-base shadow-lg transition-all hover:scale-105 sm:px-7 sm:py-4"
            >
              Request Demo
            </Button>
          </div>
        </div>

        {/* Right: product preview (asset-free) */}
        <div className="animate-fade-in-up md:pt-2">
          <div className="relative rounded-3xl border border-black/10 bg-surface/80 p-5 shadow-lg ring-1 ring-black/5 backdrop-blur-sm dark:border-white/10 dark:ring-white/5">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-linear-to-r from-(--color-primary)/10 via-transparent to-(--color-accent)/10 animate-gradient" />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold">Owner dashboard + driver app</div>
                <div className="text-xs text-muted">Web dashboard + Android delivery updates.</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-(--color-secondary) dark:bg-white/10">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse-soft" />
                  Realtime
                </div>
                <div className="inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-(--color-secondary) dark:bg-white/10">
                  Android
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Pending", value: "6", tone: "bg-(--color-accent)/25 text-(--color-secondary)" },
                { label: "Out for delivery", value: "9", tone: "bg-(--color-primary)/15 text-(--color-primary)" },
                { label: "Delivered", value: "24", tone: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" },
              ].map((c) => (
                <div key={c.label} className="rounded-2xl border border-black/10 bg-white/70 p-4 transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-[#0f1112]/40">
                  <div className="text-xs text-muted">{c.label}</div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-2xl font-bold tracking-tight">{c.value}</div>
                    <span className={`pointer-events-none select-none rounded-md px-2 py-0.5 text-[10px] font-semibold ${c.tone}`}>
                      Status
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-black/10 bg-white/70 p-4 dark:border-white/10 dark:bg-[#0f1112]/40">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold text-muted">Setup guide</div>
                <div className="text-xs text-muted">3 steps</div>
              </div>
              <div className="mt-3 grid gap-2">
                {[
                  "Set up your operations",
                  "Create and organize orders",
                  "Deliver with clarity",
                ].map((t, idx) => (
                  <div key={t} className="flex items-center gap-3">
                    <div className="grid h-6 w-6 place-items-center rounded-full bg-(--color-primary)/12 text-xs font-bold text-(--color-primary)">
                      {idx + 1}
                    </div>
                    <div className="text-sm font-semibold text-foreground">{t}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-linear-to-r from-black/5 via-black/0 to-black/5 p-4 text-xs text-muted dark:from-white/10 dark:via-white/0 dark:to-white/10">
              One connected system for orders, routes, drivers, payments, and delivery updates.
            </div>
          </div>
        </div>
      </div>

      {/* Features scrollable chips */}
      <div className="mt-16 w-full overflow-hidden">
        <div className="relative">
          {/* Fading edges for smoother transition */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-white via-white/50 to-transparent dark:from-[#151718] dark:via-[#151718]/50" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-white via-white/50 to-transparent dark:from-[#151718] dark:via-[#151718]/50" />
          
          <ul className="flex w-max animate-marquee gap-4 pb-4">
            {tickerItems.concat(tickerItems).map((f, idx) => (
              <li
                key={`${f.t}-${idx}`}
                className="flex min-w-[250px] shrink-0 items-center gap-3 rounded-full border border-black/10 bg-surface/50 py-2.5 pl-2.5 pr-6 backdrop-blur-sm transition-all hover:border-(--color-primary)/30 dark:border-white/10 dark:bg-white/5"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-(--color-primary)/15 text-sm text-(--color-primary)">
                  ✓
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-foreground">{f.t}</span>
                  <span className="text-[10px] leading-tight text-muted">{f.d}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
