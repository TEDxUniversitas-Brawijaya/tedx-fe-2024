import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import MobileSection1 from "../sections/mobile-section-1";
import MobileSection2 from "../sections/mobile-section-2";
import MobileSection3 from "../sections/mobile-section-3";
import MobileSection4 from "../sections/mobile-section-4";

export default function WaktuWicaraPageMobile() {
  const [isClicked, setIsClicked] = useState(false);
  const [isMaskVisible, setIsMaskVisible] = useState(true);
  const [bgColor, setBgColor] = useState("bg-tedx-yellow");

  return (
    <main className={`transition-colors duration-1000 ${bgColor}`}>
      <motion.div
        className="absolute -bottom-0 left-0 z-50 h-[50%] w-screen overflow-clip"
        animate={{
          opacity: isMaskVisible ? 1 : 0,
        }}
        transition={{
          delay: 0.25,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className="absolute left-1/2 top-10 h-[140vh] w-[140%] origin-center -translate-x-1/2 transform overflow-y-clip">
          <Image src="/svg/mask-open.svg" alt="Mask Open" fill priority />
        </div>
      </motion.div>
      <AnimatePresence mode="wait">
        {!isClicked ? (
          <motion.div
            key="before"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}
          >
            <MobileSection1
              onClick={async () => {
                setIsClicked(true);
                await new Promise((resolve) => setTimeout(resolve, 2000));
                setBgColor("bg-[#082427]");
                await new Promise((resolve) => setTimeout(resolve, 1000));
                setIsMaskVisible(false);
              }}
            />
          </motion.div>
        ) : (
          <motion.div key="after">
            <MobileSection2 />
            <MobileSection3 />
            <MobileSection4 />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
