import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function DesktopSection1() {
  const { scrollYProgress } = useScroll();

  const leftCloudX = useTransform(scrollYProgress, [0, 0.15], [-900, -300]);
  const rightCloudX = useTransform(scrollYProgress, [0, 0.15], [900, 400]);
  const smoothLeftCloudX = useSpring(leftCloudX, {
    stiffness: 100,
    damping: 20,
  });
  const smoothRightCloudX = useSpring(rightCloudX, {
    stiffness: 100,
    damping: 20,
  });

  const sunScale = useTransform(scrollYProgress, [0.05, 0.15], [0, 5]);
  const smoothSunScale = useSpring(sunScale, {
    stiffness: 100,
    damping: 20,
  });

  const sunY = useTransform(scrollYProgress, [0, 0.05, 0.15], [0, -200, -400]);
  const smoothSunY = useSpring(sunY, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <section className="z-30 h-[400vh] bg-tedx-blue-sky text-tedx-white">
      <div className="sticky top-0 flex h-screen w-full items-end justify-center">
        {/* Sun */}
        <motion.div
          className="absolute bottom-40 right-64 aspect-square w-32"
          style={{ scale: smoothSunScale, y: smoothSunY }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <Image src={"/svg/sun.svg"} alt="Hand" fill />
        </motion.div>

        <div className="relative h-full w-full overflow-hidden">
          {/* Hand */}
          <div className="absolute -bottom-10 right-52 aspect-[524/788] w-[20rem]">
            <Image src={"/svg/hand-up.svg"} alt="Hand" fill />
          </div>
        </div>

        {/* Cloud */}
        <motion.div
          className="absolute -bottom-20 aspect-[13/4] w-[70%]"
          style={{ x: smoothLeftCloudX }}
        >
          <Image src={"/svg/cloud-white.svg"} alt="Hand" fill />
        </motion.div>
        <motion.div
          className="absolute -bottom-20 aspect-[13/4] w-[60%]"
          style={{ x: smoothRightCloudX }}
        >
          <Image
            src={"/svg/cloud-white.svg"}
            alt="Hand"
            fill
            className="rotate-[5deg]"
          />
        </motion.div>

        {/* Leaf */}
        <div className="absolute -left-24 top-0 size-80">
          <Image src={"/svg/leaf.svg"} alt="Leaf" fill />
        </div>
        <div className="absolute bottom-[40%] left-28 size-20 -rotate-[35deg] blur-sm">
          <Image src={"/svg/leaf.svg"} alt="Leaf" fill />
        </div>
        <div className="absolute bottom-10 left-[40%] z-20 size-32 -rotate-[20deg]">
          <Image src={"/svg/leaf.svg"} alt="Leaf" fill />
        </div>

        <div className="absolute h-screen w-full opacity-50">
          <Image src={"/img/paper-texture-2.png"} alt="Paper Texture" fill />
        </div>

        <div className="absolute left-52 top-52 w-1/3 space-y-5">
          <h2 className="font-header text-6xl font-bold">Seputar TED</h2>
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
