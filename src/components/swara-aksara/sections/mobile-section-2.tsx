import { useRef, useEffect, useState } from "react";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import Image from "next/image";

export default function MobileSection2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [centerX, setCenterX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const cardWidth = 200;
        setCenterX((containerWidth - cardWidth) / 2);
        setWindowWidth(window.innerWidth);
      }
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 15,
    mass: 0.27,
    stiffness: 55,
  });

  const zIndex = useTransform(smoothProgress, [0, 0.1, 0.4], [-10, 20, 20]);

  const speakerCardsConfig = [
    {
      // Left top card
      initial: { top: "80px", left: "40px" },
      className: "w-[200px] aspect-square",
      x: useTransform(
        smoothProgress,
        [0, 0.4, 0.8],
        [-80, centerX - 40, centerX - 40],
      ),
      y: useTransform(smoothProgress, [0, 0.4, 0.8], [0, 0, -1000]),
      rotate: useTransform(smoothProgress, [0, 0.4, 0.8], [42.83, 20.83, -90]),
      scale: useTransform(smoothProgress, [0, 0.4, 0.6], [1, 1.1, 0.5]),
    },
    {
      // Bottom right card
      initial: { bottom: "0", right: "0" },
      className: "w-[200px] aspect-square",
      x: useTransform(
        smoothProgress,
        [0, 0.4, 0.8],
        [80, centerX - windowWidth + 200, centerX - windowWidth + 200],
      ),
      y: useTransform(smoothProgress, [0, 0.4, 0.8], [50, 0, -1000]),
      rotate: useTransform(smoothProgress, [0, 0.4, 0.8], [14.37, 7.37, -90]),
      scale: useTransform(smoothProgress, [0, 0.4, 0.6], [1, 1.1, 0.5]),
    },
    {
      // Middle Card
      initial: { bottom: "33.333%", right: "80px" },
      className: "w-[200px] aspect-square",
      x: useTransform(
        smoothProgress,
        [0, 0.4, 0.8],
        [400, centerX - windowWidth + 280, centerX - windowWidth + 280],
      ),
      y: useTransform(smoothProgress, [0, 0.4, 0.8], [50, 0, -1000]),
      rotate: useTransform(smoothProgress, [0, 0.4, 0.8], [0, 0, -90]),
      scale: useTransform(smoothProgress, [0, 0.4, 0.6], [1, 1.1, 0.5]),
    },
  ];

  if (windowWidth === 0) {
    return (
      <section className="relative bg-tedx-grey-300">
        <div ref={containerRef} className="relative z-0 h-[700vh]">
          <div className="sticky top-0 h-screen w-full" />
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-tedx-grey-300">
      <div ref={containerRef} className="relative z-0 h-[700vh]">
        <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center gap-10 overflow-hidden px-5 pt-20">
          <p className="z-10 font-header text-5xl">ꦥꦶꦠꦸꦠꦸꦂ</p>
          <p className="z-10 text-center font-header text-xl">(Pitutur)</p>
          <h2 className="z-10 text-center font-header text-4xl leading-[1.2em]">
            DAFTAR DAN TEMUKAN VERSI BARU DIRIMU!
          </h2>
          <p className="z-10 text-center">
            Inilah salah satu pemberhentian dalam mencari Mantra Diri, ikuti
            terus prosesnya dengan mengunjungi link ini!
          </p>
          <button className="z-10 rounded-md bg-tedx-red px-4 py-2 text-white transition-colors duration-150 hover:bg-tedx-red/80">
            Temukan Dirimu
          </button>

          {/* Speaker Cards */}
          {speakerCardsConfig.map((card, index) => (
            <motion.div
              key={index * 101}
              className={`absolute ${card.className} -z-[10]`}
              style={{
                ...card.initial,
                x: card.x,
                y: card.y,
                rotate: card.rotate,
                scale: card.scale,
                zIndex: zIndex,
              }}
            >
              <Image src="/img/speaker-card.png" alt="Card Speaker" fill />
            </motion.div>
          ))}

          {/* Background Elements */}
          <div className="absolute -right-12 bottom-1/2 -z-[20] aspect-square w-[210px]">
            <Image src="/img/card-background.png" alt="Card Background" fill />
          </div>
          <div className="absolute -right-32 bottom-32 -z-[20] aspect-square w-[210px]">
            <Image src="/img/card-background.png" alt="Card Background" fill />
          </div>
          <div className="absolute left-0 top-0 h-screen w-full">
            <Image src="/img/paper-texture-5.png" alt="Paper Texture" fill />
          </div>
          <div className="absolute top-0 -z-20 aspect-[1920/616] w-full scale-y-[-1] transform">
            <Image src="/img/cloud-grey.png" alt="Cloud" fill />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative h-[50dvh]">
        <div className="absolute left-0 top-0 h-[50dvh] w-full">
          <Image
            src="/img/paper-texture-5.png"
            alt="Paper Texture"
            fill
            objectFit="cover"
          />
        </div>
        <div className="absolute bottom-28 left-1/2 h-[45dvh] w-full max-w-[600px] -translate-x-1/2">
          <Image src="/img/person-ball.png" alt="Person Ball" fill />
        </div>
        <div className="relative z-10 h-full w-full overflow-x-clip">
          <div className="absolute -bottom-24 -left-[18%] aspect-[270/250] h-[230px] w-1/2">
            <Image src="/img/cloud-outline.png" alt="Cloud" fill />
          </div>
          <div className="absolute -bottom-16 aspect-[270/250] h-[230px] w-1/2 translate-x-1/2">
            <Image src="/img/cloud-outline.png" alt="Cloud" fill />
          </div>
          <div className="absolute -bottom-24 -right-[18%] aspect-[270/250] h-[230px] w-1/2">
            <Image src="/img/cloud-outline.png" alt="Cloud" fill />
          </div>
        </div>
      </div>
    </section>
  );
}
