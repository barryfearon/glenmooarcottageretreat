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

export const metadata: Metadata = {
  title: "Glenmooar Cottage | Sulby Glen, Isle of Man",
  description:
    "A beautiful traditional stone cottage nestled in the peaceful Sulby Glen, Isle of Man. Sleeps 6, dog friendly, woodburning stove. Book your escape today.",
  keywords: [
    "Isle of Man holiday cottage",
    "Sulby self-catering",
    "Glenmooar Cottage",
    "IoM accommodation",
    "cottage rental",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-stone-900">
        {children}
      </body>
    </html>
  );
}
