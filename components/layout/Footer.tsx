"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-16 px-4 sm:px-6 lg:px-8 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Big name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2
            className="text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tighter leading-none"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.2) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SHRAAVANI
            <br />
            TOPLE
          </h2>
        </motion.div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: SITE_CONFIG.github, label: "GitHub" },
              { icon: Twitter, href: SITE_CONFIG.twitter, label: "Twitter" },
              { icon: Linkedin, href: SITE_CONFIG.linkedin, label: "LinkedIn" },
              { icon: Instagram, href: SITE_CONFIG.instagram, label: "Instagram" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[#52525b] hover:text-[#00ff88] transition-all hover:-translate-y-0.5"
                aria-label={label}
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Stack + copyright */}
          <div className="text-right space-y-1">
            <p className="text-xs text-[#52525b] font-mono">
              Built with Next.js · Three.js · Framer Motion
            </p>
            <p className="text-xs text-[#52525b]">
              © {year} Shraavani Tople · Made with obsession in India 🇮🇳
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
