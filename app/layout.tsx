import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BankFlow AI — Banks. Automated. Intelligently. | SBI AI Hackathon GFF 2026",
  description:
    "An agentic AI platform that finds banking customers, onboards them digitally, and keeps them engaged — without a single human doing the work. SBI AI Hackathon ideathon submission.",
  keywords: ["BankFlow AI", "SBI Hackathon", "Agentic AI", "GFF 2026", "AI agents", "Banking automation"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
