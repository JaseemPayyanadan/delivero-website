export type FaqItem = { q: string; a: string };

export const generalFaqs: FaqItem[] = [
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
];

export const pricingFaqs: FaqItem[] = [
  {
    q: "How much does delivery management software cost?",
    a: "Delivero offers a free Starter plan with no time limit, suitable for small teams. The Professional plan starts at ₹499/month for growing delivery businesses.",
  },
  {
    q: "Is there a free plan for small delivery businesses?",
    a: "Yes. The Starter plan is free forever and includes 1 driver account, up to 10 customers, 1 route, order management, and live tracking — no credit card required.",
  },
  {
    q: "How do I install the app?",
    a: "Download from the Play Store (package: delivero.com) and sign in with your account credentials.",
  },
  {
    q: "Which devices are supported?",
    a: "The app supports Android 8.0+ and works on phones and small tablets.",
  },
  {
    q: "Does it work offline?",
    a: "Core actions are cached offline and automatically sync when you're back online.",
  },
  {
    q: "What roles are available?",
    a: "There are two main roles: Owner/Manager (for managing customers, orders, and reports) and Driver (for viewing orders and updating delivery status).",
  },
  {
    q: "How is my data secured?",
    a: "All data is encrypted in transit and at rest. We use role-based access controls to ensure only authorized users can access relevant information.",
  },
  {
    q: "How do I get support?",
    a: "Email support is included with all plans. Priority support and SLA options are available on Professional and Business plans.",
  },
];

export function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
