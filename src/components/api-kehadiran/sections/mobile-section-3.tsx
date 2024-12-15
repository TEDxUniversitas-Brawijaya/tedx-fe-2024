import Image from "next/image";

export default function MobileSection3() {
  return (
    <section className="relative z-0 h-screen overflow-hidden bg-[#1A1A1A]">
      <div className="sticky left-0 top-0 flex h-screen w-full items-center justify-center">
        <div className="absolute h-full w-full bg-gradient-to-t from-[#131012] to-[#540D00]" />

        <div className="absolute aspect-video h-[130%] opacity-25">
          <Image
            src={"/img/paper-texture-6.png"}
            alt="Paper Texture"
            fill
            priority
          />
        </div>

        <div className="absolute flex w-[24rem] flex-col items-center justify-center gap-11 text-center text-white">
          <div className="flex w-[22rem] flex-col items-center justify-center gap-6">
            <h1 className="font-header text-2xl">
              &quot;Langkah Kecil Adalah Kunci Untuk Menemukan Terang&quot;
            </h1>
            <div className="h-[12rem] w-full bg-white" />
          </div>
          <p className="text-xs">
            Dalam pemberhentian singkat ini, kami ingin membagikan beberapa
            pengalaman teman-teman dalam proses kembali menemukan api yang telah
            redup. Jadikan ini sebagai langkah kecil kamu untuk menjadi bagian
            dari perubahan
          </p>
        </div>

        <div className="absolute top-0 h-[35%] w-full bg-gradient-to-b from-[#0E0E0E] from-5% to-transparent to-80%" />
      </div>
    </section>
  );
}
