import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-tedx-black relative z-0">
      <div className="absolute -z-10 h-full w-full">
        <Image src={"/img/fog.png"} alt="Fog" fill />
      </div>
      <footer className="text-tedx-white flex items-end gap-20 px-20 pb-10 pt-32">
        <div className="flex flex-col gap-5">
          <div className="relative h-[40px] w-[151px]">
            <Image src={"/img/tedx-logo.png"} alt="TEDx Logo" fill />
          </div>
          <div>
            <p className="text-xs text-neutral-500">
              © 2024. TEDxUniversitasBrawijaya
              <br />
              An independently organized TED-like event under license from TED.
            </p>
          </div>
        </div>
        <div className="space-y-5">
          <h3 className="text-xs text-neutral-500">MARI TERKONEKSI</h3>
          <div className="flex items-center gap-5 [&>div]:text-neutral-500">
            <Link
              href={"https://www.instagram.com/tedxuniversitasbrawijaya/"}
              target="_blank"
              className="hover:underline"
            >
              Instagram
            </Link>
            <div>/</div>
            <Link
              href={"mailto:tedxuniversitasbrawijaya@gmail.com"}
              target="_blank"
              className="hover:underline"
            >
              Gmail
            </Link>
            <div>/</div>
            <Link
              href={"https://x.com/tedxbrawijaya"}
              target="_blank"
              className="hover:underline"
            >
              X
            </Link>
            <div>/</div>
            <Link
              href={"https://www.tiktok.com/@tedxuniversitasbrawijaya"}
              target="_blank"
              className="hover:underline"
            >
              Tiktok
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
