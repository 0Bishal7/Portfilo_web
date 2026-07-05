import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Bishal Roy | Senior Software Engineer & Python Backend Developer",
  description: "Senior Software Engineer building scalable Python and FastAPI backends, AI education platforms, and real-time trading systems.",
  keywords: ["Bishal Roy", "Senior Software Engineer", "Python", "FastAPI", "Backend Engineer", "Django", "PostgreSQL", "AI Platforms", "WebSockets", "Kolkata"],
  openGraph: {
    title: "Bishal Roy | Senior Software Engineer",
    description: "Scalable backend systems, AI platforms, and real-time trading infrastructure built with Python and FastAPI.",
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
