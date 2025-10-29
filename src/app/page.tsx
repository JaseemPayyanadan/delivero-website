import Section from "@/components/Section";
import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import ClientCarousel from "@/components/ClientCarousel";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Value prop split section */}
      <Section className="pt-0">
        <div className="grid items-stretch gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-[#EAFBF3] p-8 shadow-sm ring-1 ring-black/5 dark:border-white/10 dark:bg-[#102016] dark:ring-white/5 md:p-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-[--color-secondary] shadow-sm ring-1 ring-black/5 dark:bg-[#0f1112] dark:text-[--color-primary]">
              <span>⚡</span> Speed and reliability
            </div>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Trusted local delivery platform.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-muted">
              Shipday makes it easy for delivery services to scale their business while maintaining the speed of operations and reliability of services.
            </p>
            <a href="#get-app" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-(--color-secondary) hover:text-(--color-primary)">
              Get started free <span>→</span>
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm ring-1 ring-black/5 dark:border-white/10 dark:bg-[#0f1112] dark:ring-white/5">
            <img src="/window.svg" alt="Courier handing over a package" className="h-full w-full object-cover" />
          </div>
        </div>
      </Section>

      <Section title="Why Food Distribution" subtitle="Outcomes that matter to restaurants and delivery teams.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard title="Cut delivery times by up to 25%" description="Plan efficient routes to deliver more orders with fewer delays." />
          <FeatureCard title="Real-time order tracking" description="Track orders from creation to doorstep with live status updates." />
          <FeatureCard title="Clear sales reporting" description="See daily, weekly, and monthly summaries at a glance." />
          <FeatureCard title="Built for teams" description="Owners manage, drivers deliver—everyone stays in sync." />
        </div>
      </Section>

      <Section title="How it works" subtitle="From setup to delivery in three simple steps.">
        <ol className="grid gap-4 sm:grid-cols-3">
          <li className="rounded-xl border border-black/10 bg-surface p-5 dark:border-white/10">
            <div className="text-sm font-semibold">1. Set up</div>
            <p className="mt-2 text-sm text-muted">Add your locations, teams, and delivery zones.</p>
          </li>
          <li className="rounded-xl border border-black/10 bg-surface p-5 dark:border-white/10">
            <div className="text-sm font-semibold">2. Assign orders</div>
            <p className="mt-2 text-sm text-muted">Create orders and assign drivers with optimized routes.</p>
          </li>
          <li className="rounded-xl border border-black/10 bg-surface p-5 dark:border-white/10">
            <div className="text-sm font-semibold">3. Track & deliver</div>
            <p className="mt-2 text-sm text-muted">Monitor progress and proof of delivery in real time.</p>
          </li>
        </ol>
      </Section>

      {/* Finance style feature grid */}
      <Section>
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight">Built for forward‑looking finance teams and achieve your goals with our professional team</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-surface p-5 shadow-sm dark:border-white/10">
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold">Secure Retirement</div>
              <div className="grid h-8 w-8 place-items-center rounded-full bg-black/5 text-xs dark:bg-white/10">↗</div>
            </div>
            <p className="mt-2 text-xs text-muted">our application downloads reach to 50 thousand.</p>
            <div className="mt-4 h-36 rounded-xl bg-linear-to-t from-[--color-primary]/10 to-transparent" />
          </div>

          <div className="rounded-2xl border border-black/10 bg-surface p-5 shadow-sm dark:border-white/10">
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold">Invest with Potential</div>
              <div className="grid h-8 w-8 place-items-center rounded-full bg-black/5 text-xs dark:bg-white/10">↗</div>
            </div>
            <p className="mt-2 text-xs text-muted">FlexGuard includes a Performance Lock feature which gives clients the flexibility End Date for your Future.</p>
            <div className="mt-4 h-36 rounded-xl bg-linear-to-r from-[--color-secondary]/10 via-[--color-primary]/10 to-[--color-accent]/10" />
          </div>

          <div className="rounded-2xl border border-black/10 bg-surface p-5 shadow-sm md:col-span-2 dark:border-white/10">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="flex items-center justify-between">
                  <div className="text-base font-semibold">Stay updated with monthly statements</div>
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-black/5 text-xs dark:bg-white/10">↗</div>
                </div>
                <p className="mt-2 text-xs text-muted">FlexGuard includes a Performance Lock feature which gives clients the flexibility End Date for your Future.</p>
              </div>
              <div className="rounded-xl border border-black/10 p-4 dark:border-white/10">
                <div className="text-sm font-semibold">12,3K</div>
                <div className="mt-3 h-24 rounded-md bg-linear-to-b from-black/10 to-transparent dark:from-white/10" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Portfolio and stats */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Our latest portfolio created for clients</h3>
            <p className="mt-3 text-sm text-muted">Energetically harness ubiquitous imperatives without state of the art these collaboration and idea‑sharing.</p>
            <div className="mt-5 text-xs text-muted">Swipe to explore our client work</div>
          </div>
          <ClientCarousel />
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div>
            <div className="text-5xl font-semibold">24+</div>
            <div className="mt-2 text-sm font-medium">Digital Experience</div>
            <p className="mt-1 text-xs text-muted">We provide best customer imperatives without state of the</p>
          </div>
          <div>
            <div className="text-5xl font-semibold">4M</div>
            <div className="mt-2 text-sm font-medium">Total Clients</div>
            <p className="mt-1 text-xs text-muted">We have 4 Million clients all over the world you can check our customer reviews.</p>
          </div>
          <div>
            <div className="text-5xl font-semibold">5K</div>
            <div className="mt-2 text-sm font-medium">Digital Solutions</div>
            <p className="mt-1 text-xs text-muted">Digital industry is growing fast and our finance industry need better solution.</p>
          </div>
        </div>
      </Section>

      <Section className="py-10">
        <div className="rounded-2xl bg-[--color-secondary] px-6 py-10 text-center text-white">
          <h3 className="text-xl font-semibold">Ready to streamline your delivery operations?</h3>
          <p className="mt-2 text-sm opacity-90">Start your free trial or request a demo today.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Button href="#get-app" className="bg-[--color-primary]">Get the App</Button>
            <Button href="/contact" variant="ghost" className="bg-white/10 text-white hover:bg-white/20">Request a Demo</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
