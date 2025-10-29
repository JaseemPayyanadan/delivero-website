import Section from "@/components/Section";
import Script from "next/script";

export const metadata = { title: "FAQ" };

const faqs = [
  { q: "How do I install the app?", a: "Download from the Play Store (package: com.delivero.fooddistribution) and sign in." },
  { q: "Which devices are supported?", a: "Android 8.0+; works on phones and small tablets." },
  { q: "Does it work offline?", a: "Core actions cache offline and sync when back online." },
  { q: "What roles are available?", a: "Owner/Manager and Driver roles with appropriate permissions." },
  { q: "How is my data secured?", a: "Encrypted in transit and at rest; role-based access controls." },
  { q: "How do I get support?", a: "Email support is included; SLA options on Scale plan." },
];

export default function FAQPage() {
  return (
    <>
      <Section title="FAQ" subtitle="Answers to common questions.">
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-xl border border-black/10 bg-surface p-4 dark:border-white/10">
              <summary className="cursor-pointer text-sm font-semibold">{f.q}</summary>
              <p className="mt-2 text-sm text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
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


