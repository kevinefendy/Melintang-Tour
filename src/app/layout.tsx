import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaBubble from "@/components/WaBubble";
import AnnouncementBar from "@/components/AnnouncementBar";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Melintang Tour — Explore Beyond Boundaries",
    template: "%s | Melintang Tour",
  },
  description:
    "Discover destinations, curated tours, and unforgettable travel experiences with Melintang Tour.",
  metadataBase: new URL("https://melintang-tour.example.com"),
  openGraph: {
    title: "Melintang Tour — Explore Beyond Boundaries",
    description:
      "Discover destinations, curated tours, and unforgettable travel experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-mist text-navy antialiased">
        <AnnouncementBar />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <WaBubble />
      </body>
    </html>
  );
}
