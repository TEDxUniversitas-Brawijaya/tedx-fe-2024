import Image from "next/image";
import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const DesktopSection1 = () => {
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

  const springX = useSpring(0, { stiffness: 50, damping: 10 });
  const springY = useSpring(0, { stiffness: 50, damping: 10 });

  useEffect(() => {
    springX.set(targetPosition.x);
    springY.set(targetPosition.y);
  }, [targetPosition, springX, springY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    const centerX = cardRect.left + cardRect.width / 2;
    const centerY = cardRect.top + cardRect.height / 2;

    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    const maxMovement = 6;
    const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);
    if (distance > maxMovement) {
      const angle = Math.atan2(offsetY, offsetX);

      setTargetPosition({
        x: -Math.cos(angle) * maxMovement,
        y: -Math.sin(angle) * maxMovement,
      });
    } else {
      setTargetPosition({
        x: -offsetX / 3,
        y: -offsetY / 3,
      });
    }
  };

  return (
    <section
      className="relative flex h-screen w-full flex-col items-center justify-center gap-4 overflow-hidden text-white"
      onMouseMove={handleMouseMove}
    >
      <h1 className="z-20 text-3xl">Propaganda 1</h1>
      <h2 className="z-20 font-header text-8xl">Api Kehadiran</h2>

      <motion.div
        className="absolute left-0 top-0 z-10 h-screen w-full"
        style={{
          x: springX,
          y: springY,
        }}
      >
        <Image
          src="/img/glass-desktop.png"
          alt="Glass"
          className="object-cover"
          draggable={false}
          fill
          priority
        />
      </motion.div>

      <div className="absolute left-0 top-0 h-screen w-full opacity-70">
        <Image
          src="/img/paper-texture-6.png"
          alt="Paper Texture"
          draggable={false}
          fill
          priority
        />
      </div>
    </section>
  );
};

export default DesktopSection1;
