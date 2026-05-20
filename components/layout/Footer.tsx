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
    <footer style={{ background: "#F4F0EA", borderTop: "1px solid rgba(0,0,0,0.08)", padding: "48px 0" }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <p style={{ fontWeight: 800, fontSize: 18, color: "#111111", letterSpacing: "-0.02em" }}>Shraavani Tople</p>
        <div style={{ display: "flex", gap: 18 }}>
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
              aria-label={label}
              style={{ color: "#A09C99", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C9573A")}
              onMouseLeave={e => (e.currentTarget.style.color = "#A09C99")}>
              <Icon size={17} />
            </a>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "#A09C99" }}>2026 · Built with Next.js</p>
      </div>
    </footer>
  );
}
