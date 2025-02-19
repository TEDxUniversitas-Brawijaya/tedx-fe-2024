import { motion } from "framer-motion";
import Image from "next/image";

export default function Section4() {
  return (
    <section className="relative h-screen bg-[#1A1A1A]">
      <motion.div className="sticky left-0 top-0 flex h-screen items-start">
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
          <div className="absolute h-screen w-full bg-gradient-to-b from-[#0F0F0F] to-transparent" />
          <div className="absolute h-screen w-full bg-gradient-to-b from-transparent via-[#082427] to-[#131012]" />

          <div className="absolute aspect-video h-screen">
            <Image
              src="/img/paper-texture-2.png"
              alt="Paper Texture"
              fill
              priority
              className="opacity-25"
            />
          </div>

          <div className="z-0 flex h-screen w-full flex-col items-center justify-center gap-16">
            <div className="z-10 left-0 flex flex-col gap-20 px-4 text-center sm:absolute sm:left-8 sm:text-start md:left-12 lg:left-16">
              <div className="flex flex-col items-center gap-6 sm:items-start">
                <span className="text-base text-white lg:text-2xl">
                  SPECIAL PERFORMANCE
                </span>
                <h2 className="text-center font-header text-3xl text-white lg:text-6xl">
                  TEDxUniversitas <br /> Brawijaya 2025
                </h2>
              </div>
              <p className="text-balance text-sm italic text-[#b9b9b9] sm:w-52 md:w-72 lg:w-96">
                Rangkaian puncak acara TEDxUniversitasBrawijaya 2025 mengusung
                tema &quot;Mantra Diri: Menembus Batas, Menyelami
                Realitas&quot;. Inti dari acara ini adalah talkshow bersama enam
                speaker yang akan menyampaikan gagasan inspiratif mereka kepada
                audiens. Rangkaian puncak acara ini dijadwalkan berlangsung
                pada:
              </p>
            </div>

            {/* TODO */}
            <div className="z-0 aspect-video w-full bg-white opacity-50 sm:absolute sm:right-8 sm:w-[70%] md:right-12 lg:right-16" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
