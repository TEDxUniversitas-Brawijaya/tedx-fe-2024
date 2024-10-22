import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEDxUniversitasBrawijaya 2024",
  description:
    "TEDxUniversitasBrawijaya merupakan sebuah event yang diinisiasi oleh kumpulan mahasiswa Universitas Brawijaya yang diselenggarakan secara independen dengan lisensi dari TED",
};

const ppNeueMontreal = localFont({
  src: "./fonts/PPNeueMontreal.woff",
  variable: "--font-pp-neue-montreal",
  weight: "100 500 600 700 800 900",
});

const wulkanDisplay = localFont({
  src: "./fonts/WulkanDisplay.woff",
  variable: "--font-wulkan-display",
  weight: "100 500 600 700 800 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${ppNeueMontreal.variable} ${wulkanDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
