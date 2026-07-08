import Section from "@/components/Section";
import Script from "next/script";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
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
      <Section as="h1" title="Delivery software FAQ" subtitle="Quick answers for owners and drivers.">
        <FAQ items={generalFaqs} showContactLink />
      </Section>

      <CTASection title="Still have a question?" description="Contact us and we’ll help you map Delivero to your routes, drivers, and daily orders." />
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
