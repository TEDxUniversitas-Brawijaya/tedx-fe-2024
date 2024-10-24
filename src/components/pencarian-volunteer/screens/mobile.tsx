import Footer from "@/components/shared/footer";
import Image from "next/image";
import Link from "next/link";

export default function VolunteerPageMobile() {
  return (
    <main className="relative bg-tedx-grey">
      <div className="absolute h-full w-full opacity-30">
        <Image src={"/img/paper-texture-3.png"} alt="Paper Texture" fill />
      </div>
      <div className="absolute -right-5 top-10 size-44">
        <Image src={"/svg/hand-hollow-top.svg"} alt="X" fill />
      </div>
      <div className="flex flex-col justify-center gap-10 px-5 py-20 md:px-20">
        <section className="space-y-5">
          <h2 className="z-10 mt-10 font-wulkan-display text-5xl font-black">
            Pencarian <br /> Volunteer
          </h2>
          <p>
            TEDx dengan label ikonik bersimbol &quot;x&quot; bermakna bahwa
            events tersebut diselenggarakan secara independen dengan lisensi
            dari TED. Maukah kamu menjadi bagian dari perjalanan ini?
          </p>
        </section>
        <section className="flex justify-center">
          <div className="relative aspect-square w-full max-w-[300px]">
            <Image src={"/svg/eyes-red.svg"} alt="Eyes" fill />
          </div>
        </section>
        <section className="space-y-5">
          <div>
            <h3 className="w-fit font-wulkan-display text-2xl font-black italic">
              Executive Producer
            </h3>
            <p>
              Memimpin semua produksi, perlengkapan, perencanaan, manajemen
              panggung, teknologi, selama acara berlangsung.
            </p>
          </div>
          <div>
            <h3 className="w-fit font-wulkan-display text-2xl font-black italic">
              Event Manager
            </h3>
            <p>
              Mengelola sebagian besar logistik hari acara, bertanggung jawab
              untuk menciptakan &quot;pengalaman TEDx&quot; untuk tamu,
              mengelola kegiatan hari acara di luar panggung utama, dan
              bertanggung jawab atas kebutuhan tiket dan pendaftaran.
            </p>
          </div>
          <div>
            <h3 className="w-fit font-wulkan-display text-2xl font-black italic">
              Curator
            </h3>
            <p>
              Menentukan siapa yang akan membawakan talks di pre event dan main
              event serta topik yang akan dibawakan yang sejalan dengan grand
              theme TEDxUniversitasBrawijaya
            </p>
          </div>
          <div>
            {" "}
            <h3 className="w-fit font-wulkan-display text-2xl font-black italic">
              Communication, Editorial, Marketing
            </h3>
            <p>
              Bertanggung jawab atas konten situs web, blog, dan media sosial
              dalam mempromosikan acara ke publik.
            </p>
          </div>
          <div>
            <h3 className="w-fit font-wulkan-display text-2xl font-black italic">
              Design
            </h3>
            <p>
              Bertanggung jawab dalam membuat logo acara, materi branding, dan
              aset estetika lainnya dalam tiap komponen acara.
            </p>
          </div>
          <div>
            <h3 className="w-fit font-wulkan-display text-2xl font-black italic">
              Video Production
            </h3>
            <p>
              Mengawasi video dan produksi acara - mulai dari mengelola
              kebutuhan audio dan video, operator kamera, dan streaming langsung
              acara.
            </p>
          </div>
          <div>
            <h3 className="w-fit font-wulkan-display text-2xl font-black italic">
              Website
            </h3>
            <p>
              Bertanggung jawab untuk mengembangkan dan mengelola situs web yang
              dapat diakses dan dikelola dengan mudah.
            </p>
          </div>
          <div>
            <h3 className="w-fit font-wulkan-display text-2xl font-black italic">
              Sponsorship
            </h3>
            <p>
              Bertanggung jawab atas dana yang akan digunakan selama rangkaian
              TEDxUniversitasBrawijaya berlangsung, money flow dan strategi
              penggalangan dana ataupun mendapatkan sponsor.
            </p>
          </div>
        </section>
        <section className="mt-10 flex flex-col items-center gap-5">
          <div className="relative size-32">
            <Image src={"/svg/x-tilted.svg"} alt="X" fill />
          </div>
          <h2 className="text-center font-wulkan-display text-4xl">
            Tertarik untuk menjadi bagian dari perjalanan mencari{" "}
            <span className="font-black">&apos;Mantra Diri&apos;</span>?
          </h2>
          <Link
            href={"https://bit.ly/PencarianVolunteerTEDXUB"}
            target="_blank"
            className="z-20 w-fit rounded-md bg-tedx-red px-7 py-3 text-base font-semibold text-tedx-white transition-all duration-150 hover:bg-tedx-red/80"
          >
            Mulai Perjalanan
          </Link>
        </section>
      </div>
      <Footer />
    </main>
  );
}
