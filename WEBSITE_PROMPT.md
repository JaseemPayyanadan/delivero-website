### Website Creation Brief for “Food Distribution”

This document provides a ready‑to‑use prompt and detailed brief to generate a marketing website for the mobile app “Food Distribution”.

---

### Short prompt (copy‑paste)

Create a fast, responsive marketing website for the mobile app “Food Distribution” (Android package: com.delivero.fooddistribution). Audience: restaurant owners/managers and delivery teams. Tone: confident, efficient, trustworthy. Primary goal: drive app downloads and demo requests.

Branding:
- **Primary**: #FF6B00
- **Secondary**: #1A1A2E
- **Accent**: #FFD60A
- **Background**: #FDFDFD
- **Text**: #2D2D2D

Typography: modern geometric sans (e.g., Inter, system-ui), strong headings, high contrast, ample whitespace, rounded CTAs.

Pages/sections:
- **Home**: hero with headline “Deliver Faster. Manage Smarter.”, subcopy, phone mockups, CTAs “Get the App” and “Request a Demo”.
- **Features**: Owner features (Customer Management, Order Management, Route/Root Management, Reports/Sales Summary) and Delivery features (Dashboard, Order Status Updates, Route Progress).
- **How It Works**: 3 steps (Set up → Assign orders → Track & deliver).
- **Screenshots**: app UI (Owner Dashboard, Delivery Dashboard, Order Status List, Reports).
- **Pricing**: clear tiers; free trial CTA.
- **Testimonials**: 3 short quotes.
- **FAQ**: installation, device support, roles, support.
- **Contact**: lead form, email, social.
- **Footer**: quick links, legal, ©.

Functionality/tech:
- **Performance**: Lighthouse 90+, mobile-first, semantic HTML.
- **A11y**: WCAG 2.1 AA; keyboard navigable; visible focus states.
- **Meta**: OpenGraph/Twitter cards; schema.org (SoftwareApplication + Product + FAQ).
- **Assets**: optimized images (WebP/AVIF), lazy-load, preconnect/preload for critical fonts.
- **Ops**: analytics, cookie consent, sitemap.xml, robots.txt.

SEO:
- **Keywords**: restaurant delivery management, food delivery workflow, order tracking app, route planning, delivery dashboard, sales reports for restaurants.
- **On-page**: title ≤60 chars, description ≤155 chars, one H1 per page, internal linking across Features, Pricing, Contact.

CTAs:
- **Primary**: “Get the App”
- **Secondary**: “Request a Demo”

Navigation:
- Home, Features, Pricing, Screenshots, FAQ, Contact

Deliverables:
- Fully built pages with production CSS and accessible components.
- Dark mode: background #151718, text #ECEDEE; keep primary #FF6B00 and accent #FFD60A.
- Concise, benefit-led copy. Example hero copy:
  - Headline: “Deliver Faster. Manage Smarter.”
  - Subcopy: “One app for owners and delivery teams—manage customers, assign orders, plan routes, and track status in real time.”
  - CTAs: “Get the App”, “Request a Demo”

---

### Extended prompt (detailed brief)

You are designing and building a marketing website for the mobile app “Food Distribution” (Android package: com.delivero.fooddistribution). The app serves two personas:
1) Restaurant owners/managers: customer management, order creation, route/root management, reports (sales summary).
2) Delivery staff: dashboard, order status list, live progress.

Brand and UI requirements:
- **Colors**: Primary #FF6B00, Secondary #1A1A2E, Accent #FFD60A, Background #FDFDFD, Text #2D2D2D; dark mode Background #151718, Text #ECEDEE. Buttons use Primary with Secondary hover on desktop.
- **Typography**: system-ui or Inter with strong visual hierarchy; large, legible headings; comfortable line height.
- **Aesthetic**: clean, modern, trustworthy; subtle shadows on cards; rounded corners; generous spacing.

Information architecture:
- **Home**: hero, social proof, feature highlights, workflow, CTA band.
- **Features**: two columns (Owner vs Delivery) with clear benefits.
- **Screenshots/Gallery**: annotated app screens (Owner Dashboard, Delivery Dashboard, Order Status List, Reports).
- **Pricing**: simple, transparent; highlight most popular plan; include “Request a Demo” path.
- **Testimonials**: 3 quotes + names/roles.
- **FAQ**: top 6–8 questions (install, device support, offline behavior, data privacy, roles/permissions, support/SLA).
- **Contact**: lead gen form + email; map optional.
- **Footer**: nav, legal, © Food Distribution.

Copy guidelines:
- **Tone**: efficient, no fluff. Lead with outcomes (fewer missed deliveries, faster routes, clearer reporting).
- **CTA labels**: “Get the App”, “Request a Demo”.
- **Example value props**:
  - “Plan routes that cut delivery times by up to 25%.”
  - “Track orders from creation to doorstep with real-time status.”
  - “See sales at a glance with daily, weekly, and monthly summaries.”

Technical requirements:
- **Performance**: Lighthouse ≥90; optimize images (WebP/AVIF); defer non-critical scripts; preload key fonts.
- **Accessibility**: WCAG 2.1 AA; keyboard navigable; visible focus; aria labels.
- **SEO**: meta title/description, H1 per page, schema.org SoftwareApplication/Product/FAQ, OpenGraph/Twitter images, sitemap.xml, robots.txt.
- **Analytics**: privacy-friendly analytics; cookie consent if required.
- **Forms**: spam protection (honeypot + server validation), success/error states.
- **Code quality**: semantic HTML, responsive CSS, dark mode via prefers-color-scheme with accessible contrast.

Sitemap:
- / (Home)
- /features
- /screenshots
- /pricing
- /faq
- /contact

Primary assets to request or generate:
- Phone mockups featuring app screens.
- OG/Twitter share images with Primary/Secondary palette.
- Favicons and PWA icons.

Success criteria:
- Clear narrative from problem → solution → proof → CTA.
- Visually consistent with the orange (#FF6B00) and deep navy (#1A1A2E) palette.
- High conversion on “Get the App” and “Request a Demo”.

Builder note:
- If using a builder (Framer/Webflow/Editor X), generate components and styles once, reuse across pages, and ship production-ready CSS with dark mode.


