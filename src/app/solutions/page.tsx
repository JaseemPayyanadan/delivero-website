import Link from "next/link";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import PromoBanner from "@/components/PromoBanner";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/seo";
import { industries } from "@/content/solutions/industries";

export const metadata = buildMetadata({
  title: "Delivery solutions by industry",
  description:
    "Delivery management solutions for milk, bakery, grocery, water, tiffin, and meal delivery businesses — orders, routes, drivers, proof of delivery, and payments in one app.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <Section
        as="h1"
        title="Delivery solutions by industry"
        subtitle="One system for orders, routes, drivers, and payments — tuned to how your delivery business runs."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Reveal key={industry.slug} className="h-full">
              <Link
                href={`/solutions/${industry.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-black/8 bg-surface p-7 shadow-sm transition-all duration-200 ease-out hover:border-black/12 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-base font-semibold text-foreground transition-colors group-hover:text-(--color-primary)">
                  {industry.name}
                </div>
                <p className="mt-3 grow text-sm leading-relaxed text-muted">{industry.intro}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-(--color-primary)">
                  Learn more
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <PromoBanner
          title="Not sure which industry fits?"
          description="Delivero works for any daily or recurring delivery business. Start free and configure it around your routes and order types."
          primaryLabel="Get started free"
        />
      </Section>

      <CTASection
        title="Download Delivero"
        description="Get the app and set up your routes, drivers, and daily orders in one connected system."
      />
    </>
  );
}
