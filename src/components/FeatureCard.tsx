import { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="group card-surface h-full rounded-3xl p-8 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-(--color-primary)/20">
      <div className="flex items-start gap-4">
        {icon ? (
          <span className="mt-0.5 grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-(--color-primary)/10 text-(--color-primary)">
            {icon}
          </span>
        ) : null}
        <div className="text-base font-semibold text-foreground transition-colors group-hover:text-(--color-primary)">
          {title}
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
