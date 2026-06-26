import { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2";
};

export default function Section({ id, title, subtitle, children, className = "", as: Tag = "h2" }: SectionProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-[1200px] px-6 py-20 md:py-24 ${className}`}>
      {title ? (
        <Reveal className="mb-12 text-center md:mb-14">
          <Tag className="text-balance text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.02em] text-(--color-secondary)">
            {title}
          </Tag>
          {subtitle ? (
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </Reveal>
      ) : null}
      {children}
    </section>
  );
}
