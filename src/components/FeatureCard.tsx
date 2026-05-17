import { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border border-black/8 bg-surface p-7 shadow-sm transition-all duration-200 ease-out hover:border-black/12 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-3">
        {icon ? (
          <span className="mt-0.5 grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-(--color-primary)/12 text-(--color-primary)">
            {icon}
          </span>
        ) : null}
        <div className="text-base font-semibold text-(--color-secondary) transition-colors group-hover:text-(--color-primary)">
          {title}
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
