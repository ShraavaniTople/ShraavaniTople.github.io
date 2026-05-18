"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "hover" | "image" | "text" | "link";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);

  // Spring physics for the ring
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as Element;

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setCursorState("hover");
      } else if (
        target.tagName === "IMG" ||
        target.closest("[data-cursor='image']")
      ) {
        setCursorState("image");
      } else if (
        target.tagName === "P" ||
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.tagName === "H4" ||
        target.tagName === "SPAN" ||
        target.tagName === "LI" ||
        (target as HTMLElement).style?.cursor === "text"
      ) {
        setCursorState("text");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", handleElementHover);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", handleElementHover);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  const getDotSize = () => {
    switch (cursorState) {
      case "hover": return 6;
      case "image": return 4;
      case "text": return 2;
      default: return 6;
    }
  };

  const getRingSize = () => {
    switch (cursorState) {
      case "hover": return 48;
      case "image": return 56;
      case "text": return 32;
      default: return 32;
    }
  };

  const getRingBorder = () => {
    switch (cursorState) {
      case "hover": return "2px solid #00ff88";
      case "image": return "1px solid rgba(255,255,255,0.5)";
      case "text": return "1px solid rgba(255,255,255,0.3)";
      default: return "1px solid rgba(255,255,255,0.5)";
    }
  };

  const getRingBackground = () => {
    switch (cursorState) {
      case "hover": return "rgba(0,255,136,0.1)";
      default: return "transparent";
    }
  };

  const dotSize = getDotSize();
  const ringSize = getRingSize();

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed pointer-events-none z-[99999] rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          width: dotSize,
          height: dotSize,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: cursorState === "hover" ? "#00ff88" : "#ffffff",
          boxShadow: cursorState === "hover" ? "0 0 8px rgba(0,255,136,0.8)" : "none",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: cursorState === "hover" ? 1.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Ring */}
      <motion.div
        className="fixed pointer-events-none z-[99998] rounded-full flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          translateX: "-50%",
          translateY: "-50%",
          border: getRingBorder(),
          background: getRingBackground(),
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          width: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
          height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.15 },
        }}
      >
        {cursorState === "hover" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-[#00ff88] text-[8px] font-mono font-bold tracking-widest uppercase"
          >
            CLICK
          </motion.span>
        )}
        {cursorState === "image" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full h-full"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[1px] h-full bg-white/50" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[1px] w-full bg-white/50" />
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
