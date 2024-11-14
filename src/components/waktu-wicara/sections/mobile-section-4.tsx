import Image from "next/image";

export default function MobileSection4() {
  return (
    <section className="relative h-dvh bg-[#080808] text-white">
      <div className="sticky left-0 top-0 h-screen w-full overflow-clip">
        <div className="absolute -left-56 top-0 aspect-video h-screen bg-[#080808]">
          <Image
            src="/img/eye-background.png"
            alt="Eye Background"
            className="mix-blend-color"
            fill
            priority
          />
        </div>

        <div className="absolute -bottom-56 -left-80 aspect-square w-[36rem]">
          <Image
            src="/img/red-ring-full.png"
            alt="Red Ring Full"
            fill
            priority
          />
        </div>

        <div className="absolute -bottom-8 -left-52 aspect-square w-[42rem]">
          <Image
            src="/img/hand-flower-1.png"
            alt="Hand Flower 1"
            fill
            priority
          />
        </div>

        <div className="absolute left-0 top-0 h-screen w-screen">
          <div className="h-screen w-screen bg-gradient-to-t from-[#D9151C] to-transparent to-50% opacity-40" />
        </div>

        <div className="absolute top-56 right-10 flex w-max flex-col items-center justify-center">
          <h1 className="text-center font-header text-4xl leading-[4rem]">
            Tersembunyi
          </h1>
          <h2 className="w-56 text-justify font-light">
            Potensi dan mimpi bersemayam dalam diri, menanti saatnya terungkap
            dan menyuarakan apa yang selama ini terdiam.
          </h2>
        </div>
      </div>
    </section>
  );
}
