import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Summit Trails Nepal — Premium Himalayan Trekking",
  description:
    "Experience the majesty of Nepal with expert-guided treks to Everest Base Camp, Annapurna Circuit, and beyond. Small groups, licensed guides, unforgettable adventures.",
  openGraph: {
    title: "Summit Trails Nepal — Premium Himalayan Trekking",
    description:
      "Expert-guided treks through Nepal's most breathtaking landscapes. Small groups, licensed guides, unforgettable adventures.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Snow-capped Himalayan mountain range in Nepal",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
