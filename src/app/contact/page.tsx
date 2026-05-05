import Section from "@/components/Section";
import ContactForm from "./ContactForm";
import CTASection from "@/components/CTASection";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <Section title="Contact" subtitle="Request a demo, onboarding help, or ask a question.">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-surface p-6 shadow-sm dark:border-white/10 md:p-8">
            <div className="text-sm font-semibold text-(--color-secondary)">Tell us what you need</div>
            <p className="mt-2 text-sm text-muted">
              Share your setup (number of drivers, routes, and daily orders). We’ll reply with a suggested rollout.
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
                <span><span className="font-semibold text-foreground">We review</span> your request and respond within 1 business day.</span>
              </li>
              <li className="flex gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-(--color-primary)/12 text-xs font-bold text-(--color-primary)">2</span>
                <span><span className="font-semibold text-foreground">Quick call</span> (optional) to confirm routes, roles, and workflow.</span>
              </li>
              <li className="flex gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-(--color-primary)/12 text-xs font-bold text-(--color-primary)">3</span>
                <span><span className="font-semibold text-foreground">Rollout</span> with a simple setup checklist: routes → items → customers → orders.</span>
              </li>
            </ol>

            <div className="mt-6 rounded-2xl border border-black/10 bg-white/60 p-5 text-sm dark:border-white/10 dark:bg-[#0f1112]/40">
              <div className="text-xs font-semibold text-muted">Support email</div>
              <div className="mt-2 font-semibold text-foreground">support@fooddistribution.app</div>
              <div className="mt-1 text-xs text-muted">Include your restaurant name and city for faster help.</div>
            </div>
          </div>
        </div>
      </Section>

      <CTASection title="Prefer self-serve?" description="Install Delivero and start with routes → items → customers → orders." />
    </>
  );
}


