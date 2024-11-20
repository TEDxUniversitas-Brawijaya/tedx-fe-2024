import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function DesktopSection3() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const card1Y = useTransform(scrollYProgress, [0, 0.3], ["1200", "0"]);
  const smoothCard1Y = useSpring(card1Y, { stiffness: 100, damping: 20 });

  const card2Y = useTransform(scrollYProgress, [0.2, 0.6], ["1200", "0"]);
  const smoothCard2Y = useSpring(card2Y, { stiffness: 100, damping: 20 });

  const card3Y = useTransform(scrollYProgress, [0.5, 1], ["600", "0"]);
  const smoothCard3Y = useSpring(card3Y, { stiffness: 100, damping: 20 });

  return (
    <section
      className="relative z-0 h-[400vh] bg-tedx-green text-center text-white"
      ref={sectionRef}
    >
      <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-10 overflow-x-clip">
        <div className="absolute -top-40 z-50 aspect-[6.3/1] h-80">
          <Image src={"/img/awan.png"} alt="Awan" fill />
        </div>
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-10 overflow-clip">
          <div className="absolute top-0 h-screen w-full opacity-50">
            <Image src={"/img/paper-texture-5.png"} alt="Paper Texture" fill />
          </div>
          <div className="absolute -top-72 h-[593px] w-[711px]">
            <Image src={"/img/sun-2.png"} alt="Cloud" fill />
          </div>
          <motion.div
            className="absolute -top-24 left-36 aspect-[16/18] w-96"
            style={{
              y: smoothCard1Y,
            }}
          >
            <Image src={"/img/aksara-image-1.png"} alt="Cloud" fill />
          </motion.div>
          <motion.div
            className="absolute right-20 top-48 aspect-[5/4] w-96"
            style={{
              y: smoothCard2Y,
            }}
          >
            <Image src={"/img/aksara-image-2.png"} alt="Cloud" fill />
          </motion.div>
          <motion.div
            className="absolute -bottom-28 right-96 aspect-[5/4] w-[48rem]"
            style={{
              y: smoothCard3Y,
            }}
          >
            <Image src={"/img/aksara-image-3.png"} alt="Cloud" fill />
          </motion.div>
          <div className="absolute bottom-44 left-36 flex w-[20%] flex-col items-start gap-6 text-start">
            <h3 className="font-header text-[5rem]">Shelterville</h3>
            <p className="text-4xl font-semibold text-white/60">
              23 November 2024 13.00 WIB
            </p>
          </div>
          <div className="absolute top-[22rem] w-[60vw]">
            <a
              href="https://g.co/kgs/JVvzGCx"
              className="text-pretty font-header text-[6rem] leading-none hover:underline"
            >
              Catat tanggal <br /> & waktunya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
