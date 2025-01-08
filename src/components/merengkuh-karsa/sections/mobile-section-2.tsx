import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { Fragment, useRef } from "react";

export default function MobileSection2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const boxY = useTransform(scrollYProgress, [0.75, 0.9], ["400vh", "0vh"]);
  const smoothBoxY = useSpring(boxY, {
    damping: 20,
    stiffness: 100,
  });

  const description: string[] = [
    "Semangat yang membara,",
    "membakar gelapnya",
    "keraguan, menyalakan api",
    "dalam jiwa, dengan berani",
    "menyelami kedalaman diri",
    "untuk meretas batasan asa.",
  ];

  return (
    <section className="relative h-[400vh]" ref={sectionRef}>
      <div className="sticky left-0 top-0 z-0 flex h-screen w-full flex-col items-center justify-center gap-10 overflow-hidden bg-[#0E0E0E] px-5 pt-20 text-center">
        <Image
          src="https://res.cloudinary.com/dcvnwpyd9/image/upload/v1736337572/tedxuniversitasbrawijaya2025/heartbeat-with-b6mbg_ncltji.gif"
          alt="Heartbeat"
          width={1920}
          height={1080}
          priority
          className="absolute bg-red-200 aspect-video h-full object-cover"
        />
        <div className="absolute top-0 h-1/6 w-full bg-gradient-to-b from-[#000000] to-[#0E0E0E]" />

        <div className="absolute flex flex-col items-center justify-center gap-28">
          <div className="w-56 text-center">
            <h1 className="font-header text-4xl font-bold text-white">
              Membara
            </h1>
            <motion.p className="text-lg font-semibold text-[#BEBEBE]">
              {description.map((sentence, sentenceIdx) => {
                return (
                  <Fragment key={sentence}>
                    {sentence.split("").map((letter, letterIdx) => {
                      const sentenceBeforeLength = description
                        .slice(0, sentenceIdx)
                        .reduce((acc, curr) => acc + curr.length, 0);

                      return (
                        <Letter
                          key={`${sentenceIdx}-${letterIdx}`}
                          letter={letter}
                          letterIdx={letterIdx}
                          sentenceBeforeLength={sentenceBeforeLength}
                          scrollYProgress={scrollYProgress}
                        />
                      );
                    })}
                    <br />
                  </Fragment>
                );
              })}
            </motion.p>
          </div>

          <motion.div
            style={{
              y: smoothBoxY,
            }}
            className="h-44 w-72 bg-white drop-shadow-[0px_4px_70px_rgba(255,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}

const Letter = ({
  letter,
  letterIdx,
  sentenceBeforeLength,
  scrollYProgress,
}: {
  letter: string;
  letterIdx: number;
  sentenceBeforeLength: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const from = ((letterIdx + sentenceBeforeLength) / 1000) * 4;
  const to = ((letterIdx + 1 + sentenceBeforeLength) / 1000) * 4;

  const opacity = useTransform(scrollYProgress, [from, to], [0.25, 1]);

  return (
    <motion.span
      className="font-[#BEBEBE] text-base font-semibold"
      style={{
        opacity: opacity,
      }}
    >
      {letter}
    </motion.span>
  );
};
