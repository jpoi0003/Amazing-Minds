import type { Metadata } from "next";
import {
  Poppins,
  Playfair_Display,
  Cormorant_Garamond,
} from "next/font/google";

import "./globals.css";

// ✅ Import Language Provider
import { LanguageProvider } from "@/context/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-logo",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

// ✅ SEO + Google + Social Sharing Metadata
export const metadata: Metadata = {
  title: "Amazing Minds - Inclusive Community Art Programme",
  description:
    "Amazing Minds is a non-profit initiative in Malaysia supporting individuals with special needs through art, creativity, sports and community engagement.",

  keywords: [
    "special needs Malaysia",
    "OKU Malaysia",
    "inclusive education",
    "community art Malaysia",
    "art therapy",
    "non-profit Malaysia",
  ],

  openGraph: {
    title: "Amazing Minds",
    description:
      "Empowering individuals with special needs through creativity, art and community.",
    url: "https://amazingminds-website.vercel.app",
    siteName: "Amazing Minds",
    images: [
      {
        url: "/hero/hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amazing Minds",
    description:
      "Inclusive community art programme empowering special needs individuals.",
    images: ["/hero/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfair.variable} ${cormorant.variable}`}
    >
      <body>
        {/* ✅ Language Provider */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}