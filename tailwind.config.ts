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
          grey: {
            DEFAULT: "#A1A1A1",
          },
          green: {
            DEFAULT: "#373D33",
          },
          red: {
            DEFAULT: "#DC2625",
          },
          blue: {
            sky: "#5CA6B0",
            dark: "#082427",
          },
          yellow: {
            DEFAULT: "#EED14E",
          },
        },
      },
      fontFamily: {
        header: [
          "var(--font-broadsheet-ldo)",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        body: ["var(--font-aileron)", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
