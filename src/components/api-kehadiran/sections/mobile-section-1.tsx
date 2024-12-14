import Image from "next/image";

export default function MobileSection1() {
  return (
    <section className="relative z-0 min-h-screen overflow-hidden bg-[#0E0E0E]">
      <div className="sticky left-0 top-0 flex h-screen w-full items-center justify-center">
        <div className="absolute aspect-video h-[130%] opacity-25">
          <Image
            src={"/img/paper-texture-6.png"}
            alt="Paper Texture"
            fill
            priority
          />
        </div>

        <div className="text-white">
          <h2 className="text-center">Propaganda 2</h2>
          <h1 className="font-header text-5xl">Api Kehadiran</h1>
        </div>

        <div className="absolute aspect-[0.74/1] w-[150%]">
          <Image
            src="/img/flame-fragments-mobile.png"
            alt="Flame Fragments"
            fill
            priority
          />
        </div>

        <div className="absolute bottom-0 h-[35%] w-full bg-gradient-to-t from-[#0E0E0E] from-5% to-transparent to-80%" />
      </div>
    </section>
  );
}
