import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F7F4EE",
        "bg-dark": "#18181B",
        card: "#FFFFFF",
        accent: "#FF5C28",
        "text-1": "#18181B",
        "text-2": "#78716C",
        "text-3": "#A8A29E",
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
