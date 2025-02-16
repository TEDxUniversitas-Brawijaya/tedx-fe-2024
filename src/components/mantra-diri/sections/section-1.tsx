import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import CountdownTimer from "../ui/countdown-timer";

export default function Section1() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const gradientHeight = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3],
    ["50%", "40%", "0%"],
  );

  const blur = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3],
    ["blur(10px)", "blur(6px)", "blur(0px)"],
  );

  const topMaskValue = useTransform(
    scrollYProgress,
    [0, 0.2, 0.25, 0.3],
    [
      "radial-gradient(30% 30% at bottom, transparent calc(100% - 1px), black)",
      "radial-gradient(60% 60% at bottom, transparent calc(100% - 1px), black)",
      "radial-gradient(70% 70% at bottom, transparent calc(100% - 1px), black)",
      "radial-gradient(100% 100% at bottom, transparent calc(100% - 1px), black)",
    ],
  );

  const bottomMaskValue = useTransform(
    scrollYProgress,
    [0, 0.2, 0.25, 0.3],
    [
      "radial-gradient(30% 30% at top, transparent calc(100% - 1px), black)",
      "radial-gradient(60% 60% at top, transparent calc(100% - 1px), black)",
      "radial-gradient(70% 70% at top, transparent calc(100% - 1px), black)",
      "radial-gradient(100% 100% at top, transparent calc(100% - 1px), black)",
    ],
  );

  const humanScale = useTransform(scrollYProgress, [0.3, 0.6], [1, 1.6]);
  const smoothHumanScale = useSpring(humanScale, {
    stiffness: 100,
    damping: 20,
  });

  const cloud1X = useTransform(scrollYProgress, [0.3, 0.6], [0, 100]);
  const smoothCloud1X = useSpring(cloud1X, {
    stiffness: 100,
    damping: 20,
  });

  const cloud2X = useTransform(scrollYProgress, [0.3, 0.6], [0, -100]);
  const smoothCloud2X = useSpring(cloud2X, {
    stiffness: 100,
    damping: 20,
  });

  const cloud3X = useTransform(scrollYProgress, [0.3, 0.6], [0, -200]);
  const smoothCloud3X = useSpring(cloud3X, {
    stiffness: 100,
    damping: 20,
  });

  const fireTopY = useTransform(scrollYProgress, [0.85, 0.9], [-384, 0]);
  const smoothFireTopY = useSpring(fireTopY, {
    stiffness: 100,
    damping: 20,
  });

  const fireBottomY = useTransform(scrollYProgress, [0.85, 0.9], [768, 0]);
  const smoothFireBottomY = useSpring(fireBottomY, {
    stiffness: 100,
    damping: 20,
  });

  const fireCenterY = useTransform(scrollYProgress, [0.825, 0.9], [-1920, 0]);
  const smoothFireCenterY = useSpring(fireCenterY, {
    stiffness: 100,
    damping: 20,
  });

  const fireCenterCircleY = useTransform(
    scrollYProgress,
    [0.825, 0.9],
    [768, 0],
  );
  const smoothFireCenterCircleY = useSpring(fireCenterCircleY, {
    stiffness: 100,
    damping: 20,
  });

  const fireOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const smoothFireOpacity = useSpring(fireOpacity, {
    stiffness: 100,
    damping: 20,
  });

  const humanOpacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);
  const smoothHumanOpacity = useSpring(humanOpacity, {
    stiffness: 100,
    damping: 20,
  });

  const textOpacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);
  const smoothTextOpacity = useSpring(textOpacity, {
    stiffness: 100,
    damping: 20,
  });

  const cloudOpacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);
  const smoothCloudOpacity = useSpring(cloudOpacity, {
    stiffness: 100,
    damping: 20,
  });

  const text2Opacity = useTransform(scrollYProgress, [0.85, 0.9], [0, 1]);
  const smoothText2Opacity = useSpring(text2Opacity, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <section
      ref={containerRef}
      className="relative h-[1000vh] bg-tedx-blue-dark"
    >
      <motion.div className="sticky left-0 top-0 flex h-screen items-start">
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
          <motion.div
            className="absolute bottom-60 aspect-[6.71/1] h-72"
            style={{
              filter: blur,
              opacity: smoothCloudOpacity,
              x: smoothCloud1X,
            }}
          >
            <Image
              src="/img/cloud-mantra-diri-1.png"
              alt="Cloud Mantra Diri"
              fill
              className="blur-md"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-24 aspect-[6.83/1] h-72"
            style={{
              filter: blur,
              opacity: smoothCloudOpacity,
              x: smoothCloud2X,
            }}
          >
            <Image
              src="/img/cloud-mantra-diri-2.png"
              alt="Cloud Mantra Diri"
              fill
              className="blur-md"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-0 aspect-[6.53/1] h-72"
            style={{
              filter: blur,
              opacity: smoothCloudOpacity,
              x: smoothCloud3X,
            }}
          >
            <Image
              src="/img/cloud-mantra-diri-3.png"
              alt="Cloud Mantra Diri"
              fill
              className="blur-md"
            />
          </motion.div>

          <motion.div
            className="absolute aspect-[1.53/1] h-full"
            style={{
              opacity: smoothFireOpacity,
            }}
          >
            <Image
              src="/img/fire-behind-mantra-diri.png"
              alt="Fire Mantra Diri"
              fill
            />
          </motion.div>
          <motion.div
            className="absolute bottom-0 aspect-[2.03/1] h-[48rem]"
            style={{
              y: smoothFireCenterCircleY,
            }}
          >
            <Image
              src="/img/fire-center-circle-mantra-diri.png"
              alt="Fire Mantra Diri"
              fill
            />
          </motion.div>
          <motion.div
            className="absolute aspect-video h-screen"
            style={{
              y: smoothFireCenterY,
            }}
          >
            <Image
              src="/img/fire-center-mantra-diri.png"
              alt="Fire Mantra Diri"
              fill
            />
          </motion.div>
          <motion.div
            className="absolute top-0 aspect-[5.01/1] h-96"
            style={{
              y: smoothFireTopY,
            }}
          >
            <Image
              src="/img/fire-top-mantra-diri.png"
              alt="Fire Mantra Diri"
              fill
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-2 aspect-[2.43/1] h-[48rem]"
            style={{
              y: smoothFireBottomY,
            }}
          >
            <Image
              src="/img/fire-bottom-mantra-diri.png"
              alt="Fire Mantra Diri"
              fill
            />
          </motion.div>

          <motion.div
            className="absolute bottom-0 aspect-[0.62/1] w-[32rem]"
            style={{
              filter: blur,
              scale: smoothHumanScale,
              opacity: smoothHumanOpacity,
            }}
          >
            <Image
              src="/img/human-mantra-diri.png"
              alt="Human Mantra Diri"
              fill
            />
          </motion.div>

          <div className="absolute h-screen w-screen">
            <motion.div
              className="absolute aspect-video h-[160vh]"
              style={{
                filter: blur,
              }}
            >
              <Image
                src="/img/paper-texture-2.png"
                alt="Paper Texture"
                fill
                priority
                className="opacity-45"
              />
            </motion.div>

            <motion.div className="absolute h-screen w-full bg-gradient-to-b from-[#0F0F0F] to-transparent" />
          </div>

          <motion.div
            className="absolute px-5 text-center text-white md:w-[70%] md:px-0 lg:w-[60%]"
            style={{
              filter: blur,
              opacity: smoothTextOpacity,
            }}
          >
            <p className="mb-2 text-xl lg:text-3xl">Main Event</p>
            <h2 className="font-header text-5xl font-bold lg:text-7xl">
              Puncak Mantra Diri
            </h2>
          </motion.div>

          <motion.div
            className="absolute flex w-full flex-col items-center justify-center text-center text-white"
            style={{
              opacity: smoothText2Opacity,
            }}
          >
            <p className="mb-12 px-5 text-base italic md:w-[80%] md:px-20 lg:w-[70%] lg:text-xl">
              Sesaat lagi kamu akan sampai di perjalanan terakhir <br />{" "}
              pencarian &apos;MANTRA DIRI&apos; bersama TEDx Universitas
              Brawijaya 2025
            </p>
            <CountdownTimer />
          </motion.div>

          {/* Eyelid */}
          <div className="absolute bottom-0 top-0 w-[100%] overflow-hidden blur-xl">
            <motion.div
              className="z-15 absolute left-0 top-0 w-full bg-black blur-sm"
              style={{
                height: gradientHeight,
                WebkitMask: topMaskValue,
                mask: topMaskValue,
              }}
            />

            <motion.div
              className="z-15 absolute bottom-0 left-0 w-full bg-black blur-sm"
              style={{
                height: gradientHeight,
                WebkitMask: bottomMaskValue,
                mask: bottomMaskValue,
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
