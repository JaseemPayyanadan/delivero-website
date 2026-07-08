import Section from "@/components/Section";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import PricingTable, { type PricingPlan } from "@/components/PricingTable";
import Reveal from "@/components/Reveal";
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

      <Section tone="alt">
        <Reveal className="relative overflow-hidden rounded-2xl border border-black/8 bg-white px-6 py-10 shadow-sm md:px-10 md:py-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(90,69,254,0.12)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(191,224,3,0.10)_0%,transparent_55%)]" />
          </div>
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Just getting started?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                Try Delivero free with one driver, ten customers, and a single route. No credit card required — upgrade when your team grows.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button href="https://app.delivro.in/#/intro" className="rounded-xl px-6 py-3.5 text-base font-semibold">
                Get started free
              </Button>
              <Button href="/contact" variant="secondary" className="rounded-xl px-6 py-3.5 text-base font-semibold">
                Talk to us
              </Button>
            </div>
          </div>
        </Reveal>
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
