import Image from "next/image";
import CountdownTimer from "../../shared/countdown-timer";

export default function DesktopSection3() {
  return (
    <section className="relative mt-20 flex aspect-video w-full items-center justify-center bg-[#0E0E0E] text-center text-white">
      <div className="absolute top-0 -mt-20 h-32 w-full bg-gradient-to-t from-[#0E0E0E] via-[#100E10] to-[#100E10]"></div>
      <div className="z-10 -mt-44 flex w-[70%] flex-col items-center gap-20 text-center">
        <p className="max-w-[1200px] text-3xl font-semibold">
          Perjalanan menuju Mantra Diri masih berlanjut, teruslah menyelami
          makna dengan karsa yang direngkuh.
        </p>
        <div className="flex flex-col items-center text-xl">
          <p>Babak ini akan dimulai dalam</p>
          <CountdownTimer
            targetDate={new Date(2025, 0, 20, 12, 0, 0)}
            className="font-header text-9xl font-bold text-tedx-red"
          />
          <p className="max-w-[600px]">
            Pantau terus linimasa kami untuk mengetahui informasi lebih lanjut
            tentang Propaganda 3!
          </p>
        </div>
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
