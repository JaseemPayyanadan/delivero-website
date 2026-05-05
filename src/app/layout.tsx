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
    default: "Delivero – Delivery, simplified",
    template: "%s – Delivero",
  },
  description:
    "Delivery operations app for restaurant owners and drivers. Set up routes, add items, manage customers, create orders, and track deliveries.",
  applicationName: "Delivero",
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
    title: "Delivero – Delivery, simplified",
    description:
      "One app for owners and drivers—set up routes, create orders, and track deliveries in real time.",
    siteName: "Delivero",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delivero – Delivery, simplified",
    description:
      "Set up routes, create orders, and track deliveries in real time.",
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
              name: 'Delivero',
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
