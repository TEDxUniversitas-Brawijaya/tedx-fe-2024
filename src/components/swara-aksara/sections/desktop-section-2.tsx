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
      id="section-2-desktop"
      className="relative z-0 flex h-[200vh] flex-col items-center justify-center gap-10 overflow-x-hidden overflow-y-hidden bg-tedx-grey-300 pt-20 text-center"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute top-0 -z-10 aspect-[1920/616] w-full -translate-y-1 rotate-180">
        <Image src={"/img/cloud-grey.png"} alt="Cloud" fill />
      </div>
      <div className="absolute top-0 z-10 h-screen w-full">
        <Image src={"/img/paper-texture-5.png"} alt="Cloud" fill />
      </div>
      <div className="absolute bottom-0 z-10 h-screen w-full">
        <Image src={"/img/paper-texture-5.png"} alt="Cloud" fill />
      </div>
      <div className="absolute left-36 top-[36rem] aspect-square w-96">
        <Image src={"/img/tarot-bg-blur.png"} alt="Cloud" fill />
      </div>
      <div className="absolute left-[20rem] top-40 aspect-square w-72 rotate-[55deg]">
        <Image src={"/img/tarot-bg-blur.png"} alt="Cloud" fill />
      </div>
      <div className="absolute right-52 top-52 aspect-square w-72">
        <Image src={"/img/tarot-bg-blur.png"} alt="Cloud" fill />
      </div>
      <div className="absolute bottom-[10rem] right-40 aspect-square w-72">
        <Image src={"/img/tarot-bg-blur.png"} alt="Cloud" fill />
      </div>
      <div className="absolute bottom-[3%] z-10 aspect-square w-[40%] 2xl:bottom-0">
        <Image src={"/img/sketsa-orangg.png"} alt="Cloud" fill />
      </div>
      <motion.div
        className="absolute left-36 top-20 aspect-square w-[16rem]"
        style={{
          x: springX, // Bind spring values to the x and y properties
          y: springY,
        }}
      >
        <Image src={"/img/speaker-card-1.png"} alt="Cloud" fill />
      </motion.div>
      <motion.div
        className="absolute -right-20 top-28 aspect-square w-[18rem]"
        style={{
          x: springX, // Bind spring values to the x and y properties
          y: springY,
        }}
      >
        <Image src={"/img/speaker-card-2.png"} alt="Cloud" fill />
      </motion.div>
      <motion.div
        className="absolute -right-20 bottom-[32rem] z-30 aspect-square w-[18rem] 2xl:-right-28 2xl:w-[30rem]"
        style={{
          x: springX, // Bind spring values to the x and y properties
          y: springY,
        }}
      >
        <Image src={"/img/speaker-card-3.png"} alt="Cloud" fill />
      </motion.div>
      <div className="absolute top-[18rem] z-30 flex flex-col items-center justify-center gap-5 2xl:top-[32rem]">
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="space-y-6">
            <h4 className="font-java text-4xl">ꦥꦶꦠꦸꦠꦸꦂ</h4>
            <h3 className="font-header text-4xl">(Pitutur)</h3>
          </div>
          <h1 className="w-[70%] font-header text-6xl leading-none">
            DAFTAR DAN TEMUKAN VERSI BARU DIRIMU!
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="w-[55%] text-lg">
            Inilah salah satu pemberhentian dalam mencari Mantra Diri, ikuti
            terus prosesnya dengan mengunjungi link ini!
          </p>

          <button
            disabled
            className="z-40 rounded-md bg-tedx-red px-4 py-2 font-bold text-white transition-colors duration-150 hover:bg-tedx-red/80 disabled:bg-tedx-red/80"
          >
            Temukan Dirimu
          </button>
        </div>
      </div>
    </section>
  );
}
