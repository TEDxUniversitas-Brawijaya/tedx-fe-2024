import { Toaster } from "@/components/shared/toaster";
import Navbar from "@/components/shared/navigations/navbar";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <Toaster />
      {children}
    </>
  );
}
