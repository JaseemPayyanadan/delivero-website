import Section from "@/components/Section";

export const metadata = { title: "Screenshots" };

function Shot({ title }: { title: string }) {
  return (
    <figure className="rounded-2xl border border-black/10 bg-surface p-4 shadow-sm dark:border-white/10">
      <div className="aspect-video w-full rounded-lg bg-linear-to-b from-black/5 to-transparent" />
      <figcaption className="mt-2 text-sm text-muted">{title}</figcaption>
    </figure>
  );
}

export default function ScreenshotsPage() {
  return (
    <Section title="Screenshots" subtitle="A quick look at the app UIs.">
      <div className="grid gap-6 md:grid-cols-2">
        <Shot title="Owner Dashboard" />
        <Shot title="Delivery Dashboard" />
        <Shot title="Order Status List" />
        <Shot title="Reports & Sales Summary" />
      </div>
    </Section>
  );
}


