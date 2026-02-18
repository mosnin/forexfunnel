import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Urban Trading | Elite Forex Mastermind & Course",
  description:
    "Join the #1 forex trading mastermind that has helped 3,000+ students escape the 9-5 and build life-changing wealth through currency markets. Limited spots available.",
  keywords: [
    "forex trading",
    "forex course",
    "trading mastermind",
    "urban trading",
    "forex education",
    "high-ticket trading program",
  ],
  openGraph: {
    title: "Urban Trading | Elite Forex Mastermind & Course",
    description:
      "The #1 forex trading mastermind for serious traders. 92.4% win rate students. Limited spots.",
    images: [
      {
        url: "https://PLACEHOLDER_OG_IMAGE.jpg",
        width: 1200,
        height: 630,
        alt: "Urban Trading Mastermind",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Trading | Elite Forex Mastermind & Course",
    description:
      "The #1 forex trading mastermind for serious traders. Limited spots available.",
    images: ["https://PLACEHOLDER_OG_IMAGE.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#080808] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
