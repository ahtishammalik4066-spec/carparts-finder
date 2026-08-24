import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "PartFinder PK Dashboard",
    template: "%s | PartFinder PK Dashboard",
  },
  description: "Supplier and admin dashboard for PartFinder PK.",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}