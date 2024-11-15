import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function MobileSection2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const topGradientHeight = useTransform(
    scrollYProgress,
    [0, 0.85],
    ["0%", "45%"],
  );

  const bottomGradientHeight = useTransform(
    scrollYProgress,
    [0, 0.85],
    ["0%", "65%"],
  );

  const topMaskValue = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.8, 1],
    [
      "radial-gradient(100% 100% at bottom, transparent 100%, black)",
      "radial-gradient(80% 80% at bottom, transparent 100%, black)",
      "radial-gradient(70% 70% at bottom, transparent 100%, black)",
      "radial-gradient(60% 60% at bottom, transparent 100%, black)",
      "radial-gradient(30% 30% at bottom, transparent 100%, black)",
    ],
  );

  const bottomMaskValue = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.8, 1],
    [
      "radial-gradient(100% 100% at top, transparent 100%, black)",
      "radial-gradient(80% 80% at top, transparent 100%, black)",
      "radial-gradient(70% 70% at top, transparent 100%, black)",
      "radial-gradient(60% 60% at top, transparent 100%, black)",
      "radial-gradient(30% 30% at top, transparent 100%, black)",
    ],
  );

  const person1Opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const person2Opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const gradientOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  const paperOpacity = useTransform(scrollYProgress, [0, 0.8], [0.5, 0]);

  const redLineOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.6, 1],
    ["rgba(8, 36, 39, 1)", "rgba(0, 0, 0, 1)"],
  );

  return (
    <motion.section
      ref={sectionRef}
      className="relative h-[500vh] bg-[#082427] text-white"
      style={{
        backgroundColor,
      }}
    >
      <div className="sticky left-0 top-0 h-screen w-full overflow-clip">
        <motion.div
          className="absolute left-0 top-0 aspect-video h-[160vh] opacity-50"
          style={{ opacity: paperOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.5, ease: "easeInOut" }}
        >
          <Image
            src="/img/paper-texture-4.png"
            alt="Paper Texture 4"
            fill
            priority
          />
        </motion.div>

        <motion.div
          className="absolute left-1/2 top-0 aspect-video h-screen -translate-x-1/2 transform"
          style={{ opacity: redLineOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeInOut" }}
        >
          <Image
            src="/img/red-line-overlay.png"
            alt="Red Line Overlay"
            fill
            priority
          />
        </motion.div>

        <motion.div
          className="absolute left-0 top-0 h-[120vh] w-screen"
          style={{ opacity: gradientOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeInOut" }}
        >
          <div className="h-screen w-screen bg-gradient-to-b from-[#0F0F0F] to-transparent to-75%" />
        </motion.div>

        <motion.div
          className="absolute -left-32 top-96 aspect-[15/47] w-96 blur-md"
          style={{ opacity: person1Opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeInOut" }}
        >
          <Image src={"/img/person-walking.png"} alt="Person Walking" fill />
        </motion.div>

        <motion.div
          className="absolute -right-96 top-72 aspect-[15/47] w-[52rem]"
          style={{ opacity: person2Opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeInOut" }}
        >
          <Image src={"/img/person-walking.png"} alt="Person Walking" fill />
        </motion.div>

        <motion.div
          className="transfrom absolute left-1/2 top-[35%] flex w-max -translate-x-1/2 flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="text-center font-header text-4xl leading-[4rem]">
            Waktu Wicara,
          </h1>
          <h2 className="w-80 text-center font-light">
            sang penjaga sunyi, saksi mata setiap jejak langkah insan menuju
            aktualisasi diri. Setiap detik mengukir kisah, memberi ruang bagi
            jiwa untuk mekar, berubah dan menemukan suara dalam keberanian yang
            penuh keyakinan.
          </h2>
        </motion.div>

        <div className="absolute bottom-0 top-0 w-[100%] overflow-hidden blur-xl">
          <motion.div
            className="z-15 absolute left-0 top-0 w-full bg-black"
            style={{
              height: topGradientHeight,
              WebkitMask: topMaskValue,
              mask: topMaskValue,
            }}
          />

          <motion.div
            className="z-15 absolute bottom-0 left-0 w-full bg-black"
            style={{
              height: bottomGradientHeight,
              WebkitMask: bottomMaskValue,
              mask: bottomMaskValue,
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}
