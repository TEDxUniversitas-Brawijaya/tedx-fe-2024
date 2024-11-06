import Image from "next/image";
import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <main className="relative z-0 flex h-screen w-full flex-col items-center justify-center gap-10 overflow-hidden bg-tedx-green text-center text-tedx-white">
      <div className="absolute z-0 h-screen w-full opacity-10">
        <Image src={"/img/paper-texture-3.png"} alt="Paper Texture" fill />
      </div>
      <h2
        className="font-header z-20 text-7xl font-bold"
        style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Segera Datang
      </h2>
      <button className="z-20">
        <Link
          href={"about-us"}
          className="rounded-md bg-tedx-red px-7 py-3 text-base font-semibold transition-all duration-150 hover:bg-tedx-red/80"
        >
          Kembali
        </Link>
      </button>

      <div className="absolute -bottom-28 flex w-full justify-center">
        <div className="relative size-72">
          <Image src={"/svg/x-shadow.svg"} alt="X" fill />
        </div>
      </div>
    </main>
  );
}
