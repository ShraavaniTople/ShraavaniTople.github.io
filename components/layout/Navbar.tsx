"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Command, X, Menu } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

interface NavbarProps {
  onOpenCommandPalette: () => void;
  logoClickCount: number;
  onLogoClick: () => void;
}

export default function Navbar({
  onOpenCommandPalette,
  logoClickCount,
  onLogoClick,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [githubStars, setGithubStars] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Fetch GitHub public repos count
    fetch("https://api.github.com/users/ShraavaniTople")
      .then((r) => r.json())
      .then((data) => {
        if (data.public_repos) setGithubStars(data.public_repos);
      })
      .catch(() => setGithubStars(26));
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 lg:px-8"
      >
        <div
          className="max-w-7xl mx-auto mt-4"
          style={{
            transition: "all 0.3s ease",
          }}
        >
          <div
            className="flex items-center justify-between h-12 px-4 rounded-xl transition-all duration-300"
            style={{
              background: scrolled
                ? "rgba(0,0,0,0.8)"
                : "transparent",
              backdropFilter: scrolled ? "blur(20px)" : "none",
              WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
              border: scrolled
                ? "1px solid rgba(255,255,255,0.08)"
                : "1px solid transparent",
            }}
          >
            {/* Logo */}
            <button
              onClick={onLogoClick}
              className="group relative flex items-center gap-2 select-none"
              aria-label="ST Logo"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm relative overflow-hidden"
                style={{
                  background: "rgba(0,255,136,0.1)",
                  border: "1px solid rgba(0,255,136,0.3)",
                  color: "#00ff88",
                  transition: "all 0.2s ease",
                }}
              >
                <span className="relative z-10">ST</span>
                {logoClickCount > 0 && logoClickCount < 5 && (
                  <motion.div
                    className="absolute inset-0 bg-[#00ff88]/20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </div>
              <span className="hidden sm:block text-xs font-mono text-[#a1a1aa] tracking-widest">
                SHRAAVANI
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-1.5 text-sm text-[#a1a1aa] hover:text-white transition-colors rounded-lg hover:bg-white/[0.04] font-medium"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* GitHub repos count */}
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono text-[#a1a1aa] hover:text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Github className="w-3 h-3" />
                <span>{githubStars ?? 26} repos</span>
              </a>

              {/* Available dot */}
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono text-[#a1a1aa]"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse-slow"
                  style={{ boxShadow: "0 0 6px #00ff88" }}
                />
                <span>Available</span>
              </div>

              {/* Command palette hint */}
              <button
                onClick={onOpenCommandPalette}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono text-[#a1a1aa] hover:text-white hover:border-[#00ff88]/30 transition-all"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Command className="w-3 h-3" />
                <span className="hidden sm:inline">K</span>
              </button>

              {/* Mobile menu */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-1.5 rounded-lg text-[#a1a1aa] hover:text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[99] flex flex-col"
            style={{ background: "rgba(0,0,0,0.97)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex items-center justify-between h-20 px-6">
              <span className="text-xs font-mono text-[#a1a1aa] tracking-widest">
                SHRAAVANI TOPLE
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-[#a1a1aa] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-4xl font-bold text-[#a1a1aa] hover:text-white transition-colors py-2"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <div className="flex items-center justify-center gap-6 pb-10 text-xs font-mono text-[#52525b]">
              <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff88] transition-colors">GitHub</a>
              <a href={SITE_CONFIG.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff88] transition-colors">Twitter</a>
              <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff88] transition-colors">LinkedIn</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
