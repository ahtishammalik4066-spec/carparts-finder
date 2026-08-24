import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "PartFinder PK - Find Auto Spare Parts in Pakistan",
    template: "%s | PartFinder PK",
  },
  description:
    "PartFinder PK is Pakistan's automotive spare parts marketplace. Search for genuine and aftermarket car parts, compare prices from trusted suppliers, and get the best deals.",
  keywords: [
    "car parts",
    "auto parts",
    "spare parts",
    "Pakistan",
    "Toyota parts",
    "Honda parts",
    "Suzuki parts",
    "used parts",
    "new parts",
  ],
  openGraph: {
    title: "PartFinder PK",
    description:
      "Find auto spare parts in Pakistan. Search by make, model, year, and part.",
    type: "website",
    locale: "en_PK",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}