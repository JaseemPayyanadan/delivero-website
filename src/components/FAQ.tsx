"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { FaqItem } from "@/content/faq";

type FAQProps = {
  items: FaqItem[];
  variant?: "accordion" | "static";
  animate?: boolean;
  showContactLink?: boolean;
  columns?: 1 | 2;
  className?: string;
};

function ChevronIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function AccordionItem({ item }: { item: FaqItem }) {
  return (
    <>
      <summary className="cursor-pointer list-none text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden">
        <div className="flex items-center justify-between gap-4">
          <span>{item.q}</span>
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-black/5 text-foreground transition-transform group-open:rotate-180">
            <ChevronIcon />
          </span>
        </div>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
    </>
  );
}

function StaticItem({ item }: { item: FaqItem }) {
  return (
    <>
      <h3 className="text-base font-semibold text-foreground">{item.q}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
    </>
  );
}

export default function FAQ({
  items,
  variant = "accordion",
  animate = false,
  showContactLink = false,
  columns = 2,
  className = "",
}: FAQProps) {
  const gridClass =
    columns === 1 ? "grid gap-5" : "grid gap-5 lg:grid-cols-2 lg:gap-6";
  const accordionClass =
    "group card-surface rounded-3xl p-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-(--color-primary)/20";
  const staticClass = "card-surface rounded-3xl p-7";

  return (
    <>
      <div className={`${gridClass} ${className}`.trim()}>
        {items.map((item, index) => {
          const delay = animate ? index * 70 : 0;
          const key = item.q;

          if (variant === "static") {
            const content = <StaticItem item={item} />;
            return animate ? (
              <Reveal key={key} delay={delay} className={staticClass}>
                {content}
              </Reveal>
            ) : (
              <div key={key} className={staticClass}>
                {content}
              </div>
            );
          }

          const content = <AccordionItem item={item} />;
          return animate ? (
            <Reveal as="details" key={key} delay={delay} className={accordionClass}>
              {content}
            </Reveal>
          ) : (
            <details key={key} className={accordionClass}>
              {content}
            </details>
          );
        })}
      </div>

      {showContactLink ? (
        <div className="mt-8 text-center text-sm text-muted lg:mt-10">
          Not seeing your question?{" "}
          <Link href="/contact" className="font-semibold text-(--color-primary) hover:underline">
            Contact us
          </Link>
          .
        </div>
      ) : null}
    </>
  );
}
