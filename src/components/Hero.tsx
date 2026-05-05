import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-none bg-hero px-4 pb-16 pt-16 text-center sm:px-6 md:pb-24 md:pt-24">
      <div className="mx-auto max-w-4xl animate-fade-in-up">
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Delivery, simplified.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:mt-5 sm:text-lg md:mt-6 md:text-xl lg:text-2xl">
          Delivero helps owners and drivers stay in sync: set up routes, add items, manage customers, create orders, and track deliveries in real time.
        </p>
        <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <Button href="https://play.google.com/store/apps/details?id=delivero.com" className="rounded-full px-6 py-3.5 text-base shadow-lg transition-all hover:scale-105 sm:px-7 sm:py-4 sm:text-lg">
            Get the App
          </Button>
          <Button href="/contact" variant="secondary" className="rounded-full px-6 py-3.5 text-base shadow-lg transition-all hover:scale-105 sm:px-7 sm:py-4 sm:text-lg">
            Request a Demo
          </Button>
        </div>
      </div>

      {/* Hero “preview” (no external assets) */}
      <div className="mx-auto mt-10 w-full max-w-6xl animate-fade-in-up px-2 sm:px-0">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-surface p-5 text-left shadow-sm dark:border-white/10">
            <div className="text-xs font-semibold text-muted">Setup guide</div>
            <div className="mt-3 space-y-3">
              {[
                { t: "Setup delivery routes", d: "Assign drivers and stops" },
                { t: "Add food items", d: "Menu and pricing" },
                { t: "Add customers", d: "Assign to routes" },
                { t: "Create orders", d: "Track from start to delivery" },
              ].map((s, idx) => (
                <div key={s.t} className="flex items-start gap-3">
                  <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-(--color-primary)/10 text-xs font-bold text-(--color-primary)">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{s.t}</div>
                    <div className="text-xs text-muted">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-surface p-5 text-left shadow-sm dark:border-white/10 md:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold">Today’s deliveries</div>
                <div className="text-xs text-muted">Live status updates for drivers and dispatch.</div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-(--color-secondary) dark:bg-white/10">
                Realtime tracking
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Pending", value: "6", tone: "bg-(--color-accent)/20 text-(--color-secondary)" },
                { label: "Out for delivery", value: "9", tone: "bg-(--color-primary)/15 text-(--color-primary)" },
                { label: "Delivered", value: "24", tone: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" },
              ].map((c) => (
                <div key={c.label} className="rounded-xl border border-black/10 p-4 dark:border-white/10">
                  <div className="text-xs text-muted">{c.label}</div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-2xl font-bold">{c.value}</div>
                    <div className={`rounded-full px-2.5 py-1 text-xs font-semibold ${c.tone}`}>Status</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-linear-to-r from-black/5 via-black/0 to-black/5 p-4 text-xs text-muted dark:from-white/10 dark:via-white/0 dark:to-white/10">
              Owners manage customers/orders; drivers update delivery status—everyone stays in sync.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


