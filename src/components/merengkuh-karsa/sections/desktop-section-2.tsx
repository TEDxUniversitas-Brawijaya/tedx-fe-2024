import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import RevealLetterDesktop from "../ui/reveal-letter-desktop";

const DesktopSection2 = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4],
    [0.4, 1, 1],
  );

  const text =
    "Semangat yang membara, membakar gelapnya keraguan, menyalakan api dalam jiwa, dengan berani menyelami kedalaman diri untuk meretas batasan asa.";
  const words = text.split(" ");

  const totalChars = text.length;
  let charCount = 0;

  const videoX = useSpring(
    useTransform(scrollYProgress, [0.5, 0.6], [1000, 0]),
    { stiffness: 100, damping: 50 },
  );

  return (
    <section className="relative h-[500vh] w-full bg-[#0E0E0E]">
      <motion.div
        className="sticky left-0 top-0 h-screen w-full overflow-hidden"
        style={{ opacity: sectionOpacity }}
      >
        <div className="border- absolute top-0 h-32 w-full bg-gradient-to-b from-[#0E0E0E] via-[#100E10] to-[#100E10]"></div>
        <div className="absolute left-20 top-1/2 z-10 -translate-y-1/2 space-y-2 text-white">
          <h2 className="font-header text-5xl font-semibold">Membara</h2>
          <p className="w-[40%] text-lg">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap">
                {word.split("").map((char) => (
                  <RevealLetterDesktop
                    key={`char-${charCount}`}
                    char={char}
                    index={charCount++}
                    totalChars={totalChars}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
                {/* Add animated space after each word except the last */}
                {wordIndex < words.length - 1 && (
                  <RevealLetterDesktop
                    key={`space-${charCount}`}
                    char="&nbsp;"
                    index={charCount++}
                    totalChars={totalChars}
                    scrollYProgress={scrollYProgress}
                  />
                )}
              </span>
            ))}
          </p>
        </div>
        <motion.div
          style={{
            x: videoX,
          }}
          className="absolute right-20 top-1/4 z-10 aspect-video h-auto w-[45%] -translate-x-1/2 bg-white drop-shadow-[0px_4px_70px_rgba(255,0,0,0.5)]"
        >
          <Image
            src={"/img/coming-soon-main-event.jpg"}
            alt="Coming Soon"
            fill
          />
        </motion.div>
        <div className="absolute bottom-0 left-0 -z-10 h-[calc(100dvh-62px)] w-full opacity-60">
          <Image
            src="https://res.cloudinary.com/dcvnwpyd9/image/upload/v1736337572/tedxuniversitasbrawijaya2025/heartbeat-with-b6mbg_ncltji.gif"
            alt="Heart Rate Background"
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
