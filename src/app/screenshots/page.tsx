import Section from "@/components/Section";
import CTASection from "@/components/CTASection";

export const metadata = { title: "Screenshots" };

function Shot({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <figure className="group rounded-3xl border border-black/10 bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10">
      <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/60 dark:border-white/10 dark:bg-[#0f1112]/40">
        <div className="absolute inset-0 bg-linear-to-br from-(--color-primary)/12 via-transparent to-(--color-accent)/12 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="aspect-9/16 w-full bg-linear-to-b from-black/5 to-transparent" />
      </div>
      <figcaption className="mt-4">
        <div className="text-sm font-semibold text-foreground">{title}</div>
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
          <Shot title="Dashboard overview" subtitle="Business snapshot and quick actions." />
          <Shot title="Order management" subtitle="Create and manage daily, one-time, and special orders." />
          <Shot title="Route setup" subtitle="Create routes by area and keep assignments clear." />
          <Shot title="Driver assignments" subtitle="Assign drivers to routes and sync daily work." />
          <Shot title="Assigned deliveries" subtitle="Drivers see only their assigned deliveries and update status." />
          <Shot title="Customer records" subtitle="Addresses, phone numbers, route, history, and payments." />
        </div>
      </Section>

      <CTASection />
    </>
  );
}

