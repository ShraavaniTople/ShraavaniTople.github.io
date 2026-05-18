"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const ASCII_LOGO = `
 ██████╗ ████████╗
██╔════╝    ██╔══╝
╚█████╗     ██║
 ╚═══██╗    ██║
██████╔╝    ██║
╚═════╝     ╚═╝
`.trim();

const BOOT_LINES = [
  "INITIALIZING KERNEL...",
  "LOADING NEURAL MODULES...",
  "MOUNTING ROS2 WORKSPACE...",
  "CONNECTING TO PYBIULLET SIM...",
  "RUNNING PREFLIGHT CHECKS...",
  "ALL SYSTEMS NOMINAL.",
  "SHRAAVANI.SYS READY.",
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [glitching, setGlitching] = useState(false);
  const [phase, setPhase] = useState<"boot" | "reveal" | "exit">("boot");

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 80);

    // Boot lines animation
    let lineIndex = 0;
    const lineInterval = setInterval(() => {
      if (lineIndex < BOOT_LINES.length) {
        setDisplayedLines((prev) => [...prev, BOOT_LINES[lineIndex]]);
        setCurrentLine(lineIndex);
        lineIndex++;
      } else {
        clearInterval(lineInterval);
        setTimeout(() => setPhase("reveal"), 300);
        setTimeout(() => {
          setGlitching(true);
          setTimeout(() => setGlitching(false), 300);
        }, 500);
        setTimeout(() => setPhase("exit"), 1000);
        setTimeout(() => onComplete(), 1400);
      }
    }, 220);

    return () => {
      clearInterval(progressInterval);
      clearInterval(lineInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Scanlines */}
          <div className="absolute inset-0 pointer-events-none scanlines opacity-20" />

          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="w-full max-w-lg px-8 space-y-8">
            {/* ASCII Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <pre
                className={`text-[#00ff88] text-xs leading-tight font-mono select-none ${
                  glitching ? "animate-glitch" : ""
                }`}
                style={{ textShadow: "0 0 10px rgba(0,255,136,0.5)" }}
              >
                {ASCII_LOGO}
              </pre>
            </motion.div>

            {/* Terminal output */}
            <div className="font-mono text-xs space-y-1 min-h-[160px]">
              {displayedLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-center gap-2 ${
                    i === displayedLines.length - 1
                      ? "text-[#00ff88]"
                      : "text-[#a1a1aa]"
                  }`}
                >
                  <span className="text-[#00ff88] opacity-60">{">"}</span>
                  <span>{line}</span>
                  {i === displayedLines.length - 1 && phase !== "reveal" && (
                    <span className="terminal-cursor" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-[#a1a1aa]">
                <span>LOADING...</span>
                <span className="text-[#00ff88]">{Math.min(Math.round(progress), 100)}%</span>
              </div>
              <div className="h-px bg-[rgba(255,255,255,0.08)] overflow-hidden">
                <motion.div
                  className="h-full"
                  style={{
                    background: "linear-gradient(90deg, #00ff88, #00d4ff)",
                    boxShadow: "0 0 10px rgba(0,255,136,0.6)",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>

            {/* System label */}
            <motion.div
              className={`text-center font-mono text-2xl tracking-[0.4em] ${
                phase === "reveal" ? "text-[#00ff88]" : "text-[rgba(255,255,255,0.2)]"
              } transition-colors duration-300`}
              animate={
                glitching
                  ? {
                      x: [0, -4, 4, -2, 2, 0],
                      opacity: [1, 0.8, 1, 0.9, 1],
                    }
                  : {}
              }
              transition={{ duration: 0.3 }}
            >
              SHRAAVANI.SYS
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
