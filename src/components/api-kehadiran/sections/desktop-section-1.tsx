import { motion } from "framer-motion";
import Image from "next/image";

const DesktopSection1 = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center gap-4 overflow-hidden text-white">
      <h1 className="z-20 text-3xl">Propaganda 2</h1>
      <h2 className="z-20 font-header text-8xl">Api Kehadiran</h2>

      <motion.div
        className="absolute left-0 top-0 z-10 h-screen w-full"
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
          src="/img/flame-fragments-desktop-1.png"
          alt="Glass"
          className="object-cover"
          draggable={false}
          fill
          priority
        />
      </motion.div>

      <motion.div
        className="absolute left-0 top-0 z-10 h-screen w-full"
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
          src="/img/flame-fragments-desktop-2.png"
          alt="Glass"
          className="object-cover"
          draggable={false}
          fill
          priority
        />
      </motion.div>

      <motion.div
        className="absolute left-0 top-0 z-10 h-screen w-full"
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
          delay: 0.6,
        }}
      >
        <Image
          src="/img/flame-fragments-desktop-3.png"
          alt="Glass"
          className="object-cover"
          draggable={false}
          fill
          priority
        />
      </motion.div>

      <div className="absolute left-0 top-0 h-screen w-full opacity-70">
        <Image
          src="/img/paper-texture-6.png"
          alt="Paper Texture"
          draggable={false}
          fill
          priority
        />
      </div>
    </section>
  );
};

export default DesktopSection1;
