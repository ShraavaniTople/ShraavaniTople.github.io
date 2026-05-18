"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SecretProps {
  isVisible: boolean;
  onClose: () => void;
}

interface TerminalLine {
  type: "system" | "command" | "output" | "error";
  content: string;
}

const CLASSIFIED_BOOT = [
  { type: "system" as const, content: "> SYSTEM ACCESS GRANTED" },
  { type: "system" as const, content: "> Welcome to SHRAAVANI.EXE" },
  { type: "system" as const, content: "> Loading experimental interface..." },
  { type: "output" as const, content: "" },
  { type: "output" as const, content: "CLASSIFIED PROJECTS:" },
  { type: "output" as const, content: "[ sakura-lanterns ]           — css art project" },
  { type: "output" as const, content: "[ minieval ]                  — evaluation framework" },
  { type: "output" as const, content: "[ wow-drobe ]                 — fashion recommendation (Kotlin)" },
  { type: "output" as const, content: "[ chroma-snake ]              — colorful snake game" },
  { type: "output" as const, content: "[ advanced-algorithms-roadmap ] — DS&A roadmap" },
  { type: "output" as const, content: "" },
  { type: "system" as const, content: "TYPE 'help' FOR COMMANDS" },
  { type: "command" as const, content: "> _" },
];

function handleCommand(cmd: string): TerminalLine[] {
  const trimmed = cmd.trim().toLowerCase();
  const echo: TerminalLine[] = [{ type: "command", content: `> ${cmd}` }];

  switch (trimmed) {
    case "help":
      return [
        ...echo,
        { type: "output", content: "" },
        { type: "output", content: "AVAILABLE COMMANDS:" },
        { type: "output", content: "  whoami      — system identification" },
        { type: "output", content: "  ls          — list classified projects" },
        { type: "output", content: "  projects    — alias for ls" },
        { type: "output", content: "  skills      — technical capability matrix" },
        { type: "output", content: "  contact     — communication channels" },
        { type: "output", content: "  hack        — you won't regret this" },
        { type: "output", content: "  matrix      — see the matrix" },
        { type: "output", content: "  clear       — wipe terminal" },
        { type: "output", content: "  exit        — return to normal reality" },
        { type: "output", content: "" },
      ];
    case "whoami":
      return [
        ...echo,
        { type: "output", content: "" },
        { type: "system", content: "IDENTITY MATRIX:" },
        { type: "output", content: "  NAME:        Shraavani Tople" },
        { type: "output", content: "  CLASS:       Multidisciplinary Builder" },
        { type: "output", content: "  CLEARANCE:   LEVEL 5 (ROBOTICS + AI + COMMUNITY)" },
        { type: "output", content: "  ORIGIN:      India 🇮🇳" },
        { type: "output", content: "  STATUS:      ACTIVELY BUILDING" },
        { type: "output", content: "  THREAT LEVEL: ████████ EXTREMELY CREATIVE" },
        { type: "output", content: "" },
      ];
    case "ls":
    case "projects":
      return [
        ...echo,
        { type: "output", content: "" },
        { type: "output", content: "CLASSIFIED PROJECT MANIFEST:" },
        { type: "output", content: "drwxr-x--- sakura-lanterns/         [CSS Art · Interactive]" },
        { type: "output", content: "drwxr-x--- minieval/                [Python · Evaluation]" },
        { type: "output", content: "drwxr-x--- wow-drobe/               [Kotlin · Fashion AI]" },
        { type: "output", content: "drwxr-x--- chroma-snake/            [Python · Game]" },
        { type: "output", content: "drwxr-x--- advanced-alg-roadmap/    [DSA · Education]" },
        { type: "output", content: "drwxr-x--- origin-navigation/       [ROS2 · C++]" },
        { type: "output", content: "drwxr-x--- gpf-website/             [React · Conference]" },
        { type: "output", content: "" },
        { type: "system", content: "Total: 26 repos (7 classified shown)" },
        { type: "output", content: "" },
      ];
    case "skills":
      return [
        ...echo,
        { type: "output", content: "" },
        { type: "system", content: "TECHNICAL CAPABILITY MATRIX:" },
        { type: "output", content: "  DEEP RL:          ████████████ 100% (PPO, GAE, NatureCNN)" },
        { type: "output", content: "  ROBOTICS:         ███████████  95% (ROS2, PyBullet, KUKA)" },
        { type: "output", content: "  COMPUTER VISION:  ██████████   90% (OpenCV, YOLO, CNN)" },
        { type: "output", content: "  WEB ENGINEERING:  █████████    85% (React, Next.js, TS)" },
        { type: "output", content: "  CRYPTOGRAPHY:     ████████     80% (Ed25519, Merkle, SHA)" },
        { type: "output", content: "  COMMUNITY OPS:    ████████████ 100% (WTM, ETH, GDG)" },
        { type: "output", content: "  STORYTELLING:     ████████████ 100% (Creator mode: ON)" },
        { type: "output", content: "" },
      ];
    case "contact":
      return [
        ...echo,
        { type: "output", content: "" },
        { type: "system", content: "SECURE COMMUNICATION CHANNELS:" },
        { type: "output", content: "  github.com/ShraavaniTople" },
        { type: "output", content: "  twitter.com/shraavanitople" },
        { type: "output", content: "  linkedin.com/in/shraavani-tople" },
        { type: "output", content: "  instagram.com/shraavani___" },
        { type: "output", content: "" },
        { type: "system", content: "WARNING: She will probably respond with a robotics pun." },
        { type: "output", content: "" },
      ];
    case "hack":
      return [
        ...echo,
        { type: "output", content: "" },
        { type: "system", content: "INITIATING HACK SEQUENCE..." },
        { type: "output", content: "Accessing mainframe: ████████████████████ DONE" },
        { type: "output", content: "Bypassing firewall:  ████████████████████ DONE" },
        { type: "output", content: "Downloading data:    ████████████████████ DONE" },
        { type: "output", content: "" },
        { type: "output", content: "DATA EXTRACTED:" },
        { type: "output", content: '  favorite_lang = "Python (obviously)"' },
        { type: "output", content: '  robots_trained = 1  # so far...' },
        { type: "output", content: '  hackathons_organized = "too many to count"' },
        { type: "output", content: '  is_available_for_collab = True' },
        { type: "output", content: "" },
      ];
    case "matrix":
      return [
        ...echo,
        { type: "output", content: "" },
        { type: "output", content: "01010011 01101000 01110010 01100001 01100001" },
        { type: "output", content: "01110110 01100001 01101110 01101001 00100000" },
        { type: "output", content: "01010100 01101111 01110000 01101100 01100101" },
        { type: "output", content: "" },
        { type: "system", content: "Translation: 'Shraavani Tople'" },
        { type: "output", content: "(You chose the right path.)" },
        { type: "output", content: "" },
      ];
    case "clear":
      return []; // Special case handled separately
    case "exit":
      return [
        ...echo,
        { type: "system", content: "" },
        { type: "system", content: "> CLOSING SECURE CHANNEL..." },
        { type: "system", content: "> RETURNING TO NORMAL REALITY..." },
        { type: "output", content: "" },
      ];
    case "":
      return [];
    default:
      return [
        ...echo,
        { type: "error", content: `bash: ${trimmed}: command not found. Type 'help' for commands.` },
      ];
  }
}

