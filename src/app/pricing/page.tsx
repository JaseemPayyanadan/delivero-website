import Section from "@/components/Section";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
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

const plans = [
  {
    name: "Starter",
    price: "Free",
    priceInr: null,
    note: "Free forever",
    desc: "For small teams getting started.",
    cta: "Get started",
    tone: "border-black/8",
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
    price: "₹499",
    priceInr: null,
    note: "per month",
    desc: "For growing restaurants that dispatch daily.",
    cta: "Get started",
    highlight: true,
    tone: "border-black/12",
    features: [
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
    price: "Custom",
    priceInr: null,
    note: "Let's talk",
    desc: "For multi-location operations.",
    cta: "Contact us",
    tone: "border-black/8",
    features: [
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
      <Section as="h1" title="Delivery management software pricing" subtitle="Simple plans for restaurants and delivery teams.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border bg-surface p-6 shadow-sm transition-all duration-200 ease-out hover:border-black/12 hover:-translate-y-0.5 hover:shadow-md md:p-8 ${p.tone}`}
            >
              {p.highlight ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-black/10 bg-white px-4 py-1 text-xs font-semibold tracking-[0.08em] uppercase text-muted shadow-sm">
                  Most popular
                </div>
              ) : null}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className={`text-sm font-semibold ${p.highlight ? "text-(--color-primary)" : "text-(--color-secondary)"}`}>{p.name}</div>
                  <div className="mt-2 text-sm text-muted">{p.desc}</div>
                </div>
                <div className={`rounded-full px-3 py-1 text-xs font-semibold ${p.highlight ? "bg-(--color-primary)/12 text-(--color-primary)" : "bg-black/5 text-(--color-secondary)"}`}>
                  {p.note}
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-end gap-2">
                  <div className="text-4xl font-bold tracking-tight">{p.price}</div>
                  {p.priceInr ? (
                    <div className="pb-1 text-sm text-muted">/ {p.priceInr} /mo</div>
                  ) : p.price !== "Custom" && p.price !== "Free" ? (
                    <div className="pb-1 text-sm text-muted">/mo</div>
                  ) : null}
                </div>
              </div>

              <div className="mt-6">
                <Button
                  href="/contact"
                  className={`w-full rounded-full px-6 py-3.5 text-base font-semibold ${p.highlight ? "" : "btn-secondary"}`}
                >
                  {p.cta}
                </Button>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700">
                      ✓
                    </span>
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section title="Frequently Asked Questions" subtitle="Common questions about Delivero pricing.">
        <div className="grid gap-4 lg:grid-cols-2">
          {[
            {
              q: "How much does delivery management software cost?",
              a: "Delivero offers a free Starter plan with no time limit, suitable for small teams. The Professional plan starts at ₹499/month for growing delivery businesses.",
            },
            {
              q: "Is there a free plan for small delivery businesses?",
              a: "Yes. The Starter plan is free forever and includes 1 driver account, up to 10 customers, 1 route, order management, and live tracking — no credit card required.",
            },
            {
              q: "How do I install the app?",
              a: "Download from the Play Store (package: delivero.com) and sign in with your account credentials.",
            },
            {
              q: "Which devices are supported?",
              a: "The app supports Android 8.0+ and works on phones and small tablets.",
            },
            {
              q: "Does it work offline?",
              a: "Core actions are cached offline and automatically sync when you're back online.",
            },
            {
              q: "What roles are available?",
              a: "There are two main roles: Owner/Manager (for managing customers, orders, and reports) and Driver (for viewing orders and updating delivery status).",
            },
            {
              q: "How is my data secured?",
              a: "All data is encrypted in transit and at rest. We use role-based access controls to ensure only authorized users can access relevant information.",
            },
            {
              q: "How do I get support?",
              a: "Email support is included with all plans. Priority support and SLA options are available on Professional and Business plans.",
            },
          ].map((item) => (
            <details key={item.q} className="group rounded-2xl border border-black/8 bg-surface p-5 shadow-sm transition-all duration-200 ease-out hover:border-black/12">
              <summary className="cursor-pointer text-base font-semibold text-(--color-secondary) transition-colors [&::-webkit-details-marker]:hidden">
                <div className="flex items-center justify-between">
                  <span>{item.q}</span>
                  <svg className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180 text-black/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
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
