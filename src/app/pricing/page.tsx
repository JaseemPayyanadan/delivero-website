import Section from "@/components/Section";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import PricingTable, { type PricingPlan } from "@/components/PricingTable";
import { pricingFaqs } from "@/content/faq";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Delivery management software pricing",
  description:
    "Delivery management software pricing for delivery businesses. Free plan available. Simple pricing for milk, bakery, grocery, and meal delivery teams.",
  path: "/pricing",
  keywords: [
    "how much does delivery software cost",
    "delivery management software pricing",
    "free delivery management app",
    "delivery software pricing",
  ],
});

const plans: PricingPlan[] = [
  {
    name: "Starter",
    monthlyPrice: "Free",
    yearlyPrice: "Free",
    desc: "For small teams getting started with daily deliveries.",
    cta: "Get started",
    href: "https://app.delivro.in/#/intro",
    features: [
      "Free forever",
      "1 driver account",
      "Up to 10 customers",
      "1 route",
      "Orders and live status tracking",
      "Basic reports",
      "Email support",
    ],
  },
  {
    name: "Professional",
    monthlyPrice: "₹499",
    yearlyPrice: "₹399",
    desc: "For growing restaurants and delivery teams that dispatch daily.",
    cta: "Start free trial",
    href: "https://app.delivro.in/#/intro",
    highlight: true,
    features: [
      "Everything in Starter",
      "Unlimited drivers",
      "Up to 5 dispatch/staff accounts",
      "Advanced customer management",
      "Smart route planning",
      "Realtime status updates",
      "Advanced reports",
      "Priority support",
    ],
  },
  {
    name: "Business",
    monthlyPrice: null,
    yearlyPrice: null,
    priceLabel: "Custom",
    desc: "For multi-location operations with complex workflows.",
    cta: "Contact sales",
    href: "/contact",
    features: [
      "Everything in Professional",
      "Unlimited everything",
      "Custom reporting",
      "Integrations / API options",
      "Dedicated onboarding",
      "24/7 priority support",
      "Training for teams",
    ],
  },
];

const offerJsonLd = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  priceCurrency: "INR",
  lowPrice: "0",
  highPrice: "499",
  offerCount: "3",
  offers: [
    { "@type": "Offer", name: "Starter", price: "0", priceCurrency: "INR" },
    { "@type": "Offer", name: "Professional", price: "499", priceCurrency: "INR" },
    { "@type": "Offer", name: "Business", price: "0", priceCurrency: "INR", description: "Custom pricing" },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerJsonLd) }}
      />

      <Section
        as="h1"
        title="Choose a plan that fits your needs"
        subtitle="Simple, transparent pricing for delivery businesses — from solo drivers to multi-location teams."
      >
        <PricingTable plans={plans} />
      </Section>

      <Section title="Questions & answers" subtitle="Common questions about Delivero pricing and plans.">
        <FAQ items={pricingFaqs} variant="static" columns={2} />
        <div className="mt-8 text-center">
          <Button href="/faq" variant="ghost" className="text-base">
            View all FAQs →
          </Button>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
