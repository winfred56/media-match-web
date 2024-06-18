import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        bricolage: ["Bricolage Grotesque", "sans"],
      },
      colors: {
        primary: "#5550FF",
        media_grey: "#f5f5f6",
        background: "#0C0020",
      },
      textColor: {
        primary: "#5550FF",
        background: "#0C0020",
        media_black: "#0c0020",
      }
    },
  },
  plugins: [],
};
export default config;
