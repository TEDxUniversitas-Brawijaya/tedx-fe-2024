import { localFontVariables } from "@/lib/fonts";
import { keywords } from "@/lib/static/metadata";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEDxUniversitasBrawijaya 2025",
  description:
    "TEDxUniversitasBrawijaya merupakan sebuah event yang diinisiasi oleh kumpulan mahasiswa Universitas Brawijaya yang diselenggarakan secara independen dengan lisensi dari TED",
  keywords,
  openGraph: {
    title: "TEDxUniversitasBrawijaya 2025",
    description:
      "TEDxUniversitasBrawijaya merupakan sebuah event yang diinisiasi oleh kumpulan mahasiswa Universitas Brawijaya yang diselenggarakan secara independen dengan lisensi dari TED",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || ""),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${localFontVariables} antialiased`}>{children}</body>
      <GoogleAnalytics gaId={process.env.MEASUREMENT_ID || ""} />
    </html>
  );
}
