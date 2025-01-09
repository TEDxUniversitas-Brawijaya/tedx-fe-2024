import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";
import Image from "next/image";

export default function DesktopSection1() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const topOpacity = useMotionValue(0);
  const bottomOpacity = useMotionValue(1);

  const background = useMotionTemplate`
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, ${topOpacity}) 0%,
      rgba(0, 0, 0, ${bottomOpacity}) 100%
    )
  `;

  const firstTextOpacity = useSpring(
    useTransform(scrollYProgress, [0.2, 0.26], [1, 0]),
    { stiffness: 100, damping: 20 },
  );

  const secondTextOpacity = useSpring(
    useTransform(scrollYProgress, [0.27, 0.28, 0.69], [0, 1, 0]),
    { stiffness: 100, damping: 20 },
  );

  const thirdTextOpacity = useSpring(
    useTransform(scrollYProgress, [0.7, 0.71], [0, 1]),
    { stiffness: 100, damping: 20 },
  );

  const triggerGradientAnimation = (progress: number) => {
    if (progress < 0.4) {
      animate(topOpacity, 0.2, { duration: 1 });
      animate(bottomOpacity, 1, { duration: 1 });
    } else {
      animate(topOpacity, 0.5, { duration: 0.5 });
      animate(bottomOpacity, 1, { duration: 0.5 });
    }
  };

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      triggerGradientAnimation(latest);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const backgroundScale = useSpring(
    useTransform(scrollYProgress, [0.2, 0.4, 0.5], [1, 1.05, 1.1]),
    { stiffness: 100, damping: 20 },
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] w-full bg-[#0E0E0E]"
    >
      <motion.div className="sticky left-0 top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/2 z-20 w-[80%] -translate-x-1/2 -translate-y-1/2 space-y-2 text-center"
          style={{ opacity: firstTextOpacity }}
        >
          <h1 className="z-20 text-3xl text-white">Propaganda 3</h1>
          <h2 className="z-20 font-header text-8xl text-white">
            Merengkuh Karsa
          </h2>
        </motion.div>

        <motion.p
          className="absolute left-1/2 top-1/2 z-20 w-[80%] -translate-x-1/2 -translate-y-1/2 text-center text-white"
          style={{ opacity: secondTextOpacity }}
        >
          Mendekap kehendak tertinggi dalam jiwa untuk menyatu dalam panggilan
          terdalam yang terbenam oleh riuhnya dunia luar.
        </motion.p>

        <motion.p
          className="absolute left-1/2 top-1/2 z-20 w-[80%] -translate-x-1/2 -translate-y-1/2 text-center text-white"
          style={{ opacity: thirdTextOpacity }}
        >
          Dalam proses ini, individu diminta untuk menelusuri labirin batinnya
          untuk menemukan kilauan potensi yang tak pernah sepenuhnya disadari
          sebelumnya.
        </motion.p>

        <motion.div
          className="absolute bottom-0 left-0 z-10 h-[calc(100dvh-62px)] w-full"
          style={{
            background,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 z-[5] h-[calc(100dvh-62px)] w-full"
          style={{ scale: backgroundScale }}
        >
          <Image
            src="/img/maze-bg-desktop.png"
            alt="Maze Background"
            className="object-cover"
            draggable={false}
            fill
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
