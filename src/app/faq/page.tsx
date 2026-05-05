import Section from "@/components/Section";
import Script from "next/script";
import CTASection from "@/components/CTASection";

export const metadata = { title: "FAQ" };

const faqs = [
  { q: "How do I install the app?", a: "Download from the Play Store (package: delivero.com) and sign in." },
  { q: "Which devices are supported?", a: "Android 8.0+; works on phones and small tablets." },
  { q: "Does it work offline?", a: "Core actions cache offline and sync when back online." },
  { q: "What roles are available?", a: "Owner/Manager and Driver roles with appropriate permissions." },
  { q: "How is my data secured?", a: "Encrypted in transit and at rest; role-based access controls." },
  { q: "How do I get support?", a: "Email support is included; SLA options on Scale plan." },
];

export default function FAQPage() {
  return (
    <>
      <Section title="FAQ" subtitle="Quick answers for owners, dispatchers, and drivers.">
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-black/10 bg-white/60 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-[#0f1112]/40"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-(--color-secondary) [&::-webkit-details-marker]:hidden">
                <div className="flex items-center justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-black/5 text-(--color-secondary) transition-transform group-open:rotate-180 dark:bg-white/10">
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
      </Section>

      <CTASection title="Still have a question?" description="Request a demo or email support and we’ll help you get set up." />
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


