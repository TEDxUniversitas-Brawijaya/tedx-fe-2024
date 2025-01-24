"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { merchsData } from "../../../../lib/static/merchs";
import { cn } from "../../../../lib/utils";

export default function Section2() {
  return (
    <section className="relative h-full">
      <div className="sticky left-0 top-0 z-0 flex h-screen w-full items-center justify-center overflow-hidden bg-[#F2F2F2] text-center">
        <h2 className="absolute left-[10%] top-32 text-3xl font-semibold text-[#1A1A1A] sm:text-4xl md:text-5xl">
          CATEGORY
        </h2>

        <div className="absolute right-[5%] top-20">
          <video
            muted
            loop
            autoPlay
            className="clip-video-2 absolute h-full w-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dcvnwpyd9/video/upload/v1737275062/tedxuniversitasbrawijaya2025/tedx_propa_3_3_3_dfs4ne.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <svg className="h-full w-full">
            <defs>
              <clipPath id="clip-2">
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="start"
                  textAnchor="middle"
                  fontWeight="bold"
                  fill="white"
                  className="font-strong text-[2rem] sm:text-[3rem] md:text-[4rem]"
                >
                  TEDXUB
                </text>
              </clipPath>
            </defs>
          </svg>
        </div>

        <Swiper
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          className="absolute w-full"
        >
          {Object.keys(merchsData).map((merch, idx) => {
            return (
              <SwiperSlide key={idx} className="absolute aspect-square h-full">
                {(prop) => {
                  return (
                    <AnimatePresence mode="wait">
                      <motion.div className="relative flex h-full items-center justify-center">
                        {prop.isActive && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{
                              type: "tween",
                              ease: "easeInOut",
                              duration: 0.75,
                            }}
                            className={cn("flex items-center justify-center")}
                          >
                            <Image
                              src={`/img/merch-${merch}.png`}
                              alt={merch}
                              width={300}
                              height={300}
                              objectFit="cover"
                            />
                          </motion.div>
                        )}
                        <motion.h2
                          layout
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{
                            type: "tween",
                            ease: "easeInOut",
                            duration: 0.5,
                          }}
                          className={cn(
                            "absolute text-nowrap font-body text-3xl font-black uppercase sm:text-4xl md:text-5xl lg:text-7xl",
                            prop.isActive
                              ? "bg-[#3C3C3C]/50 p-2 text-white backdrop-blur-md transition-colors duration-500 ease-in-out hover:bg-[#C72F2F]/50"
                              : "text-[#757575]/25",
                            prop.isNext && "-right-[15%]",
                            prop.isPrev && "-left-[15%]",
                            !(prop.isActive || prop.isNext || prop.isPrev) &&
                              "invisible",
                          )}
                        >
                          {merch}
                        </motion.h2>
                      </motion.div>
                    </AnimatePresence>
                  );
                }}
              </SwiperSlide>
            );
          })}

          <LeftArrow />
          <RightArrow />
        </Swiper>

        {/* Marquee */}
        <div className="bg-gradient absolute bottom-8 flex w-full justify-end bg-gradient-to-br from-[#0E0E0E] to-[#292929]">
          <motion.div
            animate={{ x: ["0%", "100%"] }}
            transition={{
              repeat: Infinity,
              duration: 10, // Adjust based on content length
              ease: "linear",
            }}
            className="flex items-center space-x-32 px-16 py-2"
          >
            {Object.keys(merchsData).map((merch) => {
              return (
                <div key={merch} className="flex items-center space-x-4">
                  <ArrowRightIcon size={48} className="text-white" />
                  <span className="text-nowrap font-body text-4xl font-light uppercase tracking-[0.4rem] text-white">
                    {merch}
                  </span>
                </div>
              );
            })}
          </motion.div>
          <motion.div
            animate={{ x: ["0%", "100%"] }}
            transition={{
              repeat: Infinity,
              duration: 10, // Adjust based on content length
              ease: "linear",
            }}
            className="flex items-center space-x-32 px-16 py-2"
          >
            {Object.keys(merchsData).map((merch) => {
              return (
                <div
                  key={merch}
                  className="flex items-center space-x-4"
                >
                  <ArrowRightIcon size={48} className="text-white" />
                  <span className="text-nowrap font-body text-4xl font-light tracking-[0.4rem] text-white uppercase">
                    {merch}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const LeftArrow = () => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideNext()}
      className="absolute left-4 top-1/2 z-50 hidden -translate-y-1/2 sm:block"
    >
      <ArrowLeftIcon size={48} />
    </button>
  );
};

const RightArrow = () => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="absolute right-4 top-1/2 z-50 hidden -translate-y-1/2 sm:block"
    >
      <ArrowRightIcon size={48} />
    </button>
  );
};
