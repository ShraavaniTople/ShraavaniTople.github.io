"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Code,
  Github,
  Linkedin,
  Twitter,
  Home,
  BookOpen,
  Users,
  Mail,
  Terminal,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

interface Command {
  id: string;
  label: string;
  description?: string;
  icon: React.ReactNode;
  action: () => void;
  category: string;
  keywords?: string[];
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      onClose();
    }
  };

  const commands: Command[] = [
    {
      id: "home",
      label: "Go Home",
      description: "Scroll to the top",
      icon: <Home className="w-4 h-4" />,
      action: () => { window.scrollTo({ top: 0, behavior: "smooth" }); onClose(); },
      category: "Navigate",
      keywords: ["top", "start"],
    },
    {
      id: "work",
      label: "View Projects",
      description: "See selected work",
      icon: <Code className="w-4 h-4" />,
      action: () => scrollToSection("projects"),
      category: "Navigate",
      keywords: ["projects", "work", "portfolio"],
    },
    {
      id: "research",
      label: "View Research",
      description: "GRASP-X, ROS2 and more",
      icon: <Terminal className="w-4 h-4" />,
      action: () => scrollToSection("research"),
      category: "Navigate",
      keywords: ["research", "robotics", "ml"],
    },
    {
      id: "community",
      label: "Community",
      description: "Google WTM, ETHMumbai & more",
      icon: <Users className="w-4 h-4" />,
      action: () => scrollToSection("community"),
      category: "Navigate",
      keywords: ["community", "events"],
    },
    {
      id: "blog",
      label: "Read the Blog",
      description: "Thoughts at the intersection",
      icon: <BookOpen className="w-4 h-4" />,
      action: () => scrollToSection("blog"),
      category: "Navigate",
      keywords: ["blog", "writing", "posts"],
    },
    {
      id: "contact",
      label: "Say Hello",
      description: "Get in touch",
      icon: <Mail className="w-4 h-4" />,
      action: () => {
        window.open("mailto:hello@shraavanitople.com");
        onClose();
      },
      category: "Action",
      keywords: ["contact", "email", "hello", "hi"],
    },
    {
      id: "github",
      label: "Open GitHub",
      description: "@ShraavaniTople",
      icon: <Github className="w-4 h-4" />,
      action: () => {
        window.open("https://github.com/ShraavaniTople", "_blank");
        onClose();
      },
      category: "Social",
      keywords: ["github", "code", "repos"],
    },
    {
      id: "linkedin",
      label: "Open LinkedIn",
      description: "/in/shraavani-tople",
      icon: <Linkedin className="w-4 h-4" />,
      action: () => {
        window.open("https://www.linkedin.com/in/shraavani-tople/", "_blank");
        onClose();
      },
      category: "Social",
      keywords: ["linkedin", "profile"],
    },
    {
      id: "twitter",
      label: "Open Twitter / X",
      description: "@shraavani___",
      icon: <Twitter className="w-4 h-4" />,
      action: () => {
        window.open("https://twitter.com/shraavanitople", "_blank");
        onClose();
      },
      category: "Social",
      keywords: ["twitter", "x", "tweet"],
    },
    {
      id: "grasp-x",
      label: "GRASP-X Project",
      description: "Deep RL robotics — KUKA IIWA7 arm",
      icon: <ExternalLink className="w-4 h-4" />,
      action: () => {
        window.open("https://github.com/ShraavaniTople/grasp-x", "_blank");
        onClose();
      },
      category: "Projects",
      keywords: ["grasp", "robot", "ppo", "pytorch", "pybullet"],
    },
    {
      id: "publicai",
      label: "PublicAI Pulse (Live)",
      description: "AI governance simulator — live demo",
      icon: <ExternalLink className="w-4 h-4" />,
      action: () => {
        window.open("https://shraavanitople.github.io/publicai-pulse", "_blank");
        onClose();
      },
      category: "Projects",
      keywords: ["publicai", "ai", "governance", "live"],
    },
    {
      id: "konami",
      label: "Konami Code",
      description: "↑↑↓↓←→←→BA — try it...",
      icon: <Terminal className="w-4 h-4" />,
      action: () => {
        onClose();
        // Fire konami reveal event
        window.dispatchEvent(new CustomEvent("konami-activate"));
      },
      category: "Secret",
      keywords: ["konami", "secret", "easter egg", "hidden"],
    },
  ];

  const filtered = commands.filter((cmd) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      cmd.label.toLowerCase().includes(q) ||
      cmd.description?.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q) ||
      cmd.keywords?.some((k) => k.includes(q))
    );
  });

  const categories = [...new Set(filtered.map((c) => c.category))];

  const flatFiltered = filtered;

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, flatFiltered.length - 1));
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      }

      if (e.key === "Enter") {
        e.preventDefault();
        if (flatFiltered[selectedIndex]) {
          flatFiltered[selectedIndex].action();
        }
      }
    },
    [isOpen, onClose, flatFiltered, selectedIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const categoryColors: Record<string, string> = {
    Navigate: "#00ff88",
    Action: "#f59e0b",
    Social: "#6366f1",
    Projects: "#06b6d4",
    Secret: "#a855f7",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 z-[9990] bg-black/70 backdrop-blur-sm"
          />

          {/* Palette */}
          <motion.div
            key="palette"
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[9991] w-full max-w-xl"
          >
            <div
              className="overflow-hidden rounded-xl"
              style={{
                background: "rgba(10,10,10,0.95)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow:
                  "0 0 0 1px rgba(0,255,136,0.1), 0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(0,255,136,0.05)",
              }}
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]">
                <Search className="w-4 h-4 text-[#a1a1aa] shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent text-white placeholder-[#52525b] text-sm outline-none font-mono"
                />
                <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 rounded text-[10px] font-mono text-[#52525b] bg-white/[0.05] border border-white/[0.06]">
                  ESC
                </kbd>
              </div>

              {/* Command list */}
              <div className="max-h-80 overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <div className="py-8 text-center text-[#52525b] text-sm font-mono">
                    No commands found for "{query}"
                  </div>
                ) : (
                  categories.map((category) => (
                    <div key={category}>
                      <div className="px-4 py-1.5 text-[10px] font-mono tracking-widest uppercase text-[#52525b]">
                        {category}
                      </div>
                      {filtered
                        .filter((c) => c.category === category)
                        .map((cmd) => {
                          const globalIndex = flatFiltered.indexOf(cmd);
                          const isSelected = globalIndex === selectedIndex;
                          return (
                            <motion.button
                              key={cmd.id}
                              onClick={cmd.action}
                              onMouseEnter={() => setSelectedIndex(globalIndex)}
                              className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors"
                              style={{
                                background: isSelected
                                  ? "rgba(0,255,136,0.06)"
                                  : "transparent",
                              }}
                            >
                              <span
                                style={{
                                  color: isSelected
                                    ? categoryColors[category] || "#00ff88"
                                    : "#52525b",
                                }}
                                className="shrink-0 transition-colors"
                              >
                                {cmd.icon}
                              </span>
                              <div className="flex-1 min-w-0">
                                <div
                                  className="text-sm font-medium truncate"
                                  style={{
                                    color: isSelected ? "#ffffff" : "#a1a1aa",
                                  }}
                                >
                                  {cmd.label}
                                </div>
                                {cmd.description && (
                                  <div className="text-xs text-[#52525b] truncate">
                                    {cmd.description}
                                  </div>
                                )}
                              </div>
                              {isSelected && (
                                <ChevronRight
                                  className="w-3 h-3 shrink-0"
                                  style={{ color: categoryColors[category] || "#00ff88" }}
                                />
                              )}
                            </motion.button>
                          );
                        })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 border-t border-white/[0.06] flex items-center gap-4 text-[10px] font-mono text-[#52525b]">
                <span>↑↓ navigate</span>
                <span>↵ select</span>
                <span>esc close</span>
                <span className="ml-auto text-[#00ff88]/40">SHRAAVANI.SYS</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
