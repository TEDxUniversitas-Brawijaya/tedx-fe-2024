import Footer from "@/components/shared/footer";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function VolunteerPageDesktop() {
  const { scrollYProgress } = useScroll();

  const opacitySection1 = useTransform(
    scrollYProgress,
    [0, 0.9, 0.915],
    [1, 1, 0],
  );
  const opacitySection2 = useTransform(
    scrollYProgress,
    [0, 0.9, 0.925, 0.95],
    [0, 0, 1, 1],
  );

  const displayEyes = useTransform(
    scrollYProgress,
    [0, 0.915],
    ["block", "none"],
  );

  const opacityText1 = useTransform(
    scrollYProgress,
    [0, 0.075, 0.1, 0.175, 0.2],
    [0, 0, 1, 1, 0],
  );
  const opacityText2 = useTransform(
    scrollYProgress,
    [0, 0.175, 0.2, 0.275, 0.3],
    [0, 0, 1, 1, 0],
  );
  const opacityText3 = useTransform(
    scrollYProgress,
    [0, 0.175, 0.2, 0.275, 0.3, 0.375, 0.4],
    [0, 0, 0, 0, 1, 1, 0],
  );
  const opacityText4 = useTransform(
    scrollYProgress,
    [0, 0.175, 0.2, 0.275, 0.3, 0.375, 0.4, 0.475, 0.5],
    [0, 0, 0, 0, 0, 0, 1, 1, 0],
  );
  const opacityText5 = useTransform(
    scrollYProgress,
    [0, 0.175, 0.2, 0.275, 0.3, 0.375, 0.4, 0.475, 0.5, 0.575, 0.6],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  );
  const opacityText6 = useTransform(
    scrollYProgress,
    [0, 0.175, 0.2, 0.275, 0.3, 0.375, 0.4, 0.475, 0.5, 0.575, 0.6, 0.675, 0.7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  );
  const opacityText7 = useTransform(
    scrollYProgress,
    [
      0, 0.175, 0.2, 0.275, 0.3, 0.375, 0.4, 0.475, 0.5, 0.575, 0.6, 0.675, 0.7,
      0.775, 0.8,
    ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  );
  const opacityText8 = useTransform(
    scrollYProgress,
    [
      0, 0.175, 0.2, 0.275, 0.3, 0.375, 0.4, 0.475, 0.5, 0.575, 0.6, 0.675, 0.7,
      0.775, 0.8, 0.875, 0.9,
    ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  );

  const card1Y = useTransform(
    scrollYProgress,
    [0, 0.1, 0.175, 0.2, 1],
    [1000, 500, 100, -300, -1000],
  );
  const smoothCard1Y = useSpring(card1Y, { stiffness: 100, damping: 20 });

  const card2Y = useTransform(
    scrollYProgress,
    [0, 0.175, 0.2, 0.275, 0.3, 1],
    [1000, 1000, 500, 100, -300, -1000],
  );
  const smoothCard2Y = useSpring(card2Y, { stiffness: 100, damping: 20 });

  const card3Y = useTransform(
    scrollYProgress,
    [0, 0.275, 0.3, 0.375, 0.4, 1],
    [1000, 1000, 500, 100, -300, -1000],
  );
  const smoothCard3Y = useSpring(card3Y, { stiffness: 100, damping: 20 });

  const card4Y = useTransform(
    scrollYProgress,
    [0, 0.375, 0.4, 0.475, 0.5, 1],
    [1000, 1000, 500, 100, -300, -1000],
  );
  const smoothCard4Y = useSpring(card4Y, { stiffness: 100, damping: 20 });

  const card5Y = useTransform(
    scrollYProgress,
    [0, 0.475, 0.5, 0.575, 0.6, 1],
    [1000, 1000, 500, 100, -300, -1000],
  );
  const smoothCard5Y = useSpring(card5Y, { stiffness: 100, damping: 20 });

  const card6Y = useTransform(
    scrollYProgress,
    [0, 0.575, 0.6, 0.675, 0.7, 1],
    [1000, 1000, 500, 100, -300, -1000],
  );
  const smoothCard6Y = useSpring(card6Y, { stiffness: 100, damping: 20 });

  const card7Y = useTransform(
    scrollYProgress,
    [0, 0.675, 0.7, 0.775, 0.8, 1],
    [1000, 1000, 500, 100, -300, -1000],
  );
  const smoothCard7Y = useSpring(card7Y, { stiffness: 100, damping: 20 });

  const card8Y = useTransform(
    scrollYProgress,
    [0, 0.775, 0.8, 0.875, 0.9, 1],
    [1000, 1000, 500, 100, -300, -1000],
  );
  const smoothCard8Y = useSpring(card8Y, { stiffness: 100, damping: 20 });

  return (
    <main className="z-0 overflow-x-clip">
      <section className="h-[900vh] bg-tedx-grey">
        <div className="sticky top-0 flex h-screen w-full flex-col items-center gap-5 text-center">
          <div className="absolute h-screen w-full opacity-30">
            <Image src={"/img/paper-texture-3.png"} alt="Paper Texture" fill />
          </div>

          <div className="absolute left-10 top-10 size-52">
            <Image src={"/svg/x-tilted.svg"} alt="X" fill />
          </div>

          <div className="absolute -bottom-32 -left-12 size-[400px]">
            <Image src={"/svg/hand-hollow-bottom.svg"} alt="Hand" fill />
          </div>
          <div className="absolute -right-20 -top-20 size-[400px]">
            <Image src={"/svg/hand-hollow-top.svg"} alt="Hand" fill />
          </div>

          {/* Cards */}
          <motion.div
            className="absolute z-40 aspect-square w-72"
            style={{ y: smoothCard1Y }}
          >
            <Image
              src={"/img/card-ep.png"}
              alt="Card"
              fill
              className="rotate-[10deg]"
            />
          </motion.div>
          <motion.div
            className="absolute z-40 aspect-square w-72"
            style={{ y: smoothCard2Y, x: -150 }}
          >
            <Image
              src={"/img/card-em.png"}
              alt="Card"
              fill
              className="rotate-[-30deg]"
            />
          </motion.div>
          <motion.div
            className="absolute z-40 aspect-square w-72"
            style={{ y: smoothCard3Y, x: 150 }}
          >
            <Image
              src={"/img/card-curator.png"}
              alt="Card"
              fill
              className="rotate-[14deg]"
            />
          </motion.div>
          <motion.div
            className="absolute z-40 aspect-square w-72"
            style={{ y: smoothCard4Y, x: -115 }}
          >
            <Image
              src={"/img/card-cem.png"}
              alt="Card"
              fill
              className="rotate-[-5deg]"
            />
          </motion.div>
          <motion.div
            className="absolute z-40 aspect-square w-72"
            style={{ y: smoothCard5Y, x: 95 }}
          >
            <Image
              src={"/img/card-design.png"}
              alt="Card"
              fill
              className="rotate-[12deg]"
            />
          </motion.div>
          <motion.div
            className="absolute z-40 aspect-square w-72"
            style={{ y: smoothCard6Y, x: -135 }}
          >
            <Image
              src={"/img/card-vp.png"}
              alt="Card"
              fill
              className="rotate-[-10deg]"
            />
          </motion.div>
          <motion.div
            className="absolute z-40 aspect-square w-72"
            style={{ y: smoothCard7Y, x: 100 }}
          >
            <Image
              src={"/img/card-website.png"}
              alt="Card"
              fill
              className="rotate-[7deg]"
            />
          </motion.div>
          <motion.div
            className="absolute z-40 aspect-square w-72"
            style={{ y: smoothCard8Y, x: -111 }}
          >
            <Image
              src={"/img/card-sponsor.png"}
              alt="Card"
              fill
              className="rotate-[-17deg]"
            />
          </motion.div>

          <motion.div
            className="absolute -bottom-[50%] z-20 aspect-square w-[45%]"
            style={{ opacity: opacitySection1, display: displayEyes }}
          >
            <Image src={"/svg/eyes-red.svg"} alt="Eyes" fill />
          </motion.div>

          <motion.h2
            className="z-10 mt-32 font-wulkan-display text-7xl font-black"
            style={{ opacity: opacitySection1 }}
          >
            Pencarian Volunteer
          </motion.h2>
          <motion.p
            className="z-30 w-1/2 text-xl"
            style={{ opacity: opacitySection1 }}
          >
            TEDx dengan label ikonik bersimbol “x” bermakna bahwa events
            tersebut diselenggarakan secara independen dengan lisensi dari TED.
            Maukah kamu menjadi bagian dari perjalanan ini?
          </motion.p>

          <motion.div
            className="absolute bottom-10 right-10 w-1/4 space-y-3 text-start"
            style={{ opacity: opacityText1 }}
          >
            <h3 className="w-fit font-wulkan-display text-3xl font-black italic">
              Executive Producer
            </h3>
            <p className="">
              Memimpin semua produksi, perlengkapan, perencanaan, manajemen
              panggung, teknologi, selama acara berlangsung.
            </p>
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-10 w-1/4 space-y-3 text-start"
            style={{ opacity: opacityText2 }}
          >
            <h3 className="w-fit font-wulkan-display text-3xl font-black italic">
              Event Manager
            </h3>
            <p className="">
              Mengelola sebagian besar logistik hari acara, bertanggung jawab
              untuk menciptakan "pengalaman TEDx" untuk tamu, mengelola kegiatan
              hari acara di luar panggung utama, dan bertanggung jawab atas
              kebutuhan tiket dan pendaftaran.
            </p>
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-10 w-1/4 space-y-3 text-start"
            style={{ opacity: opacityText3 }}
          >
            <h3 className="w-fit font-wulkan-display text-3xl font-black italic">
              Curator
            </h3>
            <p className="">
              Menentukan siapa yang akan membawakan talks di pre event dan main
              event serta topik yang akan dibawakan yang sejalan dengan grand
              theme TEDxUniversitasBrawijaya
            </p>
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-10 w-1/4 space-y-3 text-start"
            style={{ opacity: opacityText4 }}
          >
            <h3 className="w-fit font-wulkan-display text-3xl font-black italic">
              Communication, Editorial, Marketing
            </h3>
            <p className="">
              Bertanggung jawab atas konten situs web, blog, dan media sosial
              dalam mempromosikan acara ke publik.
            </p>
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-10 w-1/4 space-y-3 text-start"
            style={{ opacity: opacityText5 }}
          >
            <h3 className="w-fit font-wulkan-display text-3xl font-black italic">
              Design
            </h3>
            <p className="">
              Bertanggung jawab dalam membuat logo acara, materi branding, dan
              aset estetika lainnya dalam tiap komponen acara.
            </p>
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-10 w-1/4 space-y-3 text-start"
            style={{ opacity: opacityText6 }}
          >
            <h3 className="w-fit font-wulkan-display text-3xl font-black italic">
              Video Production
            </h3>
            <p className="">
              Mengawasi video dan produksi acara - mulai dari mengelola
              kebutuhan audio dan video, operator kamera, dan streaming langsung
              acara.
            </p>
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-10 w-1/4 space-y-3 text-start"
            style={{ opacity: opacityText7 }}
          >
            <h3 className="w-fit font-wulkan-display text-3xl font-black italic">
              Website
            </h3>
            <p className="">
              Bertanggung jawab untuk mengembangkan dan mengelola situs web yang
              dapat diakses dan dikelola dengan mudah.
            </p>
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-10 w-1/4 space-y-3 text-start"
            style={{ opacity: opacityText8 }}
          >
            <h3 className="w-fit font-wulkan-display text-3xl font-black italic">
              Sponsorship
            </h3>
            <p className="">
              Bertanggung jawab atas dana yang akan digunakan selama rangkaian
              TEDxUniversitasBrawijaya berlangsung, money flow dan strategi
              penggalangan dana ataupun mendapatkan sponsor.
            </p>
          </motion.div>

          <motion.div
            style={{ opacity: opacitySection2 }}
            className="absolute flex h-screen w-1/2 flex-col items-center justify-center gap-5 pt-20 text-center"
          >
            <h2 className="font-wulkan-display text-6xl">
              Tertarik untuk menjadi bagian dari perjalanan mencari{" "}
              <span className="font-black">&apos;Mantra Diri&apos;</span>?
            </h2>
            <Link
              href={"https://bit.ly/PencarianVolunteerTEDXUB"}
              target="_blank"
              className="w-fit rounded-md bg-tedx-red px-7 py-3 text-base font-semibold text-tedx-white transition-all duration-150 hover:bg-tedx-red/80"
            >
              Mulai Perjalanan
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
