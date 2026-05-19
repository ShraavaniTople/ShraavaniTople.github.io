"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Github,
  Linkedin,
  Twitter,
  Home,
  BookOpen,
  Users,
  Terminal,
  Cpu,
  Gamepad2,
  Instagram,
} from "lucide-react";

interface Command {
  id: string;
  label: string;
  group: string;
  icon: React.ReactNode;
  action: () => void;
}

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = [
    {
      id: "hero",
      label: "Hero",
      group: "Navigate",
      icon: <Home className="w-4 h-4" />,
      action: () => { scrollTo("hero"); setOpen(false); },
    },
    {
      id: "about",
      label: "About",
      group: "Navigate",
      icon: <Terminal className="w-4 h-4" />,
      action: () => { scrollTo("about"); setOpen(false); },
    },
    {
      id: "projects",
      label: "Projects",
      group: "Navigate",
      icon: <Cpu className="w-4 h-4" />,
      action: () => { scrollTo("projects"); setOpen(false); },
    },
    {
      id: "research",
      label: "Research",
      group: "Navigate",
      icon: <Cpu className="w-4 h-4" />,
      action: () => { scrollTo("research"); setOpen(false); },
    },
    {
      id: "community",
      label: "Community",
      group: "Navigate",
      icon: <Users className="w-4 h-4" />,
      action: () => { scrollTo("community"); setOpen(false); },
    },
    {
      id: "github-section",
      label: "GitHub",
      group: "Navigate",
      icon: <Github className="w-4 h-4" />,
      action: () => { scrollTo("github"); setOpen(false); },
    },
    {
      id: "blog",
      label: "Blog",
      group: "Navigate",
      icon: <BookOpen className="w-4 h-4" />,
      action: () => { scrollTo("blog"); setOpen(false); },
    },
    {
      id: "gh",
      label: "GitHub",
      group: "Social",
      icon: <Github className="w-4 h-4" />,
      action: () => { window.open("https://github.com/ShraavaniTople", "_blank"); setOpen(false); },
    },
    {
      id: "li",
      label: "LinkedIn",
      group: "Social",
      icon: <Linkedin className="w-4 h-4" />,
      action: () => { window.open("https://linkedin.com/in/shraavani-tople", "_blank"); setOpen(false); },
    },
    {
      id: "tw",
      label: "Twitter",
      group: "Social",
      icon: <Twitter className="w-4 h-4" />,
      action: () => { window.open("https://twitter.com/shraavani___", "_blank"); setOpen(false); },
    },
    {
      id: "ig",
      label: "Instagram",
      group: "Social",
      icon: <Instagram className="w-4 h-4" />,
      action: () => { window.open("https://instagram.com/shraavani___", "_blank"); setOpen(false); },
    },
    {
      id: "konami",
      label: "Konami Code",
      group: "Actions",
      icon: <Gamepad2 className="w-4 h-4" />,
      action: () => {
        setOpen(false);
        window.dispatchEvent(new CustomEvent("konami-activate"));
      },
    },
  ];

  const filtered = query
    ? commands.filter((c) =>
        c.label.toLowerCase().includes(query.toLowerCase()) ||
        c.group.toLowerCase().includes(query.toLowerCase())
      )
    : commands;

  const groups = [...new Set(filtered.map((c) => c.group))];

  useEffect(() => { setSelected(0); }, [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((p) => !p);
        return;
      }
      if (!open) return;
      if (e.key === "Escape") { setOpen(false); return; }
      if (e.key === "ArrowDown") { e.preventDefault(); setSelected((i) => Math.min(i + 1, filtered.length - 1)); }
      if (e.key === "ArrowUp") { e.preventDefault(); setSelected((i) => Math.max(i - 1, 0)); }
      if (e.key === "Enter") { e.preventDefault(); filtered[selected]?.action(); }
    },
    [open, filtered, selected]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[9990] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            key="palette"
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[9991] w-full max-w-lg px-4"
          >
            <div
              className="overflow-hidden rounded-xl"
              style={{
                background: "rgba(15,15,20,0.95)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.8), 0 0 0 1px rgba(129,140,248,0.08)",
                backdropFilter: "blur(24px)",
              }}
            >
              {/* Input */}
              <div className="flex items-center gap-3 px-4 py-3.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <Search className="w-4 h-4 shrink-0" style={{ color: "#71717A" }} />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent text-sm outline-none"
                  style={{ color: "#F4F4F5", fontFamily: "monospace" }}
                />
                <kbd className="hidden sm:block px-1.5 py-0.5 rounded text-[10px] font-mono" style={{ color: "#3F3F46", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  ESC
                </kbd>
              </div>

              {/* List */}
              <div className="max-h-72 overflow-y-auto py-1.5">
                {filtered.length === 0 ? (
                  <div className="py-8 text-center text-sm font-mono" style={{ color: "#3F3F46" }}>
                    No results for &quot;{query}&quot;
                  </div>
                ) : (
                  groups.map((group) => (
                    <div key={group}>
                      <div className="px-4 py-1.5 text-[10px] font-mono tracking-widest uppercase" style={{ color: "#3F3F46" }}>
                        {group}
                      </div>
                      {filtered
                        .filter((c) => c.group === group)
                        .map((cmd) => {
                          const idx = filtered.indexOf(cmd);
                          const isSelected = idx === selected;
                          return (
                            <button
                              key={cmd.id}
                              onClick={cmd.action}
                              onMouseEnter={() => setSelected(idx)}
                              className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors"
                              style={{
                                background: isSelected ? "rgba(129,140,248,0.08)" : "transparent",
                              }}
                            >
                              <span style={{ color: isSelected ? "#818CF8" : "#71717A" }}>
                                {cmd.icon}
                              </span>
                              <span
                                className="text-sm"
                                style={{ color: isSelected ? "#F4F4F5" : "#71717A" }}
                              >
                                {cmd.label}
                              </span>
                            </button>
                          );
                        })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div
                className="flex items-center gap-4 px-4 py-2 text-[10px] font-mono"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "#3F3F46" }}
              >
                <span>↑↓ navigate</span>
                <span>↵ select</span>
                <span>esc close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
