import Button from "@/components/Button";
import Section from "@/components/Section";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
};

export default function CTASection({
  title = "Book a demo of Delivero",
  description = "See how Delivero can help your business manage orders, routes, drivers, payments, and delivery updates from one connected system.",
  primaryButtonText = "Get Started",
  primaryButtonHref = "https://delivero-flutter.vercel.app/#/owner",
  secondaryButtonText = "Request Demo",
  secondaryButtonHref = "/contact",
  className = "",
}: CTASectionProps) {
  return (
    <Section className={`py-12 md:py-16 ${className}`}>
      <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[#1a1a1a] px-6 py-12 text-white md:px-12 md:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(224,92,42,0.18)_0%,transparent_70%)]" />
          <div className="absolute inset-0 opacity-70 bg-linear-to-r from-(--color-primary)/10 via-transparent to-(--color-primary)/10 animate-gradient" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.05em] uppercase text-white/90">
            Get started today
          </div>

          <h3 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h3>
          <p className="mt-4 text-pretty text-base text-muted md:text-lg">
            {description}
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <Button
              href={primaryButtonHref}
              className="px-8 py-4 text-base font-semibold"
            >
              {primaryButtonText}
            </Button>
            <Button
              href={secondaryButtonHref}
              variant="ghost"
              className="px-8 py-4 text-base font-semibold"
            >
              {secondaryButtonText}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
