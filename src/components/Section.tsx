import { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  /** Alternating section background: base white, alt neutral-50 */
  tone?: "base" | "alt";
  as?: "h1" | "h2";
};

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  tone = "base",
  as: Tag = "h2",
}: SectionProps) {
  const toneClass = tone === "alt" ? "bg-section-alt" : "bg-section";

  return (
    <section id={id} className={`w-full ${toneClass}`}>
      <div className={`mx-auto w-full max-w-[1200px] px-6 py-20 md:py-24 ${className}`}>
        {title ? (
          <Reveal className="mb-12 text-center md:mb-14">
            <Tag className="text-balance text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.02em] text-foreground">
              {title}
            </Tag>
            <span aria-hidden="true" className="lime-accent-bar mx-auto mt-4" />
            {subtitle ? (
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
                {subtitle}
              </p>
            ) : null}
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  );
}
