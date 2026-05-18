"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/effects/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Community from "@/components/sections/Community";
import Creator from "@/components/sections/Creator";
import Timeline from "@/components/sections/Timeline";
import GitHubSection from "@/components/sections/GitHubSection";
import Blog from "@/components/sections/Blog";
import Secret from "@/components/sections/Secret";
import NoiseBackground from "@/components/effects/NoiseBackground";

const CustomCursor = dynamic(() => import("@/components/effects/CustomCursor"), {
  ssr: false,
});

const CommandPalette = dynamic(() => import("@/components/effects/CommandPalette"), {
  ssr: false,
});

// Konami code sequence
const KONAMI = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a",
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [secretVisible, setSecretVisible] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const logoClickTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const konamiIndex = useRef(0);

  // Command palette keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }

      // Escape to close secret
      if (e.key === "Escape" && secretVisible) {
        setSecretVisible(false);
      }

      // Konami code
      if (e.key === KONAMI[konamiIndex.current]) {
        konamiIndex.current++;
        if (konamiIndex.current === KONAMI.length) {
          konamiIndex.current = 0;
          setSecretVisible(true);
        }
      } else {
        konamiIndex.current = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [secretVisible]);

  // Listen for konami activation from command palette
  useEffect(() => {
    const handleKonami = () => setSecretVisible(true);
    window.addEventListener("konami-activate", handleKonami);
    return () => window.removeEventListener("konami-activate", handleKonami);
  }, []);

  // Logo click easter egg (5 rapid clicks)
  const handleLogoClick = useCallback(() => {
    setLogoClickCount((prev) => {
      const next = prev + 1;
      if (next >= 5) {
        setSecretVisible(true);
        return 0;
      }
      clearTimeout(logoClickTimer.current);
      logoClickTimer.current = setTimeout(() => setLogoClickCount(0), 1500);
      return next;
    });
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {/* Loading screen */}
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Custom cursor */}
      <CustomCursor />

      {/* Noise overlay */}
      <NoiseBackground />

      {/* Command palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Secret terminal */}
      <Secret
        isVisible={secretVisible}
        onClose={() => setSecretVisible(false)}
      />

      {/* Main site */}
      <div
        className="relative"
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      >
        <Navbar
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
          logoClickCount={logoClickCount}
          onLogoClick={handleLogoClick}
        />

        <main>
          <Hero />
          <About />
          <Projects />
          <Research />
          <Community />
          <Creator />
          <Timeline />
          <GitHubSection />
          <Blog />

          {/* Contact CTA */}
          <section id="contact" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-xs font-mono tracking-widest text-[#00ff88] uppercase mb-6">
                ◆ Let's Build
              </p>
              <h2
                className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6"
              >
                Have an idea that
                <br />
                <span
                  style={{
                    WebkitTextStroke: "1px rgba(255,255,255,0.4)",
                    color: "transparent",
                  }}
                >
                  needs a builder?
                </span>
              </h2>
              <p className="text-[#a1a1aa] max-w-xl mx-auto mb-10 leading-relaxed">
                Whether it's a robotics project, AI system, community initiative, or a problem
                that doesn't have a name yet — let's talk.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/shraavani-tople/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-xl text-black font-semibold text-sm transition-all hover:scale-105"
                  style={{
                    background: "#00ff88",
                    boxShadow: "0 0 30px rgba(0,255,136,0.3)",
                  }}
                >
                  Connect on LinkedIn →
                </a>
                <a
                  href="https://github.com/ShraavaniTople"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-xl text-white font-semibold text-sm transition-all hover:bg-white/[0.06]"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  GitHub
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
