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

const DesktopSection2 = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);

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

  const horizontalScroll = useTransform(
    scrollYProgress,
    [0.5, 0.9],
    [0, -windowWidth * 2.5],
  );

  const triggerGradientAnimation = (progress: number) => {
    if (progress < 0.4) {
      animate(primaryColor, "19 16 18", { duration: 1 });
      animate(secondaryColor, "19 16 18", { duration: 1 });
    } else if (progress >= 0.4) {
      animate(primaryColor, "19 16 18", { duration: 1 });
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

  const handY = useSpring(useTransform(scrollYProgress, [0, 0.2], [0, 320]), {
    stiffness: 100,
    damping: 20,
  });

  const handOpacity = useSpring(
    useTransform(scrollYProgress, [0.18, 0.2], [1, 0]),
    { stiffness: 100, damping: 20 },
  );

  const candleX = useSpring(
    useTransform(scrollYProgress, [0.24, 0.4], [0, -0.3 * windowWidth]),
    { stiffness: 100, damping: 20 },
  );

  const candleFireScale = useSpring(
    useTransform(scrollYProgress, [0.24, 0.4], [1, 1.6]),
    { stiffness: 100, damping: 20 },
  );

  const firstTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.24],
    [1, 1, 0],
  );

  const secondTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.24],
    [0, 0, 1],
  );

  const candleFireOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.24],
    [0, 0, 1],
  );

  return (
    <section ref={sectionRef} className="relative h-[2500vh] w-full">
      <motion.div
        ref={containerRef}
        className="sticky left-0 top-0 h-screen w-full overflow-hidden"
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
            className="absolute left-10 top-48 w-[500px] text-justify text-white"
          >
            Simbol untuk tetap sadar akan nilai diri dan perjalanan hidup.
            Kesulitan menjadi bagian dari proses, untuk mempertahankan motivasi
            diri seseorang harus hadir dalam perjuangan, menerima setiap
            tantangan sebagai bagian dari perjalanan menuju aktualisasi diri.
          </motion.p>

          <motion.p
            style={{ opacity: secondTextOpacity }}
            className="absolute bottom-24 left-10 w-[500px] text-justify text-white"
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
            className="absolute -right-8 aspect-[783/621] h-[600px] w-[520px] translate-y-1/3"
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
            className="absolute bottom-0 left-[calc(100vw-32%)]"
          >
            <motion.div
              style={{
                opacity: candleFireOpacity,
                scale: candleFireScale,
                transformOrigin: "center bottom",
              }}
              className="absolute bottom-[154px] right-16 aspect-[148/203] h-[203px] w-[148px]"
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

          <div className="absolute -right-[140%] flex translate-y-1/2 items-center gap-20">
            <FrameCard
              title="Menjaga"
              content="Ditengah perjalanan hidup yang berwarna ada kalanya kehilangan arah. Terkadang semuanya terasa berat, api semangat mulai meredup. Membuat kita bertanya-tanya tentang makna dan arah dari setiap usaha yang telah dilakukan. Seolah terperangkap dalam kegalapan keraguan."
              rotation="5.35deg"
            />
            <FrameCard
              title="Terperangkap"
              content="Kehidupan bukan hanya keteguhan individu, melainkan tentang bagaimana kita bersandar pada orang lain. Seperti halnya api yang kecil dapat tumbuh besar bergabung dengan api lainnya. Jangan pernah ragu berbagi api. Kita lebih kuat bersama."
              rotation="-6.79deg"
            />
            <FrameCard
              title="Bergejolak"
              content="Ketekunan bukanlah tentang kekuatan yang besar, melainkan tentang keberanian untuk terus melangkah meski dalam kesulitan. tetaplah hadir, tetaplah bertahan. Memilih untuk tidak menyerah, meskipun hanya ada sedikit cahaya yang tersisa. tetapi Api Kehadiran akan tetap ada, tumbuh, dan menyala lebih terang."
              rotation="2.94deg"
            />
          </div>
        </motion.div>
        {/* Background Texture */}
        <div className="absolute left-0 top-0 z-10 h-screen w-full opacity-[0.15]">
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
