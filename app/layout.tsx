import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/effects/CustomCursor";
import CommandPalette from "@/components/effects/CommandPalette";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Shraavani Tople — Engineer, Builder, Community Operator",
  description:
    "Robotics engineer, AI builder, and community architect working at the intersection of systems, intelligence, and human ecosystems.",
  keywords: [
    "Shraavani Tople",
    "robotics",
    "ROS2",
    "AI",
    "machine learning",
    "community",
    "engineer",
  ],
  openGraph: {
    title: "Shraavani Tople",
    description: "Robotics engineer, AI builder, community operator.",
    url: "https://shraavanitople.github.io",
    siteName: "Shraavani Tople",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shraavani Tople",
    description: "Robotics engineer, AI builder, community operator.",
    creator: "@shraavani___",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <CustomCursor />
        <CommandPalette />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
