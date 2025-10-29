import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fooddistribution.app"),
  title: {
    default: "Food Distribution – Deliver Faster. Manage Smarter.",
    template: "%s – Food Distribution",
  },
  description:
    "Restaurant delivery management app for owners and delivery teams. Plan routes, track orders, and view sales summaries.",
  applicationName: "Food Distribution",
  keywords: [
    "restaurant delivery management",
    "food delivery workflow",
    "order tracking app",
    "route planning",
    "delivery dashboard",
    "sales reports for restaurants",
  ],
  openGraph: {
    type: "website",
    url: "https://fooddistribution.app",
    title: "Food Distribution – Deliver Faster. Manage Smarter.",
    description:
      "One app for owners and delivery teams—manage customers, assign orders, plan routes, and track status in real time.",
    siteName: "Food Distribution",
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Distribution – Deliver Faster. Manage Smarter.",
    description:
      "Manage customers, assign orders, plan routes, and track status in real time.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {/* Anchor for app download CTA */}
        <div id="get-app" className="sr-only" />
        <main>{children}</main>
        {/* JSON-LD schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Food Distribution',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Android',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
              aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '26' },
            }),
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
