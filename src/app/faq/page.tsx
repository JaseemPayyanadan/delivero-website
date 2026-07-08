import Section from "@/components/Section";
import Script from "next/script";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import PromoBanner from "@/components/PromoBanner";
import { buildFaqJsonLd, generalFaqs } from "@/content/faq";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Delivery software FAQ",
  description:
    "Answers to common questions about Delivero delivery management software for owners and drivers.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <Section as="h1" title="Questions & answers" subtitle="Quick answers for owners and drivers.">
        <FAQ items={generalFaqs} variant="static" columns={2} showContactLink />
      </Section>

      <Section tone="alt">
        <PromoBanner
          title="Still have a question?"
          description="Contact us and we'll help you map Delivero to your routes, drivers, and daily orders."
          primaryLabel="Contact us"
          primaryHref="/contact"
          secondaryLabel="Get started free"
          secondaryHref="https://app.delivro.in/#/intro"
        />
      </Section>

      <CTASection title="Download Delivero" description="Start managing orders, routes, drivers, payments, and delivery updates from one connected system." />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqJsonLd(generalFaqs)),
        }}
      />
    </>
  );
}
