import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";

const DesktopSection2 = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const gradientHeight = useTransform(
    scrollYProgress,
    [0, 0.6, 0.85],
    ["0%", "40%", "50%"],
  );

  const topMaskValue = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.8, 1],
    [
      "radial-gradient(100% 100% at bottom, transparent calc(100% - 1px), black)",
      "radial-gradient(80% 80% at bottom, transparent calc(100% - 1px), black)",
      "radial-gradient(70% 70% at bottom, transparent calc(100% - 1px), black)",
      "radial-gradient(60% 60% at bottom, transparent calc(100% - 1px), black)",
      "radial-gradient(30% 30% at bottom, transparent calc(100% - 1px), black)",
    ],
  );

  const bottomMaskValue = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.8, 1],
    [
      "radial-gradient(100% 100% at top, transparent calc(100% - 1px), black)",
      "radial-gradient(80% 80% at top, transparent calc(100% - 1px), black)",
      "radial-gradient(70% 70% at top, transparent calc(100% - 1px), black)",
      "radial-gradient(60% 60% at top, transparent calc(100% - 1px), black)",
      "radial-gradient(30% 30% at top, transparent calc(100% - 1px), black)",
    ],
  );

  const personOpacity = useTransform(scrollYProgress, [0, 0.7], [0.8, 0]);

  const textureOpacity = useTransform(
    scrollYProgress,
    [0, 0.525, 0.85],
    [1, 0.5, 0],
  );

  const paperOpacity = useTransform(
    scrollYProgress,
    [0, 0.525, 0.85],
    [0.4, 0.2, 0],
  );

  const redLineOpacity = useTransform(
    scrollYProgress,
    [0, 0.525, 0.85],
    [0.6, 0.2, 0],
  );

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.9, 1],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"],
  );

  return (
    <section ref={containerRef} className="relative h-[500vh]">
      <motion.div
        className="sticky left-0 top-0 flex h-screen items-start"
        style={{ backgroundColor }}
      >
        <div className="relative flex h-screen w-full items-center justify-center">
          <motion.div className="z-20 w-[60%] text-center text-white">
            <h2 className="font-header text-6xl font-bold">Waktu Wicara,</h2>
            <p className="mt-5">
              Sang penjaga sunyi, saksi mata setiap jejak langkah insan menuju
              aktualisasi diri. Setiap detik mengukir kisah, memberi ruang bagi
              jiwa untuk mekar, berubah dan menemukan suara dalam keberanian
              yang penuh keyakinan.
            </p>
          </motion.div>

          <motion.div
            className="absolute bottom-32 left-[35%] z-10 aspect-[15/47] h-1/2"
            style={{ opacity: personOpacity }}
          >
            <Image src="/img/person-walking.png" alt="Person Walking" fill />
          </motion.div>

          <motion.div
            className="absolute bottom-5 right-52 z-10 aspect-[15/47] h-1/2"
            style={{ opacity: personOpacity }}
          >
            <Image src="/img/person-walking.png" alt="Person Walking" fill />
          </motion.div>

          <motion.div
            className="absolute -left-5 bottom-0 z-10 aspect-[15/47] h-[80%] w-1/2"
            style={{ opacity: personOpacity }}
          >
            <Image
              src="/img/person-walking-blur.png"
              alt="Person Walking"
              fill
              objectFit="cover"
              objectPosition="top"
            />
          </motion.div>

          <motion.div
            className="absolute -bottom-20 right-20 z-10 aspect-[15/47] h-[70%] w-[45%]"
            style={{ opacity: personOpacity }}
          >
            <Image
              src="/img/person-walking-blur.png"
              alt="Person Walking"
              fill
              objectFit="cover"
              objectPosition="top"
            />
          </motion.div>

          {/* Eyelid */}
          <div className="absolute bottom-0 top-0 w-[100%] overflow-hidden blur-xl">
            <motion.div
              className="z-15 absolute left-0 top-0 w-full bg-black blur-3xl"
              style={{
                height: gradientHeight,
                WebkitMask: topMaskValue,
                mask: topMaskValue,
              }}
            />

            <motion.div
              className="z-15 absolute bottom-0 left-0 w-full bg-black blur-3xl"
              style={{
                height: gradientHeight,
                WebkitMask: bottomMaskValue,
                mask: bottomMaskValue,
              }}
            />
          </div>

          <div className="absolute left-0 right-0 top-0 h-screen">
            <motion.div
              className="absolute left-0 top-0 z-[5] h-screen w-full bg-gradient-to-b from-[#0F0F0F] to-transparent"
              style={{
                opacity: textureOpacity,
              }}
            />

            <motion.div
              className="absolute z-[5] h-screen w-full"
              style={{
                y: useTransform(scrollYProgress, [0, 0.75], [0, 100]),
                opacity: redLineOpacity,
              }}
            >
              <Image
                src="/img/red-line-overlay.png"
                alt="Red Line Overlay"
                fill
                priority
              />
            </motion.div>

            <motion.div
              className="absolute left-0 top-0 h-screen w-full"
              style={{
                opacity: paperOpacity,
              }}
            >
              <Image
                src="/img/paper-texture-4.png"
                alt="Paper Texture"
                fill
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DesktopSection2;
