"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  const { scrollYProgress } = useScroll();

  const opacityFilter = useTransform(scrollYProgress, [0.5, 0.7], [0, 0.6]);
  const opacityTexture = useTransform(scrollYProgress, [0.5, 0.7], [0.2, 0.1]);
  const opacityText = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  const leftCircleX = useTransform(scrollYProgress, [0.4, 0.8], [0, -70]);
  const rightCircleX = useTransform(scrollYProgress, [0.4, 0.8], [0, 70]);
  const smoothLeftCircleX = useSpring(leftCircleX, {
    stiffness: 100,
    damping: 40,
  });
  const smoothRightCircleX = useSpring(rightCircleX, {
    stiffness: 100,
    damping: 40,
  });

  const leftCloud1X = useTransform(scrollYProgress, [0.4, 0.7], [0, -250]);
  const rightCloud1X = useTransform(scrollYProgress, [0.4, 0.7], [0, 250]);
  const smoothLeftCloud1X = useSpring(leftCloud1X, {
    stiffness: 100,
    damping: 40,
  });
  const smoothRightCloud1X = useSpring(rightCloud1X, {
    stiffness: 100,
    damping: 40,
  });

  const leftCloud2X = useTransform(scrollYProgress, [0.4, 0.8], [0, -200]);
  const rightCloud2X = useTransform(scrollYProgress, [0.4, 0.8], [0, 200]);
  const smoothLeftCloud2X = useSpring(leftCloud2X, {
    stiffness: 100,
    damping: 40,
  });
  const smoothRightCloud2X = useSpring(rightCloud2X, {
    stiffness: 100,
    damping: 40,
  });

  const leftCloud3X = useTransform(scrollYProgress, [0.5, 0.8], [0, -250]);
  const rightCloud3X = useTransform(scrollYProgress, [0.5, 0.8], [0, 250]);
  const smoothLeftCloud3X = useSpring(leftCloud3X, {
    stiffness: 100,
    damping: 40,
  });
  const smoothRightCloud3X = useSpring(rightCloud3X, {
    stiffness: 100,
    damping: 40,
  });

  const leftCloud4X = useTransform(scrollYProgress, [0.4, 0.9], [0, -210]);
  const rightCloud4X = useTransform(scrollYProgress, [0.4, 0.9], [0, 210]);
  const smoothLeftCloud4X = useSpring(leftCloud4X, {
    stiffness: 100,
    damping: 40,
  });
  const smoothRightCloud4X = useSpring(rightCloud4X, {
    stiffness: 100,
    damping: 40,
  });

  const rightHandX = useTransform(scrollYProgress, [0.2, 0.8], [0, 50]);
  const leftHandX = useTransform(scrollYProgress, [0.2, 0.8], [0, -50]);
  const smoothRightHandX = useSpring(rightHandX, {
    stiffness: 100,
    damping: 40,
  });
  const smoothLeftHandX = useSpring(leftHandX, {
    stiffness: 100,
    damping: 40,
  });

  const rightHandY = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.8],
    [0, 50, -200],
  );
  const leftHandY = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.8],
    [0, 50, 200],
  );
  const smoothRightHandY = useSpring(rightHandY, {
    stiffness: 100,
    damping: 40,
  });
  const smoothLeftHandY = useSpring(leftHandY, {
    stiffness: 100,
    damping: 40,
  });

  const handRotate = useTransform(scrollYProgress, [0.2, 0.8], [0, -40]);
  const smoothHandRotate = useSpring(handRotate, {
    stiffness: 100,
    damping: 40,
  });

  const handScale = useTransform(scrollYProgress, [0, 0.2, 0.8], [1, 1, 1.5]);
  const smoothHandScale = useSpring(handScale, {
    stiffness: 100,
    damping: 40,
  });

  return (
    <main className="bg-tedx-green top-0 flex h-[200vh] justify-center">
      <section className="flex h-screen w-full items-center justify-center">
        <motion.div
          className="bg-tedx-black fixed z-20 h-screen w-full"
          style={{ opacity: opacityFilter }}
        />
        <motion.div
          className="fixed z-20 h-screen w-full"
          style={{ opacity: opacityTexture }}
        >
          <Image src={"/img/paper-texture-1.png"} alt="Paper Texture" fill />
        </motion.div>
        <div className="fixed z-10">
          {/* X */}
          <motion.div className="relative size-52">
            <Image src={"/svg/x-shadow.svg"} alt="X" fill />
          </motion.div>

          {/* Circle */}
          <motion.div
            className="absolute -left-1/2 -top-1/2 aspect-[1/2] w-52"
            style={{ x: smoothLeftCircleX }}
          >
            <Image src={"/svg/circle-eyes-left.svg"} alt="Circle Eyes" fill />
          </motion.div>
          <motion.div
            className="absolute -right-1/2 -top-1/2 aspect-[1/2] w-52"
            style={{ x: smoothRightCircleX }}
          >
            <Image src={"/svg/circle-eyes-right.svg"} alt="Circle Eyes" fill />
          </motion.div>
        </div>

        <div className="fixed w-full">
          {/* Hand */}
          <motion.div
            className="absolute -top-[52vh] right-28 aspect-[1/1] w-[600px]"
            style={{
              x: smoothRightHandX,
              y: smoothRightHandY,
              rotate: smoothHandRotate,
              scale: smoothHandScale,
            }}
          >
            <Image src={"/svg/circular-hand.svg"} alt="Hand" fill />
          </motion.div>
          <motion.div
            className="absolute -bottom-[52vh] left-28 aspect-[1/1] w-[600px]"
            style={{
              x: smoothLeftHandX,
              y: smoothLeftHandY,
              rotate: smoothHandRotate,
              scale: smoothHandScale,
            }}
          >
            <Image
              src={"/svg/circular-hand.svg"}
              alt="Hand"
              fill
              className="rotate-180"
            />
          </motion.div>

          {/* Cloud 1 */}
          <motion.div
            className="absolute -top-[68vh] right-20 aspect-[1/1.2] w-[700px]"
            style={{ x: smoothRightCloud1X }}
          >
            <Image src={"/svg/cloud-blue-1.svg"} alt="Blue Cloud" fill />
          </motion.div>
          <motion.div
            className="absolute -bottom-[68vh] left-20 aspect-[1/1.2] w-[700px]"
            style={{ x: smoothLeftCloud1X }}
          >
            <Image
              src={"/svg/cloud-blue-1.svg"}
              alt="Blue Cloud"
              fill
              className="rotate-180"
            />
          </motion.div>

          {/* Cloud 2 */}
          <motion.div
            className="absolute -right-[17vw] -top-[58vh] aspect-[16/9] w-[700px]"
            style={{ x: smoothRightCloud2X }}
          >
            <Image src={"/svg/cloud-blue-2.svg"} alt="Blue Cloud" fill />
          </motion.div>
          <motion.div
            className="absolute -bottom-[58vh] -left-[17vw] aspect-[16/9] w-[700px]"
            style={{ x: smoothLeftCloud2X }}
          >
            <Image
              src={"/svg/cloud-blue-2.svg"}
              alt="Blue Cloud"
              fill
              className="rotate-180"
            />
          </motion.div>

          {/* Cloud 3 */}
          <motion.div
            className="absolute -bottom-[78vh] -right-[20vw] aspect-[1.2/1] w-[700px]"
            style={{ x: smoothRightCloud3X }}
          >
            <Image src={"/svg/cloud-blue-3.svg"} alt="Blue Cloud" fill />
          </motion.div>
          <motion.div
            className="absolute -left-[20vw] -top-[78vh] aspect-[1.2/1] w-[700px]"
            style={{ x: smoothLeftCloud3X }}
          >
            <Image
              src={"/svg/cloud-blue-3.svg"}
              alt="Blue Cloud"
              fill
              className="rotate-180"
            />
          </motion.div>

          {/* Cloud 4 */}
          <motion.div
            className="absolute -right-[20vw] -top-[38vh] aspect-[1.2/1] w-[700px]"
            style={{ x: smoothRightCloud4X }}
          >
            <Image src={"/svg/cloud-blue-4.svg"} alt="Blue Cloud" fill />
          </motion.div>
          <motion.div
            className="absolute -bottom-[38vh] -left-[20vw] aspect-[1.2/1] w-[700px]"
            style={{ x: smoothLeftCloud4X }}
          >
            <Image
              src={"/svg/cloud-blue-4.svg"}
              alt="Blue Cloud"
              fill
              className="rotate-180"
            />
          </motion.div>
        </div>

        <motion.div
          className={`text-tedx-white fixed bottom-20 left-20 z-40 w-1/2 space-y-5 text-2xl font-black`}
          style={{ opacity: opacityText }}
        >
          <h2
            className="z-50"
            style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
          >
            <span>Mantra Diri :</span>
            <br />
            <span className="font-wulkan-display text-6xl">
              Menembus Batas, Menyelami Realitas.
            </span>
          </h2>
          <button>
            <Link
              href={"about-us"}
              className="bg-tedx-red hover:bg-tedx-red/80 rounded-md px-7 py-3 text-base font-semibold transition-all duration-150"
            >
              Jelajahi Mantramu
            </Link>
          </button>
        </motion.div>
      </section>
    </main>
  );
}
