import Section from "@/components/Section";
import ContactForm from "./ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="Request a demo or ask a question.">
      <ContactForm />
    </Section>
  );
}


