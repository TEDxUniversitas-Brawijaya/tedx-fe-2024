import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function MobileSection1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const smoothBgScale = useSpring(bgScale, {
    stiffness: 100,
    damping: 20,
  });

  const firstTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25],
    [1, 1, 0],
  );
  const secondTextOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.4, 0.5],
    [0, 1, 1, 0],
  );
  const thirdTextOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.65, 0.75],
    [0, 1, 1, 0],
  );
  const fourthTextOpacity = useTransform(
    scrollYProgress,
    [0.65, 0.75, 0.9],
    [0, 1, 1],
  );

  return (
    <section className="relative h-[400vh]" ref={sectionRef}>
      <div className="sticky left-0 top-0 z-0 flex h-screen w-full flex-col items-center justify-center gap-10 overflow-hidden bg-[#0E0E0E] px-5 pt-20 text-center">
        <motion.div
          className="absolute bottom-0 aspect-[1.21/1] h-full origin-center"
          style={{ scale: smoothBgScale }}
        >
          <Image
            src={"/img/bg-propa-3-section-1-mobile.png"}
            alt="Background propaganda 3 section 1 mobile"
            fill
          />
        </motion.div>

        <div className="absolute bottom-0 h-5/6 w-full bg-gradient-to-t from-[#000000] to-transparent" />

        <motion.div
          style={{ opacity: firstTextOpacity }}
          className="absolute top-44 w-80 text-center"
        >
          <h2 className="text-lg text-[#DADADA]">Propaganda 3</h2>
          <h1 className="text-center font-header text-4xl text-white">
            Merengkuh Karsa
          </h1>
        </motion.div>
        <motion.div
          style={{ opacity: secondTextOpacity }}
          className="absolute top-44 w-80 text-center"
        >
          <p className="font-semibold text-[#DADADA]">
            Mendekap kehendak tertinggi dalam jiwa untuk menyatu dalam panggilan
            terdalam yang terbenam oleh riuhnya dunia luar.{" "}
          </p>
        </motion.div>
        <motion.div
          style={{ opacity: thirdTextOpacity }}
          className="absolute top-44 w-80 text-center"
        >
          <p className="font-semibold text-[#DADADA]">
            Dalam proses ini, individu diminta untuk menelusuri labirin batinnya
            untuk menemukan kilauan potensi yang tak pernah sepenuhnya disadari
            sebelumnya.
          </p>
        </motion.div>
        <motion.div
          style={{ opacity: fourthTextOpacity }}
          className="absolute top-44 w-80 text-center"
        >
          <p className="font-semibold text-[#DADADA]">
            Karsa yang direngkuh dengan penuh kesadaran melahirkan keberanian
            untuk mengekspresikan esensi diri dan menjadikannya nyala abadi
            dalam perjalanan hidup setiap insan.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
