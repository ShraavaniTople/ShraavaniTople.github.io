import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F4F0EA",
        card: "#FFFFFF",
        accent: "#C9573A",
        "text-1": "#111111",
        "text-2": "#6B6663",
        "text-3": "#A09C99",
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
