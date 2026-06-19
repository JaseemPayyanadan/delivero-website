import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Delivery management software for Kerala",
  description:
    "Manage last-mile delivery, route optimization, and subscription orders in one system. Delivero connects owners and drivers across web and Android.",
  path: "/",
});

export default function Home() {
  return (
    <div>
      <Hero />

      <Section className="py-16 md:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Owner dashboard + driver app in one system",
            "Real-time route and order visibility",
            "Works on Flutter Web and Android",
            "Built for recurring and one-time deliveries",
          ].map((t) => (
            <div key={t} className="flex items-start gap-3 rounded-2xl border border-black/8 bg-surface px-5 py-5 shadow-sm">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-(--color-primary)/12 text-sm font-semibold text-(--color-primary)">
                ✓
              </span>
              <div className="text-sm font-semibold leading-snug text-(--color-secondary)">{t}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-muted">
          One connected system for orders, routes, drivers, payments, and delivery updates.
        </div>
      </Section>

      <Section
        title="Still managing deliveries through chats and spreadsheets?"
        subtitle="Manual delivery operations often lead to missed deliveries, duplicate orders, payment confusion, and poor visibility for both owners and drivers. Delivero replaces scattered tools with one connected workflow built for delivery businesses."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/8 bg-surface p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase text-muted">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-(--color-primary)/12 text-(--color-primary)">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 17h.01" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                </svg>
              </span>
              Problem
            </div>
            <div className="mt-3 text-xl font-semibold text-(--color-secondary)">Still managing deliveries through chats and spreadsheets?</div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Manual delivery operations often lead to missed deliveries, duplicate orders, payment confusion, and poor visibility for both owners and drivers. Replace spreadsheets and WhatsApp chats with a system built for daily delivery runs.
            </p>
          </div>
          <div className="rounded-3xl border border-black/8 bg-surface p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase text-muted">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-(--color-primary)/12 text-(--color-primary)">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7 10 17l-5-5" />
                </svg>
              </span>
              Solution
            </div>
            <div className="mt-3 text-xl font-semibold text-(--color-secondary)">A simpler way to run delivery operations</div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Owners manage products, customers, orders, routes, drivers, and business performance from one dashboard, while drivers only see assigned deliveries and update order status as work gets done.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="use-cases"
        title="Use cases"
        subtitle="Built for local delivery businesses that run recurring and one-time drops—without enterprise complexity."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "Bakery delivery software",
              d: "Create morning routes, assign drivers, and track delivered vs pending orders by customer. Popular with Kerala bakeries that run daily drops.",
              img: { src: "/image1.png", alt: "Bakery delivery software", position: "50% 50%" },
            },
            {
              t: "Milk delivery software",
              d: "Manage recurring quantities, subscription orders, and payment status while keeping drivers focused on assigned drops. Built for Kerala milk and dairy runs.",
              img: { src: "/image copy 2.png", alt: "Milk delivery software", position: "50% 50%" },
            },
            {
              t: "Meal delivery software",
              d: "Handle daily order creation, route grouping, and status updates so owners can monitor delivery progress in real time.",
              img: { src: "/image copy 3.png", alt: "Meal delivery software", position: "50% 50%" },
            },
            {
              t: "Water supply delivery management",
              d: "Keep large, route-based deliveries organized with clear driver assignment and customer contact access on the go.",
              img: { src: "/image copy 4.png", alt: "Water supply delivery management", position: "50% 50%" },
            },
            {
              t: "Grocery delivery management",
              d: "Track customer records, orders, and payments across routes while replacing spreadsheets and WhatsApp chats with one connected workflow.",
              img: { src: "/image copy 5.png", alt: "Grocery delivery management", position: "50% 50%" },
            },
            {
              t: "Local distributor management",
              d: "Manage multiple products, customers, and drivers with role-based access so the right people see the right data.",
              img: { src: "/image copy 6.png", alt: "Local distributor management", position: "50% 50%" },
            },
          ].map((u) => (
            <div
              key={u.t}
              className="group rounded-3xl border border-black/8 bg-surface p-6 shadow-sm transition-all duration-200 ease-out hover:border-black/12 hover:-translate-y-0.5 hover:shadow-md md:p-8"
            >
              <div className="overflow-hidden rounded-2xl border border-black/8 bg-[#f6f7ff]">
                <Image
                  src={u.img.src}
                  alt={u.img.alt}
                  width={1200}
                  height={675}
                  className="h-40 w-full object-cover sm:h-44"
                  style={{ objectPosition: u.img.position }}
                />
              </div>
              <div className="mt-5">
                <div className="text-base font-semibold text-(--color-secondary)">{u.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{u.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-muted">
          Have a different workflow?{" "}
          <Link href="/contact" className="font-semibold text-(--color-primary) hover:underline">
            Contact us
          </Link>{" "}
          and we’ll map Delivero to your routes and order types.
        </div>
      </Section>

      <Section
        id="how-it-works"
        title="How Delivero works"
      >
        <ol className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Step 1 — Set up your operations",
              desc: "Add products, customers, delivery routes, and drivers to match your business workflow.",
              icon: (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v6H4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 14h7v6H4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 14h7v6h-7z" />
                </svg>
              ),
            },
            {
              title: "Step 2 — Create and organize orders",
              desc: "Create daily, one-time, or special orders, set quantities and payment details, and manage them from one place.",
              icon: (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h13" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h13" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 18h13" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h.01M3 12h.01M3 18h.01" />
                </svg>
              ),
            },
            {
              title: "Step 3 — Deliver with clarity",
              desc: "Drivers automatically see assigned route orders, open customer details, and update delivery status as deliveries are completed.",
              icon: (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6" />
                </svg>
              ),
            },
          ].map((s, idx) => (
            <li
              key={s.title}
              className="group relative rounded-3xl border border-black/8 bg-surface p-6 shadow-sm transition-all duration-200 ease-out hover:border-black/12 hover:-translate-y-0.5 hover:shadow-md md:p-8"
            >
              <div className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-2xl bg-(--color-primary)/10 text-(--color-primary)">
                {s.icon}
              </div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-(--color-primary)/10 text-xl font-bold text-(--color-primary)">
                {idx + 1}
              </div>
              <div className="text-base font-semibold text-(--color-secondary)">{s.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="features" title="Everything needed to manage deliveries smoothly">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Owner Dashboard" description="Run your business from one dashboard with quick access to products, customers, routes, drivers, and orders." />
          <FeatureCard title="Product Catalog" description="Add and manage products with pricing, search your catalog quickly, and keep ordering accurate." />
          <FeatureCard title="Customer Management" description="Store addresses, phone numbers, assigned routes, order history, and pending payment details in one place." />
          <FeatureCard title="Smart Orders" description="Create daily, one-time, and special orders with fast quantity entry, payment tracking, and clear order statuses." />
          <FeatureCard title="Routes and Drivers" description="Create routes by area, assign drivers, and keep route-to-driver syncing clear across operations." />
          <FeatureCard title="Driver App" description="Drivers view assigned deliveries, open customer details, and mark orders delivered with a focused delivery screen." />
        </div>
      </Section>

      <Section
        id="roles"
        title="Built for both owners and drivers"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/8 bg-surface p-6 shadow-sm md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs font-semibold tracking-[0.08em] uppercase text-muted">For owners and managers</div>
              <div className="rounded-full bg-(--color-primary)/12 px-3 py-1 text-xs font-semibold text-(--color-primary)">Owner</div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Manage customers, products, orders, routes, drivers, payments, and daily performance with full access to business operations.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              <li>Quick actions for daily work</li>
              <li>Revenue and order KPIs</li>
              <li>Customer and payment visibility</li>
              <li>Order and fulfillment tracking</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-black/8 bg-surface p-6 shadow-sm md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs font-semibold tracking-[0.08em] uppercase text-muted">For delivery drivers</div>
              <div className="rounded-full bg-emerald-500/12 px-3 py-1 text-xs font-semibold text-emerald-700">Driver</div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Give drivers a simple assigned order list with customer details and the ability to update delivery status quickly.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              <li>Assigned orders only</li>
              <li>Clear route-based delivery list</li>
              <li>Customer address and phone access</li>
              <li>Limited status updates for delivery work</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="screens">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold tracking-[0.08em] uppercase text-muted">
              See Delivero in action
            </div>
            <h3 className="mt-5 text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-bold tracking-[-0.02em] text-(--color-secondary)">
              A connected workflow from setup to final delivery updates
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              From products and customers to routes, drivers, and order status, Delivero keeps every step connected across owner and driver workflows.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/screenshots" className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold btn-primary">
                View screens
              </Link>
            </div>
            <div className="mt-6 text-sm text-muted">
              Screenshots gallery coming soon. For a full walkthrough,{" "}
              <Link href="/contact" className="font-semibold text-(--color-primary) hover:underline">
                contact us
              </Link>
              .
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-xl shadow-black/5 ring-1 ring-black/5">
              <Image
                src="/hero.png"
                alt="Delivero product preview"
                width={1200}
                height={675}
                className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[420px]"
                style={{ objectPosition: "50% 50%" }}
                priority={false}
              />
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(99,91,255,0.18)_0%,transparent_55%)]" />
            </div>

            <div className="pointer-events-none absolute -left-3 top-10 hidden w-[260px] -rotate-2 lg:block">
              <div className="rounded-3xl border border-black/10 bg-white/80 p-5 shadow-sm backdrop-blur-[16px]">
                <div className="text-xs font-semibold tracking-[0.08em] uppercase text-muted">Driver</div>
                <div className="mt-2 text-sm font-semibold text-(--color-secondary)">Assigned deliveries</div>
                <div className="mt-1 text-xs text-muted">Only assigned orders and status updates.</div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-3 bottom-10 hidden w-[280px] rotate-2 lg:block">
              <div className="rounded-3xl border border-black/10 bg-white/80 p-5 shadow-sm backdrop-blur-[16px]">
                <div className="text-xs font-semibold tracking-[0.08em] uppercase text-muted">Owner</div>
                <div className="mt-2 text-sm font-semibold text-(--color-secondary)">Routes + payments</div>
                <div className="mt-1 text-xs text-muted">Track route progress and paid/unpaid status.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Dashboard overview", d: "Business snapshot and quick actions." },
            { t: "Order management", d: "Daily, one-time, and special orders." },
            { t: "Route setup", d: "Create routes by area and organize stops." },
            { t: "Driver assignments", d: "Assign drivers and sync daily work." },
          ].map((s) => (
            <Link
              key={s.t}
              href="/screenshots"
              className="group block rounded-3xl border border-black/8 bg-surface p-6 shadow-sm transition-all duration-200 ease-out hover:border-black/12 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-(--color-primary)/12 text-(--color-primary)">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v6H4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 14h7v6H4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 14h7v6h-7z" />
                </svg>
              </div>
              <div className="mt-4 text-base font-semibold text-(--color-secondary)">{s.t}</div>
              <div className="mt-2 text-sm leading-relaxed text-muted">{s.d}</div>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        id="security"
        title="Clear roles, controlled access"
        subtitle="Delivero uses role-based access so owners can manage full business data while delivery staff only see the orders and updates relevant to their assigned work. This keeps operations organized and reduces mistakes caused by unnecessary access."
      >
        <div className="rounded-3xl border border-black/8 bg-surface p-6 text-sm text-muted shadow-sm md:p-8">
          Owners have full access to manage products, customers, routes, drivers, orders, and payments. Drivers only see assigned deliveries and the status updates needed to complete their work.
        </div>
      </Section>

      <Section id="faq" title="FAQ" subtitle="Quick answers for owners and drivers.">
        <div className="grid gap-4 lg:grid-cols-2">
          {[
            {
              q: "How do drivers get orders?",
              a: "Owners assign drivers to routes, and drivers automatically see the orders connected to their assigned route.",
            },
            {
              q: "What is a Special order type?",
              a: "Special orders stay separate and do not merge into existing daily or one-time orders.",
            },
            {
              q: "Does Delivero work on web and mobile?",
              a: "Yes. Delivero is available on Flutter Web and Android.",
            },
            {
              q: "Can payments be tracked?",
              a: "Yes. Orders can be marked as paid, unpaid, or partial, and the amount paid can also be recorded.",
            },
            {
              q: "Who is Delivero built for?",
              a: "Delivero is built for delivery-based businesses such as bakeries, milk delivery services, meal providers, grocery delivery teams, water suppliers, and local distributors.",
            },
            {
              q: "What can drivers do in the app?",
              a: "Drivers can view assigned orders, open order details, access customer address and phone information, and mark deliveries as completed.",
            },
          ].map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-black/8 bg-surface p-5 shadow-sm transition-all duration-200 ease-out hover:border-black/12"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-(--color-secondary) [&::-webkit-details-marker]:hidden">
                <div className="flex items-center justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-black/5 text-(--color-secondary) transition-transform group-open:rotate-180">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-muted">
          Not seeing your question?{" "}
          <Link href="/contact" className="font-semibold text-(--color-primary) hover:underline">
            Contact us
          </Link>
          .
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
