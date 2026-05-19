"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [data-cursor-hover]")) setIsHovering(true);
    };
    const out = () => setIsHovering(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white z-[9999] pointer-events-none"
      />
      {/* Ring */}
      <motion.div
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isHovering ? 48 : 36,
          height: isHovering ? 48 : 36,
          backgroundColor: isHovering ? "rgba(129,140,248,0.15)" : "transparent",
          borderColor: isHovering ? "rgba(129,140,248,0.7)" : "rgba(255,255,255,0.3)",
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 rounded-full border z-[9998] pointer-events-none"
      />
    </>
  );
}
