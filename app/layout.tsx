import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Shraavani Tople — Frontend Engineer & Robotics Builder",
  description: "Frontend Engineer at Agora AI. Robotics researcher, community builder, and creator from Mumbai.",
  keywords: ["Shraavani Tople", "frontend engineer", "robotics", "AI", "community", "Mumbai"],
  openGraph: {
    title: "Shraavani Tople",
    description: "Frontend Engineer at Agora AI. Robotics researcher, community builder, and creator.",
    url: "https://shraavanitople.github.io",
    siteName: "Shraavani Tople",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shraavani Tople",
    description: "Frontend Engineer at Agora AI. Robotics researcher, community builder.",
    creator: "@shraavani___",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
