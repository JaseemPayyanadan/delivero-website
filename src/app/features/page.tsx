import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Last-mile delivery & route management features",
  description:
    "Delivero features: last-mile delivery tracking, route optimization, proof of delivery, driver app, and subscription order management for delivery businesses.",
  path: "/features",
});

const iconClassName = "h-5 w-5";

export default function FeaturesPage() {
  return (
    <>
      <Section
        as="h1"
        title="Last-mile delivery & route management features"
        subtitle="Owner dashboard + driver app in one connected system."
      >
        <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-relaxed text-muted md:text-base">
          Delivero connects products, customers, orders, routes, drivers, and payments so owners and drivers work from the same workflow.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Owner Dashboard"
            description="Run your business from one dashboard with quick access to products, customers, routes, drivers, and orders."
            icon={
              <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v6H4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 14h7v6H4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 14h7v6h-7z" />
              </svg>
            }
          />
          <FeatureCard
            title="Product Catalog"
            description="Add and manage products with pricing, search your catalog quickly, and keep ordering accurate."
            icon={
              <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10H7z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 12h10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v10" />
              </svg>
            }
          />
          <FeatureCard
            title="Customer Management"
            description="Store addresses, phone numbers, assigned routes, order history, and pending payment details in one place."
            icon={
              <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
              </svg>
            }
          />
          <FeatureCard
            title="Smart Orders"
            description="Create daily, one-time, and special orders with fast quantity entry, payment tracking, and clear order statuses."
            icon={
              <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h13" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h13" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 18h13" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h.01M3 12h.01M3 18h.01" />
              </svg>
            }
          />
          <FeatureCard
            title="Routes and Drivers"
            description="Create routes by area, assign drivers, and keep route-to-driver syncing clear across operations."
            icon={
              <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
            }
          />
          <FeatureCard
            title="Driver App"
            description="Drivers view assigned deliveries, open customer details, and mark orders delivered with a focused delivery screen."
            icon={
              <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6" />
              </svg>
            }
          />
          <FeatureCard
            title="Last-mile delivery tracking"
            description="Track every delivery from dispatch to doorstep. Owners see real-time order status across all active routes."
            icon={
              <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            }
          />
          <FeatureCard
            title="Route optimization & driver assignment"
            description="Build optimized routes by area, assign drivers, and keep daily runs organized without manual coordination."
            icon={
              <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 18h18" />
              </svg>
            }
          />
          <FeatureCard
            title="Proof of delivery & order status"
            description="Drivers mark orders delivered and owners see instant status updates — no calls needed to confirm completed drops."
            icon={
              <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
              </svg>
            }
          />
        </div>
      </Section>

      <CTASection
        title="Ready to get started?"
        description="Get started and see how Delivero fits your routes, drivers, and daily orders."
      />
    </>
  );
}
