import DesktopSection1 from "../sections/desktop-section-1";
import DesktopSection2 from "../sections/desktop-section-2";
import Footer from "@/components/shared/footer";

export default function ApiKehadiranPageDesktop() {
  return (
    <main className="min-h-screen w-full bg-[#0E0E0E]">
      <DesktopSection1 />
      <DesktopSection2 />
      <Footer />
    </main>
  );
}
