"use client";

import { useState } from "react";
import Button from "@/components/Button";

export type PricingPlan = {
  name: string;
  monthlyPrice: string | null;
  yearlyPrice: string | null;
  priceLabel?: string;
  desc: string;
  cta: string;
  href: string;
  highlight?: boolean;
  features: string[];
};

type PricingTableProps = {
  plans: PricingPlan[];
};

function CheckIcon({ highlighted }: { highlighted?: boolean }) {
  return (
    <span
      className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
        highlighted ? "bg-(--color-primary)/25 text-white" : "bg-emerald-500/15 text-emerald-700"
      }`}
    >
      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7 10 17l-5-5" />
      </svg>
    </span>
  );
}

export default function PricingTable({ plans }: PricingTableProps) {
  const [yearly, setYearly] = useState(false);

  return (
    <div>
      <div className="mb-10 flex flex-col items-center gap-4 sm:mb-12">
        <div
          role="group"
          aria-label="Billing period"
          className="inline-flex items-center rounded-full border border-black/8 bg-surface p-1 shadow-sm"
        >
          <button
            type="button"
            onClick={() => setYearly(false)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
              !yearly ? "bg-foreground text-white shadow-sm" : "text-muted hover:text-foreground"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setYearly(true)}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
              yearly ? "bg-foreground text-white shadow-sm" : "text-muted hover:text-foreground"
            }`}
          >
            Yearly
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase ${
                yearly ? "bg-lime text-foreground" : "bg-lime-soft text-lime"
              }`}
            >
              Save 20%
            </span>
          </button>
        </div>
        <p className="text-sm text-muted">
          {yearly ? "Billed annually — 2 months free on Professional" : "Flexible monthly billing, cancel anytime"}
        </p>
      </div>

      <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-5">
        {plans.map((plan) => {
          const isCustom = !plan.monthlyPrice && !plan.yearlyPrice;
          const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
          const showPeriod = price && price !== "Free" && !isCustom;

          return (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-200 md:p-8 ${
                plan.highlight
                  ? "border-transparent bg-foreground text-white shadow-xl lg:scale-[1.02] lg:-my-2"
                  : "border-black/8 bg-surface shadow-sm hover:border-black/12 hover:shadow-md"
              }`}
            >
              {plan.highlight ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-(--color-primary) px-4 py-1 text-xs font-semibold tracking-[0.06em] uppercase text-white shadow-sm">
                  Most popular
                </div>
              ) : null}

              <div>
                <h3 className={`text-lg font-bold ${plan.highlight ? "text-white" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1.5 text-sm leading-relaxed ${plan.highlight ? "text-white/70" : "text-muted"}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="mt-6 flex items-end gap-1.5">
                <span className="text-4xl font-bold tracking-tight md:text-[2.75rem]">
                  {isCustom ? plan.priceLabel ?? "Custom" : price}
                </span>
                {showPeriod ? (
                  <span className={`pb-1.5 text-sm ${plan.highlight ? "text-white/60" : "text-muted"}`}>/mo</span>
                ) : null}
              </div>
              {!isCustom && yearly && plan.yearlyPrice && plan.monthlyPrice && plan.yearlyPrice !== "Free" ? (
                <p className={`mt-1 text-xs ${plan.highlight ? "text-white/50" : "text-muted"}`}>
                  ₹{parseInt(plan.yearlyPrice.replace(/[₹,]/g, ""), 10) * 12}/yr billed annually
                </p>
              ) : plan.monthlyPrice === "Free" ? (
                <p className={`mt-1 text-xs ${plan.highlight ? "text-white/50" : "text-muted"}`}>Free forever</p>
              ) : isCustom ? (
                <p className={`mt-1 text-xs ${plan.highlight ? "text-white/50" : "text-muted"}`}>Tailored to your operation</p>
              ) : null}

              <div className="mt-6">
                <Button
                  href={plan.href}
                  variant={plan.highlight ? "primary" : "secondary"}
                  className={`w-full rounded-xl px-6 py-3.5 text-base font-semibold ${
                    plan.highlight
                      ? "border-transparent bg-(--color-primary) hover:bg-(--color-primary-600)"
                      : "rounded-xl border-black/10 bg-white hover:bg-black/5"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>

              <ul className={`mt-8 flex-1 space-y-3.5 border-t pt-6 text-sm ${plan.highlight ? "border-white/10" : "border-black/6"}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckIcon highlighted={plan.highlight} />
                    <span className={plan.highlight ? "text-white/85" : "text-muted"}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
