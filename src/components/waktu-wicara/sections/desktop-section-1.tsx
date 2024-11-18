import { motion } from "framer-motion";
import Image from "next/image";

interface IDesktopSection1 {
  handleExplore: () => void;
  isAnimating: boolean;
}

const DesktopSection1 = ({ handleExplore, isAnimating }: IDesktopSection1) => (
  <section>
    <motion.div className="absolute bottom-[10%] left-[5%] z-10 font-header">
      <h1 className="text-4xl">Propaganda 1</h1>
      <h2 className="text-6xl font-bold">Waktu Wicara</h2>
      <button
        className="mt-5 rounded-md bg-tedx-red px-7 py-3 text-base font-semibold text-white transition-all duration-150 hover:bg-tedx-red/80 disabled:opacity-50"
        onClick={handleExplore}
        disabled={isAnimating}
      >
        Jelajah
      </button>
    </motion.div>
    <motion.div className="absolute left-0 size-[400px] lg:-top-16 xl:top-0">
      <Image src="/img/flower-raflesia.png" alt="Paper Texture" fill priority />
    </motion.div>

    <div className="absolute left-0 top-0 h-screen w-full opacity-20">
      <Image
        src="/img/paper-texture-3.png"
        alt="Paper Texture"
        draggable={false}
        fill
        priority
      />
    </div>
  </section>
);

export default DesktopSection1;
