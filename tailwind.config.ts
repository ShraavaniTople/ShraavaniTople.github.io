import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        "bg-soft": "#F8F7F5",
        surface: "#F4F3F1",
        accent: "#7C3AED",
        "accent-light": "#EDE9FE",
        "accent-mid": "#8B5CF6",
        "text-1": "#111110",
        "text-2": "#6B7280",
        "text-3": "#9CA3AF",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
