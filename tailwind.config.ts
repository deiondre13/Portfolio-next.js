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
        bg: {
          DEFAULT: "#1D1F27",
          2: "#292D3A",
        },
        surface: {
          DEFAULT: "#292D3A",
          2: "#393E4A",
        },
        border: {
          DEFAULT: "#393E4A",
        },
        text: {
          DEFAULT: "#F0F2F5",
          muted: "#9CA3AF",
        },
        accent: {
          DEFAULT: "#01A982",
          2: "#00DFAE",
        },
        ink: "#1D1F26",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
