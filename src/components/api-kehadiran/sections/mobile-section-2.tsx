import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MobileSection2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const firstTextOpacity = useTransform(scrollYProgress, [0.2, 0.25], [1, 0]);
  const smoothFirstTextOpacity = useSpring(firstTextOpacity, {
    stiffness: 100,
    damping: 20,
  });

  const secondTextOpacity = useTransform(scrollYProgress, [0.25, 0.3], [0, 1]);
  const smoothSecondTextOpacity = useSpring(secondTextOpacity, {
    stiffness: 100,
    damping: 20,
  });

  const horizontalMovement = useTransform(
    scrollYProgress,
    [0.5, 0.9],
    [0, -windowSize.width * 3],
  );
  const smoothHorizontalMovement = useSpring(horizontalMovement, {
    stiffness: 100,
    damping: 20,
  });

  const candleOpacity = useTransform(scrollYProgress, [0.05, 0.075], [0, 1]);
  const smoothCandleOpacity = useSpring(candleOpacity, {
    stiffness: 100,
    damping: 20,
  });

  const handOpacity = useTransform(scrollYProgress, [0.25, 0.3], [1, 0]);
  const smoothHandOpacity = useSpring(handOpacity, {
    stiffness: 100,
    damping: 20,
  });

  const handRotate = useTransform(scrollYProgress, [0.075, 0.1], [0, -20]);
  const smoothHandRotate = useSpring(handRotate, {
    stiffness: 100,
    damping: 20,
  });

  const handXMovement = useTransform(
    scrollYProgress,
    [0, 0.04, 0.05, 0.1, 0.2],
    [230, 230, 0, 0, -30],
  );
  const smoothHandXMovement = useSpring(handXMovement, {
    stiffness: 100,
    damping: 20,
  });

  const handYMovement = useTransform(scrollYProgress, [0.1, 0.2], [0, 60]);
  const smoothHandYMovement = useSpring(handYMovement, {
    stiffness: 100,
    damping: 20,
  });

  const fireScale = useTransform(scrollYProgress, [0.15, 0.4], [0, 1.5]);
  const smoothFireScale = useSpring(fireScale, {
    stiffness: 100,
    damping: 20,
  });

  const bgGradientOpacity = useTransform(scrollYProgress, [0.4, 0.475], [0, 1]);
  const smoothBgGradientOpacity = useSpring(bgGradientOpacity, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <motion.section
      ref={sectionRef}
      className="relative z-0 h-[1000vh] bg-[#1A1A1A]"
    >
      <div className="sticky left-0 top-0 flex h-screen w-full items-center justify-center overflow-clip">
        <motion.div
          className="absolute h-full w-full bg-gradient-to-t from-[#131012] to-[#540D00]"
          style={{
            opacity: smoothBgGradientOpacity,
          }}
        />

        <div className="absolute aspect-video h-[130%] opacity-25">
          <Image
            src={"/img/paper-texture-6-mobile.png"}
            alt="Paper Texture"
            fill
            priority
          />
        </div>

        {/* horizontal scroll section */}
        <motion.div
          className="relative flex h-screen w-full flex-shrink-0 overflow-visible"
          style={{ x: smoothHorizontalMovement }}
        >
          <div className="flex h-screen w-full flex-shrink-0 justify-center">
            <motion.div
              className="absolute left-4 top-52"
              style={{
                opacity: smoothFirstTextOpacity,
              }}
            >
              <p className="w-64 text-justify text-white">
                Simbol untuk tetap sadar akan nilai diri dan perjalanan hidup.
                Kesulitan menjadi bagian dari proses, untuk mempertahankan
                motivasi diri seseorang harus hadir dalam perjuangan, menerima
                setiap tantangan sebagai bagian dari perjalanan menuju
                aktualisasi diri.
              </p>
            </motion.div>
            <motion.div
              className="absolute left-4 top-52"
              style={{
                opacity: smoothSecondTextOpacity,
              }}
            >
              <p className="w-64 text-justify text-white">
                Dengan melewati sebuah perjalanan panjang penuh dengan
                rintangan, pada akhirnya, Api Kehadiran menggambarkan kekuatan
                batin untuk terus berusaha dan menemukan makna dalam setiap
                langkah, sekecil apa pun itu, sehingga tujuan atau aktualisasi
                diri tetap dalam jangkauan.
              </p>
            </motion.div>
            <motion.div
              className="absolute bottom-[0rem] flex aspect-square w-[24rem] origin-bottom"
              style={{
                scale: smoothFireScale,
              }}
            >
              <Image
                src="/img/candle-fire-bg.png"
                alt="Flame Background"
                fill
                priority
              />
            </motion.div>
            <motion.div
              className="absolute bottom-[7rem] aspect-[0.69/1] w-[6rem] origin-bottom"
              style={{
                scale: smoothFireScale,
              }}
            >
              <Image
                src="/img/candle-fire-mobile.png"
                alt="Flame"
                fill
                priority
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-[2rem] aspect-[213/184] w-[15rem]"
              style={{
                opacity: smoothCandleOpacity,
              }}
            >
              <Image src="/img/candle.png" alt="Candle" fill priority />
            </motion.div>
            <motion.div
              className="absolute -right-[35%] bottom-[10rem] aspect-[29/23] w-[100%]"
              style={{
                opacity: smoothHandOpacity,
                rotate: smoothHandRotate,
                x: smoothHandXMovement,
                y: smoothHandYMovement,
              }}
            >
              <Image
                src="/img/hand-with-fire.png"
                alt="Hand with Fire"
                fill
                priority
              />
            </motion.div>
          </div>
          <div className="flex h-screen w-full flex-shrink-0 justify-center">
            <motion.div
              className="absolute top-32 aspect-[1.36/1] w-[24rem]"
              style={{}}
            >
              <Image
                src="/img/menjaga-card.png"
                alt="Menjaga Card"
                fill
                priority
              />
            </motion.div>
          </div>
          <div className="flex h-screen w-full flex-shrink-0 justify-center">
            <motion.div className="absolute bottom-16 aspect-square w-[24rem]">
              <Image
                src="/img/terperangkap-card.png"
                alt="Terperangkap Card"
                fill
                priority
                className="-rotate-12"
              />
            </motion.div>
          </div>
          <div className="flex h-screen w-full flex-shrink-0 justify-center">
            <motion.div className="absolute top-32 aspect-[1.36/1] w-[24rem]">
              <Image
                src="/img/bergejolak-card.png"
                alt="Bergejolak Card"
                fill
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 h-[35%] w-full bg-gradient-to-t from-[#0E0E0E] from-5% to-transparent to-80%" />

        <div className="absolute top-0 h-[35%] w-full bg-gradient-to-b from-[#0E0E0E] from-5% to-transparent to-80%" />
      </div>
    </motion.section>
  );
}
