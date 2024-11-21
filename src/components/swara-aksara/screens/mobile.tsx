import Footer from "@/components/shared/footer";
import MobileSection1 from "../sections/mobile-section-1";
import MobileSection2 from "../sections/mobile-section-2";
import MobileSection3 from "../sections/mobile-section-3";

export default function SwaraAksaraPageMobile() {
  return (
    <main className="overflow-y-visible">
      <MobileSection1 />
      <MobileSection2 />
      <MobileSection3 />
      <Footer />
    </main>
  );
}
