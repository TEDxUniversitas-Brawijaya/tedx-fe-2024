import { localFontVariables } from "@/lib/fonts";
import { keywords } from "@/lib/static/metadata";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import QueryClientWrapper from "@/components/shared/query-client-wrapper";

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
      <body className={`${localFontVariables} antialiased`}>
        <Toaster
          toastOptions={{
            style: {
              fontWeight: 500,
            },
            success: {
              iconTheme: {
                primary: "#77aa39",
                secondary: "#eaf6da",
              },
              style: {
                backgroundColor: "#eaf6da",
                color: "#597f2b",
              },
            },
            error: {
              iconTheme: {
                primary: "#ac1e31",
                secondary: "#f7d4d8",
              },
              style: {
                backgroundColor: "#f7d4d8",
                color: "#ac1e31",
              },
            },
            duration: 2000,
          }}
        />
        <QueryClientWrapper>{children}</QueryClientWrapper>
      </body>
      <GoogleAnalytics gaId={process.env.MEASUREMENT_ID || ""} />
    </html>
  );
}
