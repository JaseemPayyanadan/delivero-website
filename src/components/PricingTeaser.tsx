import Link from "next/link";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

const teaserPlans = [
  {
    name: "Starter",
    price: "Free",
    desc: "1 driver, 10 customers, 1 route",
    highlight: false,
  },
  {
    name: "Professional",
    price: "₹499",
    desc: "Unlimited drivers, smart routes, priority support",
    highlight: true,
  },
  {
    name: "Business",
    price: "Custom",
    desc: "Multi-location, API, dedicated onboarding",
    highlight: false,
  },
];

export default function PricingTeaser() {
  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-3">
        {teaserPlans.map((plan, i) => (
          <Reveal
            key={plan.name}
            delay={i * 80}
            className={`rounded-2xl border p-6 transition-all duration-200 ${
              plan.highlight
                ? "border-transparent bg-foreground text-white shadow-lg"
                : "border-black/8 bg-surface shadow-sm hover:border-black/12 hover:shadow-md"
            }`}
          >
            <div className={`text-sm font-semibold ${plan.highlight ? "text-white/70" : "text-muted"}`}>
              {plan.name}
            </div>
            <div className="mt-2 text-3xl font-bold tracking-tight">{plan.price}</div>
            {plan.price !== "Custom" && plan.price !== "Free" ? (
              <div className={`text-xs ${plan.highlight ? "text-white/50" : "text-muted"}`}>/mo</div>
            ) : null}
            <p className={`mt-3 text-sm leading-relaxed ${plan.highlight ? "text-white/75" : "text-muted"}`}>
              {plan.desc}
            </p>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button href="/pricing" className="rounded-xl px-8 py-3.5 text-base font-semibold">
          View full pricing
        </Button>
        <Link href="/pricing" className="text-sm font-semibold text-(--color-primary) hover:underline">
          Compare all plans →
        </Link>
      </div>
    </div>
  );
}
