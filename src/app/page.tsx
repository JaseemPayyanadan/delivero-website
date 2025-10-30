import Section from "@/components/Section";
import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import ClientCarousel from "@/components/ClientCarousel";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Trusted local delivery (single combined section with image) */}
      <Section className="pt-0">
        <div className="rounded-4xl overflow-clip bg-[#EAFBF3] shadow-lg ring-1 ring-black/5 dark:bg-[#102016] dark:ring-white/5">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="p-6 md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[--color-secondary] shadow-sm ring-1 ring-black/5 dark:bg-[#0f1112] dark:text-[--color-primary]">
                <span>⚡</span> Speed and reliability
              </div>
              <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Trusted local delivery platform.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[--color-secondary]/80 dark:text-white/70 md:text-lg">
                Shipday makes it easy for delivery services to scale their business while maintaining the speed of operations and reliability of services.
              </p>
              <a
                href="#get-app"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-(--color-secondary) transition-all duration-300 hover:gap-3 hover:text-(--color-primary)"
              >
                Get started free <span className="transition-transform duration-300">→</span>
              </a>
            </div>
            <div className="ring-black/5 dark:bg-[#0f1112] dark:ring-white/10">
              <img
                src="/image.png"
                alt="Courier handing over a package"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Why Food Distribution" subtitle="Outcomes that matter to restaurants and delivery teams.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard title="Cut delivery times by up to 25%" description="Plan efficient routes to deliver more orders with fewer delays." />
          <FeatureCard title="Real-time order tracking" description="Track orders from creation to doorstep with live status updates." />
          <FeatureCard title="Clear sales reporting" description="See daily, weekly, and monthly summaries at a glance." />
          <FeatureCard title="Built for teams" description="Owners manage, drivers deliver—everyone stays in sync." />
        </div>
      </Section>

      <Section title="How it works" subtitle="From setup to delivery in three simple steps.">
        <ol className="grid gap-6 sm:grid-cols-3">
          <li className="group relative rounded-2xl border border-black/10 bg-surface p-6 transition-all duration-300 hover:border-[--color-primary]/30 hover:shadow-lg hover:-translate-y-1 dark:border-white/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[--color-primary]/10 text-lg font-bold text-[--color-primary] transition-colors group-hover:bg-[--color-primary] group-hover:text-white">
              1
            </div>
            <div className="text-base font-semibold">Set up</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">Add your locations, teams, and delivery zones.</p>
          </li>
          <li className="group relative rounded-2xl border border-black/10 bg-surface p-6 transition-all duration-300 hover:border-[--color-primary]/30 hover:shadow-lg hover:-translate-y-1 dark:border-white/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[--color-primary]/10 text-lg font-bold text-[--color-primary] transition-colors group-hover:bg-[--color-primary] group-hover:text-white">
              2
            </div>
            <div className="text-base font-semibold">Assign orders</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">Create orders and assign drivers with optimized routes.</p>
          </li>
          <li className="group relative rounded-2xl border border-black/10 bg-surface p-6 transition-all duration-300 hover:border-[--color-primary]/30 hover:shadow-lg hover:-translate-y-1 dark:border-white/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[--color-primary]/10 text-lg font-bold text-[--color-primary] transition-colors group-hover:bg-[--color-primary] group-hover:text-white">
              3
            </div>
            <div className="text-base font-semibold">Track & deliver</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">Monitor progress and proof of delivery in real time.</p>
          </li>
        </ol>
      </Section>

      {/* Finance style feature grid */}
      <Section>
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
          Built for forward‑looking finance teams and achieve your goals with our professional team
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="group rounded-2xl border border-black/10 bg-surface p-6 shadow-sm transition-all duration-300 hover:border-[--color-primary]/30 hover:shadow-lg hover:-translate-y-1 dark:border-white/10">
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold">Secure Retirement</div>
              <div className="grid h-8 w-8 place-items-center rounded-full bg-black/5 text-xs transition-all duration-300 group-hover:bg-[--color-primary]/10 group-hover:text-[--color-primary] dark:bg-white/10">
                ↗
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">our application downloads reach to 50 thousand.</p>
            <div className="mt-6 h-36 rounded-xl bg-linear-to-t from-[--color-primary]/10 to-transparent transition-all duration-300 group-hover:from-[--color-primary]/20" />
          </div>

          <div className="group rounded-2xl border border-black/10 bg-surface p-6 shadow-sm transition-all duration-300 hover:border-[--color-primary]/30 hover:shadow-lg hover:-translate-y-1 dark:border-white/10">
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold">Invest with Potential</div>
              <div className="grid h-8 w-8 place-items-center rounded-full bg-black/5 text-xs transition-all duration-300 group-hover:bg-[--color-primary]/10 group-hover:text-[--color-primary] dark:bg-white/10">
                ↗
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              FlexGuard includes a Performance Lock feature which gives clients the flexibility End Date for your Future.
            </p>
            <div className="mt-6 h-36 rounded-xl bg-linear-to-r from-[--color-secondary]/10 via-[--color-primary]/10 to-[--color-accent]/10 transition-all duration-300 group-hover:from-[--color-secondary]/20 group-hover:via-[--color-primary]/20 group-hover:to-[--color-accent]/20" />
          </div>

          <div className="group rounded-2xl border border-black/10 bg-surface p-6 shadow-sm transition-all duration-300 hover:border-[--color-primary]/30 hover:shadow-lg hover:-translate-y-1 md:col-span-2 dark:border-white/10">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="flex items-center justify-between">
                  <div className="text-base font-semibold">Stay updated with monthly statements</div>
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-black/5 text-xs transition-all duration-300 group-hover:bg-[--color-primary]/10 group-hover:text-[--color-primary] dark:bg-white/10">
                    ↗
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  FlexGuard includes a Performance Lock feature which gives clients the flexibility End Date for your Future.
                </p>
              </div>
              <div className="rounded-xl border border-black/10 p-4 transition-all duration-300 group-hover:border-[--color-primary]/30 dark:border-white/10">
                <div className="text-lg font-bold text-[--color-primary]">12,3K</div>
                <div className="mt-4 h-24 rounded-md bg-linear-to-b from-black/10 to-transparent dark:from-white/10" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Portfolio and stats */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl">Our latest portfolio created for clients</h3>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Energetically harness ubiquitous imperatives without state of the art these collaboration and idea‑sharing.
            </p>
            <div className="mt-6 text-sm text-muted">Swipe to explore our client work</div>
          </div>
          {/* <ClientCarousel /> */}
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          <div className="group text-center transition-all duration-300 hover:-translate-y-1">
            <div className="text-6xl font-bold text-[--color-primary] transition-all duration-300 group-hover:scale-110 md:text-7xl">
              24+
            </div>
            <div className="mt-4 text-base font-semibold">Digital Experience</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              We provide best customer imperatives without state of the
            </p>
          </div>
          <div className="group text-center transition-all duration-300 hover:-translate-y-1">
            <div className="text-6xl font-bold text-[--color-primary] transition-all duration-300 group-hover:scale-110 md:text-7xl">
              4M
            </div>
            <div className="mt-4 text-base font-semibold">Total Clients</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              We have 4 Million clients all over the world you can check our customer reviews.
            </p>
          </div>
          <div className="group text-center transition-all duration-300 hover:-translate-y-1">
            <div className="text-6xl font-bold text-[--color-primary] transition-all duration-300 group-hover:scale-110 md:text-7xl">
              5K
            </div>
            <div className="mt-4 text-base font-semibold">Digital Solutions</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Digital industry is growing fast and our finance industry need better solution.
            </p>
          </div>
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
