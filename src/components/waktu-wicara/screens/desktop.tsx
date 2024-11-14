import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import AnimationSwitcher from "../animation-switcher";
import DesktopSection1 from "../sections/desktop-section-1";
import DesktopSection2 from "../sections/desktop-section-2";
import DesktopSection3 from "../sections/desktop-section-3";
import DesktopSection4 from "../sections/desktop-section-4";
import Footer from "@/components/shared/footer";
import Image from "next/image";

export default function WaktuWicaraPageDesktop() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [bgColor, setBgColor] = useState("bg-tedx-yellow");
  const [showMaskWrapper, setShowMaskWrapper] = useState(true);
  const maskControls = useAnimationControls();

  const handleExplore = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    maskControls.start({
      scale: 9,
      x: "-90%",
      y: "-200%",
      transition: {
        duration: 4.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    });

    setTimeout(() => {
      setBgColor("bg-tedx-blue-dark");
    }, 1300);

    setTimeout(() => {
      setShowMaskWrapper(false);
    }, 4500);
  };

  return (
    <main
      className={`relative min-h-screen transition-colors duration-1000 ${bgColor}`}
    >
      <AnimationSwitcher
        beforeContent={
          <DesktopSection1
            handleExplore={handleExplore}
            isAnimating={isAnimating}
          />
        }
        afterContent={
          <>
            <DesktopSection2 />
            <DesktopSection3 />
            <DesktopSection4 />
            <Footer />
          </>
        }
        isAnimating={isAnimating}
      />
      {showMaskWrapper && (
        <motion.div className="relative h-screen w-screen overflow-hidden">
          <motion.div
            className="absolute right-0 top-0 h-screen w-[60%]"
            animate={isAnimating ? { opacity: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <Image src="/img/mask-background.png" alt="Mask Background" fill />
          </motion.div>
          <motion.div
            className="absolute -bottom-40 -right-80 z-10 h-[200vh] w-[75%] origin-center"
            animate={maskControls}
          >
            <Image
              src={isAnimating ? "/img/mask-open.png" : "/img/mask-closed.png"}
              alt="Mask"
              draggable={false}
              fill
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
