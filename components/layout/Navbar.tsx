"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Community", id: "community" },
  { label: "Contact", id: "contact" },
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
    if (id === "contact") {
      window.location.href = "mailto:shraavanitople@gmail.com";
      setMobileOpen(false);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        }}
      >
        <div className="flex items-center justify-between h-14 px-6 lg:px-10 max-w-[1200px] mx-auto">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm font-semibold tracking-tight transition-opacity hover:opacity-80"
            style={{ color: "#FAFAF9" }}
          >
            Shraavani.
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm transition-colors"
                style={{ color: "#A1A1AA" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FAFAF9")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#A1A1AA")}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right — open to work pill + mobile toggle */}
          <div className="flex items-center gap-3">
            <div
              className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono"
              style={{
                border: "1px solid rgba(192,132,252,0.25)",
                color: "#C084FC",
                background: "rgba(192,132,252,0.08)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#C084FC]"
                style={{
                  animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
                }}
              />
              Open to work
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5"
              style={{ color: "#A1A1AA" }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[99] flex flex-col"
          style={{ background: "rgba(10,10,10,0.97)", backdropFilter: "blur(20px)" }}
        >
          <div className="flex items-center justify-between h-14 px-6">
            <span className="text-xs font-mono tracking-widest" style={{ color: "#52525B" }}>
              MENU
            </span>
            <button onClick={() => setMobileOpen(false)} style={{ color: "#A1A1AA" }}>
              <X size={18} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-2xl font-bold tracking-tight transition-colors"
                style={{ color: "#A1A1AA" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FAFAF9")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#A1A1AA")}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </>
  );
}
