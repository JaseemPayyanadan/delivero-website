import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import { getIndustry, getIndustrySlugs } from "@/content/solutions/industries";

type PageProps = { params: Promise<{ industry: string }> };

export function generateStaticParams() {
  return getIndustrySlugs().map((industry) => ({ industry }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) {
    return buildMetadata({
      title: "Solution not found",
      description: "The requested solution page could not be found.",
      path: `/solutions/${slug}`,
    });
  }
  return buildMetadata({
    title: industry.title,
    description: industry.metaDescription,
    path: `/solutions/${industry.slug}`,
  });
}

const featureIcon = (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
  </svg>
);

export default async function SolutionPage({ params }: PageProps) {
  const { industry: slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/solutions" },
    { name: industry.name, url: `/solutions/${industry.slug}` },
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Section as="h1" title={industry.h1} className="pb-10 md:pb-12">
        <Reveal className="mx-auto -mt-6 mb-2 flex justify-center">
          <nav aria-label="Breadcrumb" className="text-xs text-muted">
            <Link className="hover:text-foreground transition-colors" href="/">Home</Link>
            <span className="mx-2">/</span>
            <Link className="hover:text-foreground transition-colors" href="/solutions">Solutions</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{industry.name}</span>
          </nav>
        </Reveal>
        <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted md:text-base">
          {industry.intro}
        </p>
      </Section>

      <Section title="The everyday challenge" className="py-12 md:py-16">
        <div className="mx-auto grid max-w-3xl gap-3">
          {industry.painPoints.map((point) => (
            <Reveal
              key={point}
              className="flex items-start gap-3 rounded-2xl border border-black/8 bg-surface p-5 text-sm leading-relaxed text-muted shadow-sm"
            >
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              </svg>
              <span>{point}</span>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title={`How Delivero handles ${industry.name.toLowerCase()}`}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industry.features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} icon={featureIcon} />
          ))}
        </div>
      </Section>

      <Section title="Who it's for" className="py-12 md:py-16">
        <div className="mx-auto grid max-w-3xl gap-3">
          {industry.useCases.map((useCase) => (
            <Reveal
              key={useCase}
              className="flex items-start gap-3 rounded-2xl border border-black/8 bg-surface p-5 text-sm leading-relaxed text-muted shadow-sm"
            >
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
              </svg>
              <span>{useCase}</span>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Frequently asked questions" className="py-12 md:py-16">
        <div className="mx-auto grid max-w-3xl gap-4">
          {industry.faq.map((item) => (
            <Reveal key={item.q} className="rounded-2xl border border-black/8 bg-surface p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection title="Ready to get started?" description={industry.ctaText} />
    </>
  );
}