export default function Secret({ isVisible, onClose }: SecretProps) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && !booted) {
      setLines([]);
      let i = 0;
      const interval = setInterval(() => {
        if (i < CLASSIFIED_BOOT.length) {
          setLines((prev) => [...prev, CLASSIFIED_BOOT[i]]);
          i++;
        } else {
          clearInterval(interval);
          setBooted(true);
          setTimeout(() => inputRef.current?.focus(), 100);
        }
      }, 120);
      return () => clearInterval(interval);
    }
    if (!isVisible) {
      setBooted(false);
    }
  }, [isVisible, booted]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  useEffect(() => {
    const handleClose = () => onClose();
    window.addEventListener("secret-close", handleClose);
    return () => window.removeEventListener("secret-close", handleClose);
  }, [onClose]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const cmd = input.trim();
      if (cmd.toLowerCase() === "clear") {
        setLines([]);
        setInput("");
        return;
      }
      if (cmd.toLowerCase() === "exit") {
        const result = handleCommand(cmd);
        setLines((prev) => [...prev, ...result]);
        setInput("");
        setTimeout(() => onClose(), 700);
        return;
      }
      const result = handleCommand(input);
      setLines((prev) => [...prev, ...result]);
      setInput("");
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="secret"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9998] flex flex-col"
          style={{ background: "#000000" }}
        >
          {/* Scanlines */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,136,0.01) 2px, rgba(0,255,136,0.01) 4px)",
            }}
          />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Header bar */}
          <div
            className="relative z-10 flex items-center justify-between px-6 py-4"
            style={{ borderBottom: "1px solid rgba(0,255,136,0.1)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full animate-pulse-slow"
                style={{ background: "#00ff88", boxShadow: "0 0 8px #00ff88" }}
              />
              <span className="text-xs font-mono text-[#00ff88] tracking-widest uppercase">
                SHRAAVANI.EXE — SECURE TERMINAL
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded text-[#52525b] hover:text-[#00ff88] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal */}
          <div
            className="relative z-10 flex-1 overflow-y-auto p-6 font-mono text-xs"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="max-w-3xl mx-auto space-y-0.5">
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={`leading-relaxed ${
                    line.type === "system"
                      ? "text-[#00ff88]"
                      : line.type === "command"
                      ? "text-[#06b6d4]"
                      : line.type === "error"
                      ? "text-[#ef4444]"
                      : "text-[#a1a1aa]"
                  }`}
                  style={{
                    textShadow:
                      line.type === "system" ? "0 0 10px rgba(0,255,136,0.3)" : "none",
                  }}
                >
                  {line.content || "\u00A0"}
                </div>
              ))}

              {/* Input */}
              {booted && (
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[#00ff88]">{">"}</span>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent text-[#a1a1aa] outline-none caret-[#00ff88]"
                    placeholder="enter command..."
                    autoComplete="off"
                    spellCheck={false}
                    autoFocus
                  />
                  <span className="terminal-cursor" />
                </div>
              )}

              <div ref={bottomRef} />
            </div>
          </div>

          {/* Footer */}
          <div
            className="relative z-10 px-6 py-3 flex items-center justify-between"
            style={{ borderTop: "1px solid rgba(0,255,136,0.1)" }}
          >
            <span className="text-[10px] font-mono text-[#52525b]">
              press ESC or type 'exit' to close
            </span>
            <span className="text-[10px] font-mono text-[#00ff88]/30">
              SHRAAVANI.EXE v2.0.26
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
