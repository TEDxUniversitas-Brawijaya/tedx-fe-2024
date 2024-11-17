import { flowerImages } from "@/lib/static/waktu-wicara";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const DesktopSection4 = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const springConfig = {
    stiffness: 70,
    damping: 25,
    mass: 0.5,
    restDelta: 0.01,
    restSpeed: 0.01,
  };

  const imageIndex = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [0, flowerImages.length - 1]),
    springConfig,
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const unsubscribe = imageIndex.on("change", (latest) => {
      const newIndex = Math.min(Math.floor(latest), flowerImages.length - 1);
      if (newIndex !== currentImageIndex) {
        setPreviousImageIndex(currentImageIndex);
        setCurrentImageIndex(newIndex);
        setKey((prev) => prev + 1);
      }
    });
    return () => unsubscribe();
  }, [imageIndex, currentImageIndex]);

  const yPosition = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const smoothYPosition = useSpring(yPosition, { stiffness: 100, damping: 20 });

  const tersembunyiOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.35],
    [1, 0.5, 0],
  );

  const langkahOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.35, 0.6, 0.65],
    [0, 1, 1, 0],
  );

  const memanggilOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.65, 1],
    [0, 1, 1],
  );

  return (
    <section ref={containerRef} className="relative h-[880vh] w-full bg-black">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center gap-5 text-center">
        {/* Main content */}
        <div className="absolute bottom-0 top-0 z-10 h-screen w-full">
          <div
            className={`absolute bottom-0 left-40 h-full w-1/4 overflow-hidden`}
          >
            <motion.div
              key={`prev-${key}`}
              className={`${previousImageIndex === 0 || previousImageIndex === 1 ? "h-[70%]" : "h-[85%]"} absolute bottom-0 w-full`}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src={flowerImages[previousImageIndex]}
                alt={`Hand Flower ${previousImageIndex + 1}`}
                draggable={false}
                fill
                priority
              />
            </motion.div>
            <motion.div
              key={`current-${key}`}
              className={`${currentImageIndex === 0 || currentImageIndex === 1 ? "h-[70%]" : "h-[85%]"} absolute bottom-0 w-full`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              <Image
                src={flowerImages[currentImageIndex]}
                alt={`Hand Flower ${currentImageIndex + 1}`}
                draggable={false}
                fill
                priority
              />
            </motion.div>
          </div>

          {/* Text Container */}
          <div className="relative h-screen overflow-hidden">
            <motion.div
              className="absolute right-40 top-1/2 w-[40%] -translate-y-1/2 text-left"
              style={{
                y: useTransform(smoothYPosition, (latest) => `${-latest}vh`),
                opacity: tersembunyiOpacity,
              }}
            >
              <h1 className="font-header text-6xl text-white">Tersembunyi</h1>
              <h2 className="mt-4 text-white">
                Potensi dan mimpi bersemayam dalam diri, menanti saatnya
                terungkap dan menyuarakan apa yang selama ini terdiam.
              </h2>
            </motion.div>

            <motion.div
              className="absolute right-40 top-1/2 w-[40%] -translate-y-1/2 text-left"
              style={{
                y: useTransform(
                  smoothYPosition,
                  (latest) => `${100 - latest}vh`,
                ),
                opacity: langkahOpacity,
              }}
            >
              <h1 className="font-header text-6xl text-white">Langkah</h1>
              <h2 className="mt-4 text-white">
                Setelah menyentuh potensi tersembunyi, keberanian lahir,
                mengajak kaki melangkah keluar dari batas nyaman.
              </h2>
            </motion.div>

            <motion.div
              className="absolute right-40 top-1/2 w-[40%] -translate-y-1/2 text-left"
              style={{
                y: useTransform(
                  smoothYPosition,
                  (latest) => `${200 - latest}vh`,
                ),
                opacity: memanggilOpacity,
              }}
            >
              <h1 className="font-header text-6xl text-white">Memanggil</h1>
              <h2 className="mt-4 text-white">
                Ada panggilan harlus dari dalam jiwa atau dari semesta,
                menggugah hati untuk melangkah lebih jauh menjemput takdir
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Background */}
        <div className="relative h-screen w-full">
          <div className="absolute bottom-0 left-0 aspect-square h-1/2 w-[40%] overflow-hidden">
            <Image
              src="/img/red-ring.png"
              alt="Red Ring"
              draggable={false}
              fill
            />
          </div>
          <div className="absolute top-0 h-screen w-full bg-gradient-to-t from-[#D9151C66] to-[#51090C00]" />
          <div className="absolute top-0 h-screen w-full overflow-hidden opacity-10">
            <Image
              src="/img/eye-background.png"
              alt="Eye Background"
              draggable={false}
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopSection4;
