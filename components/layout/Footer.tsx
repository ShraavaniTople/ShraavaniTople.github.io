"use client";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 lg:px-10"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#08080C" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-xs font-mono" style={{ color: "#71717A" }}>
          © 2026 Shraavani Tople
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/ShraavaniTople", label: "GitHub" },
            { icon: Twitter, href: "https://twitter.com/shraavani___", label: "Twitter" },
            { icon: Linkedin, href: "https://linkedin.com/in/shraavani-tople", label: "LinkedIn" },
            { icon: Instagram, href: "https://instagram.com/shraavani___", label: "Instagram" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors"
              style={{ color: "#3F3F46" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F4F4F5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#3F3F46")}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Stack */}
        <p className="text-xs font-mono" style={{ color: "#3F3F46" }}>
          Built with Next.js · Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  );
}
