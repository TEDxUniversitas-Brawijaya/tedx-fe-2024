import Image from "next/image";

export const DesktopSection3 = () => {
  return (
    <section
      style={{
        background: `linear-gradient(
            to bottom,
            rgb(19 16 18) 20%,
            rgb(84 13 0),
            rgb(19 16 18)
        )`,
      }}
      className="relative z-0 flex flex-col items-center gap-24 overflow-hidden bg-[#1A1A1A] px-20 py-44 text-center text-white"
    >
      <div className="absolute left-0 top-0 z-10 h-screen w-full opacity-[0.15]">
        <Image
          src="/img/paper-texture-4.png"
          alt="Paper Texture"
          draggable={false}
          fill
          priority
        />
      </div>

      <h2 className="max-w-[70%] font-header text-6xl">
        “Langkah Kecil Adalah Kunci <br /> Untuk Menemukan Terang”
      </h2>
      <div className="aspect-video w-4/5 bg-neutral-200"></div>
      <p className="max-w-[60%] text-xl">
        Dalam pemberhentian singkat ini, kami ingin membagikan beberapa
        pengalaman teman-teman dalam proses kembali menemukan api yang telah
        redup. Jadikan ini sebagai langkah kecil kamu untuk menjadi bagian dari
        perubahan
      </p>
    </section>
  );
};
