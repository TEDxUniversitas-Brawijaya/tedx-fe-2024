import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import RevealLetterDesktop from "../ui/reveal-letter-desktop";

const DesktopSection2 = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8],
    [0.4, 1, 1],
  );

  const text =
    "Semangat yang membara, membakar gelapnya keraguan, menyalakan api dalam jiwa, dengan berani menyelami kedalaman diri untuk meretas batasan asa.";
  const words = text.split(" ");

  const totalChars = text.length;
  let charCount = 0;

  return (
    <section className="relative h-[400vh] w-full bg-black">
      <motion.div
        className="sticky left-0 top-0 h-screen w-full"
        style={{ opacity: sectionOpacity }}
      >
        <div className="absolute left-10 top-1/2 z-10 -translate-y-1/2 space-y-2 text-white">
          <h2 className="font-header text-5xl font-semibold">Membara</h2>
          <p className="w-[60%] text-lg">
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
        <div className="absolute bottom-0 left-0 h-[calc(100dvh-62px)] w-full opacity-60">
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
