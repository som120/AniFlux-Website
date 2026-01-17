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
  title: {
    default: "AniFlux — Discover & Explore Anime Worlds",
    template: "%s | AniFlux",
  },
  description:
    "AniFlux is a modern anime discovery platform to explore shows, characters, and trending anime with an immersive UI.",
  verification: {
    google: "w37h_zy3eiifwMx1MSs2BGf5fxL0PhG67fGFOp7aozw",
  },
  openGraph: {
    title: "AniFlux — Discover & Explore Anime Worlds",
    description:
      "Explore anime shows, characters, and trends with AniFlux — a fast, modern anime discovery experience.",
    url: "https://ani-flux.vercel.app",
    siteName: "AniFlux",
    images: [
      {
        url: "/aniflux_logo.png",
        width: 1200,
        height: 630,
        alt: "AniFlux Anime Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
