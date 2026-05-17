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
  metadataBase: new URL("https://delivero.app"),
  title: {
    default: "Delivero – Delivery, simplified",
    template: "%s – Delivero",
  },
  description:
    "Manage daily deliveries, orders, routes, and drivers in one simple system. Delivero connects owners and drivers across web and mobile.",
  applicationName: "Delivero",
  keywords: [
    "delivery management",
    "delivery operations",
    "order tracking app",
    "route management",
    "delivery dashboard",
    "driver app",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://delivero.app",
    title: "Delivero – Delivery, simplified",
    description:
      "One connected system for orders, routes, drivers, payments, and delivery updates.",
    siteName: "Delivero",
    images: [
      {
        url: "/hero.png",
        alt: "Delivero dashboard preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delivero – Delivery, simplified",
    description:
      "Manage orders, routes, drivers, payments, and delivery updates in one connected system.",
    images: ["/hero.png"],
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
  const androidDownloadHref = "https://play.google.com/store/apps/details?id=delivero.com";

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
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://delivero.app/#organization",
                  name: "Delivero",
                  url: "https://delivero.app",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://delivero.app/logo.png",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://delivero.app/#website",
                  url: "https://delivero.app",
                  name: "Delivero",
                  publisher: { "@id": "https://delivero.app/#organization" },
                  inLanguage: "en",
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://delivero.app/#software",
                  name: "Delivero",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: ["Android", "Web"],
                  url: "https://delivero.app",
                  downloadUrl: androidDownloadHref,
                  publisher: { "@id": "https://delivero.app/#organization" },
                },
              ],
            }),
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
