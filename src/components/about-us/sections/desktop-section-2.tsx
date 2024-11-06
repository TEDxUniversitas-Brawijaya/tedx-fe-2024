import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function DesktopSection2() {
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

  const opacityText1 = useTransform(
    scrollYProgress,
    [0.3, 0.34, 0.349],
    [1, 1, 0],
  );
  const opacityText2 = useTransform(
    scrollYProgress,
    [0.3, 0.34, 0.349, 0.355, 0.38, 0.39, 0.4, 0.45, 0.48, 0.49],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
  );
  const opacityText3 = useTransform(
    scrollYProgress,
    [0, 0.35, 0.4, 0.45, 0.49, 0.5, 0.54, 0.55],
    [0, 0, 0, 0, 0, 1, 1, 1],
  );

  return (
    <section className="relative -z-10 h-[500vh] text-tedx-white">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center pt-20 text-center">
        <Image
          src={"/img/bg-paper-black.png"}
          alt="Bg Black"
          fill
          className="-z-20"
        />

        <div className="relative w-2/5 space-y-5 text-center text-lg">
          <h2 className="font-header pt-10 text-6xl font-bold">
            Mengenal TEDx
          </h2>
          <motion.p className="absolute" style={{ opacity: opacityText1 }}>
            TEDx merupakan events yang mengkolaborasikan komunitas lokal untuk
            berbagi ide dengan konsep yang ada pada TED sehingga memicu diskusi
            dan koneksi yang mendalam.
          </motion.p>
          <motion.p className="absolute" style={{ opacity: opacityText2 }}>
            TEDx dengan label ikonik bersimbol “x” bermakna bahwa events
            tersebut diselenggarakan secara independen dengan lisensi dari TED.
          </motion.p>
          <motion.div
            className="absolute flex w-full justify-center"
            style={{ opacity: opacityText3 }}
          >
            <p className="max-w-[500px]">
              TEDxUniversitasBrawijaya merupakan sebuah event yang diinisiasi
              oleh kumpulan mahasiswa Universitas Brawijaya yang diselenggarakan
              secara independen dengan lisensi dari TED.
            </p>
          </motion.div>
        </div>

        <div className="relative z-40 mt-20 flex h-10 w-1/2 justify-center">
          <motion.div
            className="absolute aspect-video w-[50rem]"
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
            className="absolute aspect-video w-[50rem]"
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
            className="absolute aspect-square w-[71rem]"
            style={{ y: -300, display: displayEyesChakra }}
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
