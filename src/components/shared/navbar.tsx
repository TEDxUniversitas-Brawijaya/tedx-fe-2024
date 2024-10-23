"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-tedx-black text-tedx-white fixed z-30 flex w-full items-center justify-between gap-5 px-20 py-3">
      <Link href={"/"}>
        <div className="relative aspect-[15/4] w-36">
          <Image src="/img/tedx-logo.png" alt="TEDxUB Logo" fill />
        </div>
      </Link>

      <div className="space-x-10 font-semibold">
        <Link
          href={"/about-us"}
          className={`underline-offset-4 hover:underline ${pathname === "/about-us" && "text-tedx-red"}`}
        >
          About Us
        </Link>
        <Link
          href={"/events"}
          className={`underline-offset-4 hover:underline ${pathname === "/events" && "text-tedx-red"}`}
        >
          Events
        </Link>
        <Link
          href={"/merch"}
          className={`underline-offset-4 hover:underline ${pathname === "/merch" && "text-tedx-red"}`}
        >
          Merch
        </Link>
      </div>
    </nav>
  );
}
