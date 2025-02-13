import Image from "next/image";

const Section1 = () => {
  return (
    <section className="relative flex h-fit min-h-screen w-full items-center overflow-visible bg-[#313131]">
      <div className="z-20 px-[24px] text-3xl text-white md:px-[40px] md:text-5xl lg:px-[120px] lg:text-6xl">
        <h1 className="font-header">Pengenalan Core Team</h1>
        <h2 className="font-body font-bold">
          <span className="text-tedx-red">TEDx</span>Universitas Brawijata 2025
        </h2>
      </div>
      <div className="absolute bottom-0 left-0 top-0 z-10 hidden h-[115vh] w-1/3 md:block">
        <Image
          src="/img/x-blur.png"
          alt="X Blur"
          draggable={false}
          fill
          unoptimized
          priority
        />
      </div>
      <div className="absolute -bottom-12 right-0 z-10 hidden h-full w-1/3 lg:block">
        <Image
          src="/img/betawi.png"
          alt="Our Team Background"
          className="object-cover"
          draggable={false}
          fill
          priority
        />
      </div>
      <div className="absolute bottom-0 left-0 z-[5] h-[calc(100dvh-62px)] w-full">
        <Image
          src="/img/team-bg.png"
          alt="Our Team Background"
          className="object-cover"
          draggable={false}
          fill
          priority
        />
      </div>
    </section>
  );
};

export default Section1;
