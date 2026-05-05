import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Features",
};

export default function FeaturesPage() {
  return (
    <>
      <Section
        title="Features"
        subtitle="A clean workflow for dispatch and delivery—built for owners and drivers."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-surface p-6 shadow-sm dark:border-white/10 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-(--color-secondary)">Owners / Managers</div>
                <div className="mt-1 text-xs text-muted">Set up operations and keep orders moving.</div>
              </div>
              <div className="rounded-full bg-(--color-primary)/12 px-3 py-1 text-xs font-semibold text-(--color-primary)">
                Dispatch
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              <FeatureCard title="Customer management" description="Searchable customer records with route assignment." />
              <FeatureCard title="Order management" description="Create, assign, and prioritize orders in seconds." />
              <FeatureCard title="Route management" description="Create routes and assign drivers for deliveries." />
              <FeatureCard title="Reports & summaries" description="Daily, weekly, and monthly views to spot trends fast." />
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-surface p-6 shadow-sm dark:border-white/10 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-(--color-secondary)">Drivers</div>
                <div className="mt-1 text-xs text-muted">Stay on track with clear stops and live updates.</div>
              </div>
              <div className="rounded-full bg-emerald-500/12 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                On route
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              <FeatureCard title="Driver dashboard" description="Today’s tasks, prioritized stops, and route progress." />
              <FeatureCard title="Status updates" description="Picked up → on the way → delivered, with proof of delivery." />
              <FeatureCard title="Route progress" description="Follow the route and minimize backtracking." />
              <FeatureCard title="Notifications" description="Get notified when routes are assigned (when enabled)." />
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        title="See Delivero in action"
        description="Install the app or request a demo for your team."
      />
    </>
  );
}


