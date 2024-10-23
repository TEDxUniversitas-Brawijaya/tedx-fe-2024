import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="bg-tedx-green text-tedx-white z-0 flex h-screen w-full flex-col items-center justify-center gap-10">
      <div className="absolute z-0 h-screen w-full opacity-10">
        <Image src={"/img/paper-texture-1.png"} alt="Paper Texture" fill />
      </div>
      <h2 className="font-wulkan-display z-20 text-7xl font-black">
        Halaman Tidak Ditemukan
      </h2>
      <button className="z-20">
        <Link
          href={"about-us"}
          className="bg-tedx-red hover:bg-tedx-red/80 rounded-md px-7 py-3 text-base font-semibold transition-all duration-150"
        >
          Kembali
        </Link>
      </button>
    </main>
  );
}
