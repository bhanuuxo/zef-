import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zef: {
          black: "#050508",
          deep: "#0A0A12",
          surface: "#0f0f1a",
          violet: "#A020F0",
          "violet-bright": "#B44AFF",
          neonPink: "#FF00FF",
          hotPink: "#FF2D95",
          lavender: "#E6E6FA",
          babyPink: "#FFB6C1",
          cyan: "#00F0FF",
          gold: "#FFD700",
        },
      },
      fontFamily: {
        heading: ["Orbitron", "monospace"],
        body: ["Rajdhani", "sans-serif"],
        mono: ["'Share Tech Mono'", "monospace"],
      },
      animation: {
        "glow-pulse": "glowPulse 2.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "floatSlow 10s ease-in-out infinite",
        ticker: "ticker 45s linear infinite",
        "ticker-fast": "ticker 25s linear infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "spin-slow": "spin 25s linear infinite",
        "spin-reverse": "spinReverse 20s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "neon-flicker": "neonFlicker 4s ease-in-out infinite",
        "pulse-ring": "pulseRing 2s ease-out infinite",
        "gradient-x": "gradientX 6s ease infinite",
        "scan-line": "scanLine 8s linear infinite",
        "data-stream": "dataStream 3s linear infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(160,32,240,0.4), 0 0 40px rgba(255,0,255,0.15)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(160,32,240,0.6), 0 0 80px rgba(255,0,255,0.3), 0 0 120px rgba(160,32,240,0.1)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-25px) rotate(3deg)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        neonFlicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": {
            textShadow: "0 0 7px #A020F0, 0 0 14px #A020F0, 0 0 28px #A020F0, 0 0 56px #FF00FF",
            opacity: "1",
          },
          "20%, 24%, 55%": { textShadow: "none", opacity: "0.85" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: "1" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        spinReverse: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        dataStream: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "0% 100%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #050508 0%, #0f0520 40%, #050508 100%)",
        "conic-glow": "conic-gradient(from 0deg, transparent, #A020F0, transparent, #FF00FF, transparent)",
      },
      boxShadow: {
        "glow-sm": "0 0 10px rgba(160,32,240,0.3), 0 0 20px rgba(160,32,240,0.1)",
        "glow-md": "0 0 20px rgba(160,32,240,0.4), 0 0 40px rgba(255,0,255,0.15)",
        "glow-lg": "0 0 40px rgba(160,32,240,0.5), 0 0 80px rgba(255,0,255,0.25), 0 0 120px rgba(160,32,240,0.1)",
        "glow-pink": "0 0 20px rgba(255,0,255,0.4), 0 0 40px rgba(255,0,255,0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
