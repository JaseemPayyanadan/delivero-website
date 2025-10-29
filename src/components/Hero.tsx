import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-none bg-hero px-6 pb-16 pt-14 text-center">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          Grocery Admin Dashboard
        </h1>
        <p className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-[--color-secondary]">
          Simple, Smart & Powerful
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted">
          This is our custom-built delivery management dashboard, designed to make store
          management faster and easier. Manage products, track orders, update inventory,
          view sales reports, and monitor customer activity.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Button className="rounded-full px-5 py-3">Download on the Play Store</Button>
          <Button variant="secondary" className="rounded-full px-5 py-3">Download on the Apple store</Button>
        </div>
      </div>

      {/* Mock dashboard card */}
      <div className="mx-auto mt-10 w-full max-w-6xl rounded-3xl border border-black/10 bg-surface p-3 shadow-xl ring-1 ring-black/5 dark:border-white/10 dark:ring-white/5">
        <div className="h-[360px] rounded-2xl bg-white shadow-sm dark:bg-[#0f1112]" />
      </div>
    </section>
  );
}


