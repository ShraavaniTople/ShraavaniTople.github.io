import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Shraavani Tople",
  description: "Builder, researcher, community person. Software developer at Agora AI.",
  twitter: { card: "summary_large_image", creator: "@shraavani___" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
