import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        surface: "#141414",
        "surface-2": "#1C1C1C",
        "text-1": "#FAFAF9",
        "text-2": "#A1A1AA",
        "text-3": "#52525B",
        accent: {
          DEFAULT: "#C084FC",
          "2": "#F0ABFC",
          bg: "rgba(192,132,252,0.08)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
