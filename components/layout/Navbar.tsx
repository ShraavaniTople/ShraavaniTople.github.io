"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "mailto:shraavanitople@gmail.com" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          transition: "all 0.3s",
          background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ fontWeight: 700, fontSize: 18, color: "#111110", letterSpacing: "-0.02em", background: "none", border: "none", cursor: "pointer" }}
          >
            Shraavani<span style={{ color: "#7C3AED" }}>.</span>
          </button>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden-mobile">
            {links.map(l => (
              <button key={l.label} onClick={() => scrollTo(l.href)}
                style={{ fontSize: 14, fontWeight: 500, color: "#6B7280", background: "none", border: "none", cursor: "pointer", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#111110")}
                onMouseLeave={e => (e.currentTarget.style.color = "#6B7280")}
              >{l.label}</button>
            ))}
            {/* Available badge */}
            <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500, color: "#7C3AED", background: "#EDE9FE", padding: "4px 12px", borderRadius: 99 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7C3AED", display: "inline-block", animation: "pulse 2s infinite" }} />
              Open to work
            </span>
          </nav>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(o => !o)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4 }}
            className="show-mobile"
            aria-label="menu"
          >
            <div style={{ width: 22, height: 2, background: "#111", marginBottom: 5, borderRadius: 2 }} />
            <div style={{ width: 22, height: 2, background: "#111", marginBottom: 5, borderRadius: 2 }} />
            <div style={{ width: 22, height: 2, background: "#111", borderRadius: 2 }} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{ position: "fixed", top: 64, left: 0, right: 0, background: "white", borderBottom: "1px solid rgba(0,0,0,0.08)", zIndex: 99, padding: "24px" }}
          >
            {links.map(l => (
              <button key={l.label} onClick={() => scrollTo(l.href)}
                style={{ display: "block", width: "100%", textAlign: "left", padding: "12px 0", fontSize: 18, fontWeight: 600, color: "#111", background: "none", border: "none", cursor: "pointer", borderBottom: "1px solid rgba(0,0,0,0.05)" }}
              >{l.label}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:640px){
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @keyframes pulse {
          0%,100%{ opacity:1; } 50%{ opacity:0.4; }
        }
      `}</style>
    </>
  );
}
