import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-none bg-hero px-4 pb-16 pt-16 text-center sm:px-6 md:pb-24 md:pt-24">
      <div className="mx-auto max-w-4xl animate-fade-in-up">
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Deliver Faster. Manage Smarter.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:mt-5 sm:text-lg md:mt-6 md:text-xl lg:text-2xl">
          One app for owners and delivery teams—manage customers, assign orders, plan routes, and track status in real time.
        </p>
        <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <Button href="#get-app" className="rounded-full px-6 py-3.5 text-base shadow-lg transition-all hover:scale-105 sm:px-7 sm:py-4 sm:text-lg">
            Get the App
          </Button>
          <Button href="/contact" variant="secondary" className="rounded-full px-6 py-3.5 text-base shadow-lg transition-all hover:scale-105 sm:px-7 sm:py-4 sm:text-lg">
            Request a Demo
          </Button>
        </div>
      </div>

      {/* Showcase image below buttons */}
      <div className="mx-auto mt-8 w-full max-w-6xl animate-fade-in-up overflow-hidden px-2 sm:mt-10 sm:px-0 md:mt-12 dark:border-white/10 dark:ring-white/5">
        <img src="/hero.png" alt="App dashboard and map preview" className="h-full w-full object-cover" />
      </div>
    </section>
  );
}


