import { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="group rounded-xl border border-black/10 bg-surface p-6 shadow-sm transition-all duration-300 hover:border-[--color-primary]/30 hover:shadow-lg hover:-translate-y-1 dark:border-white/10 dark:hover:border-[--color-primary]/30">
      <div className="flex items-start gap-3">
        {icon ? (
          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-(--color-primary)/12 text-(--color-primary)">
            {icon}
          </span>
        ) : null}
        <div className="text-base font-semibold text-foreground transition-colors group-hover:text-[--color-primary]">
          {title}
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

