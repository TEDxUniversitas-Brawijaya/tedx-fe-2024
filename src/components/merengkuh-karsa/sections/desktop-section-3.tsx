import Image from "next/image";

export default function DesktopSection3() {
  return (
    <section className="relative mt-20 flex aspect-video w-full items-center justify-center bg-[#0E0E0E]">
      <div className="absolute top-0 -mt-20 h-32 w-full bg-gradient-to-t from-[#0E0E0E] via-[#100E10] to-[#100E10]"></div>
      <div className="z-10 -mt-44 w-[70%] space-y-4 text-center">
        <p className="text-2xl text-white">
          Perjalanan menuju Mantra Diri masih berlanjut, Teruslah menyelami
          makna dengan Karsa yang di Rengkuh.
        </p>
        <button className="rounded-md bg-tedx-red px-7 py-3 font-body text-base font-semibold text-white transition-all duration-150 hover:bg-tedx-red/80 disabled:opacity-50">
          Daftarkan Dirimu
        </button>
      </div>
      <div className="absolute bottom-0 left-0 aspect-video w-full opacity-50">
        <Image
          src="/img/walk-door-desktop.png"
          alt="Walking to the door"
          className="object-cover"
          draggable={false}
          fill
          priority
        />
      </div>
    </section>
  );
}
