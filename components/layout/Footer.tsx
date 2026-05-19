"use client";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/ShraavaniTople", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shraavani-tople/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/shraavanitople", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/shraavani___", label: "Instagram" },
  { icon: Mail, href: "mailto:shraavanitople@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} className="py-12 mt-16">
      <div className="container text-center space-y-4">
        <p className="text-xl font-semibold" style={{ color: "#FAFAF9" }}>
          Shraavani Tople
        </p>
        <div className="flex items-center justify-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "#52525B" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C084FC")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#52525B")}
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-xs mono" style={{ color: "#52525B" }}>
          © 2026 · Built with Next.js · Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  );
}
