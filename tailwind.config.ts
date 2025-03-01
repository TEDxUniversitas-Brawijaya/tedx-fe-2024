/* eslint-disable @typescript-eslint/no-require-imports */

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
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
            300: "#E8E9DE",
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
        java: [
          "var(--font-carakan-jawa)",
          "var(--font-aileron)",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        strong: [
          "var(--font-strong-concrete-bold)",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // screens: {
  //   'sm': '640px',
  //   'md': '768px',
  //   'lg': '1024px',
  //   'xl': '1280px',
  //   '2xl': '1536px',
  // },
  plugins: [require("tailwindcss-animate")],
};
export default config;
