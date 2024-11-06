import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";

const body = Plus_Jakarta_Sans({
  subsets: ["latin-ext", "latin"],
});

const header = Playfair_Display({
  subsets: ["latin-ext", "latin"],
});

const headerFont = localFont({
  src: "../app/fonts/BroadsheetLDO.woff",
  variable: "--font-broadsheet-ldo",
  weight: "100 400 500 600 700 800 900",
});

const bodyFont = localFont({
  src: "../app/fonts/Aileron.woff2",
  variable: "--font-aileron",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const localFontVariables = `${headerFont.variable} ${bodyFont.variable}`;
