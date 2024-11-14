import { flowerImages } from "@/lib/static/waktu-wicara";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const DesktopSection4 = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const imageIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, flowerImages.length - 1],
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = imageIndex.on("change", (latest) => {
      setCurrentImageIndex(
        Math.min(Math.floor(latest), flowerImages.length - 1),
      );
    });
    return () => unsubscribe();
  }, [imageIndex]);

  const yPosition = useTransform(scrollYProgress, [0, 1], [0, 200]);

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
    <section ref={containerRef} className="relative h-[900vh] w-full bg-black">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center gap-5 text-center">
        {/* Main content */}
        <div className="absolute bottom-0 top-0 z-10 h-screen w-full">
          {/* Image Container */}
          <motion.div
            className="absolute bottom-0 h-[90%] w-1/2 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={flowerImages[currentImageIndex]}
              alt={`Hand Flower ${currentImageIndex + 1}`}
              draggable={false}
              fill
              priority
            />
          </motion.div>

          {/* Text Container */}
          <div className="relative h-screen overflow-hidden">
            <motion.div
              className="absolute right-40 top-1/2 w-[40%] -translate-y-1/2 text-left"
              style={{
                y: useTransform(yPosition, (latest) => `${-latest}vh`),
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
                y: useTransform(yPosition, (latest) => `${100 - latest}vh`),
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
                y: useTransform(yPosition, (latest) => `${200 - latest}vh`),
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
