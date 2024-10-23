import Footer from "@/components/shared/footer";
import DesktopSection1 from "../sections/desktop-section-1";
import DesktopSection2 from "../sections/desktop-section-2";
import DesktopSection3 from "../sections/desktop-section-3";

export default function AboutUsPageDesktop() {
  return (
    <main className="z-0 overflow-x-clip">
      <DesktopSection1 />
      <DesktopSection2 />
      <DesktopSection3 />
      <Footer />
    </main>
  );
}
