import type { Config } from "tailwindcss";
const config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          fuchsia: "#E5007D",
          "fuchsia-dark": "#C60068",
          "fuchsia-light": "#FFF0F7",
          "fuchsia-glow": "#FF2A9D",
          gold: "#D4AF37",
          "gold-light": "#F5D76E",
          "gold-subtle": "#FFFDF5",
          dark: "#111018",
          "dark-card": "#191824",
          muted: "#71717A",
          border: "#EAE8ED",
        },
      },
      boxShadow: {
        "glow-fuchsia": "0 10px 30px -5px rgba(229, 0, 125, 0.25)",
        "glow-gold": "0 10px 30px -5px rgba(212, 175, 55, 0.25)",
        "card-soft": "0 12px 36px -4px rgba(17, 16, 24, 0.05)",
        "card-hover": "0 20px 40px -8px rgba(229, 0, 125, 0.12)",
        modal: "0 25px 60px -15px rgba(0, 0, 0, 0.35)",
      },
    },
  },
};
export default { ...config, content: ["./src/**/*.{ts,tsx}"] } satisfies Config;
