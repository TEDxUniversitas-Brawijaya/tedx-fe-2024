"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomePageDesktop() {
  const { scrollYProgress } = useScroll();

  const opacityFilter = useTransform(scrollYProgress, [0.5, 0.7], [0, 0.6]);
  const opacityTexture = useTransform(scrollYProgress, [0.5, 0.7], [0.1, 0.05]);
  const opacityText = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  const leftCircleX = useTransform(scrollYProgress, [0.4, 0.8], [0, -70]);
  const rightCircleX = useTransform(scrollYProgress, [0.4, 0.8], [0, 70]);
  const smoothLeftCircleX = useSpring(leftCircleX, {
    stiffness: 100,
    damping: 30,
  });
  const smoothRightCircleX = useSpring(rightCircleX, {
    stiffness: 100,
    damping: 30,
  });

  const leftCloud1X = useTransform(scrollYProgress, [0.4, 0.7], [0, -200]);
  const rightCloud1X = useTransform(scrollYProgress, [0.4, 0.7], [0, 200]);
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
    <main className="top-0 flex h-[200vh] justify-center">
      <div className="fixed -z-20 h-screen w-full bg-tedx-green" />
      <section className="flex h-screen w-full items-center justify-center">
        <motion.div
          className="fixed z-20 h-screen w-full bg-tedx-black"
          style={{ opacity: opacityFilter }}
        />
        <motion.div
          className="fixed z-20 h-screen w-full bg-tedx-green"
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
            className="absolute -top-[60vh] right-52 aspect-[1.2/2] w-[400px]"
            style={{
              x: smoothRightHandX,
              y: smoothRightHandY,
              rotate: smoothHandRotate,
              scale: smoothHandScale,
            }}
          >
            <Image src={"/img/circular-hand.png"} alt="Hand" fill />
          </motion.div>
          <motion.div
            className="absolute -bottom-[60vh] left-52 aspect-[1.2/2] w-[400px]"
            style={{
              x: smoothLeftHandX,
              y: smoothLeftHandY,
              rotate: smoothHandRotate,
              scale: smoothHandScale,
            }}
          >
            <Image
              src={"/img/circular-hand.png"}
              alt="Hand"
              fill
              className="rotate-180"
            />
          </motion.div>

          {/* Cloud 1 */}
          <motion.div
            className="absolute -top-[45vh] right-14 aspect-[97/65] w-[700px]"
            style={{ x: smoothRightCloud1X }}
          >
            <Image
              src={"/img/cloud-blue-1.png"}
              alt="Blue Cloud"
              fill
              priority
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-[55vh] left-14 aspect-[97/65] w-[700px]"
            style={{ x: smoothLeftCloud1X }}
          >
            <Image
              src={"/img/cloud-blue-1.png"}
              alt="Blue Cloud"
              fill
              priority
              className="rotate-180"
            />
          </motion.div>

          {/* Cloud 2 */}
          <motion.div
            className="absolute -right-[17vw] -top-[68vh] aspect-[8/9] w-[500px]"
            style={{ x: smoothRightCloud2X }}
          >
            <Image src={"/img/cloud-blue-2.png"} alt="Blue Cloud" fill />
          </motion.div>
          <motion.div
            className="absolute -bottom-[68vh] -left-[17vw] aspect-[8/9] w-[500px]"
            style={{ x: smoothLeftCloud2X }}
          >
            <Image
              src={"/img/cloud-blue-2.png"}
              alt="Blue Cloud"
              fill
              className="rotate-180"
            />
          </motion.div>

          {/* Cloud 3 */}
          <motion.div
            className="absolute -bottom-[75vh] -right-[7vw] aspect-[50/97] w-[300px]"
            style={{ x: smoothRightCloud3X }}
          >
            <Image src={"/img/cloud-blue-3.png"} alt="Blue Cloud" fill />
          </motion.div>
          <motion.div
            className="absolute -left-[7vw] -top-[75vh] aspect-[50/97] w-[300px]"
            style={{ x: smoothLeftCloud3X }}
          >
            <Image
              src={"/img/cloud-blue-3.png"}
              alt="Blue Cloud"
              fill
              className="rotate-180"
            />
          </motion.div>

          {/* Cloud 4 */}
          <motion.div
            className="absolute -right-[5vw] -top-[37vh] aspect-[4/9] w-[250px]"
            style={{ x: smoothRightCloud4X }}
          >
            <Image src={"/img/cloud-blue-4.png"} alt="Blue Cloud" fill />
          </motion.div>
          <motion.div
            className="absolute -bottom-[37vh] -left-[5vw] aspect-[4/9] w-[250px]"
            style={{ x: smoothLeftCloud4X }}
          >
            <Image
              src={"/img/cloud-blue-4.png"}
              alt="Blue Cloud"
              fill
              className="rotate-180"
            />
          </motion.div>
        </div>

        <motion.div
          className={`fixed bottom-20 left-20 z-40 w-1/2 space-y-5 text-2xl font-bold text-tedx-white`}
          style={{ opacity: opacityText }}
        >
          <h2
            className="z-50"
            style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
          >
            <span>Mantra Diri :</span>
            <br />
            <span className="font-playfair-display text-6xl">
              Menembus Batas, Menyelami Realitas.
            </span>
          </h2>
          <button>
            <Link
              href={"about-us"}
              className="rounded-md bg-tedx-red px-7 py-3 text-base font-semibold transition-all duration-150 hover:bg-tedx-red/80"
            >
              Jelajahi Mantramu
            </Link>
          </button>
        </motion.div>
      </section>
    </main>
  );
}
