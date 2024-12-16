import { motion, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MobileSection1() {
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

  const springX = useSpring(0, { stiffness: 100, damping: 20 });
  const springY = useSpring(0, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const getRandomPosition = () => {
      const maxMovement = 30;
      const randomAngle = Math.random() * 2 * Math.PI;
      const randomDistance = Math.random() * maxMovement;

      return {
        x: Math.cos(randomAngle) * randomDistance,
        y: Math.sin(randomAngle) * randomDistance,
      };
    };

    const movementInterval = setInterval(() => {
      const newPosition = getRandomPosition();
      setTargetPosition(newPosition);
    }, 1500);

    return () => clearInterval(movementInterval);
  }, []);

  useEffect(() => {
    springX.set(targetPosition.x);
    springY.set(targetPosition.y);
  }, [targetPosition, springX, springY]);

  return (
    <section className="relative z-0 min-h-screen overflow-hidden bg-[#0E0E0E]">
      <div className="sticky left-0 top-0 flex h-screen w-full items-center justify-center">
        <div className="absolute aspect-video h-[130%] opacity-25">
          <Image
            src={"/img/paper-texture-6.png"}
            alt="Paper Texture"
            fill
            priority
          />
        </div>

        <div className="text-white text-center">
          <h2 className="">Propaganda 2</h2>
          <h1 className="font-header text-5xl">Api Kehadiran</h1>
        </div>

        <motion.div
          className="absolute aspect-[0.74/1] w-[150%]"
          style={{
            x: springX,
            y: springY,
          }}
        >
          <Image
            src="/img/flame-fragments-mobile.png"
            alt="Flame Fragments"
            fill
            priority
          />
        </motion.div>

        <div className="absolute bottom-0 h-[35%] w-full bg-gradient-to-t from-[#0E0E0E] from-5% to-transparent to-80%" />
      </div>
    </section>
  );
}
