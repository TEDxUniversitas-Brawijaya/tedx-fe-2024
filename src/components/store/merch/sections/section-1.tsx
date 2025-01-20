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
      <div className="sticky left-0 top-0 z-0 flex h-screen w-full items-center justify-center overflow-hidden bg-[#000000] text-center">
        <motion.div
          className="absolute top-0 flex h-[250vh] w-full items-center justify-center"
          style={{ y: useTransform(smoothFirstY, (value) => `${value}vh`) }}
        >
          <Image
            src={"/img/dummy-merch-hero-section.png"}
            alt="Back 2"
            width={324}
            height={225}
            className="absolute top-[18%] ml-[66rem]"
          />
          <Image
            src={"/img/dummy-merch-hero-section.png"}
            alt="Back 5"
            width={324}
            height={225}
            className="absolute top-[68%] ml-[66rem]"
          />
          <Image
            src={"/img/dummy-merch-hero-section.png"}
            alt="Back 6"
            width={324}
            height={225}
            className="absolute top-[84%] ml-[80rem]"
          />
        </motion.div>
        <motion.div
          className="absolute top-0 flex h-[250vh] w-full items-center justify-center"
          style={{ y: useTransform(smoothSecondY, (value) => `${value}vh`) }}
        >
          <Image
            src={"/img/dummy-merch-hero-section.png"}
            alt="Back 1"
            width={434}
            height={301}
            className="absolute top-[30%] mr-[86rem]"
          />
          <Image
            src={"/img/dummy-merch-hero-section.png"}
            alt="Back 3"
            width={324}
            height={225}
            className="absolute top-[34%] ml-[80rem]"
          />
          <Image
            src={"/img/dummy-merch-hero-section.png"}
            alt="Back 4"
            width={434}
            height={301}
            className="absolute top-[80%] mr-[86rem]"
          />
        </motion.div>

        <div className="absolute flex h-[15.5rem] w-[105%] items-center justify-center overflow-clip">
          <video
            muted
            loop
            autoPlay
            className="absolute h-screen w-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dcvnwpyd9/video/upload/v1737275062/tedxuniversitasbrawijaya2025/tedx_propa_3_3_3_dfs4ne.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* <h2 className="leading-none font-strong text-[22rem] font-bold bg-[#000000] text-white mix-blend-darken">
            TEDXUB
          </h2> */}
          <div className="absolute bottom-0 h-full w-full bg-[#000000] bg-opacity-100 mix-blend-darken">
            <Image src="/svg/tedxub-nowrap.svg" alt="TEDXUB" fill />
          </div>
        </div>

        <div className="absolute bottom-0 aspect-video h-full opacity-50 mix-blend-lighten">
          <Image src={"/img/paper-texture-5.png"} alt="Paper Text 5" fill />
        </div>

        <motion.div
          className="absolute top-0 flex h-[250vh] w-full items-center justify-center"
          style={{ y: useTransform(smoothFirstY, (value) => `${value}vh`) }}
        >
          <Image
            src={"/img/dummy-merch-hero-section.png"}
            alt="Front 1"
            width={361}
            height={240}
            className="absolute top-[2%] ml-96"
          />
          <Image
            src={"/img/dummy-merch-hero-section.png"}
            alt="Front 3"
            width={434}
            height={301}
            className="absolute top-[22%] mr-[0rem]"
          />
          <Image
            src={"/img/dummy-merch-hero-section.png"}
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
            src={"/img/dummy-merch-hero-section.png"}
            alt="Front 2"
            width={347}
            height={221}
            className="absolute top-[6%] mr-[64rem]"
          />
          <Image
            src={"/img/dummy-merch-hero-section.png"}
            alt="Front 5"
            width={347}
            height={221}
            className="absolute top-[56%] mr-[64rem]"
          />
          <Image
            src={"/img/dummy-merch-hero-section.png"}
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
