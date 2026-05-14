import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-none bg-hero px-4 pb-24 pt-28 sm:px-6 md:pb-32 md:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-(--color-primary)/18 blur-3xl" />
        <div className="absolute -bottom-40 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-(--color-primary)/12 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-[12px]">
            <span className="rounded-full bg-(--color-primary)/25 px-2 py-0.5 text-[10px] font-semibold tracking-[0.08em] uppercase text-(--color-primary)">
              New
            </span>
            Delivery operations, simplified.
          </div>

          <h1 className="mt-6 text-balance text-[clamp(3rem,7vw,5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
            Manage deliveries, routes, and orders effortlessly.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg md:text-xl">
            Delivero helps delivery-based businesses create customer orders, assign routes and drivers, track delivery status, and monitor sales faster on web and mobile.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href="https://delivero-flutter.vercel.app/#/owner" className="rounded-full px-8 py-4 text-base font-semibold">
              Get Started
            </Button>
            <Button href="/contact" variant="secondary" className="rounded-full px-8 py-4 text-base font-semibold">
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Request Demo
            </Button>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-[980px]">
          <div className="relative mx-auto overflow-hidden rounded-[28px] border border-white/10 bg-surface/70 p-6 backdrop-blur-[12px]">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(224,92,42,0.18)_0%,transparent_70%)]" />
            <div className="relative flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-white">Owner dashboard + driver app</div>
                <div className="text-xs text-muted">Web dashboard + Android delivery updates.</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse-soft" />
                  Realtime
                </div>
                <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  Android
                </div>
              </div>
            </div>

            <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Pending", value: "6", tone: "bg-(--color-primary)/15 text-(--color-primary)" },
                { label: "Out for delivery", value: "9", tone: "bg-white/10 text-white" },
                { label: "Delivered", value: "24", tone: "bg-emerald-500/15 text-emerald-300" },
              ].map((c) => (
                <div key={c.label} className="rounded-2xl border border-white/8 bg-[#111111] p-4">
                  <div className="text-xs text-muted">{c.label}</div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-2xl font-bold tracking-tight text-white">{c.value}</div>
                    <span
                      style={{ WebkitTapHighlightColor: "transparent" }}
                      className={`pointer-events-none select-none cursor-default rounded-md px-2 py-0.5 text-[10px] font-semibold ${c.tone}`}
                    >
                      Status
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-4 rounded-2xl border border-white/8 bg-[#111111] p-4">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold text-muted">Setup guide</div>
                <div className="text-xs text-muted">3 steps</div>
              </div>
              <div className="mt-3 grid gap-2">
                {["Set up your operations", "Create and organize orders", "Deliver with clarity"].map((t, idx) => (
                  <div key={t} className="flex items-center gap-3">
                    <div className="grid h-6 w-6 place-items-center rounded-full bg-(--color-primary)/15 text-xs font-bold text-(--color-primary)">
                      {idx + 1}
                    </div>
                    <div className="text-sm font-semibold text-white">{t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -left-4 top-10 hidden w-[260px] -rotate-2 lg:block">
            <div className="rounded-3xl border border-white/10 bg-[#1a1a1a]/70 p-5 backdrop-blur-[16px]">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-(--color-primary)/15 text-(--color-primary)">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
              </div>
              <div className="mt-4 text-xs font-semibold tracking-[0.08em] uppercase text-white/70">Today</div>
              <div className="mt-2 text-sm font-semibold text-white">Route updates synced</div>
              <div className="mt-1 text-xs text-muted">Drivers update status in seconds.</div>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-4 top-16 hidden w-[280px] rotate-2 lg:block">
            <div className="rounded-3xl border border-white/10 bg-[#1a1a1a]/70 p-5 backdrop-blur-[16px]">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold tracking-[0.08em] uppercase text-white/70">Payments</div>
                <div className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/80">Live</div>
              </div>
              <div className="mt-3 text-sm font-semibold text-white">Paid / unpaid visibility</div>
              <div className="mt-1 text-xs text-muted">Record partials and amounts.</div>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                <div className="text-xs text-white/70">Updated from Android app</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-linear-to-b from-transparent to-[#0d0d0d]" />
    </section>
  );
}
