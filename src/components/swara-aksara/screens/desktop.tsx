import Image from "next/image";
import Footer from "../../shared/footer";
import DesktopSection1 from "../sections/desktop-section-1";
import DesktopSection2 from "../sections/desktop-section-2";
import DesktopSection3 from "../sections/desktop-section-3";
import DesktopSection4 from "../sections/desktop-section-4";

export default function SwaraAksaraPageDesktop() {
  return (
    <main>
      <DesktopSection1 />
      <div>
        <DesktopSection2 />
        <div className="sticky z-20 flex items-center justify-center overflow-x-clip">
          <div className="absolute aspect-[4/1] h-fit w-[102.5vw]">
            <Image src={"/img/awan.png"} alt="Awan" fill />
          </div>
        </div>
      </div>
      <DesktopSection3 />
      <DesktopSection4 />
      <Footer />
    </main>
  );
}
