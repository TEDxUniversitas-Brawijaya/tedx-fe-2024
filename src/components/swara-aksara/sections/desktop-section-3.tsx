import Image from "next/image";

export default function DesktopSection3() {
  return (
    <section className="relative z-0 flex h-[100vh] flex-col items-center justify-center gap-10 overflow-x-hidden bg-tedx-green pt-20 text-center overflow-y-hidden text-white">
      <div className="absolute top-0 h-screen w-full opacity-50">
        <Image src={"/img/paper-texture-5.png"} alt="Paper Texture" fill />
      </div>
      <div className="absolute -top-72 w-[711px] h-[593px]">
        <Image src={"/img/sun-2.png"} alt="Cloud" fill />
      </div>
      <div className="absolute -top-24 left-36 aspect-[16/18] w-96">
        <Image src={"/img/aksara-image-1.png"} alt="Cloud" fill />
      </div>
      <div className="absolute top-48 right-20 aspect-[5/4] w-96">
        <Image src={"/img/aksara-image-2.png"} alt="Cloud" fill />
      </div>
      <div className="absolute -bottom-28 right-96 aspect-[5/4] w-[48rem]">
        <Image src={"/img/aksara-image-3.png"} alt="Cloud" fill />
      </div>
      <div className="absolute left-36 bottom-44 flex flex-col items-start gap-6 w-[20%] text-start">
        <h3 className="font-header text-[5rem]">
          Shelterville
        </h3>
        <p className="font-semibold text-4xl text-white/60">
          23 November 2024 13.00 WIB
        </p>
      </div>
      <div className="absolute top-[22rem] w-[35%]">
        <a href="https://g.co/kgs/JVvzGCx" className="font-header text-[6rem] leading-none hover:underline">
          Catat tanggal & waktunya
        </a>
      </div>
    </section>
  );
}
