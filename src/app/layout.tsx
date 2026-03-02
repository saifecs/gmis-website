import type { Metadata } from "next";
import { Montserrat, Inter, Cairo, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LangDir } from "@/components/LangDir";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  weight: ["400", "500", "600"],
  subsets: ["arabic"],
  variable: "--font-ibm-plex-ar",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "GREENMARK Integrated Services | Landscaping & Concrete Company in Saudi Arabia",
    template: "%s | GREENMARK Integrated Services",
  },
  description:
    "Integrated landscaping, concrete, and irrigation solutions aligned with Saudi Vision 2030. Proven Canadian expertise with local Saudi execution.",
  keywords: [
    "Landscaping Company Saudi Arabia",
    "Concrete Contractor Riyadh",
    "Irrigation Systems KSA",
    "Outdoor Construction GCC",
    "Vision 2030 Landscaping",
  ],
  openGraph: {
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${cairo.variable} ${ibmPlexArabic.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body min-h-screen flex flex-col">
        <LangDir />
        {children}
      </body>
    </html>
  );
}
