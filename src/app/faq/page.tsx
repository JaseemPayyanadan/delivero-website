import Section from "@/components/Section";
import Link from "next/link";
import Script from "next/script";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Delivery software FAQ",
  description:
    "Answers to common questions about Delivero delivery management software for owners and drivers.",
  path: "/faq",
});

const faqs = [
  {
    q: "How do drivers get orders?",
    a: "Owners assign drivers to routes, and drivers automatically see the orders connected to their assigned route.",
  },
  {
    q: "What is a Special order type?",
    a: "Special orders stay separate and do not merge into existing daily or one-time orders.",
  },
  {
    q: "Does Delivero work on web and mobile?",
    a: "Yes. Delivero is available on Flutter Web and Android.",
  },
  {
    q: "Can payments be tracked?",
    a: "Yes. Orders can be marked as paid, unpaid, or partial, and the amount paid can also be recorded.",
  },
  {
    q: "Who is Delivero built for?",
    a: "Delivero is built for delivery-based businesses such as bakeries, milk delivery services, meal providers, grocery delivery teams, water suppliers, and local distributors.",
  },
  {
    q: "What can drivers do in the app?",
    a: "Drivers can view assigned orders, open order details, access customer address and phone information, and mark deliveries as completed.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Section as="h1" title="Delivery software FAQ" subtitle="Quick answers for owners and drivers.">
        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-black/8 bg-surface p-5 shadow-sm transition-all duration-200 ease-out hover:border-black/12"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-(--color-secondary) [&::-webkit-details-marker]:hidden">
                <div className="flex items-center justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-black/5 text-(--color-secondary) transition-transform group-open:rotate-180">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center text-sm text-muted">
          Not seeing your question?{" "}
          <Link href="/contact" className="font-semibold text-(--color-primary) hover:underline">
            Contact us
          </Link>
          .
        </div>
      </Section>

      <CTASection title="Still have a question?" description="Contact us and we’ll help you map Delivero to your routes, drivers, and daily orders." />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          }),
        }}
      />
    </>
  );
}
