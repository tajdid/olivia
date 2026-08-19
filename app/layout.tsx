import type { Metadata } from "next";
import "./globals.css";
import "./hero-photo.css";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const metadata: Metadata = {
  metadataBase: new URL(productionHost ? `https://${productionHost}` : "http://localhost:3000"),
  title: "Olivia Blackett — PR & Communications",
  description: "Dubai-based PR Account Manager creating high-impact communications for luxury hospitality, lifestyle, wellness and F&B brands across the UAE.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "Olivia Blackett — PR & Communications", description: "PR that earns attention and builds lasting brand relevance.", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Olivia Blackett — PR that earns attention" }] },
  twitter: { card: "summary_large_image", title: "Olivia Blackett — PR & Communications", description: "PR that earns attention and builds lasting brand relevance.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-GB"><body>{children}</body></html>; }
