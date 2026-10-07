"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          style={{
            position: "fixed", inset: 0,
            background: "#080808",
            zIndex: 9999,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 20,
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#00D4AA",
              fontFamily: "var(--font-mono, monospace)",
            }}
          >
            SHRAAVANI TOPLE
          </motion.p>

          <div style={{ position: "relative", width: 140, height: 1 }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "rgba(0,212,170,0.12)",
            }} />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              style={{
                position: "absolute", inset: 0,
                background: "#00D4AA",
                transformOrigin: "left",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
