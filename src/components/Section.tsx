import { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  /** Alternating section background: base transparent (shows page gradient), alt neutral-50 */
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
  const toneClass =
    tone === "alt"
      ? "border-y border-white/50 bg-section-alt"
      : "bg-transparent";

  return (
    <section id={id} className={`w-full ${toneClass}`}>
      <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 py-24 md:py-32 ${className}`}>
        {title ? (
          <Reveal className="mb-14 text-center md:mb-16">
            <Tag className="text-balance text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-foreground">
              {title}
            </Tag>
            <span aria-hidden="true" className="lime-accent-bar mx-auto mt-5" />
            {subtitle ? (
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
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
