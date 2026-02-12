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
  title: "Reliant Roofers - Expert Roofers in Croydon & Outer London | Roofing Services",
  description: "Professional roofing services in Croydon and outer London areas (up to 30 miles). Expert roofers for pitched roofing, flat roofing, roof repairs, loft conversions, and new construction. Free quotes, fully insured, 15+ years experience.",
  keywords: "roofers Croydon, roofing services outer London, roof repairs Croydon, pitched roofing outer London, flat roofing Croydon, roofers outer London, Croydon roofers, roof repairs outer London, loft conversions Croydon, emergency roof repairs outer London, professional roofers Croydon, roofing contractors outer London, roof installation Croydon, gutter repairs outer London",
  openGraph: {
    title: "Reliant Roofers - Expert Roofers in Croydon & Outer London",
    description: "Professional roofing services in Croydon and outer London (up to 30 miles). Expert roofers with 15+ years experience. Free quotes, fully insured.",
    type: "website",
    url: "https://reliantroofers.co.uk",
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
    description: 'Professional roofing services in Croydon and outer London areas (up to 30 miles radius). Expert roofers for all roofing needs.',
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
        name: 'Croydon',
      },
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
        name: 'Outer London',
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
      'Emergency Roof Repairs',
      'Gutter Repairs',
      'Roof Maintenance',
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
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
