import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#08080C",
          surface: "#0F0F14",
        },
        "text-1": "#F4F4F5",
        "text-2": "#71717A",
        "text-3": "#3F3F46",
        accent: {
          DEFAULT: "#818CF8",
          glow: "rgba(129,140,248,0.12)",
        },
        border: "rgba(255,255,255,0.06)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        geist: ["Geist", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "monospace"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
