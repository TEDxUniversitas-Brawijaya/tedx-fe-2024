import Image from "next/image";

export default function MobileSection2() {
  return (
    <section className="relative h-dvh bg-[#082427] text-white">
      <div className="sticky left-0 top-0 h-screen w-full overflow-clip">
        <div className="absolute left-0 top-0 aspect-video h-[160vh] opacity-50">
          <Image
            src="/img/paper-texture-4.png"
            alt="Paper Texture 4"
            fill
            priority
          />
        </div>

        <div className="absolute left-1/2 top-0 aspect-video h-screen -translate-x-1/2 transform">
          <Image
            src="/img/red-line-overlay.png"
            alt="Red Line Overlay"
            fill
            priority
          />
        </div>

        <div className="absolute left-0 top-0 h-[120vh] w-screen">
          <div className="h-screen w-screen bg-gradient-to-b from-[#0F0F0F] to-transparent to-75%" />
        </div>

        <div className="absolute -left-32 top-96 aspect-[15/47] w-96 blur-md">
          <Image src={"/img/person-walking.png"} alt="Person Walking" fill />
        </div>

        <div className="absolute -right-96 top-72 aspect-[15/47] w-[52rem]">
          <Image src={"/img/person-walking.png"} alt="Person Walking" fill />
        </div>

        <div className="transfrom absolute left-1/2 top-[35%] flex w-max -translate-x-1/2 flex-col items-center justify-center">
          <h1 className="text-center font-header text-4xl leading-[4rem]">
            Waktu Wicara,
          </h1>
          <h2 className="font-light text-center w-80">
            sang penjaga sunyi, saksi mata setiap jejak langkah insan menuju
            aktualisasi diri. Setiap detik mengukir kisah, memberi ruang bagi
            jiwa untuk mekar, berubah dan menemukan suara dalam keberanian yang
            penuh keyakinan.
          </h2>
        </div>
      </div>
    </section>
  );
}
