import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Section2() {
  const containerRef = useRef(null);
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
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const horizontalMovement = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    [0, -windowSize.width * 2],
  );
  const smoothHorizontalMovement = useSpring(horizontalMovement, {
    stiffness: 100,
    damping: 20,
  });

  const fireOpacity = useTransform(scrollYProgress, [0.1, 0.2], [1, 0]);
  const smoothFireOpacity = useSpring(fireOpacity, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <section ref={containerRef} className="relative h-[1000vh] bg-[#1A1A1A]">
      <motion.div className="sticky left-0 top-0 flex h-screen items-start">
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
          <div className="absolute h-screen w-full bg-gradient-to-b from-[#0F0F0F] to-transparent" />
          <div className="absolute h-screen w-full bg-gradient-to-b from-transparent via-[#082427] to-[#131012]" />
          <motion.div
            className="absolute -top-2 aspect-[2.43/1] h-[48rem] rotate-180 scale-x-[-1]"
            style={{
              opacity: smoothFireOpacity,
            }}
          >
            <Image
              src="/img/fire-bottom-mantra-diri.png"
              alt="Fire Mantra Diri"
              fill
            />
          </motion.div>

          <div className="absolute aspect-video h-screen">
            <Image
              src="/img/paper-texture-2.png"
              alt="Paper Texture"
              fill
              priority
              className="opacity-45"
            />
          </div>

          {/* horizontal scroll section */}
          <motion.div
            className="relative flex h-screen w-full flex-shrink-0 overflow-visible"
            style={{ x: smoothHorizontalMovement }}
          >
            <div className="flex h-screen w-full flex-shrink-0 items-center justify-center">
              <div className="absolute flex flex-col gap-6 text-center px-4">
                <span className="text-base text-white lg:text-2xl">
                  SELAMAT DATANG DI
                </span>
                <h2 className="font-header text-2xl text-white lg:text-6xl">
                  TEDxUniversitasBrawijaya 2025 <br /> &apos;Mantra Diri:
                  Menembus Batas, Menyelami Realitas&apos;
                </h2>
                <p className="text-sm italic text-[#b9b9b9]">
                  Sesaat lagi kamu akan sampai di perjalanan terakhir pencarian{" "}
                  <br />
                  &apos;MANTRA DIRI&apos; besama TEDxUniversitasBrawijaya 2025
                </p>
              </div>
            </div>
            <div className="flex h-screen w-full flex-shrink-0 items-center justify-center">
              <div className="absolute flex w-full max-w-sm flex-col gap-10 text-center px-4">
                <p className="text-sm italic text-[#b9b9b9]">
                  Rangkaian puncak acara TEDxUniversitasBrawijaya 2025 mengusung
                  tema &quot;Mantra Diri: Menembus Batas, Menyelami
                  Realitas&quot;. Inti dari acara ini adalah talkshow bersama
                  enam speaker yang akan menyampaikan gagasan inspiratif mereka
                  kepada audiens. Rangkaian puncak acara ini dijadwalkan
                  berlangsung pada:
                </p>
                <p className="text-sm italic text-[#b9b9b9]">
                  Hari/Tanggal : Sabtu, 22 Februari 2024 <br />
                  Waktu : 10.00 - 16.30 WIB <br />
                  Tempat : Universitas Brawijaya
                </p>
                <p className="text-sm italic text-[#b9b9b9]">
                  Selain talkshow bersama para speaker, TEDxUniversitasBrawijaya
                  2025 juga menghadirkan berbagai interactive activities, mulai
                  dari interactive exhibition hingga interactive booth yang
                  melibatkan komunitas lokal. Kegiatan ini dirancang untuk
                  memaksimalkan penyampaian pesan dari grand theme yang diusung
                  melalui beragam pengalaman menarik bagi audiens.
                </p>
              </div>
            </div>
            <div className="flex h-screen w-full flex-shrink-0 items-center justify-center">
              <div className="absolute flex flex-col gap-6 text-center px-4">
                <span className="text-base text-white lg:text-2xl">
                  MENGENAL SPEAKER
                </span>
                <h2 className="font-header text-3xl text-white lg:text-6xl">
                  TEDxUniversitas <br /> Brawijaya 2025
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
