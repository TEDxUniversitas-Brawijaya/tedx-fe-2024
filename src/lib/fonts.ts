import localFont from "next/font/local";

const ppNeueMontreal = localFont({
  src: "../app/fonts/PPNeueMontreal.woff",
  variable: "--font-pp-neue-montreal",
  weight: "100 500 600 700 800 900",
});

const wulkanDisplay = localFont({
  src: "../app/fonts/WulkanDisplay.woff",
  variable: "--font-wulkan-display",
  weight: "100 500 600 700 800 900",
});

export const localFontVariables = `${ppNeueMontreal.variable} ${wulkanDisplay.variable}`;
