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
          background: scrolled ? "rgba(12,12,14,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ fontWeight: 700, fontSize: 17, color: "#F0EEE9", letterSpacing: "-0.02em", background: "none", border: "none", cursor: "pointer" }}
          >
            Shraavani<span style={{ color: "#FF7262" }}>.</span>
          </button>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="navbar-desktop">
            {links.map(l => (
              <button key={l.label} onClick={() => scrollTo(l.href)}
                style={{ fontSize: 14, fontWeight: 500, color: "#8A8784", background: "none", border: "none", cursor: "pointer", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#F0EEE9")}
                onMouseLeave={e => (e.currentTarget.style.color = "#8A8784")}
              >{l.label}</button>
            ))}
            <span style={{
              display: "flex", alignItems: "center", gap: 6,
              fontSize: 12, fontWeight: 600,
              color: "#FF7262",
              background: "rgba(255,114,98,0.1)",
              border: "1px solid rgba(255,114,98,0.2)",
              padding: "4px 12px", borderRadius: 99
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF7262", display: "inline-block", animation: "navpulse 2s infinite" }} />
              Open to work
            </span>
          </nav>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(o => !o)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4, flexDirection: "column", gap: 5 }}
            className="navbar-mobile-btn"
            aria-label="menu"
          >
            <div style={{ width: 22, height: 2, background: "#F0EEE9", borderRadius: 2, transition: "transform 0.2s", transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <div style={{ width: 22, height: 2, background: "#F0EEE9", borderRadius: 2, transition: "opacity 0.2s", opacity: open ? 0 : 1 }} />
            <div style={{ width: 22, height: 2, background: "#F0EEE9", borderRadius: 2, transition: "transform 0.2s", transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>
      </header>

      {/* Mobile full overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed", inset: 0, zIndex: 99,
              background: "rgba(12,12,14,0.97)",
              backdropFilter: "blur(20px)",
              display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 8,
            }}
          >
            {links.map((l, i) => (
              <motion.button
                key={l.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                onClick={() => scrollTo(l.href)}
                style={{
                  fontSize: 32, fontWeight: 700, color: "#F0EEE9",
                  background: "none", border: "none", cursor: "pointer",
                  padding: "10px 24px", transition: "color 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#FF7262")}
                onMouseLeave={e => (e.currentTarget.style.color = "#F0EEE9")}
              >{l.label}</motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:640px){
          .navbar-desktop { display: none !important; }
          .navbar-mobile-btn { display: flex !important; }
        }
        @keyframes navpulse {
          0%,100%{ opacity:1; } 50%{ opacity:0.35; }
        }
      `}</style>
    </>
  );
}
