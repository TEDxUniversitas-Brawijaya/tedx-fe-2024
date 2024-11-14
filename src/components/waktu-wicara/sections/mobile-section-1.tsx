import Image from "next/image";

export default function MobileSection1() {
  return (
    <section className="bg-tedx-yellow relative h-dvh overflow-clip">
      <div className="absolute -left-4 -top-4 size-[250px]">
        <Image src="/svg/raflesia.svg" alt="Raflesia" fill priority />
      </div>

      <div className="transfrom absolute left-1/2 top-[35%] flex w-max -translate-x-1/2 flex-col items-center justify-center">
        <h2 className="text-xl">Propaganda 1</h2>
        <h1 className="mb-8 mt-5 text-center font-header text-4xl">
          Waktu Wicara
        </h1>
        <button className="rounded-2xl bg-tedx-red px-12 py-3 font-bold text-white">
          Jelajah
        </button>
      </div>

      {/* its not really that responsive */}
      <div className="absolute -bottom-0 left-0 w-screen h-[50%]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 transform w-screen h-[70vh] overflow-y-clip">
          <Image src="/svg/mask-bg.svg" alt="Mask Background" fill priority />
        </div>
        <div className="absolute left-1/2 top-10 -translate-x-1/2 transform w-[140%] h-[140vh] overflow-y-clip">
          <Image src="/svg/mask-open.svg" alt="Mask Open" fill priority />
        </div>
      </div>
    </section>
  );
}
