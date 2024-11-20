import Image from "next/image";
import { motion, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

export default function DesktopSection1() {
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

  const springX = useSpring(0, { stiffness: 300, damping: 50 });
  const springY = useSpring(0, { stiffness: 300, damping: 50 });

  useEffect(() => {
    springX.set(targetPosition.x);
    springY.set(targetPosition.y);
  }, [targetPosition, springX, springY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const eyesRect = e.currentTarget.getBoundingClientRect();
    const centerX = eyesRect.left + eyesRect.width / 2;
    const centerY = eyesRect.top + eyesRect.height / 2;

    // calculate the relative position of the cursor
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    // limit the movement to a circular boundary
    const maxMovement = 7;
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
      className="relative z-0 flex h-screen flex-col items-center justify-center gap-10 bg-tedx-grey-300 pt-20 text-center"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute bottom-0 -z-10 aspect-[1920/616] w-full">
        <Image src={"/img/cloud-grey.png"} alt="Cloud" fill />
      </div>
      <div className="absolute bottom-0 h-full w-full">
        <Image src={"/img/paper-texture-5.png"} alt="Cloud" fill />
      </div>

      <div className="relative bottom-0 flex aspect-[586/140] h-24 items-center justify-center">
        <Image src={"/svg/eyes-hollow.svg"} alt="Eyes" fill />

        {/* Eyeballs */}
        <motion.div
          className="absolute aspect-[395/78] h-[52px]"
          style={{
            x: springX, // Bind spring values to the x and y properties
            y: springY,
          }}
        >
          <Image src={"/svg/eyeballs.svg"} alt="EyeBalls" fill />
        </motion.div>
      </div>

      <div className="relative z-10 -mt-24">
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl italic text-tedx-red">
          Swara berarti suara; Aksara berarti huruf
        </p>
        {/* curved text */}
        <div className="w-[90vw] mx-auto">
          <svg className="w-full" viewBox="0 0 1000 200">
            <defs>
              <path
                id="curve"
                d="M 100 30 Q 500 350 950 30"
                fill="none"
              />
            </defs>
            <text className="tracking-[.15em] font-header text-[72px] fill-current">
              <textPath
                href="#curve"
                startOffset="50%"
                textAnchor="middle"
              >
                Swara Aksara
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <p className="z-10 w-[70%]">
        Swara Aksara mencerminkan kekuatan bahasa sebagai alat untuk
        menghidupkan dan menyampaikan makna pikiran serta perasaan setiap insan.
        Swara Aksara akan menampilkan tiga kandidat student speaker terpilih
        melalui seleksi ketat, memberikan kesempatan bagi mahasiswa untuk
        berbagi pemikiran inovatif mereka. Selain talks dari student speaker,
        akan ada penampilan menarik lainnya yang ikut memeriahkan acara Swara
        Aksara.
      </p>
      <button className="z-10 rounded-md bg-tedx-red px-4 py-2 text-white transition-colors duration-150 hover:bg-tedx-red/80">
        Jelajahi
      </button>
    </section>
  );
}
