import Image from "next/image";
import CountdownTimer from "../../shared/countdown-timer";

export default function MobileSection3() {
  return (
    <>
      <div className="h-20 w-full bg-gradient-to-b from-[#100D10] to-[#0E0E0E]"></div>
      <section className="relative flex h-[90dvh] w-full items-center justify-center bg-[#0E0E0E] text-white">
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

        <div className="absolute mb-14 flex flex-col items-center justify-center gap-y-20 px-5 text-center">
          <p className="text-lg font-semibold sm:w-[70%]">
            Perjalanan menuju Mantra Diri masih berlanjut, teruslah menyelami
            makna dengan karsa yang direngkuh.
          </p>
          <div className="flex flex-col items-center">
            <p>Babak ini akan dimulai dalam</p>
            <CountdownTimer
              targetDate={new Date(2025, 0, 22, 12, 0, 0)}
              className="font-header text-5xl font-bold text-tedx-red"
            />
            <p className="max-w-[400px]">
              Pantau terus linimasa kami untuk mengetahui informasi lebih lanjut
              tentang Propaganda 3!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
