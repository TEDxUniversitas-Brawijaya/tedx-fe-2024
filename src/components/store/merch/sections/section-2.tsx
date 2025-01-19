"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Section2() {
  const [merchs, setMerchs] = useState(MERCHS);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    setMerchs((prev) => [
      {
        ...prev[prev.length - 1],
      },
      ...prev.slice(0, prev.length - 1),
    ]);

    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = () => {
    setMerchs((prev) => [
      ...prev.slice(1),
      {
        ...prev[0],
      },
    ]);

    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="relative h-full">
      <div className="sticky left-0 top-0 z-0 flex h-screen w-full items-center justify-center overflow-hidden bg-[#F2F2F2] text-center">
        <h2 className="absolute left-32 top-32 text-5xl font-semibold text-[#1A1A1A]">
          CATEGORY
        </h2>

        <div className="absolute right-32 top-20 flex items-center justify-center">
          <video
            muted
            loop
            autoPlay
            className="absolute inset-0 object-cover w-full h-full"
          >
            <source
              src="https://res.cloudinary.com/dcvnwpyd9/video/upload/v1737275062/tedxuniversitasbrawijaya2025/tedx_propa_3_3_3_dfs4ne.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <h2 className="font-strong text-5xl font-bold bg-[#F2F2F2] mix-blend-screen">
            TED
            <br />
            XUB
          </h2>
        </div>

        {/* Products */}
        <div className="absolute flex w-full flex-row items-center justify-center gap-16">
          {merchs.map((merch, idx) => (
            <motion.div
              key={merch.label}
              layout
              transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
              className={cn(
                "absolute",
                idx === 0 && "-left-[100%] scale-0 opacity-0",
                idx === 1 && "right-[60%] scale-0 opacity-0",
                idx === 2 && "scale-50 opacity-100",
                idx === 3 && "left-[60%] scale-0 opacity-0",
                idx === 4 && "-right-[100%] scale-0 opacity-0",
              )}
            >
              <Image
                src={merch.img}
                alt={merch.label}
                width={merch.width}
                height={merch.height}
              />
            </motion.div>
          ))}
        </div>

        {/* Text */}
        <div className="relative flex w-[300vw] flex-row items-center justify-around">
          {merchs.map((merch, idx) => (
            <motion.div
              key={merch.label}
              layout
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.5,
              }}
              className={cn(
                "absolute mx-auto flex-shrink-0 text-[#757575]/25",
                idx === 0 && "-left-[100%]",
                idx === 1 && "right-[85%]",
                idx === 2 &&
                  "bg-[#3C3C3C]/50 p-2 text-white backdrop-blur-md transition-colors duration-500 ease-in-out hover:bg-[#C72F2F]/50",
                idx === 3 && "left-[85%]",
                idx === 4 && "-right-[100%]",
              )}
            >
              <motion.h2
                layout
                className={cn("text-nowrap font-body text-8xl font-black")}
              >
                {merch.label}
              </motion.h2>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <button
          disabled={isAnimating}
          onClick={() => handlePrev()}
          className="absolute left-32 z-50"
        >
          <ArrowLeftIcon size={48} />
        </button>
        <button
          disabled={isAnimating}
          onClick={() => handleNext()}
          className="absolute right-32 z-50"
        >
          <ArrowRightIcon size={48} />
        </button>

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
            {MERCHS.map((merch) => {
              return (
                <div
                  key={`${merch.label}-1`}
                  className="flex items-center space-x-4"
                >
                  <ArrowRightIcon size={48} className="text-white" />
                  <span className="text-nowrap font-body text-4xl font-light tracking-[0.4rem] text-white">
                    {merch.label}
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
            {MERCHS.map((merch) => {
              return (
                <div
                  key={`${merch.label}-1`}
                  className="flex items-center space-x-4"
                >
                  <ArrowRightIcon size={48} className="text-white" />
                  <span className="text-nowrap font-body text-4xl font-light tracking-[0.4rem] text-white">
                    {merch.label}
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

const MERCHS = [
  {
    label: "T-SHIRT",
    img: "/img/merch-tshirt.png",
    width: 581,
    height: 501,
  },
  {
    label: "WORKSHIRT",
    img: "/img/merch-workshirt.png",
    width: 479,
    height: 554,
  },
  {
    label: "STICKERS",
    img: "/img/merch-sticker.png",
    width: 446,
    height: 594,
  },
  {
    label: "BAGS",
    img: "/img/merch-bag.png",
    width: 764,
    height: 764,
  },
  {
    label: "HATS",
    img: "/img/merch-hat.png",
    width: 763,
    height: 576,
  },
];
