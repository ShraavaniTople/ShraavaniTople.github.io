"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/ShraavaniTople", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shraavani-tople/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:shraavanitople@gmail.com", label: "Email" },
];

export default function Connect() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="connect" ref={ref} style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "100px 0 72px" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 24 }}
        >
          <span className="section-num">06</span>
          <h2 style={{
            fontFamily: "var(--font-display, sans-serif)",
            fontSize: "clamp(40px,7vw,88px)", fontWeight: 700,
            letterSpacing: "-0.04em", color: "#F0EEFF",
            lineHeight: 0.95,
          }}>
            Let&apos;s build<br />
            <em style={{ fontStyle: "italic", color: "#818CF8" }}>something.</em>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ fontSize: 16, color: "#888899", marginBottom: 40, maxWidth: 480, lineHeight: 1.75, fontFamily: "var(--font-body, sans-serif)" }}
        >
          Whether it is a robotics research collaboration, an embedded systems project, or a developer-relations conversation — I am interested in both. Reach out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 52 }}
        >
          <a href="mailto:shraavanitople@gmail.com"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#818CF8", color: "#080808",
              borderRadius: 6, padding: "14px 26px",
              fontSize: 14, fontWeight: 700,
              textDecoration: "none", transition: "opacity 0.15s",
              fontFamily: "var(--font-body, sans-serif)",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            shraavanitople@gmail.com <ArrowRight size={14} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{ display: "flex", gap: 24, marginBottom: 56 }}
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              style={{ color: "#444455", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#818CF8")}
              onMouseLeave={e => (e.currentTarget.style.color = "#444455")}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "#1e1e2a" }}
        >
          Shraavani Tople · 2026
        </motion.p>
      </div>
    </section>
  );
}
