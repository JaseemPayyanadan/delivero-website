import Link from "next/link";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="w-full bg-(--color-primary) py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 text-white sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Owner dashboard + driver app in one system",
              "Real-time route and order visibility",
              "Works on Flutter Web and Android",
              "Built for recurring and one-time deliveries",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3 rounded-2xl bg-white/10 px-4 py-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/15 text-xs font-bold text-white">
                  ✓
                </span>
                <div className="text-sm font-semibold leading-snug">{t}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center text-sm text-white/85">
            One connected system for orders, routes, drivers, payments, and delivery updates.
          </div>
        </div>
      </section>

      <Section
        title="Still managing deliveries through chats and spreadsheets?"
        subtitle="Manual delivery operations often lead to missed deliveries, duplicate orders, payment confusion, and poor visibility for both owners and drivers. Delivero replaces scattered tools with one connected workflow built for delivery businesses."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-(--color-accent)/25 bg-(--color-accent)/5 p-6 shadow-sm dark:border-white/10 md:p-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-(--color-secondary)">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-(--color-accent)/15 text-(--color-secondary)">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 17h.01" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                </svg>
              </span>
              Problem
            </div>
            <div className="mt-2 text-xl font-semibold">Still managing deliveries through chats and spreadsheets?</div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Manual delivery operations often lead to missed deliveries, duplicate orders, payment confusion, and poor visibility for both owners and drivers.
            </p>
          </div>
          <div className="rounded-3xl border border-(--color-primary)/25 bg-(--color-primary)/5 p-6 shadow-sm dark:border-white/10 md:p-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-(--color-secondary)">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-(--color-primary)/12 text-(--color-primary)">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7 10 17l-5-5" />
                </svg>
              </span>
              Solution
            </div>
            <div className="mt-2 text-xl font-semibold">A simpler way to run delivery operations</div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Owners manage products, customers, orders, routes, drivers, and business performance from one dashboard, while drivers only see assigned deliveries and update order status as work gets done.
            </p>
          </div>
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
              className="group relative rounded-3xl border border-black/10 bg-surface p-6 transition-all duration-300 hover:border-[--color-primary]/30 hover:shadow-lg hover:-translate-y-1 dark:border-white/10 md:p-8"
            >
              <div className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-2xl bg-black/5 text-(--color-secondary) dark:bg-white/10">
                {s.icon}
              </div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[--color-primary]/10 text-xl font-bold text-[--color-primary] transition-colors group-hover:bg-[--color-primary] group-hover:text-white">
                {idx + 1}
              </div>
              <div className="text-base font-semibold">{s.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="features"
        title="Everything needed to manage deliveries smoothly"
      >
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
          <div className="rounded-3xl border border-(--color-primary)/25 bg-(--color-primary)/5 p-6 shadow-sm dark:border-white/10 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm font-semibold text-(--color-secondary)">For owners and managers</div>
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
          <div className="rounded-3xl border border-emerald-500/25 bg-emerald-500/5 p-6 shadow-sm dark:border-white/10 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm font-semibold text-(--color-secondary)">For delivery drivers</div>
              <div className="rounded-full bg-emerald-500/12 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">Driver</div>
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

      <Section
        id="screens"
        title="See Delivero in action"
        subtitle="From business setup to final delivery updates, Delivero keeps every step connected across owner and driver workflows."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Dashboard overview", d: "Business snapshot and quick actions." },
            { t: "Order management", d: "Daily, one-time, and special orders." },
            { t: "Route setup", d: "Create routes by area and organize stops." },
            { t: "Driver assignments", d: "Assign drivers and sync daily work." },
            { t: "Assigned deliveries", d: "Drivers see only assigned deliveries." },
            { t: "Customer records", d: "Address, phone, route, history, payments." },
          ].map((s) => (
            <Link
              key={s.t}
              href="/screenshots"
              className="group block rounded-3xl border border-black/10 bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10"
            >
              <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/60 dark:border-white/10 dark:bg-[#0f1112]/40">
                <div className="absolute inset-0 bg-linear-to-br from-(--color-primary)/12 via-transparent to-(--color-accent)/12 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="aspect-16/9 w-full bg-linear-to-b from-black/5 to-transparent" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-foreground">{s.t}</div>
                  <div className="mt-1 text-xs text-muted">{s.d}</div>
                </div>
                <div className="mt-0.5 text-xs font-semibold text-(--color-primary) opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  View
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-muted">
          Want real screenshots here? Add them once and they’ll show on the{" "}
          <Link href="/screenshots" className="font-semibold text-(--color-primary) hover:underline">
            Screens
          </Link>{" "}
          page.
        </div>
      </Section>

      <Section
        id="security"
        title="Clear roles, controlled access"
        subtitle="Delivero uses role-based access so owners can manage full business data while delivery staff only see the orders and updates relevant to their assigned work. This keeps operations organized and reduces mistakes caused by unnecessary access."
      >
        <div className="rounded-3xl border border-black/10 bg-surface p-6 text-sm text-muted shadow-sm dark:border-white/10 md:p-8">
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
              className="group rounded-2xl border border-black/10 bg-white/60 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-[#0f1112]/40"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-(--color-secondary) [&::-webkit-details-marker]:hidden">
                <div className="flex items-center justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-black/5 text-(--color-secondary) transition-transform group-open:rotate-180 dark:bg-white/10">
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
            Request a demo
          </Link>
          .
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
