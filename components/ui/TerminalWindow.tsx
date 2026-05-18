"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface TerminalLine {
  type: "command" | "output" | "system";
  content: string;
}

interface TerminalWindowProps {
  title?: string;
  initialLines?: TerminalLine[];
  interactive?: boolean;
  className?: string;
}

export default function TerminalWindow({
  title = "terminal",
  initialLines = [],
  interactive = false,
  className = "",
}: TerminalWindowProps) {
  const [lines, setLines] = useState<TerminalLine[]>(initialLines);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: TerminalLine[] = [
      { type: "command", content: `$ ${cmd}` },
    ];

    switch (trimmed) {
      case "help":
        newLines.push(
          { type: "output", content: "Available commands:" },
          { type: "output", content: "  whoami     — who is Shraavani?" },
          { type: "output", content: "  ls         — list projects" },
          { type: "output", content: "  projects   — view all projects" },
          { type: "output", content: "  skills     — technical skills" },
          { type: "output", content: "  contact    — get in touch" },
          { type: "output", content: "  clear      — clear terminal" },
          { type: "output", content: "  exit       — close secret mode" },
          { type: "output", content: "  konami     — you already know..." }
        );
        break;
      case "whoami":
        newLines.push(
          { type: "output", content: "Shraavani Tople" },
          { type: "output", content: "├── Robotics Engineer (KUKA IIWA7, ROS2)" },
          { type: "output", content: "├── AI Builder (PPO, PyTorch, FastAPI)" },
          { type: "output", content: "├── Community Architect (Google WTM Ambassador)" },
          { type: "output", content: "├── Hackathon Operator (ETHMumbai, Hack The League)" },
          { type: "output", content: "└── Creator (@shraavani___)" }
        );
        break;
      case "ls":
      case "projects":
        newLines.push(
          { type: "output", content: "total 12 projects" },
          { type: "output", content: "drwxr-xr-x  grasp-x/           [RL · Robotics]" },
          { type: "output", content: "drwxr-xr-x  origin-navigation/  [ROS2 · C++]" },
          { type: "output", content: "drwxr-xr-x  strikebot/         [OpenCV · RPi]" },
          { type: "output", content: "drwxr-xr-x  inferencecache/    [FastAPI · Ed25519]" },
          { type: "output", content: "drwxr-xr-x  publicai-pulse/    [JS · Governance]" },
          { type: "output", content: "drwxr-xr-x  resilienceops/     [Electron · React]" },
          { type: "output", content: "drwxr-xr-x  sakura-lanterns/   [CSS Art]" },
          { type: "output", content: "drwxr-xr-x  medseg-tumor/      [Python · DL]" },
          { type: "output", content: "drwxr-xr-x  hand-gesture/      [OpenCV · Python]" },
          { type: "output", content: "drwxr-xr-x  ipmv/              [YOLO · Notebook]" },
          { type: "output", content: "drwxr-xr-x  chroma-snake/      [Python · Game]" },
          { type: "output", content: "drwxr-xr-x  gpf-website/       [React · Vite]" }
        );
        break;
      case "skills":
        newLines.push(
          { type: "output", content: "TECHNICAL SKILLS:" },
          { type: "output", content: "Languages:   Python · TypeScript · C++ · Kotlin" },
          { type: "output", content: "ML/RL:       PyTorch · PPO · GAE · NatureCNN" },
          { type: "output", content: "Robotics:    ROS2 · PyBullet · Gazebo · OpenCV" },
          { type: "output", content: "Web:         React · Next.js · FastAPI · Electron" },
          { type: "output", content: "Crypto:      Ed25519 · Merkle Trees · Web3" },
          { type: "output", content: "Tools:       Docker · Git · Pytest · DiskCache" }
        );
        break;
      case "contact":
        newLines.push(
          { type: "output", content: "Get in touch:" },
          { type: "output", content: "GitHub:    github.com/ShraavaniTople" },
          { type: "output", content: "Twitter:   @shraavani___" },
          { type: "output", content: "LinkedIn:  linkedin.com/in/shraavani-tople" },
          { type: "output", content: "Instagram: @shraavani___" }
        );
        break;
      case "clear":
        setLines([]);
        setInput("");
        return;
      case "exit":
        newLines.push({ type: "system", content: "SYSTEM: Closing secret interface..." });
        setLines((prev) => [...prev, ...newLines]);
        setInput("");
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("secret-close"));
        }, 600);
        return;
      case "":
        setInput("");
        return;
      default:
        newLines.push({
          type: "output",
          content: `bash: ${trimmed}: command not found. Type 'help' for commands.`,
        });
    }

    setLines((prev) => [...prev, ...newLines]);
    setInput("");
  };

  return (
    <div
      className={`rounded-xl overflow-hidden font-mono text-sm ${className}`}
      style={{
        background: "rgba(0,0,0,0.9)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[#52525b] text-xs ml-2">{title}</span>
      </div>

      {/* Output */}
      <div
        className="p-4 space-y-1 max-h-80 overflow-y-auto"
        onClick={() => interactive && inputRef.current?.focus()}
      >
        {lines.map((line, i) => (
          <div key={i} className={`leading-relaxed text-xs ${
            line.type === "command"
              ? "text-[#00ff88]"
              : line.type === "system"
              ? "text-[#f59e0b]"
              : "text-[#a1a1aa]"
          }`}>
            {line.content}
          </div>
        ))}

        {/* Interactive input */}
        {interactive && (
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#00ff88]">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCommand(input);
              }}
              className="flex-1 bg-transparent text-[#a1a1aa] outline-none"
              placeholder="type a command..."
              autoComplete="off"
              spellCheck={false}
            />
            <span className="terminal-cursor" />
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
