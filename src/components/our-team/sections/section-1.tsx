import Image from "next/image";

const Section1 = () => {
  return (
    <section className="relative flex h-fit min-h-screen w-full items-end overflow-hidden bg-[#313131] pb-7 md:items-center md:pb-0">
      <div className="z-20 px-5 text-3xl text-white md:px-20 md:text-5xl lg:px-20 lg:text-6xl">
        <h1 className="font-header">Mengenal Core Team</h1>
        <h2 className="font-body text-3xl font-medium md:text-5xl xl:text-6xl">
          <span className="font-bold text-tedx-red">TEDx</span> Universitas
          Brawijaya 2025
        </h2>
      </div>
      <div className="absolute bottom-0 left-0 top-0 z-10 hidden aspect-[3/5] h-[115vh] md:block">
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
