"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import CountdownTimer from "@/components/shared/countdown-timer";

const Section1 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };

  const photo1Y = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [1000, 200]),
    springConfig,
  );

  const photo1Rotation = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [0, 5.87]),
    springConfig,
  );

  const photo2Y = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [1000, 300]),
    springConfig,
  );

  const photo2Rotation = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [0, 2.46]),
    springConfig,
  );

  const photo3Y = useSpring(
    useTransform(scrollYProgress, [0, 1], [1000, 400]),
    springConfig,
  );

  const photo3Rotation = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -6.62]),
    springConfig,
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-5 pt-[62px] md:px-[80px] lg:h-[200dvh] lg:px-20"
    >
      <div className="sticky left-0 top-[120px] z-10 mt-[calc(100dvh-400px)]">
        <div className="mb-2 flex items-center gap-4 md:mb-4 lg:mb-6">
          <p className="text-base text-white lg:text-xl">
            Tiket bisa dibeli dalam
          </p>
          <CountdownTimer
            targetDate={new Date(2025, 1, 22, 12, 0, 0)}
            className="text-base text-white lg:text-xl"
          />
        </div>
        <h1 className="relative z-20 h-fit text-5xl font-bold leading-[1] text-white md:text-8xl lg:text-[120px]">
          INFORMASI <br /> TICKETING
        </h1>

        <div className="relative z-20 mt-8 w-full space-y-8 text-justify text-white/70 md:mt-12 lg:mt-20 lg:w-1/2">
          <p>
            Selamat datang di puncak perjalanan mencari Mantra Diri bersama
            TEDxUniversitasBrawijaya. Di titik ini kamu berkesempatan untuk
            mencari dan menjelajah Mantra Diri kamu sesuai dengan karakter diri
            kamu. Ini adalah waktu yang tepat untuk kamu belajar, melihat,
            mendengar, dan berinteraksi hingga menemukan Mantra Diri yang kamu
            cari.
          </p>
          <p>
            Setelah perjalanan panjang dengan berbagai batasan dan realita yang
            terlihat, saatnya menemukan Mantra Diri kamu. Dapatkan tiket puncak
            perjalanan pencarian Mantra Diri-mu di sini.
          </p>
        </div>
      </div>

      <motion.div
        className="absolute right-[7%] top-1/2 z-[5] hidden aspect-[418/287] h-[287px] w-[400px] -translate-y-1/2 lg:block"
        style={{
          y: photo1Y,
          rotate: photo1Rotation,
        }}
      >
        <Image
          src="/img/ticket-photo-1.png"
          alt="Ticket Photo 1"
          draggable={false}
          fill
          priority
        />
      </motion.div>

      <motion.div
        className="absolute right-[12%] top-1/2 z-[5] hidden aspect-[418/287] h-[287px] w-[400px] -translate-y-1/2 lg:block"
        style={{
          y: photo2Y,
          rotate: photo2Rotation,
        }}
      >
        <Image
          src="/img/ticket-photo-2.png"
          alt="Ticket Photo 2"
          draggable={false}
          fill
          priority
        />
      </motion.div>

      <motion.div
        className="absolute right-[8%] top-1/2 z-[5] hidden aspect-[418/287] h-[287px] w-[400px] -translate-y-1/2 lg:block"
        style={{
          y: photo3Y,
          rotate: photo3Rotation,
        }}
      >
        <Image
          src="/img/ticket-photo-3.png"
          alt="Ticket Photo 3"
          draggable={false}
          fill
          priority
        />
      </motion.div>

      <div className="absolute left-0 top-0 z-[5] h-[calc(100dvh-62px)] w-full">
        <Image
          src="/img/ticket-bg.png"
          alt="Ticket Background"
          className="object-cover"
          draggable={false}
          fill
          priority
        />
      </div>
    </section>
  );
};

export default Section1;
