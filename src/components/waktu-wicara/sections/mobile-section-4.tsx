import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MobileSection4() {
  const { scrollYProgress } = useScroll();

  const yPosition = useTransform(scrollYProgress, [0.3, 1], [0, -200]);

  const tersembunyiOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.335, 0.35],
    [1, 0.5, 0],
  );

  const langkahOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.4, 0.65, 0.7],
    [0, 1, 1, 0],
  );

  const memanggilOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.75, 1],
    [0, 1, 1],
  );

  const imageIdx = useTransform(scrollYProgress, [0.3, 1], [1, 8]);
  const [currentImageIdx, setCurrentImageIdx] = useState<number>(1);

  useEffect(() => {
    const unsubscribe = imageIdx.on("change", (latest) => {
      setCurrentImageIdx(Math.min(Math.floor(latest), 8));
    });
    return () => unsubscribe();
  }, [imageIdx]);

  return (
    <section className="relative h-[900vh] bg-[#080808] text-white">
      <div className="sticky left-0 top-0 h-screen w-full overflow-clip">
        <div className="absolute -left-56 top-0 aspect-video h-screen bg-[#080808]">
          <Image
            src="/img/eye-background.png"
            alt="Eye Background"
            className="mix-blend-color"
            fill
            priority
          />
        </div>

        <div className="absolute -bottom-56 -left-80 aspect-square w-[36rem]">
          <Image
            src="/img/red-ring-full.png"
            alt="Red Ring Full"
            fill
            priority
          />
        </div>

        <motion.div
          key={currentImageIdx} // Unique key for each image to trigger animation
          className="absolute bottom-0 left-0 aspect-[1/2] w-56"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Image
            src={`/img/hand-flower-${currentImageIdx}.png`}
            alt={`Hand Flower ${currentImageIdx}`}
            fill
            priority
          />
        </motion.div>

        <div className="absolute left-0 top-0 h-screen w-screen">
          <div className="h-screen w-screen bg-gradient-to-b from-black to-transparent to-25%" />
        </div>

        <div className="absolute left-0 top-0 h-screen w-screen">
          <div className="h-screen w-screen bg-gradient-to-t from-[#D9151C] to-transparent to-50% opacity-40" />
        </div>

        <motion.div
          className="absolute right-10 top-56 flex w-max flex-col items-start justify-center"
          style={{
            y: useTransform(yPosition, (value) => `${value}vh`),
            opacity: tersembunyiOpacity,
          }}
        >
          <h1 className="text-left font-header text-4xl leading-[4rem]">
            Tersembunyi
          </h1>
          <h2 className="w-56 text-justify font-light">
            Potensi dan mimpi bersemayam dalam diri, menanti saatnya terungkap
            dan menyuarakan apa yang selama ini terdiam.
          </h2>
        </motion.div>

        <motion.div
          className="absolute right-10 top-56 flex w-max flex-col items-start justify-center"
          style={{
            y: useTransform(yPosition, (value) => `${value + 100}vh`),
            opacity: langkahOpacity,
          }}
        >
          <h1 className="text-left font-header text-4xl leading-[4rem]">
            Langkah
          </h1>
          <h2 className="w-56 text-justify font-light">
            Setelah menyentuh potensi tersembunyi, keberanian lahir, mengajak
            kaki melangkah keluar dari batas nyaman.
          </h2>
        </motion.div>

        <motion.div
          className="absolute right-10 top-56 flex w-max flex-col items-start justify-center"
          style={{
            y: useTransform(yPosition, (value) => `${value + 200}vh`),
            opacity: memanggilOpacity,
          }}
        >
          <h1 className="font-header text-4xl leading-[4rem]">Memanggil</h1>
          <h2 className="w-56 text-justify font-light">
            Ada panggilan harlus dari dalam jiwa atau dari semesta, menggugah
            hati untuk melangkah lebih jauh menjemput takdir
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
