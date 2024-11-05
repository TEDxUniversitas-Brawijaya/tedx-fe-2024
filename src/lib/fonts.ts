import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin-ext", "latin"],
});

const headerFont = Playfair_Display({
  subsets: ["latin-ext", "latin"],
});

export const localFontVariables = `${bodyFont.className} ${headerFont.style}`;
