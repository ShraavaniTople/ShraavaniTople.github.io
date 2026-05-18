"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = "",
  glowColor,
  hover = true,
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: glowColor
                ? `0 20px 40px ${glowColor}33, 0 0 0 1px ${glowColor}22`
                : "0 20px 40px rgba(0,0,0,0.4)",
            }
          : undefined
      }
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative rounded-xl overflow-hidden transition-all duration-300",
        onClick && "cursor-pointer",
        className
      )}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Top gradient line */}
      {glowColor && (
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${glowColor}60, transparent)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
