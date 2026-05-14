import Section from "@/components/Section";
import ContactForm from "./ContactForm";
import CTASection from "@/components/CTASection";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <Section
        title="Book a demo of Delivero"
        subtitle="See how Delivero can help your business manage orders, routes, drivers, payments, and delivery updates from one connected system."
      >
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-surface p-6 shadow-sm dark:border-white/10 md:p-8">
            <div className="text-sm font-semibold text-(--color-secondary)">Request a demo</div>
            <p className="mt-2 text-sm text-muted">
              Share a few details about your business and we’ll reply with next steps.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-surface p-6 shadow-sm dark:border-white/10 md:p-8">
            <div className="text-sm font-semibold text-(--color-secondary)">What happens next</div>
            <ol className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-(--color-primary)/12 text-xs font-bold text-(--color-primary)">1</span>
                <span><span className="font-semibold text-foreground">We review</span> your request and follow up with a demo link.</span>
              </li>
              <li className="flex gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-(--color-primary)/12 text-xs font-bold text-(--color-primary)">2</span>
                <span><span className="font-semibold text-foreground">We schedule</span> a walkthrough focused on your routes, drivers, and order workflow.</span>
              </li>
              <li className="flex gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-(--color-primary)/12 text-xs font-bold text-(--color-primary)">3</span>
                <span><span className="font-semibold text-foreground">We onboard</span> you with products, customers, routes, and drivers.</span>
              </li>
            </ol>

            <div className="mt-6 rounded-2xl border border-black/10 bg-white/60 p-5 text-sm dark:border-white/10 dark:bg-[#0f1112]/40">
              <div className="text-xs font-semibold text-muted">Support email</div>
              <a className="mt-2 inline-block font-semibold text-(--color-primary) hover:underline" href="mailto:support@delivero.app">
                support@delivero.app
              </a>
              <div className="mt-1 text-xs text-muted">Include your business name and city for faster help.</div>
            </div>
          </div>
        </div>
      </Section>

      <CTASection title="Prefer self-serve?" description="Start with products, customers, routes, and drivers—then create orders and deliver." />
    </>
  );
}
