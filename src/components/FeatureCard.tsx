type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-black/10 bg-surface p-5 shadow-sm transition hover:shadow-md dark:border-white/10">
      <div className="text-sm font-semibold">{title}</div>
      <p className="mt-2 text-sm text-muted">{description}</p>
    </div>
  );
}


