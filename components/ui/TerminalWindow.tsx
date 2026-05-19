"use client";
import { useState, useEffect, useRef } from "react";

export interface TerminalLine {
  type: "command" | "output" | "success" | "error";
  content: string;
}

interface TerminalWindowProps {
  title?: string;
  lines: TerminalLine[];
  animate?: boolean;
  className?: string;
}

const lineColor = (type: TerminalLine["type"]) => {
  switch (type) {
    case "command": return "#818CF8";
    case "output": return "#71717A";
    case "success": return "#4ADE80";
    case "error": return "#F87171";
  }
};

export default function TerminalWindow({
  title = "terminal",
  lines,
  animate = false,
  className = "",
}: TerminalWindowProps) {
  const [visibleCount, setVisibleCount] = useState(animate ? 0 : lines.length);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate) { setVisibleCount(lines.length); return; }
    setVisibleCount(0);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setVisibleCount(i);
      if (i >= lines.length) clearInterval(timer);
    }, 120);
    return () => clearInterval(timer);
  }, [animate, lines.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleCount]);

  return (
    <div
      className={`rounded-xl overflow-hidden font-mono text-xs ${className}`}
      style={{
        background: "rgba(8,8,12,0.95)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center px-4 py-2.5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex gap-1.5 mr-3">
          <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
          <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
          <div className="w-2 h-2 rounded-full bg-[#28C840]" />
        </div>
        <span className="text-[#3F3F46] text-[11px] flex-1 text-center">{title}</span>
      </div>

      {/* Lines */}
      <div className="p-4 space-y-1 max-h-64 overflow-y-auto">
        {lines.slice(0, visibleCount).map((line, i) => (
          <div key={i} style={{ color: lineColor(line.type), lineHeight: "1.6" }}>
            {line.content}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
