import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Willem Adnet — Developer & HackerRank Ambassador",
  description:
    "Portfolio of Willem Adnet — Software Developer, AI/ML Enthusiast & HackerRank Ambassador. Discover my projects, skills, and community impact.",
  keywords: [
    "Willem Adnet",
    "Developer",
    "HackerRank Ambassador",
    "Hugging Face",
    "AI/ML",
    "Portfolio",
  ],
  openGraph: {
    title: "Willem Adnet — Developer & HackerRank Ambassador",
    description:
      "Software Developer, AI/ML Enthusiast & HackerRank Ambassador.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
