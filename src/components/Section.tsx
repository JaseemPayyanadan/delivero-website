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
    <section id={id} className={`mx-auto w-full max-w-6xl px-6 py-16 md:py-20 ${className}`}>
      {title ? (
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          {subtitle ? (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}


