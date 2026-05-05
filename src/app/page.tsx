import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="w-full bg-(--color-primary) py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 text-white sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {[
              { k: "Installed", v: "1K+", d: "Active installs across teams" },
              { k: "Customers", v: "100+", d: "Customer records managed" },
              { k: "Dispatch speed", v: "Fast", d: "Routes → items → customers → orders" },
              { k: "Support", v: "1 day", d: "Typical response time" },
            ].map((s, idx, arr) => (
              <div
                key={s.k}
                className="relative px-4 py-1 sm:px-0 sm:py-0 lg:px-8"
              >
                {/* vertical separators on large screens */}
                {idx === arr.length - 1 ? null : (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute right-0 top-1/2 h-12 w-px -translate-y-1/2 bg-white/30"
                  />
                )}

                <div className="text-xs font-semibold text-white/85">{s.k}</div>
                <div className="mt-2 text-3xl font-extrabold tracking-tight">{s.v}</div>
                <div className="mt-2 text-xs text-white/85">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section title="Why Delivero" subtitle="Built for owners and drivers—fast setup, clear workflow, real-time tracking.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard title="Route-first setup" description="Create delivery routes and assign drivers in minutes." />
          <FeatureCard title="Faster dispatch" description="Create orders and keep the team aligned on what’s next." />
          <FeatureCard title="Real-time tracking" description="Drivers update status as they go—owners see progress instantly." />
          <FeatureCard title="Reports that help" description="Understand performance with clear daily/weekly/monthly summaries." />
        </div>
      </Section>

      <Section title="How it works" subtitle="Match the app’s setup flow: routes → items → customers → orders.">
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <li className="group relative rounded-2xl border border-black/10 bg-surface p-6 transition-all duration-300 hover:border-[--color-primary]/30 hover:shadow-lg hover:-translate-y-1 dark:border-white/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[--color-primary]/10 text-lg font-bold text-[--color-primary] transition-colors group-hover:bg-[--color-primary] group-hover:text-white">
              1
            </div>
            <div className="text-base font-semibold">Setup routes</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">Create delivery routes and assign drivers.</p>
          </li>
          <li className="group relative rounded-2xl border border-black/10 bg-surface p-6 transition-all duration-300 hover:border-[--color-primary]/30 hover:shadow-lg hover:-translate-y-1 dark:border-white/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[--color-primary]/10 text-lg font-bold text-[--color-primary] transition-colors group-hover:bg-[--color-primary] group-hover:text-white">
              2
            </div>
            <div className="text-base font-semibold">Add items</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">Set up your menu with prices for quick ordering.</p>
          </li>
          <li className="group relative rounded-2xl border border-black/10 bg-surface p-6 transition-all duration-300 hover:border-[--color-primary]/30 hover:shadow-lg hover:-translate-y-1 dark:border-white/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[--color-primary]/10 text-lg font-bold text-[--color-primary] transition-colors group-hover:bg-[--color-primary] group-hover:text-white">
              3
            </div>
            <div className="text-base font-semibold">Add customers</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">Assign customers to routes and store delivery details.</p>
          </li>
          <li className="group relative rounded-2xl border border-black/10 bg-surface p-6 transition-all duration-300 hover:border-[--color-primary]/30 hover:shadow-lg hover:-translate-y-1 dark:border-white/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[--color-primary]/10 text-lg font-bold text-[--color-primary] transition-colors group-hover:bg-[--color-primary] group-hover:text-white">
              4
            </div>
            <div className="text-base font-semibold">Create orders</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">Dispatch, update status, and close the loop on delivery.</p>
          </li>
        </ol>
      </Section>

      <Section title="Built for the whole team" subtitle="Owners manage operations; drivers deliver with confidence.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-surface p-6 dark:border-white/10">
            <div className="text-sm font-semibold">Owners / Managers</div>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>Customer management (searchable records, route assignment)</li>
              <li>Order creation, assignment, and prioritization</li>
              <li>Route management and driver availability</li>
              <li>Reports and sales summaries</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/10 bg-surface p-6 dark:border-white/10">
            <div className="text-sm font-semibold">Drivers</div>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>Driver dashboard for today’s routes</li>
              <li>Fast status updates (picked up, on the way, delivered)</li>
              <li>Clear stop order and route progress</li>
              <li>Proof of delivery workflows</li>
            </ul>
          </div>
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
