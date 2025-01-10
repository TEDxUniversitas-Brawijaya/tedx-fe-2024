import Image from "next/image";

export default function MobileSection3() {
  return (
    <>
      <div className="h-20 w-full bg-gradient-to-b from-[#100D10] to-[#0E0E0E]"></div>
      <section className="relative flex h-[90dvh] w-full items-center justify-center bg-[#0E0E0E]">
        <div className="absolute bottom-0 h-1/2 w-full opacity-50">
          <Image
            src="/img/walk-door-desktop.png"
            alt="Walking to the door"
            className="object-cover"
            draggable={false}
            fill
            priority
          />
        </div>

        <div className="absolute mb-14 flex w-[70%] flex-col items-center justify-center gap-y-9 text-center">
          <p className="w-80 text-lg font-semibold text-white">
            Perjalanan menuju Mantra Diri masih berlanjut, teruslah menyelami
            makna dengan karsa yang direngkuh.
          </p>
          <button className="rounded-md bg-tedx-red px-7 py-3 font-body text-base font-semibold text-white transition-all duration-150 hover:bg-tedx-red/80 disabled:opacity-50">
            Daftarkan Dirimu
          </button>
        </div>
      </section>
    </>
  );
}
