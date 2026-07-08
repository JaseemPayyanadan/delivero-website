import Section from "@/components/Section";
import ContactForm from "./ContactForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Delivero",
  description:
    "Contact Delivero for onboarding, setup guidance, and support for your delivery business.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section
      as="h1"
      title="Contact Delivero"
      subtitle="Share a few details about your business and we'll reply with next steps."
    >
      <div className="mx-auto grid max-w-4xl items-start gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="card-surface rounded-3xl p-8">
          <ContactForm />
        </div>

        <div className="card-surface rounded-3xl p-8">
          <div className="text-xs font-semibold tracking-[0.08em] uppercase text-lime">What happens next</div>
          <ol className="mt-5 space-y-4 text-sm text-muted">
            <li className="flex gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-(--color-primary)/10 text-xs font-bold text-(--color-primary)">1</span>
              <span><span className="font-semibold text-foreground">We review</span> your request and follow up with next steps.</span>
            </li>
            <li className="flex gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-(--color-primary)/10 text-xs font-bold text-(--color-primary)">2</span>
              <span><span className="font-semibold text-foreground">We schedule</span> a walkthrough focused on your routes, drivers, and order workflow.</span>
            </li>
            <li className="flex gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-(--color-primary)/10 text-xs font-bold text-(--color-primary)">3</span>
              <span><span className="font-semibold text-foreground">We onboard</span> you with products, customers, routes, and drivers.</span>
            </li>
          </ol>

          <div className="mt-8 rounded-2xl border border-lime-soft bg-lime-soft p-5 text-sm">
            <div className="text-xs font-semibold text-muted">Support email</div>
            <a className="mt-2 inline-block font-semibold text-(--color-primary) hover:underline" href="mailto:support@delivero.app">
              support@delivero.app
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
