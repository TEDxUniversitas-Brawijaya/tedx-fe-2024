import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomePageMobile() {
  const { scrollYProgress } = useScroll();

  const opacityFilter = useTransform(scrollYProgress, [0.5, 0.7], [0, 0.6]);
  const opacityTexture = useTransform(scrollYProgress, [0.5, 0.7], [0.2, 0.1]);
  const opacityText = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  const leftCircleX = useTransform(scrollYProgress, [0.4, 0.8], [0, -70]);
  const rightCircleX = useTransform(scrollYProgress, [0.4, 0.8], [0, 70]);
  const smoothLeftCircleX = useSpring(leftCircleX, {
    stiffness: 100,
    damping: 30,
  });
  const smoothRightCircleX = useSpring(rightCircleX, {
    stiffness: 100,
    damping: 30,
  });

  const leftCloud1X = useTransform(scrollYProgress, [0.4, 0.7], [0, -250]);
  const rightCloud1X = useTransform(scrollYProgress, [0.4, 0.7], [0, 250]);
  const smoothLeftCloud1X = useSpring(leftCloud1X, {
    stiffness: 100,
    damping: 40,
  });
  const smoothRightCloud1X = useSpring(rightCloud1X, {
    stiffness: 100,
    damping: 40,
  });

  return (
    <main className="top-0 flex h-[200vh] justify-center">
      <div className="fixed -z-20 h-screen w-full bg-tedx-green" />
      <section className="flex h-screen w-full items-center justify-center">
        <motion.div
          className="fixed z-20 h-screen w-full bg-tedx-black"
          style={{ opacity: opacityFilter }}
        />
        <motion.div
          className="fixed z-20 h-screen w-full"
          style={{ opacity: opacityTexture }}
        >
          <Image src={"/img/paper-texture-1.png"} alt="Paper Texture" fill />
        </motion.div>

        <div className="fixed z-10">
          {/* X */}
          <motion.div className="relative size-52">
            <Image src={"/svg/x-shadow.svg"} alt="X" fill />
          </motion.div>

          {/* Circle */}
          <motion.div
            className="absolute -left-1/2 -top-1/2 aspect-[1/2] w-52"
            style={{ x: smoothLeftCircleX }}
          >
            <Image src={"/svg/circle-eyes-left.svg"} alt="Circle Eyes" fill />
          </motion.div>
          <motion.div
            className="absolute -right-1/2 -top-1/2 aspect-[1/2] w-52"
            style={{ x: smoothRightCircleX }}
          >
            <Image src={"/svg/circle-eyes-right.svg"} alt="Circle Eyes" fill />
          </motion.div>
        </div>

        <div className="fixed w-full">
          {/* Cloud 1 */}
          <motion.div
            className="absolute -top-[72vh] right-20 aspect-[1/1.2] w-[700px]"
            style={{ x: smoothRightCloud1X }}
          >
            <Image
              src={"/svg/cloud-blue-1.svg"}
              alt="Blue Cloud"
              fill
              priority
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-[72vh] left-20 aspect-[1/1.2] w-[700px]"
            style={{ x: smoothLeftCloud1X }}
          >
            <Image
              src={"/svg/cloud-blue-1.svg"}
              alt="Blue Cloud"
              fill
              priority
              className="rotate-180"
            />
          </motion.div>
        </div>

        <motion.div
          className={`fixed bottom-20 left-5 z-40 space-y-5 text-2xl font-bold text-tedx-white`}
          style={{ opacity: opacityText }}
        >
          <h2
            className="z-50"
            style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
          >
            <span>Mantra Diri :</span>
            <br />
            <span className="font-header text-5xl">
              Menembus Batas, Menyelami Realitas.
            </span>
          </h2>
          <button>
            <Link
              href={"about-us"}
              className="rounded-md bg-tedx-red px-7 py-3 text-base font-semibold transition-all duration-150 hover:bg-tedx-red/80"
            >
              Jelajahi Mantramu
            </Link>
          </button>
        </motion.div>
      </section>
    </main>
  );
}
