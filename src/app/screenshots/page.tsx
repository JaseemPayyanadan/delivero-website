import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import Image from "next/image";

export const metadata = {
  title: "Screenshots",
  description: "Preview Delivero screens for the owner dashboard and driver experience.",
  alternates: { canonical: "/screenshots" },
};

function Shot({ title, subtitle, src }: { title: string; subtitle: string; src: string }) {
  return (
    <figure className="group rounded-3xl border border-black/8 bg-surface p-5 shadow-sm transition-all duration-200 ease-out hover:border-black/12 hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative overflow-hidden rounded-2xl border border-black/8 bg-[#f6f7ff]">
        <Image
          src={src}
          alt={title}
          width={1200}
          height={1350}
          className="aspect-9/16 w-full object-cover"
        />
      </div>
      <figcaption className="mt-4">
        <div className="text-sm font-semibold text-(--color-secondary)">{title}</div>
        <div className="mt-1 text-xs text-muted">{subtitle}</div>
      </figcaption>
    </figure>
  );
}

export default function ScreenshotsPage() {
  return (
    <>
      <Section
        title="See Delivero in action"
        subtitle="From business setup to final delivery updates, Delivero keeps every step connected across owner and driver workflows."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Shot title="Dashboard overview" subtitle="Business snapshot and quick actions." src="/image copy.png" />
          <Shot title="Order management" subtitle="Create and manage daily, one-time, and special orders." src="/image copy 2.png" />
          <Shot title="Route setup" subtitle="Create routes by area and keep assignments clear." src="/image copy 3.png" />
          <Shot title="Driver assignments" subtitle="Assign drivers to routes and sync daily work." src="/image copy 4.png" />
          <Shot title="Assigned deliveries" subtitle="Drivers see only their assigned deliveries and update status." src="/image copy 7.png" />
          <Shot title="Customer records" subtitle="Addresses, phone numbers, route, history, and payments." src="/image copy 8.png" />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
