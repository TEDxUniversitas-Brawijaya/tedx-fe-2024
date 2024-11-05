import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MobileSection2() {
  const { scrollYProgress } = useScroll();

  const displayEyesNormal = useTransform(
    scrollYProgress,
    [0.3, 0.35],
    ["block", "none"],
  );
  const displayEyesClosed = useTransform(
    scrollYProgress,
    [0, 0.35, 0.4, 0.45, 0.5],
    ["none", "none", "block", "block", "none"],
  );
  const displayEyesChakra = useTransform(
    scrollYProgress,
    [0, 0.35, 0.4, 0.45, 0.5, 0.55],
    ["none", "none", "none", "none", "none", "block"],
  );

  const opacityText1 = useTransform(scrollYProgress, [0.3, 0.35], [1, 0]);
  const opacityText2 = useTransform(
    scrollYProgress,
    [0, 0.35, 0.4, 0.45, 0.5],
    [0, 0, 1, 1, 0],
  );
  const opacityText3 = useTransform(
    scrollYProgress,
    [0, 0.35, 0.4, 0.45, 0.5, 0.55],
    [0, 0, 0, 0, 0, 1],
  );

  return (
    <section className="relative -z-10 h-[400vh] text-tedx-white">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center pt-20 text-center">
        <Image
          src={"/img/bg-paper-black.png"}
          alt="Bg Black"
          fill
          className="-z-20"
        />

        <div className="relative flex h-32 w-full flex-col items-center space-y-5 px-5 text-center text-lg">
          <h2 className="font-playfair-display text-4xl font-bold leading-tight">
            Mengenal TEDx
          </h2>
          <motion.p
            className="absolute -bottom-full px-5"
            style={{ opacity: opacityText1 }}
          >
            TEDx merupakan events yang mengkolaborasikan komunitas lokal untuk
            berbagi ide dengan konsep yang ada pada TED sehingga memicu diskusi
            dan koneksi yang mendalam.
          </motion.p>
          <motion.p
            className="absolute -bottom-full px-5"
            style={{ opacity: opacityText2 }}
          >
            TEDx dengan label ikonik bersimbol “x” bermakna bahwa events
            tersebut diselenggarakan secara independen dengan lisensi dari TED.
          </motion.p>
          <motion.p
            className="absolute -bottom-full px-5"
            style={{ opacity: opacityText3 }}
          >
            TEDxUniversitasBrawijaya merupakan sebuah event yang diinisiasi oleh
            kumpulan mahasiswa Universitas Brawijaya yang diselenggarakan secara
            independen dengan lisensi dari TED.
          </motion.p>
        </div>
        <div className="relative z-40 mt-72 flex h-10 w-full justify-center">
          <motion.div
            className="absolute aspect-video w-[20rem]"
            style={{ y: -100, display: displayEyesNormal }}
          >
            <Image
              src={"/svg/eyes-normal.svg"}
              alt="Bg Black"
              fill
              className="-z-10 object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute aspect-video w-[20rem]"
            style={{ y: -100, display: displayEyesClosed }}
          >
            <Image
              src={"/svg/eyes-closed.svg"}
              alt="Bg Black"
              fill
              className="-z-10 object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute aspect-square w-[30rem]"
            style={{ y: -200, display: displayEyesChakra }}
          >
            <Image
              src={"/svg/eyes-chakra.svg"}
              alt="Bg Black"
              fill
              className="-z-10 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
