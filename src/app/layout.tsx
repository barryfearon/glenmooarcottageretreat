import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://glenmooarcottageretreat.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Glen Mooar Cottage | Holiday Cottage in Sulby Glen, Isle of Man",
  description:
    "Escape to Glen Mooar Cottage — a charming 18th-century stone cottage in Sulby Glen, Isle of Man. Sleeps 2. Wood burning stove, private garden, fast WiFi. Ideal for couples and nature lovers.",
  keywords: [
    "Isle of Man holiday cottage",
    "Sulby Glen self-catering",
    "Glen Mooar Cottage",
    "Isle of Man accommodation",
    "cottage rental Isle of Man",
    "Sulby cottage",
    "romantic cottage Isle of Man",
    "IoM holiday let",
    "Ramsey area cottage",
    "stone cottage Isle of Man",
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Glen Mooar Cottage",
    title: "Glen Mooar Cottage | Holiday Cottage in Sulby Glen, Isle of Man",
    description:
      "A charming 18th-century stone cottage in Sulby Glen, Isle of Man. Sleeps 2. Wood burning stove, private garden, fast WiFi. The perfect couples retreat.",
    locale: "en_GB",
    images: [
      {
        url: "/images/glenmooarcottageretreat_010.webp",
        width: 1200,
        height: 800,
        alt: "Glen Mooar Cottage exterior in Sulby Glen, Isle of Man",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glen Mooar Cottage | Holiday Cottage in Sulby Glen, Isle of Man",
    description:
      "A charming 18th-century stone cottage in Sulby Glen, Isle of Man. Sleeps 2. Wood burning stove, private garden, fast WiFi.",
    images: ["/images/glenmooarcottageretreat_010.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Glen Mooar Cottage",
  description:
    "A beautifully restored 18th-century stone cottage nestled in Sulby Glen, Isle of Man. Sleeps 2, with a wood burning stove, private garden, and fast WiFi.",
  url: siteUrl,
  image: [
    `${siteUrl}/images/glenmooarcottageretreat_010.webp`,
    `${siteUrl}/images/glenmooarcottageretreat_005.webp`,
    `${siteUrl}/images/glenmooarcottageretreat_001.webp`,
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sulby Glen, Sulby",
    addressLocality: "Sulby",
    addressRegion: "Isle of Man",
    postalCode: "IM7 2BE",
    addressCountry: "IM",
  },
  checkinTime: "16:00",
  checkoutTime: "10:00",
  occupancy: {
    "@type": "QuantitativeValue",
    minValue: 1,
    maxValue: 2,
  },
  numberOfRooms: 1,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wood Burning Stove", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Smart TV", value: true },
    { "@type": "LocationFeatureSpecification", name: "Washing Machine", value: true },
    { "@type": "LocationFeatureSpecification", name: "Private Garden", value: true },
    { "@type": "LocationFeatureSpecification", name: "Central Heating", value: true },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "squilliam100@outlook.com",
    contactType: "reservations",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-stone-900">
        {children}
      </body>
    </html>
  );
}
