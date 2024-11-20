import Image from "next/image";
import { motion, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { Link as Scroll } from "react-scroll";

export default function MobileSection1() {
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const springX = useSpring(0, { stiffness: 300, damping: 50 });
  const springY = useSpring(0, { stiffness: 300, damping: 50 });

  useEffect(() => {
    const getRandomEyePosition = () => {
      const maxMovement = 7;
      const randomAngle = Math.random() * 2 * Math.PI;
      const randomDistance = Math.random() * maxMovement;

      return {
        x: Math.cos(randomAngle) * randomDistance,
        y: Math.sin(randomAngle) * randomDistance,
      };
    };

    const eyeMovementInterval = setInterval(() => {
      const newPosition = getRandomEyePosition();
      setTargetPosition(newPosition);
    }, 1500);

    return () => clearInterval(eyeMovementInterval);
  }, []);

  useEffect(() => {
    springX.set(targetPosition.x);
    springY.set(targetPosition.y);
  }, [targetPosition, springX, springY]);

  return (
    <section className="relative z-0 flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-tedx-grey-300 px-5 pt-20 text-center">
      <div className="absolute bottom-0 -z-10 aspect-[1920/616] w-full">
        <Image src={"/img/cloud-grey.png"} alt="Cloud" fill />
      </div>
      <div className="absolute bottom-0 h-full w-full">
        <Image src={"/img/paper-texture-5.png"} alt="Paper Texture" fill />
      </div>
      <div className="relative bottom-0 flex aspect-[586/140] h-20 items-center justify-center">
        <Image src={"/svg/eyes-hollow.svg"} alt="Eyes" fill />
        {/* Eyeballs */}
        <motion.div
          className="absolute aspect-[395/78] h-[42px]"
          style={{
            x: springX,
            y: springY,
          }}
        >
          <Image src={"/svg/eyeballs.svg"} alt="EyeBalls" fill />
        </motion.div>
      </div>
      <div className="relative z-10 w-full">
        <p className="w-full italic text-tedx-red">
          Swara berarti suara; Aksara berarti huruf
        </p>
        {/* curved text */}
        <div className="mx-auto w-full sm:-mt-16">
          <svg className="w-full" viewBox="0 0 600 200">
            <defs>
              <path id="curve" d="M 30 80 Q 300 200 600 80" fill="none" />
            </defs>
            <text className="fill-current font-header text-[72px] tracking-[.15em]">
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                Swara Aksara
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <p className="z-10 w-full">
        Swara Aksara mencerminkan kekuatan bahasa sebagai alat untuk
        menghidupkan dan menyampaikan makna pikiran serta perasaan setiap insan.
        Swara Aksara akan menampilkan tiga kandidat student speaker terpilih
        melalui seleksi ketat, memberikan kesempatan bagi mahasiswa untuk
        berbagi pemikiran inovatif mereka. Selain talks dari student speaker,
        akan ada penampilan menarik lainnya yang ikut memeriahkan acara Swara
        Aksara.
      </p>
      <Scroll
        to="section-2-mobile"
        smooth={true}
        duration={1000}
        className="z-30"
        offset={100}
      >
        <button className="z-10 rounded-md bg-tedx-red px-4 py-2 text-white transition-colors duration-150 hover:bg-tedx-red/80">
          Jelajahi
        </button>
      </Scroll>
    </section>
  );
}
