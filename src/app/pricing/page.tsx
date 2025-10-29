import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata = { title: "Pricing" };

function Tier({ name, price, features, popular = false }: { name: string; price: string; features: string[]; popular?: boolean }) {
  return (
    <div className={`rounded-2xl border p-6 shadow-sm ${popular ? "border-(--color-primary)" : "border-black/10 dark:border-white/10"}`}>
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        {popular ? <span className="rounded-full bg-(--color-primary) px-2 py-0.5 text-xs text-white">Popular</span> : null}
      </div>
      <div className="mt-2 text-3xl font-semibold">{price}</div>
      <ul className="mt-4 space-y-2 text-sm text-muted">
        {features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>
      <div className="mt-6">
        <Button href="/contact" variant={popular ? "secondary" : "primary"}>Request a Demo</Button>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <Section title="Pricing" subtitle="Simple, transparent pricing. Free trial available.">
      <div className="grid gap-6 md:grid-cols-3">
        <Tier name="Starter" price="$0" features={["Up to 2 drivers", "Basic routing", "Email support"]} />
        <Tier name="Growth" price="$49/mo" features={["Up to 10 drivers", "Optimized routing", "Priority support"]} popular />
        <Tier name="Scale" price="Custom" features={["Unlimited drivers", "Advanced analytics", "SLA support"]} />
      </div>
    </Section>
  );
}


