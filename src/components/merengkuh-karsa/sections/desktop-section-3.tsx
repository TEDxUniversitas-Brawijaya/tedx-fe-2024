import Image from "next/image";

export default function DesktopSection3() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center bg-black">
      <div className="z-10 mt-14 w-[70%] space-y-4 text-center">
        <p className="text-2xl text-white">
          Perjalanan menuju Mantra Diri masih berlanjut, Teruslah menyelami
          makna dengan Karsa yang di Rengkuh.
        </p>
        <button className="rounded-md bg-tedx-red px-7 py-3 font-body text-base font-semibold text-white transition-all duration-150 hover:bg-tedx-red/80 disabled:opacity-50">
          Daftarkan Dirimu
        </button>
      </div>
      <div className="absolute bottom-0 left-0 h-[75dvh] w-full opacity-50">
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
