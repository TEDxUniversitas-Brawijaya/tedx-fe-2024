import { motion } from "framer-motion";
import Image from "next/image";

export default function MobileSection1({ onClick }: { onClick: () => void }) {
  return (
    <motion.section className="relative h-dvh overflow-clip">
      <motion.div
        className="absolute -left-4 -top-4 size-[250px]"
        exit={{
          opacity: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <Image src="/svg/raflesia.svg" alt="Raflesia" fill priority />
      </motion.div>

      <motion.div
        className="transfrom absolute left-1/2 top-[35%] flex w-max -translate-x-1/2 flex-col items-center justify-center"
        exit={{
          opacity: 0,
        }}
        transition={{
          delay: 0.7,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <h2 className="text-xl">Propaganda 1</h2>
        <h1 className="mb-8 mt-5 text-center font-header text-4xl">
          Waktu Wicara
        </h1>
        <button
          className="rounded-2xl bg-tedx-red px-12 py-3 font-bold text-white"
          onClick={onClick}
        >
          Jelajah
        </button>
      </motion.div>

      {/* its not really that responsive */}
      <motion.div
        className="absolute -bottom-0 left-0 h-[50%] w-screen"
        exit={{
          opacity: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className="absolute left-1/2 top-0 h-[70vh] w-screen -translate-x-1/2 transform overflow-y-clip">
          <Image src="/svg/mask-bg.svg" alt="Mask Background" fill priority />
        </div>
      </motion.div>
    </motion.section>
  );
}
