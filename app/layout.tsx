import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChurnShield — Optimize Email Sequences to Reduce Customer Churn",
  description:
    "A/B test email sequences for at-risk customers and track which messages prevent cancellations most effectively. Built for SaaS founders and customer success teams."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="f76c3477-3b79-444a-aee3-14015c381c1b"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
