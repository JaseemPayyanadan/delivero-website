import Image from "next/image";
import Link from "next/link";
import type { Industry } from "@/content/solutions/industries";

type SolutionCardProps = {
  industry: Industry;
};

export default function SolutionCard({ industry }: SolutionCardProps) {
  return (
    <Link
      href={`/solutions/${industry.slug}`}
      className="group card-surface flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-200 ease-out hover:-translate-y-0.5"
    >
      <div className="overflow-hidden border-b border-soft bg-(--color-primary-50)">
        <Image
          src={industry.image.src}
          alt={industry.image.alt}
          width={1200}
          height={675}
          className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] sm:h-48"
        />
      </div>
      <div className="flex grow flex-col p-7">
        <div className="text-base font-semibold text-foreground transition-colors group-hover:text-(--color-primary)">
          {industry.name}
        </div>
        <p className="mt-3 grow text-sm leading-relaxed text-muted">{industry.intro}</p>
        <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-(--color-primary)">
          Learn more
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
