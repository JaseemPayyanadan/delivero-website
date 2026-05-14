import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-[1200px] px-6 py-[120px] border-t border-white/8 ${className}`}>
      {title ? (
        <div className="mb-12 text-center md:mb-14">
          <h2 className="text-balance text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.02em] text-white">
            {title}
          </h2>
          {subtitle ? (
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
