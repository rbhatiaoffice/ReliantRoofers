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
  title: "Reliant Roofers - Professional Roofing Services in London & Surrounding Areas",
  description: "Trusted roofing experts providing pitched and flat roofing, repairs, loft conversions, and new construction services in London and surrounding areas. Get your free quote today.",
  keywords: "roofing, roofers, pitched roofing, flat roofing, roof repairs, loft conversions, London roofers",
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
    description: 'Professional roofing services in London and surrounding areas',
    url: 'https://reliantroofers.co.uk',
        telephone: '+447552386343',
        email: 'rishi.bhatia.office@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
      addressLocality: 'London',
      addressRegion: 'Greater London',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'London',
      },
      {
        '@type': 'City',
        name: 'Greater London',
      },
      {
        '@type': 'City',
        name: 'Surrey',
      },
      {
        '@type': 'City',
        name: 'Kent',
      },
      {
        '@type': 'City',
        name: 'Essex',
      },
      {
        '@type': 'City',
        name: 'Hertfordshire',
      },
      {
        '@type': 'City',
        name: 'Buckinghamshire',
      },
      {
        '@type': 'City',
        name: 'Berkshire',
      },
    ],
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
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1L61HWTLES"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1L61HWTLES');
            `,
          }}
        />
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
