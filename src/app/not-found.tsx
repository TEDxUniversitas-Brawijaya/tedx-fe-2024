import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="z-0 flex h-screen w-full flex-col items-center justify-center gap-10 bg-tedx-green text-center text-tedx-white">
      <div className="absolute z-0 h-screen w-full opacity-10">
        <Image src={"/img/paper-texture-1.png"} alt="Paper Texture" fill />
      </div>
      <h2 className="z-20 font-header text-7xl font-bold">
        Halaman Tidak Ditemukan
      </h2>
      <button className="z-20">
        <Link
          href={"/about-us"}
          className="rounded-md bg-tedx-red px-7 py-3 text-base font-semibold transition-all duration-150 hover:bg-tedx-red/80"
        >
          Kembali
        </Link>
      </button>
    </main>
  );
}
