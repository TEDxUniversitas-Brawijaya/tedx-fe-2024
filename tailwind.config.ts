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
        tedx: {
          black: "#171715",
          white: "#FFFFFF",
          green: {
            DEFAULT: "#373D33",
          },
          red: {
            DEFAULT: "#DC2625",
          },
        },
      },
      fontFamily: {
        "pp-neue-montreal": [
          "var(--font-pp-neue-montreal)",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        "wulkan-display": [
          "var(--font-wulkan-display)",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
