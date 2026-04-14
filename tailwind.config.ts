import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        comic: {
          yellow: "#FFD600",
          black: "#1A1A1A",
          red: "#FF1744",
          white: "#FFF8E1",
          blue: "#2979FF",
          orange: "#FF6D00",
          pink: "#FF4081",
        },
      },
      fontFamily: {
        comic: ["var(--font-bangers)", "cursive"],
        sans: ["var(--font-inter)", "var(--font-noto-sans-jp)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "bounce-in": "bounce-in 0.6s ease-out",
        "shake": "shake 0.5s ease-in-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-comic": "pulse-comic 2s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "zoom-in": "zoom-in 0.4s ease-out",
        "wiggle": "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        "bounce-in": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "pulse-comic": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "zoom-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      rotate: {
        "1": "1deg",
        "2": "2deg",
        "3": "3deg",
        "-1": "-1deg",
        "-2": "-2deg",
        "-3": "-3deg",
      },
    },
  },
  plugins: [],
};
export default config;
