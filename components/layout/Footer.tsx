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
    <footer style={{ borderTop: "1px solid rgba(0,0,0,0.08)", background: "#F8F7F5", padding: "48px 0" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <p style={{ fontWeight: 700, fontSize: 20, marginBottom: 20, color: "#111110" }}>
          Shraavani Tople
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 20 }}>
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
               aria-label={label}
               style={{ color: "#9CA3AF", transition: "color 0.15s" }}
               onMouseEnter={e => (e.currentTarget.style.color = "#7C3AED")}
               onMouseLeave={e => (e.currentTarget.style.color = "#9CA3AF")}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "#9CA3AF" }}>© 2026 · Built with Next.js · Deployed on GitHub Pages</p>
      </div>
    </footer>
  );
}
