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
      <div className="relative overflow-hidden rounded-4xl border border-black/10 bg-black px-6 py-12 text-white shadow-2xl ring-1 ring-black/10 dark:border-white/10 dark:ring-white/10 md:px-12 md:py-16">
        {/* Animated gradient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-80"
        >
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-(--color-primary)/35 blur-3xl animate-float" />
          <div
            className="absolute -bottom-28 right-[-4rem] h-80 w-80 rounded-full bg-(--color-accent)/25 blur-3xl animate-float"
            style={{ animationDelay: "0.9s" }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-(--color-primary)/20 via-transparent to-(--color-accent)/20 animate-gradient" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse-soft" />
            Get started today
          </div>

          <h3 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h3>
          <p className="mt-4 text-pretty text-base text-white/85 md:text-lg">
            {description}
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <Button
              href={primaryButtonHref}
              className="bg-white px-8 py-4 text-base text-[--color-primary] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-gray-100"
            >
              {primaryButtonText}
            </Button>
            <Button
              href={secondaryButtonHref}
              variant="ghost"
              className="border border-white/25 bg-white/10 px-8 py-4 text-base text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white/20 hover:border-white/40"
            >
              {secondaryButtonText}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
