export type SolutionFeature = { title: string; description: string };
export type SolutionFaq = { q: string; a: string };

export type Industry = {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  image: { src: string; alt: string };
  painPoints: string[];
  features: SolutionFeature[];
  useCases: string[];
  faq: SolutionFaq[];
  ctaText: string;
};

export const industries: Industry[] = [
  {
    slug: "milk-delivery",
    name: "Milk Delivery",
    title: "Milk delivery software",
    metaDescription:
      "Delivero is milk delivery software for dairies and distributors — manage daily subscriptions, routes, drivers, proof of delivery, and payments in one app.",
    h1: "Milk delivery software for daily subscriptions",
    intro:
      "Run your dairy round from one system. Delivero manages recurring milk subscriptions, morning routes, driver runs, and payment collection so every doorstep is covered without spreadsheets or phone calls.",
    image: { src: "/use-milk.png", alt: "Milk delivery software" },
    painPoints: [
      "Daily subscriptions tracked in notebooks and WhatsApp, so quantities and pauses get missed.",
      "No clear view of who paid, who owes, and how much across a growing customer list.",
      "Drivers work from memory, and owners can't tell which drops are done until the round is over.",
      "Adding or pausing a customer means reworking the whole route by hand.",
    ],
    features: [
      { title: "Daily subscription orders", description: "Set standing daily quantities per customer, with easy one-off changes, pauses, and special orders." },
      { title: "Morning route planning", description: "Group customers into routes by area and assign each route to a driver for an organized daily run." },
      { title: "Driver delivery app", description: "Drivers see their assigned stops, customer details, and quantities, and mark each delivery done." },
      { title: "Proof of delivery", description: "Owners see live delivery status across every route without calling to confirm completed drops." },
      { title: "Payment tracking", description: "Track paid and pending amounts per customer so monthly collection is accurate and transparent." },
      { title: "Customer management", description: "Keep addresses, phone numbers, routes, quantities, and order history for every household in one place." },
    ],
    useCases: [
      "Local dairies delivering to households on daily subscriptions",
      "Milk distributors managing multiple morning routes and drivers",
      "Cooperatives collecting monthly payments across large customer lists",
    ],
    faq: [
      { q: "Can Delivero handle daily recurring milk orders?", a: "Yes. Set a standing daily quantity per customer, and adjust, pause, or add one-off orders whenever you need to." },
      { q: "Can I track pending payments for each customer?", a: "Yes. Delivero records paid and pending amounts per customer so month-end collection is clear and accurate." },
      { q: "How do drivers know their route each morning?", a: "Each driver opens the app to see their assigned route, stops, customer details, and quantities for the day." },
    ],
    ctaText: "Manage milk subscriptions, routes, drivers, and payments from one connected system.",
  },
  {
    slug: "bakery-delivery",
    name: "Bakery Delivery",
    title: "Bakery delivery software",
    metaDescription:
      "Delivero is bakery delivery software — manage daily bread and bakery orders, delivery routes, drivers, proof of delivery, and payments in one simple app.",
    h1: "Bakery delivery software for daily routes",
    intro:
      "Get fresh bakery orders out the door on time. Delivero organizes daily and standing orders, plans delivery routes, and keeps drivers and payments in sync so every shop and doorstep gets the right order.",
    image: { src: "/use-bakery.png", alt: "Bakery delivery software" },
    painPoints: [
      "Standing orders for shops and cafes change often and are hard to track on paper.",
      "Early-morning routes depend on one person remembering who gets what.",
      "No quick way to confirm which deliveries are complete during the rush.",
      "Chasing payments across many small orders eats into the day.",
    ],
    features: [
      { title: "Daily & standing orders", description: "Manage recurring orders for shops, cafes, and households, with fast changes for special or one-time orders." },
      { title: "Route planning", description: "Build delivery routes by area and assign each to a driver so morning runs stay organized." },
      { title: "Driver delivery app", description: "Drivers view stops, order details, and quantities, and mark each delivery complete on the go." },
      { title: "Proof of delivery", description: "See real-time delivery status across every route so you know each order arrived on time." },
      { title: "Payment tracking", description: "Track paid and outstanding amounts per customer, from single households to regular wholesale accounts." },
      { title: "Product catalog", description: "Keep your bakery products and pricing in one catalog for fast, accurate order entry." },
    ],
    useCases: [
      "Bakeries delivering fresh bread and pastries to homes each morning",
      "Wholesale bakers supplying shops, cafes, and restaurants on standing orders",
      "Cloud bakeries fulfilling recurring and one-time delivery orders",
    ],
    faq: [
      { q: "Can Delivero manage standing wholesale bakery orders?", a: "Yes. Set recurring orders per shop or account, and adjust quantities or add one-time orders whenever needed." },
      { q: "Does it work for early-morning delivery routes?", a: "Yes. Group deliveries into routes by area and assign drivers so each morning run is planned in advance." },
      { q: "Can I track payments across many small orders?", a: "Yes. Delivero tracks paid and pending amounts per customer so collection stays accurate." },
    ],
    ctaText: "Run daily bakery orders, delivery routes, drivers, and payments in one place.",
  },
  {
    slug: "grocery-delivery",
    name: "Grocery Delivery",
    title: "Grocery delivery management software",
    metaDescription:
      "Delivero is grocery delivery management software for stores and distributors — manage orders, delivery routes, drivers, proof of delivery, and payments in one app.",
    h1: "Grocery delivery management software",
    intro:
      "Deliver grocery orders reliably without the coordination chaos. Delivero brings orders, delivery routes, drivers, and payments into one system so your store or distribution business runs smoothly every day.",
    image: { src: "/use-grocery.png", alt: "Grocery delivery management" },
    painPoints: [
      "Orders arrive by phone, WhatsApp, and walk-in with no single list to work from.",
      "Assigning deliveries to drivers by area is slow and error-prone.",
      "Owners can't see which orders are out, delivered, or still pending.",
      "Payment status for credit customers is hard to keep straight.",
    ],
    features: [
      { title: "Order management", description: "Capture daily, one-time, and special grocery orders with fast quantity entry and clear statuses." },
      { title: "Route & driver assignment", description: "Group deliveries into routes by area and assign drivers to keep runs organized." },
      { title: "Driver delivery app", description: "Drivers see assigned deliveries and customer details, and mark orders delivered." },
      { title: "Proof of delivery", description: "Track live delivery status across all active routes without calling drivers to confirm." },
      { title: "Payment tracking", description: "Record paid and pending amounts per customer, including regular credit accounts." },
      { title: "Product catalog", description: "Maintain products and pricing in one catalog so order entry stays fast and accurate." },
    ],
    useCases: [
      "Neighborhood grocery stores offering local home delivery",
      "Grocery distributors supplying shops and kirana stores",
      "Essentials and provisions businesses managing daily delivery runs",
    ],
    faq: [
      { q: "Can Delivero handle both daily and one-time grocery orders?", a: "Yes. Create recurring, one-time, and special orders with fast quantity entry and clear order statuses." },
      { q: "How are deliveries assigned to drivers?", a: "Group orders into routes by area and assign each route to a driver so daily runs are organized." },
      { q: "Can I manage credit customers and their balances?", a: "Yes. Delivero tracks paid and pending amounts per customer so outstanding balances stay clear." },
    ],
    ctaText: "Bring grocery orders, routes, drivers, and payments into one connected system.",
  },
  {
    slug: "water-delivery",
    name: "Water Delivery",
    title: "Water delivery management app",
    metaDescription:
      "Delivero is a water delivery management app for suppliers — manage can and bottle orders, delivery routes, drivers, empties, proof of delivery, and payments.",
    h1: "Water delivery management app for suppliers",
    intro:
      "Keep water cans and bottles moving without the daily guesswork. Delivero manages recurring and on-demand water orders, plans delivery routes, and tracks drivers and payments across your customer base.",
    image: { src: "/use-water.png", alt: "Water delivery management" },
    painPoints: [
      "Recurring can deliveries are tracked from memory, so customers get missed.",
      "Hard to know each day which routes to run and who's due for a refill.",
      "No clear record of outstanding payments across regular customers.",
      "Coordinating drivers and confirming completed drops takes constant phone calls.",
    ],
    features: [
      { title: "Recurring & on-demand orders", description: "Set standing refill schedules per customer and add on-demand orders whenever they call." },
      { title: "Route planning", description: "Group customers into delivery routes by area and assign each route to a driver." },
      { title: "Driver delivery app", description: "Drivers view assigned stops and customer details, and mark each delivery complete." },
      { title: "Proof of delivery", description: "See real-time delivery status across every route without calling to confirm drops." },
      { title: "Payment tracking", description: "Track paid and pending amounts per customer for accurate monthly collection." },
      { title: "Customer management", description: "Keep addresses, phone numbers, routes, and order history for every customer in one place." },
    ],
    useCases: [
      "Packaged drinking water suppliers delivering cans to homes and offices",
      "Water plants managing recurring refill schedules across routes",
      "Distributors handling on-demand and subscription water orders",
    ],
    faq: [
      { q: "Can Delivero manage recurring water can subscriptions?", a: "Yes. Set standing refill schedules per customer, and add on-demand orders whenever they're needed." },
      { q: "Can I organize deliveries by route and driver?", a: "Yes. Group customers into routes by area and assign each route to a driver for an organized run." },
      { q: "Does it track outstanding payments per customer?", a: "Yes. Delivero records paid and pending amounts so monthly collection is accurate and clear." },
    ],
    ctaText: "Manage water orders, refill routes, drivers, and payments from one app.",
  },
  {
    slug: "tiffin-delivery",
    name: "Tiffin Delivery",
    title: "Tiffin delivery management software",
    metaDescription:
      "Delivero is tiffin delivery management software — manage daily meal subscriptions, delivery routes, drivers, proof of delivery, and payments in one simple app.",
    h1: "Tiffin delivery management software",
    intro:
      "Serve every tiffin on time without the daily scramble. Delivero manages recurring meal subscriptions, plans delivery routes, and keeps drivers and payments in sync so lunches and dinners reach every customer.",
    image: { src: "/use-meal.png", alt: "Tiffin delivery management" },
    painPoints: [
      "Daily meal subscriptions, pauses, and skips are hard to track on paper.",
      "Time-bound lunch and dinner routes depend on manual coordination.",
      "No quick way to confirm which tiffins are delivered during peak hours.",
      "Collecting monthly subscription payments across many customers is tedious.",
    ],
    features: [
      { title: "Daily meal subscriptions", description: "Set standing lunch and dinner subscriptions per customer, with easy pauses, skips, and one-off orders." },
      { title: "Route planning", description: "Group customers into delivery routes by area and time so meals go out on schedule." },
      { title: "Driver delivery app", description: "Drivers see their assigned stops and customer details, and mark each tiffin delivered." },
      { title: "Proof of delivery", description: "Track real-time delivery status across every route during busy lunch and dinner windows." },
      { title: "Payment tracking", description: "Track paid and pending amounts per customer for smooth monthly subscription collection." },
      { title: "Customer management", description: "Keep addresses, phone numbers, meal plans, routes, and order history in one place." },
    ],
    useCases: [
      "Tiffin services delivering daily lunches and dinners to homes and offices",
      "Cloud kitchens managing recurring meal subscriptions",
      "Meal providers running time-bound delivery routes across the city",
    ],
    faq: [
      { q: "Can Delivero handle daily tiffin subscriptions?", a: "Yes. Set standing lunch and dinner subscriptions per customer, and pause, skip, or add one-off orders as needed." },
      { q: "Can I plan lunch and dinner routes separately?", a: "Yes. Group customers into routes by area and time so each meal window goes out on schedule." },
      { q: "How is monthly subscription payment tracked?", a: "Delivero records paid and pending amounts per customer so monthly collection stays accurate." },
    ],
    ctaText: "Run tiffin subscriptions, meal routes, drivers, and payments in one system.",
  },
  {
    slug: "meal-delivery",
    name: "Meal Delivery",
    title: "Meal delivery software",
    metaDescription:
      "Delivero is meal delivery software for kitchens and caterers — manage recurring meal orders, delivery routes, drivers, proof of delivery, and payments in one app.",
    h1: "Meal delivery software for kitchens and caterers",
    intro:
      "Deliver every meal order accurately and on time. Delivero manages recurring and one-time meal orders, plans delivery routes, and keeps drivers and payments connected so your kitchen runs without the chaos.",
    image: { src: "/use-distributor.png", alt: "Meal delivery software" },
    painPoints: [
      "Recurring meal orders and one-off changes are scattered across calls and messages.",
      "Assigning deliveries and building routes by hand slows down every service.",
      "Owners can't see which meals are out for delivery, delivered, or delayed.",
      "Tracking payments across recurring and one-time orders is messy.",
    ],
    features: [
      { title: "Recurring & one-time orders", description: "Manage standing meal orders and one-off deliveries with fast quantity entry and clear statuses." },
      { title: "Route & driver assignment", description: "Build delivery routes by area and assign drivers so each service run is organized." },
      { title: "Driver delivery app", description: "Drivers view assigned deliveries and customer details, and mark meals delivered." },
      { title: "Proof of delivery", description: "See live delivery status across every route so you know each meal arrived on time." },
      { title: "Payment tracking", description: "Track paid and pending amounts per customer across recurring and one-time orders." },
      { title: "Product catalog", description: "Keep meals and pricing in one catalog for fast, accurate order entry." },
    ],
    useCases: [
      "Cloud kitchens fulfilling recurring and one-time meal orders",
      "Caterers managing scheduled meal deliveries for offices and events",
      "Healthy-meal and diet plans delivering on daily subscriptions",
    ],
    faq: [
      { q: "Can Delivero manage recurring meal plans?", a: "Yes. Set standing meal orders per customer, and add or change one-time orders whenever needed." },
      { q: "Can I organize meal deliveries by route and driver?", a: "Yes. Build delivery routes by area and assign each to a driver so every service run is organized." },
      { q: "Does it track payments for recurring and one-time orders?", a: "Yes. Delivero records paid and pending amounts per customer across all order types." },
    ],
    ctaText: "Manage meal orders, delivery routes, drivers, and payments in one connected system.",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getIndustrySlugs(): string[] {
  return industries.map((industry) => industry.slug);
}
