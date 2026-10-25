import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LangToggle } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Willem Adnet — Data Scientist",
  description:
    "Portfolio of Willem Adnet — Data Scientist / Engineer at Theodo Data & AI, ENSIMAG graduate and open source contributor. Projects, experience and skills.",
  keywords: [
    "Willem Adnet",
    "Data Scientist",
    "Data Engineer",
    "Theodo",
    "Hugging Face",
    "AI/ML",
    "Portfolio",
  ],
  openGraph: {
    title: "Willem Adnet — Data Scientist",
    description:
      "Data Scientist / Engineer at Theodo Data & AI, ENSIMAG graduate and open source contributor.",
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
        <LangToggle />
        {children}
      </body>
    </html>
  );
}
