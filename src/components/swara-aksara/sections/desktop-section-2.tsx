import { motion, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DesktopSection2() {
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

  const springX = useSpring(0, { stiffness: 300, damping: 50 });
  const springY = useSpring(0, { stiffness: 300, damping: 50 });

  useEffect(() => {
    springX.set(targetPosition.x);
    springY.set(targetPosition.y);
  }, [targetPosition, springX, springY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    const centerX = cardRect.left + cardRect.width / 2;
    const centerY = cardRect.top + cardRect.height / 2;

    // calculate the relative position of the cursor
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    // limit the movement to a circular boundary
    const maxMovement = 24;
    const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);
    if (distance > maxMovement) {
      const angle = Math.atan2(offsetY, offsetX);
      const xAddition = offsetX > 0 ? 5 : -5;

      setTargetPosition({
        x: Math.cos(angle) * maxMovement + xAddition,
        y: Math.sin(angle) * maxMovement,
      });
    } else {
      setTargetPosition({ x: offsetX, y: offsetY });
    }
  };

  return (
    <section
      className="relative z-0 flex h-[200vh] flex-col items-center justify-center gap-10 overflow-x-hidden bg-tedx-grey-300 pt-20 text-center"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute top-0 -z-10 aspect-[1920/616] w-full rotate-180">
        <Image src={"/img/cloud-grey.png"} alt="Cloud" fill />
      </div>
      <div className="absolute top-0 h-screen w-full">
        <Image src={"/img/paper-texture-5.png"} alt="Cloud" fill />
      </div>
      <div className="z-20 absolute bottom-0 h-screen w-full">
        <Image src={"/img/paper-texture-5.png"} alt="Cloud" fill />
      </div>
      <div className="absolute left-36 top-[36rem] aspect-square w-96">
        <Image src={"/img/tarot-bg-blur.png"} alt="Cloud" fill />
      </div>
      <div className="absolute left-[30rem] top-40 aspect-square w-96 rotate-[55deg]">
        <Image src={"/img/tarot-bg-blur.png"} alt="Cloud" fill />
      </div>
      <div className="absolute right-72 top-72 aspect-square w-96">
        <Image src={"/img/tarot-bg-blur.png"} alt="Cloud" fill />
      </div>
      <div className="absolute bottom-[40rem] right-40 aspect-square w-96">
        <Image src={"/img/tarot-bg-blur.png"} alt="Cloud" fill />
      </div>
      <div className="z-10 absolute bottom-0 h-[858px] w-[884px]">
        <Image src={"/img/sketsa-orangg.png"} alt="Cloud" fill />
      </div>
      <motion.div
        className="absolute left-36 top-32 h-[442px] w-[458px]"
        style={{
          x: springX, // Bind spring values to the x and y properties
          y: springY,
        }}
      >
        <Image src={"/img/speaker-card-1.png"} alt="Cloud" fill />
      </motion.div>
      <motion.div
        className="absolute -right-20 top-28 aspect-square w-[485px]"
        style={{
          x: springX, // Bind spring values to the x and y properties
          y: springY,
        }}
      >
        <Image src={"/img/speaker-card-2.png"} alt="Cloud" fill />
      </motion.div>
      <motion.div
        className="z-30 absolute -right-28 bottom-[32rem] h-[452px] w-[470px]"
        style={{
          x: springX, // Bind spring values to the x and y properties
          y: springY,
        }}
      >
        <Image src={"/img/speaker-card-3.png"} alt="Cloud" fill />
      </motion.div>
      <div className="absolute top-[32rem] z-10 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center">
          <div>
            <h4 className="text-[3.25rem]">ꦥꦶꦠꦸꦠꦸꦂ</h4>
            <h3 className="font-header text-[3.25rem]">(Piturur)</h3>
          </div>
          <h1 className="w-[70%] font-header text-[6rem] leading-none">
            DAFTAR DAN TEMUKAN VERSI BARU DIRIMU!
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="w-[55%] text-3xl">
            Inilah salah satu pemberhentian dalam mencari Mantra Diri, ikuti
            terus prosesnya dengan mengunjungi link ini!
          </p>
          <button className="z-10 rounded-md bg-tedx-red px-4 py-2 font-bold text-white transition-colors duration-150 hover:bg-tedx-red/80">
            Temukan Dirimu
          </button>
        </div>
      </div>
    </section>
  );
}
