import { motion } from "framer-motion";
import Image from "next/image";

export default function Section5() {
  return (
    <section className="relative h-full min-h-screen bg-[#1A1A1A]">
      <motion.div className="sticky left-0 top-0 flex h-full items-start">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden py-20 md:py-44">
          <div className="absolute size-full bg-gradient-to-b from-[#0F0F0F] to-transparent" />
          <div className="absolute size-full bg-gradient-to-b from-transparent via-[#082427] to-[#131012]" />

          <div className="absolute aspect-video size-full">
            <Image
              src="/img/paper-texture-2.png"
              alt="Paper Texture"
              fill
              priority
              className="opacity-25"
            />
          </div>

          <div className="z-10 flex flex-col gap-20 px-4 lg:px-20">
            <div className="flex flex-col gap-6 px-4 text-center">
              <span className="text-base text-white lg:text-2xl">
                SELAMAT BERTEMU DI
              </span>
              <h2 className="font-header text-2xl text-white lg:text-6xl">
                Perjalanan terakhir mencari &apos;Mantra Diri&apos;
                TEDxUniversitasBrawijaya 2025
              </h2>
            </div>

            <div className="flex w-full flex-row flex-wrap justify-center gap-x-6 gap-y-3 px-5 md:px-20">
              {sponsors.map((sponsor) => (
                <div key={sponsor.name} className="relative size-20 lg:size-24">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const sponsors: {
  name: string;
  image: string;
}[] = [
  {
    name: "Kalimaya",
    image: "/img/sponsor-kalimaya.png",
  },
  {
    name: "RRI PRO",
    image: "/img/sponsor-rri-pro.png",
  },
  {
    name: "101.3 MFM Radio",
    image: "/img/sponsor-101-3-mfm.png",
  },
  {
    name: "Detik Jatim",
    image: "/img/sponsor-detikjatim.png",
  },
  {
    name: "BFAST",
    image: "/img/sponsor-bfast.png",
  },
  {
    name: "UB Radio",
    image: "/img/sponsor-ub-radio.png",
  },
  {
    name: "ShARE",
    image: "/img/sponsor-share.png",
  },
  {
    name: "Curiouth",
    image: "/img/sponsor-curiouth.png",
  },
  {
    name: "FISIP",
    image: "/img/sponsor-fisip.png",
  },
  {
    name: "bobobox",
    image: "/img/sponsor-bobobox.png",
  },
  {
    name: "Info Jatim",
    image: "/img/sponsor-infojatim.png",
  },
  {
    name: "Caffino",
    image: "/img/sponsor-caffino.png",
  },
  {
    name: "Kopi Gajah",
    image: "/img/sponsor-kopi-gajah.png",
  },
  {
    name: "Mahasiswa Malang",
    image: "/img/sponsor-mhsmlg.png",
  },

  {
    name: "Acara Mahasiwa",
    image: "/img/sponsor-acaramahasiswa.png",
  },
  {
    name: "5Days",
    image: "/img/sponsor-5days.png",
  },
  {
    name: "Implora",
    image: "/img/sponsor-implora.png",
  },
  {
    name: "selfroom",
    image: "/img/sponsor-selfroom.png",
  },
  {
    name: "Kahf",
    image: "/img/sponsor-kahf.png",
  },
  {
    name: "AirNav",
    image: "/img/sponsor-airnav.png",
  },
];
