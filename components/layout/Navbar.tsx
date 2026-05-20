"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

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
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else window.location.href = href;
  };

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(244,240,234,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "none",
        transition: "all 0.3s",
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ fontWeight: 800, fontSize: 16, color: "#111111", background: "none", border: "none", cursor: "pointer", letterSpacing: "-0.02em" }}>
            Shraavani<span style={{ color: "#C9573A" }}>.</span>
          </button>

          {/* Desktop */}
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="nav-desktop">
            {links.map(l => (
              <button key={l.label} onClick={() => go(l.href)}
                style={{ fontSize: 13, fontWeight: 500, color: "#6B6663", background: "none", border: "none", cursor: "pointer", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#111111")}
                onMouseLeave={e => (e.currentTarget.style.color = "#6B6663")}
              >{l.label}</button>
            ))}
            <span style={{ fontSize: 12, fontWeight: 600, color: "#C9573A", background: "#FBF0ED", border: "1px solid #F2D5CB", borderRadius: 99, padding: "4px 12px" }}>
              Open to work
            </span>
          </nav>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(o => !o)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "none" }}
            className="nav-mobile-btn">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            style={{ position: "fixed", top: 60, left: 0, right: 0, background: "#F4F0EA", borderBottom: "1px solid rgba(0,0,0,0.08)", zIndex: 99, padding: "16px 24px 24px" }}>
            {links.map((l, i) => (
              <motion.button key={l.label} onClick={() => go(l.href)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{ display: "block", width: "100%", textAlign: "left", padding: "14px 0", fontSize: 20, fontWeight: 700, color: "#111111", background: "none", border: "none", borderBottom: "1px solid rgba(0,0,0,0.06)", cursor: "pointer" }}
              >{l.label}</motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:640px){ .nav-desktop{display:none!important;} .nav-mobile-btn{display:block!important;} }
      `}</style>
    </>
  );
}
