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
  title = "Ready to streamline your delivery operations?",
  description = "Start your free trial or request a demo today.",
  primaryButtonText = "Get the App",
  primaryButtonHref = "#get-app",
  secondaryButtonText = "Request a Demo",
  secondaryButtonHref = "/contact",
  className = "",
}: CTASectionProps) {
  return (
    <Section className={`py-12 md:py-16 ${className}`}>
      <div className="rounded-3xl bg-black px-8 py-12 text-center text-white shadow-2xl ring-1 ring-black/10 dark:ring-white/10 md:px-12 md:py-16">
        <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h3>
        <p className="mt-4 text-base opacity-90 md:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            href={primaryButtonHref}
            className="bg-white px-8 py-4 text-base text-[--color-primary] shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:bg-gray-100"
          >
            {primaryButtonText}
          </Button>
          <Button
            href={secondaryButtonHref}
            variant="ghost"
            className="bg-white/10 px-8 py-4 text-base text-white transition-all hover:bg-white/20 hover:scale-105"
          >
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </Section>
  );
}

