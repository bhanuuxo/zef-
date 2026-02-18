import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZARX Esports Forum | Global Esports IP Curator",
  description:
    "ZARX Esports Forum – Designing the Future Infrastructure of Global Competitive Gaming. We curate, build, and scale competitive esports IPs across titles, audiences, and continents.",
  keywords: [
    "esports",
    "competitive gaming",
    "ZARX",
    "ZEF",
    "gaming IP",
    "esports tournament",
    "NXT in Gaming",
    "NSL 2026",
    "GSL 2026",
  ],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "ZARX Esports Forum | Global Esports IP Curator",
    description:
      "Designing the Future Infrastructure of Global Competitive Gaming",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "ZARX Esports Forum" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050508] text-[#d4d4e0] font-body antialiased overflow-x-hidden">
        <div className="relative min-h-screen">{children}</div>
      </body>
    </html>
  );
}
