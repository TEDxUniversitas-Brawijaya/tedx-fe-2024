import { motion } from "framer-motion";
import Image from "next/image";

export default function MobileSection1() {
  return (
    <section className="relative z-0 min-h-screen overflow-hidden bg-[#0E0E0E]">
      <div className="sticky left-0 top-0 flex h-screen w-full items-center justify-center">
        <div className="absolute aspect-video h-[130%] opacity-25">
          <Image
            src={"/img/paper-texture-6-mobile.png"}
            alt="Paper Texture"
            fill
            priority
          />
        </div>

        <div className="text-center text-white">
          <h2 className="">Propaganda 2</h2>
          <h1 className="font-header text-5xl">Api Kehadiran</h1>
        </div>

        <motion.div
          className="absolute aspect-[0.74/1] w-[150%]"
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
            delay: 0,
          }}
        >
          <Image
            src="/img/flame-fragments-mobile-1.png"
            alt="Flame Fragments"
            fill
            priority
          />
        </motion.div>

        <motion.div
          className="absolute aspect-[0.74/1] w-[150%]"
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
            delay: 0.3,
          }}
        >
          <Image
            src="/img/flame-fragments-mobile-2.png"
            alt="Flame Fragments"
            fill
            priority
          />
        </motion.div>

        <motion.div
          className="absolute aspect-[0.74/1] w-[145%]"
          initial={{ y: 0, x: 20 }}
          animate={{ y: -20 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1.75,
            ease: "easeInOut",
            bounce: 0.5,
            stiffness: 100,
            mass: 1,
            delay: 0.6,
          }}
        >
          <Image
            src="/img/flame-fragments-mobile-3.png"
            alt="Flame Fragments"
            fill
            priority
          />
        </motion.div>

        <div className="absolute bottom-0 h-[35%] w-full bg-gradient-to-t from-[#0E0E0E] from-5% to-transparent to-80%" />
      </div>
    </section>
  );
}
