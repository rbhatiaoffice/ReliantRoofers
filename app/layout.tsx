import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reliant Roofers - Professional Roofing Services Across the UK",
  description: "Trusted roofing experts providing pitched and flat roofing, repairs, loft conversions, and new construction services across the UK. Get your free quote today.",
  keywords: "roofing, roofers, pitched roofing, flat roofing, roof repairs, loft conversions, UK roofers",
  openGraph: {
    title: "Reliant Roofers - Professional Roofing Services",
    description: "Trusted roofing experts across the UK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Reliant Roofers',
    description: 'Professional roofing services across the UK',
    url: 'https://reliantroofers.co.uk',
    telephone: '+441234567890',
    email: 'info@reliantroofers.co.uk',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
      addressLocality: 'United Kingdom',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    serviceType: [
      'Pitched Roofing',
      'Flat Roofing',
      'Roof Repairs',
      'Loft Conversions',
      'New Roof Construction',
    ],
    priceRange: '$$',
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
