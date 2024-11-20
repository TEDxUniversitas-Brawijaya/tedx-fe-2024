import { faqData } from "@/lib/static/faq-datas";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import ArrowIcon from "@/components/shared/icons/arrow-icon";
import Image from "next/image";
import SwiperType from "swiper";

export default function MobileSection3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    mass: 0.5,
    stiffness: 45,
  });

  const yTransform = useTransform(smoothProgress, [0, 0.2, 0.5], [300, 50, 0]);

  const scaleTransform = useTransform(
    smoothProgress,
    [0, 0.2, 0.5],
    [0.1, 0.5, 1],
  );

  const flipTransform = useTransform(
    smoothProgress,
    [0, 0.3, 0.6],
    [180, 90, 0],
  );

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current && !isBeginning) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && !isEnd) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-tedx-green pb-16"
    >
      <div className="relative h-[55dvh]">
        <div className="absolute top-0 aspect-square max-h-[300px] w-full sm:left-1/2 sm:w-[70%] sm:-translate-x-1/2">
          <Image src="/img/sun-outline.png" alt="Sun" fill />
        </div>
        <h2 className="px-5 pt-80 text-center font-header text-5xl text-white">
          Catat tanggal & waktunya
        </h2>
        <div className="absolute bottom-0 left-0 top-0 h-full w-full opacity-40">
          <Image src="/img/paper-texture-5.png" alt="Paper Texture" fill />
        </div>
      </div>
      <div className="relative h-[500vh]">
        <div className="sticky top-0 h-screen w-full pt-24">
          <div className="absolute right-10 z-10 w-1/2 text-left">
            <h3 className="font-header text-3xl text-white">Shelterville</h3>
            <p className="text-lg text-white">23 November 2024</p>
            <p className="text-lg text-white">13.00 WIB</p>
          </div>
          <motion.div
            style={{
              y: yTransform,
              scale: scaleTransform,
            }}
            className="relative mt-10 h-[500px] w-full"
          >
            <div className="h-full w-full [perspective:2000px]">
              <motion.div
                className="relative h-full w-full origin-center [transform-style:preserve-3d]"
                style={{
                  rotateY: flipTransform,
                  transformPerspective: 2000,
                }}
              >
                {/* Front side */}
                <div className="absolute inset-0 h-full w-full overflow-hidden [backface-visibility:hidden]">
                  <div className="relative h-full w-full">
                    <Image
                      src="/img/shelterville-1.png"
                      alt="Shelterville Front"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>

                {/* Back side */}
                <div
                  className="absolute inset-0 h-full w-full overflow-hidden [backface-visibility:hidden]"
                  style={{
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src="/img/shelterville-1.png"
                      alt="Shelterville Back"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <div className="absolute left-0 top-0 h-screen w-full opacity-40">
            <Image src="/img/paper-texture-5.png" alt="Paper Texture" fill />
          </div>
        </div>
      </div>
      {/* FAQ */}
      <div className="relative pb-10">
        <Swiper
          centeredSlides
          className="mySwiper w-full"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide>
            <div className="relative mx-auto aspect-[356/432] h-[80%] max-h-[432px] w-[80%] max-w-[356px]">
              <Image src="/img/faq-front.png" alt="Faq Front" fill />
            </div>
          </SwiperSlide>
          {faqData.map((dx, idx) => (
            <SwiperSlide key={idx * 101}>
              <div className="relative mx-auto aspect-[356/432] h-[80%] max-h-[432px] w-[80%] max-w-[356px]">
                <div className="absolute left-0 top-0 z-10 h-full w-full space-y-14 px-10 py-16 text-center">
                  <p className="font-semibold">{dx.question}</p>
                  <p>{dx.answer}</p>
                </div>
                <Image src="/img/faq-back.png" alt="Faq Front" fill />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute -bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          <button
            onClick={handlePrevClick}
            className={`flex h-10 w-16 items-center justify-center rounded-lg transition-all duration-300 ${isBeginning ? "cursor-not-allowed bg-neutral-500 text-neutral-600" : "cursor-pointer bg-tedx-yellow hover:bg-yellow-500"}`}
            disabled={isBeginning}
          >
            <ArrowIcon />
          </button>
          <button
            onClick={handleNextClick}
            className={`flex h-10 w-16 items-center justify-center rounded-lg bg-tedx-yellow transition-all duration-300 ${isEnd ? "cursor-not-allowed bg-neutral-500 text-neutral-600" : "cursor-pointer bg-tedx-yellow hover:bg-yellow-500"}`}
            disabled={isEnd}
          >
            <ArrowIcon className="scale-x-[-1] transform" />
          </button>
        </div>
        <div className="absolute left-0 top-0 h-screen w-full opacity-40">
          <Image src="/img/paper-texture-5.png" alt="Paper Texture" fill />
        </div>
      </div>
    </section>
  );
}
