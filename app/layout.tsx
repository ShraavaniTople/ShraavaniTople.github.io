import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shraavani Tople — Robotics Engineer & AI Builder",
  description:
    "Engineering systems, communities, and intelligent experiences. Robotics, AI, community builder from India. GRASP-X, ROS2, Google WTM Ambassador.",
  keywords: [
    "Shraavani Tople",
    "Robotics Engineer",
    "AI Builder",
    "ROS2",
    "PyTorch",
    "PPO",
    "Google WTM",
    "ETHMumbai",
    "GRASP-X",
    "Machine Learning",
  ],
  authors: [{ name: "Shraavani Tople", url: "https://shraavanitople.com" }],
  creator: "Shraavani Tople",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shraavanitople.com",
    title: "Shraavani Tople — Robotics Engineer & AI Builder",
    description:
      "Engineering systems, communities, and intelligent experiences.",
    siteName: "Shraavani Tople",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shraavani Tople — Robotics Engineer & AI Builder",
    description: "Engineering systems, communities, and intelligent experiences.",
    creator: "@shraavanitople",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
