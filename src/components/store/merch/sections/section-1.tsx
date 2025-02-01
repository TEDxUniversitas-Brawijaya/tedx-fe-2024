"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Section1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const firstY = useTransform(scrollYProgress, [0, 0.9], ["0", "-125"]);
  const smoothFirstY = useSpring(firstY, { stiffness: 100, damping: 20 });
  const secondY = useTransform(scrollYProgress, [0.1, 0.8], ["0", "-125"]);
  const smoothSecondY = useSpring(secondY, { stiffness: 100, damping: 20 });

  return (
    <section className="relative h-[250vh]" ref={sectionRef}>
      <div className="sticky left-0 top-0 z-0 flex h-screen w-full items-center justify-center overflow-hidden bg-[#1C1C1C] text-center">
        <div className="absolute bottom-0 aspect-video h-full w-full opacity-30 mix-blend-lighten">
          <Image src={"/img/paper-texture-5.png"} alt="Paper Text 5" fill />
        </div>

        <motion.div
          className="absolute top-0 flex h-[250vh] w-full items-center justify-center"
          style={{ y: useTransform(smoothFirstY, (value) => `${value}vh`) }}
        >
          <Image
            src={"/img/merch-mockup-8.png"}
            alt="Back 5"
            width={324}
            height={225}
            className="absolute top-[68%] ml-[66rem]"
          />
        </motion.div>
        <motion.div
          className="absolute top-0 flex h-[250vh] w-full items-center justify-center"
          style={{ y: useTransform(smoothSecondY, (value) => `${value}vh`) }}
        >
          <Image
            src={"/img/merch-mockup-4.png"}
            alt="Back 3"
            width={324}
            height={225}
            className="absolute top-[34%] ml-[80rem]"
          />
        </motion.div>

        <div className="absolute h-screen w-[105%] items-center justify-center">
          <video
            muted
            loop
            autoPlay
            className="clip-video absolute h-full w-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dcvnwpyd9/video/upload/v1737275062/tedxuniversitasbrawijaya2025/tedx_propa_3_3_3_dfs4ne.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <svg className="absolute h-full w-full">
            <defs>
              <clipPath id="clip">
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="24vw"
                  fontWeight="bold"
                  fill="white"
                  className="font-strong"
                >
                  TEDXUB
                </text>
              </clipPath>
            </defs>
          </svg>
        </div>

        <motion.div
          className="absolute top-0 flex h-[250vh] w-full items-center justify-center"
          style={{ y: useTransform(smoothFirstY, (value) => `${value}vh`) }}
        >
          <Image
            src={"/img/merch-mockup-1.png"}
            alt="Front 1"
            width={361}
            height={240}
            className="absolute top-[2%] ml-96"
          />
          <Image
            src={"/img/merch-mockup-3.png"}
            alt="Front 3"
            width={434}
            height={301}
            className="absolute top-[22%] mr-[0rem]"
          />
          <Image
            src={"/img/merch-mockup-5.png"}
            alt="Front 4"
            width={361}
            height={240}
            className="absolute top-[52%] ml-96"
          />
        </motion.div>
        <motion.div
          className="absolute top-0 flex h-[250vh] w-full items-center justify-center"
          style={{ y: useTransform(smoothSecondY, (value) => `${value}vh`) }}
        >
          <Image
            src={"/img/merch-mockup-2.png"}
            alt="Front 2"
            width={347}
            height={221}
            className="absolute top-[6%] mr-[64rem]"
          />
          <Image
            src={"/img/merch-mockup-6.png"}
            alt="Front 5"
            width={347}
            height={221}
            className="absolute top-[56%] mr-[64rem]"
          />
          <Image
            src={"/img/merch-mockup-7.png"}
            alt="Front 6"
            width={434}
            height={301}
            className="absolute top-[72%] mr-[0rem]"
          />
        </motion.div>
      </div>
    </section>
  );
}
