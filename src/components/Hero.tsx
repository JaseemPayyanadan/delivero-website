import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-none bg-hero px-6 pb-20 pt-20 text-center md:pb-24 md:pt-24">
      <div className="mx-auto max-w-4xl animate-fade-in-up">
        <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Deliver Faster. Manage Smarter.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg lg:text-xl">
          One app for owners and delivery teams—manage customers, assign orders, plan routes, and track status in real time.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="#get-app" className="rounded-full px-6 py-3 text-base shadow-lg transition-all hover:scale-105">
            Get the App
          </Button>
          <Button href="/contact" variant="secondary" className="rounded-full px-6 py-3 text-base shadow-lg transition-all hover:scale-105">
            Request a Demo
          </Button>
        </div>
      </div>

      {/* Showcase image below buttons */}
      <div className="mx-auto mt-12 w-full max-w-6xl animate-fade-in-up overflow-hidden rounded-3xl border border-black/10 bg-surface shadow-2xl ring-1 ring-black/5 dark:border-white/10 dark:ring-white/5">
        <img src="/hero.png" alt="App dashboard and map preview" className="h-full w-full object-cover" />
      </div>
    </section>
  );
}


