"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export default function AnimatedText({
  text,
  className = "",
  stagger = 0.03,
  delay = 0,
  once = true,
  as: Tag = "div",
}: AnimatedTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      className={`inline-flex flex-wrap gap-x-[0.3em] ${className}`}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={wordVariant} style={{ display: "inline-block" }}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
