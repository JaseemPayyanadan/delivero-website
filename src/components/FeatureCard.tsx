import { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border border-white/8 bg-surface p-7 transition-all duration-200 ease-out hover:border-white/15 hover:-translate-y-0.5">
      <div className="flex items-start gap-3">
        {icon ? (
          <span className="mt-0.5 grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-(--color-primary)/15 text-(--color-primary)">
            {icon}
          </span>
        ) : null}
        <div className="text-base font-semibold text-white transition-colors group-hover:text-[--color-primary]">
          {title}
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
