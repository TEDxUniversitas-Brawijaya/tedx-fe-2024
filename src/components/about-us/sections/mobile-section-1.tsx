import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function MobileSection1() {
  const { scrollYProgress } = useScroll();

  const leftCloudX = useTransform(scrollYProgress, [0, 0.15], [-300, -100]);
  const rightCloudX = useTransform(scrollYProgress, [0, 0.15], [300, 100]);
  const smoothLeftCloudX = useSpring(leftCloudX, {
    stiffness: 100,
    damping: 20,
  });
  const smoothRightCloudX = useSpring(rightCloudX, {
    stiffness: 100,
    damping: 20,
  });

  const sunScale = useTransform(scrollYProgress, [0.05, 0.15], [0, 3]);
  const smoothSunScale = useSpring(sunScale, {
    stiffness: 100,
    damping: 20,
  });

  const sunY = useTransform(
    scrollYProgress,
    [0, 0.05, 0.15],
    [-1000, -700, -400],
  );
  const smoothSunY = useSpring(sunY, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <section className="bg-tedx-blue-sky text-tedx-white z-30 h-[300vh]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center">
        {/* Sun */}
        <motion.div
          className="absolute -right-10 bottom-40 aspect-square w-32"
          style={{ scale: smoothSunScale, y: smoothSunY }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <Image src={"/svg/sun.svg"} alt="Hand" fill />
        </motion.div>

        {/* Cloud */}
        <motion.div
          className="absolute -bottom-10 aspect-[13/4] w-[30rem]"
          style={{ x: smoothLeftCloudX }}
        >
          <Image src={"/svg/cloud-white.svg"} alt="Hand" fill />
        </motion.div>
        <motion.div
          className="absolute -bottom-10 aspect-[13/4] w-[27rem]"
          style={{ x: smoothRightCloudX }}
        >
          <Image src={"/svg/cloud-white.svg"} alt="Hand" fill />
        </motion.div>

        {/* Leaf */}
        <div className="absolute -left-24 top-0 size-80">
          <Image src={"/svg/leaf.svg"} alt="Leaf" fill />
        </div>
        <div className="absolute bottom-[40%] left-28 size-20 -rotate-[35deg] blur-sm">
          <Image src={"/svg/leaf.svg"} alt="Leaf" fill />
        </div>
        <div className="absolute bottom-10 left-[40%] size-32 -rotate-[20deg]">
          <Image src={"/svg/leaf.svg"} alt="Leaf" fill />
        </div>

        <div className="absolute h-screen w-full opacity-50">
          <Image src={"/img/paper-texture-2.png"} alt="Paper Texture" fill />
        </div>

        <div className="absolute z-10 flex h-screen w-full flex-col justify-end space-y-5 px-5 pb-32">
          <h2 className="font-wulkan-display text-6xl font-black leading-tight">
            Seputar TED
          </h2>
          <p className="text-xl">
            TED (Technology, Entertainment, Design) adalah organisasi nirlaba
            dengan semangat &quot;Ideas Worth Spreading&quot; yang tersebar luas
            melalui Talks singkat dan powerful.
          </p>
        </div>
      </div>
    </section>
  );
}
