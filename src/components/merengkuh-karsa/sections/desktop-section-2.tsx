import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import RevealTextDesktop from "../ui/RevealTextDesktop";

const DesktopSection2: React.FC = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8],
    [0.4, 1, 1],
  );

  const textRevealProgress = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);

  return (
    <section className="relative h-[400vh] w-full bg-black">
      <motion.div
        className="sticky left-0 top-0 h-screen w-full"
        style={{ opacity: sectionOpacity }}
      >
        <div className="absolute left-10 top-1/2 z-10 -translate-y-1/2 space-y-2 text-white">
          <h2 className="font-header text-5xl font-semibold">Membara</h2>
          <RevealTextDesktop
            text="Semangat yang membara, membakar gelapnya keraguan, menyalakan api dalam jiwa, dengan berani menyelami kedalaman diri untuk meretas batasan asa."
            className="w-[60%] text-lg"
            progress={textRevealProgress}
          />
        </div>
        <div className="absolute bottom-0 left-0 h-[calc(100dvh-62px)] w-full opacity-60">
          <Image
            src="https://res.cloudinary.com/dcvnwpyd9/image/upload/v1736337572/tedxuniversitasbrawijaya2025/heartbeat-with-b6mbg_ncltji.gif"
            alt="Maze Background"
            className="object-cover"
            draggable={false}
            fill
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};

export default DesktopSection2;
