"use client";

import { ICore } from "@/types/team-types";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const CoreCard = ({ name, bwPath, colorPath }: ICore) => {
  const isDesktop = useMediaQuery(768);

  if (!isDesktop) {
    return (
      <div className="relative">
        <Image
          src={colorPath}
          alt={`${name}`}
          width={200}
          height={600}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <Image
        src={bwPath}
        alt={`${name} Black and White`}
        width={200}
        height={600}
        className="object-cover"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image
          src={colorPath}
          alt={`${name} Color`}
          width={200}
          height={600}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
};
