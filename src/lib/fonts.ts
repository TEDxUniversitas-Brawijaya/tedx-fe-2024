import localFont from "next/font/local";

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

const javaFont = localFont({
  src: "../app/fonts/CarakanJawa.woff2",
  variable: "--font-carakan-jawa",
  weight: "100 200 300 400 500 600 700 800 900",
});

const StrongConcreteBold = localFont({
  src: "../app/fonts/StrongConcrete-Bold.woff",
  variable: "--font-strong-concrete-bold",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const localFontVariables = `${headerFont.variable} ${bodyFont.variable} ${javaFont.variable} ${StrongConcreteBold.variable}`;
