import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import SolutionCard from "@/components/SolutionCard";
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Reveal key={industry.slug} className="h-full">
              <SolutionCard industry={industry} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Get started with Delivero"
        description="Set up your routes, drivers, and daily orders in one connected system."
      />
    </>
  );
}
