"use client";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/ShraavaniTople" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shraavani-tople/" },
  { icon: Twitter, href: "https://twitter.com/shraavanitople" },
  { icon: Instagram, href: "https://instagram.com/shraavani___" },
  { icon: Mail, href: "mailto:shraavanitople@gmail.com" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "48px 0", background: "#0C0C0E" }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <p style={{ fontWeight: 700, fontSize: 18, color: "#F0EEE9" }}>Shraavani Tople</p>
        <div style={{ display: "flex", gap: 20 }}>
          {socials.map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer"
              style={{ color: "#4A4947", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FF7262")}
              onMouseLeave={e => (e.currentTarget.style.color = "#4A4947")}
            ><Icon size={17} /></a>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "#4A4947" }}>© 2026 · Built with Next.js</p>
      </div>
    </footer>
  );
}
