"use client";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function PricingPage() {
  return (
    <>
    <Section title="Pricing" subtitle="Simple, transparent pricing. Free trial available.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Starter Plan */}
        <div className="rounded-2xl border border-black/10 bg-surface p-6 shadow-sm dark:border-white/10">
          <h3 className="text-lg font-bold text-center">Starter</h3>
          <p className="mt-2 text-center text-sm text-muted">Perfect for small restaurants getting started with delivery</p>
          
          <div className="mt-4 text-center">
            <div className="text-sm text-muted">Free forever</div>
            <div className="mt-1 text-3xl font-bold">$0<span className="text-lg font-normal text-muted">/month</span></div>
            <div className="mt-2 text-xs text-muted">Everything you need to manage deliveries efficiently</div>
          </div>

          <div className="mt-6">
            <Button 
              href="/contact" 
              variant="ghost" 
              className="w-full rounded-full border border-black/10 bg-white px-6 py-3 text-base hover:bg-gray-50 dark:border-white/20 dark:bg-surface"
            >
              Get Started Free
            </Button>
          </div>

          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Up to 5 driver accounts",
              "1 owner/dispatch account",
              "Customer management",
              "Order creation & management",
              "Basic route planning",
              "Live delivery tracking",
              "Proof of delivery",
              "Basic sales reports",
              "Email support",
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <svg className="h-5 w-5 shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Professional Plan - Most Popular */}
        <div className="relative rounded-2xl border-2 border-(--color-primary) bg-surface p-6 shadow-lg dark:border-(--color-primary)">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-(--color-primary) px-4 py-1 text-xs font-semibold text-white">
            Most Popular
          </div>
          
          <h3 className="mt-2 text-lg font-bold text-center text-(--color-primary)">Professional</h3>
          <p className="mt-2 text-center text-sm text-muted">For growing restaurants that need advanced features</p>
          
          <div className="mt-4 text-center">
            <div className="text-sm text-muted">Starting at</div>
            <div className="mt-1 text-3xl font-bold">$49<span className="text-lg font-normal text-muted">/month</span></div>
            <div className="mt-2 text-xs text-muted">Unlimited orders and drivers</div>
          </div>

          <div className="mt-6">
            <Button 
              href="/contact" 
              className="w-full rounded-full px-6 py-3 text-base font-medium shadow-lg hover:opacity-90"
            >
              Get Started
            </Button>
          </div>

          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Unlimited driver accounts",
              "Up to 5 dispatch/staff accounts",
              "Advanced customer management",
              "Smart route optimization",
              "Automated order dispatch",
              "Real-time order status updates",
              "Delivery progress tracking",
              "Advanced sales reports & analytics",
              "SMS notifications",
              "Priority support",
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <svg className="h-5 w-5 shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Plan */}
        <div className="rounded-2xl border border-black/10 bg-surface p-6 shadow-sm dark:border-white/10">
          <h3 className="text-lg font-bold text-center">Business</h3>
          <p className="mt-2 text-center text-sm text-muted">Enterprise features for large restaurant operations</p>
          
          <div className="mt-4 text-center">
            <div className="text-sm text-muted">Custom pricing</div>
            <div className="mt-1 text-3xl font-bold">Custom<span className="text-lg font-normal text-muted"></span></div>
            <div className="mt-2 text-xs text-muted">Tailored for your business needs</div>
          </div>

          <div className="mt-6">
            <Button 
              href="/contact" 
              variant="ghost" 
              className="w-full rounded-full border border-black/10 bg-white px-6 py-3 text-base hover:bg-gray-50 dark:border-white/20 dark:bg-surface"
            >
              Request a Demo
            </Button>
          </div>

          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Unlimited everything",
              "Unlimited dispatch/staff accounts",
              "All Professional features",
              "Custom reporting & analytics",
              "API access & integrations",
              "White-label options",
              "Advanced automation workflows",
              "Geo-fencing & zone management",
              "Dedicated account manager",
              "24/7 priority support",
              "Custom training & onboarding",
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <svg className="h-5 w-5 shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    {/* FAQ Section */}
    <Section title="Frequently Asked Questions" subtitle="Common questions about Food Distribution app.">
        <div className="grid gap-4 md:grid-cols-2">
          <details className="group rounded-xl border border-black/10 bg-surface p-5 transition-all hover:border-(--color-primary)/30 dark:border-white/10">
            <summary className="cursor-pointer text-base font-semibold text-(--color-secondary) transition-colors hover:text-(--color-primary) [&::-webkit-details-marker]:hidden">
              <div className="flex items-center justify-between">
                <span>How do I install the app?</span>
                <svg className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">Download from the Play Store (package: com.delivero.fooddistribution) and sign in with your account credentials.</p>
          </details>

          <details className="group rounded-xl border border-black/10 bg-surface p-5 transition-all hover:border-(--color-primary)/30 dark:border-white/10">
            <summary className="cursor-pointer text-base font-semibold text-(--color-secondary) transition-colors hover:text-(--color-primary) [&::-webkit-details-marker]:hidden">
              <div className="flex items-center justify-between">
                <span>Which devices are supported?</span>
                <svg className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">The app supports Android 8.0+ and works on phones and small tablets.</p>
          </details>

          <details className="group rounded-xl border border-black/10 bg-surface p-5 transition-all hover:border-(--color-primary)/30 dark:border-white/10">
            <summary className="cursor-pointer text-base font-semibold text-(--color-secondary) transition-colors hover:text-(--color-primary) [&::-webkit-details-marker]:hidden">
              <div className="flex items-center justify-between">
                <span>Does it work offline?</span>
                <svg className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">Core actions are cached offline and automatically sync when you're back online.</p>
          </details>

          <details className="group rounded-xl border border-black/10 bg-surface p-5 transition-all hover:border-(--color-primary)/30 dark:border-white/10">
            <summary className="cursor-pointer text-base font-semibold text-(--color-secondary) transition-colors hover:text-(--color-primary) [&::-webkit-details-marker]:hidden">
              <div className="flex items-center justify-between">
                <span>What roles are available?</span>
                <svg className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">There are two main roles: Owner/Manager (for managing customers, orders, and reports) and Driver (for viewing orders and updating delivery status).</p>
          </details>

          <details className="group rounded-xl border border-black/10 bg-surface p-5 transition-all hover:border-(--color-primary)/30 dark:border-white/10">
            <summary className="cursor-pointer text-base font-semibold text-(--color-secondary) transition-colors hover:text-(--color-primary) [&::-webkit-details-marker]:hidden">
              <div className="flex items-center justify-between">
                <span>How is my data secured?</span>
                <svg className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">All data is encrypted in transit and at rest. We use role-based access controls to ensure only authorized users can access relevant information.</p>
          </details>

          <details className="group rounded-xl border border-black/10 bg-surface p-5 transition-all hover:border-(--color-primary)/30 dark:border-white/10">
            <summary className="cursor-pointer text-base font-semibold text-(--color-secondary) transition-colors hover:text-(--color-primary) [&::-webkit-details-marker]:hidden">
              <div className="flex items-center justify-between">
                <span>How do I get support?</span>
                <svg className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">Email support is included with all plans. Priority support and SLA options are available on Professional and Business plans.</p>
          </details>
        </div>
        <div className="mt-8 text-center">
          <Button href="/faq" variant="ghost" className="text-base">
            View all FAQs →
          </Button>
        </div>
    </Section>
    </>
  );
}
