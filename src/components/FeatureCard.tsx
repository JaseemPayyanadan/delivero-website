type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="group rounded-xl border border-black/10 bg-surface p-6 shadow-sm transition-all duration-300 hover:border-[--color-primary]/30 hover:shadow-lg hover:-translate-y-1 dark:border-white/10 dark:hover:border-[--color-primary]/30">
      <div className="text-base font-semibold text-foreground transition-colors group-hover:text-[--color-primary]">
        {title}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}


