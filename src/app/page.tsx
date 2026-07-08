import Link from "next/link";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import PricingTeaser from "@/components/PricingTeaser";
import Reveal from "@/components/Reveal";
import SolutionCard from "@/components/SolutionCard";
import { industries } from "@/content/solutions/industries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Delivery management software for delivery businesses",
  description:
    "Manage last-mile delivery, route optimization, and subscription orders in one system. Delivero connects owners and drivers across web and Android.",
  path: "/",
});

export default function Home() {
  return (
    <div>
      <Hero />

      <Section tone="alt" id="how-it-works" title="How Delivero works">
        <ol className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Set up your operations",
              desc: "Add products, customers, delivery routes, and drivers to match your business workflow.",
            },
            {
              title: "Create and organize orders",
              desc: "Create daily, one-time, or special orders, set quantities and payment details, and manage them from one place.",
            },
            {
              title: "Deliver with clarity",
              desc: "Drivers see assigned route orders, open customer details, and update delivery status as work gets done.",
            },
          ].map((s, idx) => (
            <Reveal
              as="li"
              key={s.title}
              delay={idx * 100}
              className="card-surface relative h-full rounded-3xl p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-(--color-primary)/10 text-lg font-bold text-(--color-primary)">
                {idx + 1}
              </div>
              <div className="text-base font-semibold text-foreground">{s.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section
        tone="base"
        id="features"
        title="Built for daily delivery teams"
        subtitle="Owner dashboard and driver app in one connected workflow."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Owner Dashboard", description: "Manage products, customers, routes, drivers, orders, and payments from one place." },
            { title: "Smart Orders", description: "Handle daily, one-time, and special orders with payment tracking and clear statuses." },
            { title: "Driver App", description: "Drivers view assigned deliveries, customer details, and update status on the go." },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 80} className="h-full">
              <FeatureCard title={f.title} description={f.description} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/features" className="text-sm font-semibold text-(--color-primary) hover:underline">
            View all features →
          </Link>
        </div>
      </Section>

      <Section
        tone="alt"
        id="solutions"
        title="Solutions by industry"
        subtitle="Built for local delivery businesses that run recurring and one-time drops."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={i * 60} className="h-full">
              <SolutionCard industry={industry} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/solutions" className="text-sm font-semibold text-(--color-primary) hover:underline">
            View all solutions →
          </Link>
        </div>
      </Section>

      <Section
        tone="base"
        id="pricing"
        title="Simple pricing for every team size"
        subtitle="Start free and upgrade as your routes, drivers, and customers grow."
      >
        <PricingTeaser />
      </Section>

      <CTASection />
    </div>
  );
}
