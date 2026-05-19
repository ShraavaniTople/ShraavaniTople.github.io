"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", id: "projects" },
  { label: "Research", id: "research" },
  { label: "Community", id: "community" },
  { label: "Blog", id: "blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[100]"
      >
        <div
          className="flex items-center justify-between h-14 px-6 lg:px-10 transition-all duration-300"
          style={{
            background: scrolled ? "rgba(8,8,12,0.85)" : "transparent",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
            borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center justify-center w-7 h-7 font-mono font-bold text-xs transition-all hover:opacity-80"
            style={{
              border: "1px solid #818CF8",
              borderRadius: "4px",
              color: "#818CF8",
              background: "rgba(129,140,248,0.06)",
            }}
          >
            ST
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium transition-colors"
                style={{ color: "#71717A" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F4F4F5")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#71717A")}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            {/* ⌘K pill */}
            <button
              onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
              className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono transition-colors"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#71717A",
                background: "rgba(255,255,255,0.03)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F4F4F5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#71717A")}
            >
              ⌘K
            </button>

            {/* Available indicator */}
            <div
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#71717A",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Available
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 rounded-lg transition-colors"
              style={{ color: "#71717A" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F4F4F5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#71717A")}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[99] flex flex-col"
            style={{ background: "rgba(8,8,12,0.97)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex items-center justify-between h-14 px-6">
              <span className="text-xs font-mono tracking-widest" style={{ color: "#71717A" }}>MENU</span>
              <button onClick={() => setMobileOpen(false)} style={{ color: "#71717A" }}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-4">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => scrollTo(link.id)}
                  className="text-3xl font-bold tracking-tight transition-colors"
                  style={{ color: "#71717A" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F4F4F5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#71717A")}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
