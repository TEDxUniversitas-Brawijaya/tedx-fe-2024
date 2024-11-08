import Navbar from "@/components/shared/navbar";
import { localFontVariables } from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEDxUniversitasBrawijaya 2024",
  description:
    "TEDxUniversitasBrawijaya merupakan sebuah event yang diinisiasi oleh kumpulan mahasiswa Universitas Brawijaya yang diselenggarakan secara independen dengan lisensi dari TED",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${localFontVariables} antialiased`}>
        <Analytics />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
