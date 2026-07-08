import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

type PromoBannerProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function PromoBanner({
  title,
  description,
  primaryLabel = "Get started free",
  primaryHref = "https://app.delivro.in/#/intro",
  secondaryLabel = "Talk to us",
  secondaryHref = "/contact",
}: PromoBannerProps) {
  return (
    <Reveal className="card-surface relative overflow-hidden rounded-[2rem] px-6 py-12 md:px-12 md:py-14">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(90,69,254,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(191,224,3,0.10)_0%,transparent_55%)]" />
      </div>
      <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">{title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">{description}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Button href={primaryHref} className="rounded-xl px-6 py-3.5 text-base font-semibold">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref ? (
            <Button href={secondaryHref} variant="secondary" className="rounded-xl px-6 py-3.5 text-base font-semibold">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
