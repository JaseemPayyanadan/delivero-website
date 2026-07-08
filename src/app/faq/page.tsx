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
      <Section as="h1" title="Questions & answers" subtitle="Quick answers for owners and drivers.">
        <FAQ items={generalFaqs} variant="static" columns={2} showContactLink />
      </Section>

      <CTASection />
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
