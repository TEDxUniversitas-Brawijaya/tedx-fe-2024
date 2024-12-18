import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";
import FrameCard from "../card/FrameCard";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { frameCardData } from "@/lib/static/api-kehadiran";

const DesktopSection2 = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const primaryColor = useMotionValue("14 14 14");
  const secondaryColor = useMotionValue("14 14 14");
  const background = useMotionTemplate`
        linear-gradient(
            to bottom,
            rgb(${primaryColor}) 20%,
            rgb(${secondaryColor}),
            rgb(${primaryColor})
        )
    `;

  const horizontalScrollTransform = useTransform(
    scrollYProgress,
    [0.5, 0.9],
    [0, -windowSize.width * 1.1],
  );

  const horizontalScroll = useSpring(horizontalScrollTransform, {
    stiffness: 100,
    damping: 20,
  });

  const cardsHorizontalPosition = useSpring(
    useTransform(
      scrollYProgress,
      [0.3, 0.5],
      [-windowSize.width * 2, -windowSize.width * 0.98],
    ),
    {
      stiffness: 100,
      damping: 20,
    },
  );

  const secondTextHorizontalPosition = useSpring(
    useTransform(scrollYProgress, [0.3, 0.5], [0, -400]),
    {
      stiffness: 100,
      damping: 20,
    },
  );

  const triggerGradientAnimation = (progress: number) => {
    if (progress < 0.4) {
      animate(primaryColor, "14 14 14", { duration: 1 });
      animate(secondaryColor, "14 14 14", { duration: 1 });
    } else if (progress >= 0.4) {
      animate(primaryColor, "14 14 14", { duration: 1 });
      animate(secondaryColor, "84 13 0", { duration: 1 });
    }
  };

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      triggerGradientAnimation(latest);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  const handRotate = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0, -20]),
    { stiffness: 100, damping: 20 },
  );

  const handY = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.2],
      [windowSize.height * 0.05, windowSize.height * 0.3],
    ),
    {
      stiffness: 100,
      damping: 20,
    },
  );

  const handOpacity = useSpring(
    useTransform(scrollYProgress, [0.18, 0.2], [1, 0]),
    { stiffness: 100, damping: 20 },
  );

  const candleX = useSpring(
    useTransform(
      scrollYProgress,
      [0.24, 0.4, 0.5],
      [
        0.65 * windowSize.width,
        0.35 * windowSize.width,
        0.15 * windowSize.width,
      ],
    ),
    { stiffness: 100, damping: 20 },
  );

  const candleFireScale = useSpring(
    useTransform(scrollYProgress, [0.2, 0.24, 0.4], [0, 0.3, 1.6]),
    { stiffness: 100, damping: 20 },
  );

  const firstTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.22, 0.25],
    [1, 1, 0, 0],
  );

  const secondTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.28],
    [0, 0, 1],
  );

  return (
    <section ref={sectionRef} className="relative h-[1000vh] w-full">
      <motion.div
        ref={containerRef}
        className="sticky left-0 top-0 h-[100dvh] w-full overflow-hidden"
        style={{
          background,
        }}
      >
        <motion.div
          className="h-full w-screen"
          style={{
            x: horizontalScroll,
          }}
        >
          <motion.p
            style={{ opacity: firstTextOpacity }}
            className="absolute left-20 top-48 w-[500px] text-justify text-white"
          >
            Simbol untuk tetap sadar akan nilai diri dan perjalanan hidup.
            Kesulitan menjadi bagian dari proses, untuk mempertahankan motivasi
            diri seseorang harus hadir dalam perjuangan, menerima setiap
            tantangan sebagai bagian dari perjalanan menuju aktualisasi diri.
          </motion.p>

          <motion.p
            style={{
              opacity: secondTextOpacity,
              x: secondTextHorizontalPosition,
            }}
            className="absolute bottom-24 left-20 w-[500px] text-justify text-white"
          >
            Dengan melewati sebuah perjalanan panjang penuh dengan rintangan,
            pada akhirnya, Api Kehadiran menggambarkan kekuatan batin untuk
            terus berusaha dan menemukan makna dalam setiap langkah, sekecil apa
            pun itu, sehingga tujuan atau aktualisasi diri tetap dalam
            jangkauan.
          </motion.p>

          <motion.div
            style={{
              rotate: handRotate,
              translateY: handY,
              opacity: handOpacity,
            }}
            className="absolute -right-8 aspect-[783/621] h-2/3 w-1/3"
          >
            <Image
              src="/img/hand-match-desktop.png"
              alt="Hand Match"
              draggable={false}
              fill
              priority
            />
          </motion.div>

          <motion.div
            style={{
              x: candleX,
            }}
            className="absolute bottom-0"
          >
            <motion.div
              style={{
                scale: candleFireScale,
                transformOrigin: "center bottom",
              }}
              className="absolute bottom-[154px] right-[68px] aspect-[148/203] h-[203px] w-[148px]"
            >
              <Image
                src="/img/candle-fire.png"
                alt="Candle Fire"
                draggable={false}
                fill
                priority
              />
            </motion.div>

            <div className="relative aspect-[376/299] h-[220px] w-[296px]">
              <Image
                src="/img/candle-out-desktop.png"
                alt="Candle Out"
                draggable={false}
                fill
                priority
              />
            </div>
          </motion.div>

          <motion.div
            style={{
              right: cardsHorizontalPosition,
            }}
            className="absolute flex translate-y-1/2 items-center gap-20"
          >
            {frameCardData.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ y: 0 }}
                animate={{ y: -20 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 1.75,
                  ease: "easeInOut",
                  bounce: 0.5,
                  stiffness: 100,
                  mass: 1,
                  delay: idx * 0.5,
                }}
              >
                <FrameCard
                  title={card.title}
                  content={card.content}
                  rotation={card.rotation}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        {/* Background Texture */}
        <div className="absolute left-0 top-0 z-10 h-[100dvh] w-full opacity-[0.15]">
          <Image
            src="/img/paper-texture-4.png"
            alt="Paper Texture"
            draggable={false}
            fill
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};

export default DesktopSection2;
