import { motion } from "framer-motion";
import Image from "next/image";

export default function Section4() {
  return (
    <section className="relative h-full min-h-screen bg-[#1A1A1A]">
      <motion.div className="sticky left-0 top-0 flex h-full items-start">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden pt-20">
          <div className="absolute top-0 size-full bg-gradient-to-b from-[#0F0F0F] to-transparent" />
          <div className="absolute top-0 size-full bg-gradient-to-b from-transparent via-[#082427] to-[#131012]" />

          <div className="absolute top-0 aspect-video size-full">
            <Image
              src="/img/paper-texture-2.png"
              alt="Paper Texture"
              fill
              priority
              className="opacity-25"
            />
          </div>

          <div className="z-0 flex h-screen w-full flex-col items-center justify-center gap-16">
            <div className="left-0 z-10 flex flex-col gap-20 px-4 text-center sm:absolute sm:left-8 sm:text-start md:left-12 lg:left-16">
              <div className="flex flex-col items-center gap-6 sm:items-start">
                <span className="text-base text-white lg:text-2xl">
                  SPECIAL PERFORMANCE
                </span>
                <h2 className="text-center font-header text-3xl text-white lg:text-6xl">
                  TEDxUniversitas <br /> Brawijaya 2025
                </h2>
              </div>
              <p className="text-balance text-sm italic text-[#b9b9b9] sm:w-52 md:w-72 lg:w-96">
                Gendhis adalah LSO yang terdiri dari tiga divisi: tari,
                karawitan, dan teater. Dengan nama yang berasal dari kata
                &quot;Gendhis,&quot; yang berarti gula jawa, Gendhis berharap
                dapat memberikan manfaat yang manis bagi internal dan eksternal
                organisasi, termasuk masyarakat. Salah satu fokus Gendhis adalah
                pada seni tari, yang mencakup tari tradisional, modern, dan
                kontemporer, di mana hal ini sebagai bentuk pelestarian budaya
                terutama di era globalisasi. Selain itu, seni tari juga sebagai
                wadah bagi mahasiswa FISIP untuk menuangkan kreativitasnya
                melalui koreografi dan musik yang sarat akan makna.
              </p>
            </div>

            {/* TODO */}
            <div className="relative z-0 aspect-video w-full bg-white opacity-50 sm:absolute sm:right-8 sm:w-[70%] md:right-12 lg:right-16">
              <Image
                src="/img/gendhis-special-performance.jpg"
                alt="Gendhis Special Performance"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
