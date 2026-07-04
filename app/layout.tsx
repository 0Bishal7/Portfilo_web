import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Bishal Roy — Senior Python Backend Engineer",
  description: "Python, FastAPI, AI, and real-time systems engineered for production.",
  keywords: ["Python", "FastAPI", "Backend Engineer", "Django", "AI", "WebSockets"],
  openGraph: {
    title: "Bishal Roy — Backend systems, built for production",
    description: "Senior Python Backend Engineer building scalable APIs, AI platforms, and trading infrastructure.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body>{children}</body>
    </html>
  );
}
