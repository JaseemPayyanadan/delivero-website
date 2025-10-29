import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";

export const metadata = {
  title: "Features",
};

export default function FeaturesPage() {
  return (
    <div>
      <Section title="Features" subtitle="Built for owners and delivery teams.">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-semibold">For Owners/Managers</h3>
            <div className="grid gap-4">
              <FeatureCard title="Customer Management" description="Keep customer records organized and searchable." />
              <FeatureCard title="Order Management" description="Create, assign, and prioritize orders with ease." />
              <FeatureCard title="Route Management" description="Optimize routes by distance and time windows." />
              <FeatureCard title="Reports & Sales Summary" description="Understand performance with daily, weekly, and monthly views." />
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">For Delivery Teams</h3>
            <div className="grid gap-4">
              <FeatureCard title="Driver Dashboard" description="Today’s tasks, prioritized stops, and live updates." />
              <FeatureCard title="Order Status Updates" description="Mark picked up, on the way, delivered with proof." />
              <FeatureCard title="Route Progress" description="Follow the route and minimize backtracking." />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}


