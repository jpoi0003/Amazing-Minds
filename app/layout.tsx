import type { Metadata } from "next";
import {
  Poppins,
  Playfair_Display,
  Cormorant_Garamond,
} from "next/font/google";

import "./globals.css";

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

export const metadata: Metadata = {
  title: "Amazing Minds",
  description:
    "Amazing Minds is a community initiative supporting individuals with special needs through art, sports and community.",
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
      <body>{children}</body>
    </html>
  );
}