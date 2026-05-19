import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0C0C0E",
        surface: "#151517",
        "surface-2": "#1E1E21",
        accent: "#FF7262",
        "text-1": "#F0EEE9",
        "text-2": "#8A8784",
        "text-3": "#4A4947",
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
