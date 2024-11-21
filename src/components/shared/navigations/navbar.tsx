"use client";

import Image from "next/image";
import Link from "next/link";
import DesktopNavMenu from "./desktop-nav-menu";
import MobileNavMenu from "./mobile-nav-menu";

export default function Navbar() {
  return (
    <div className="relative">
      <nav className="fixed z-30 flex w-full items-center justify-between gap-5 bg-tedx-black px-5 py-3 text-tedx-white md:px-20">
        <Link href={"/"}>
          <div className="relative aspect-[15/4] w-36">
            <Image src="/img/tedx-logo.png" alt="TEDxUB Logo" fill />
          </div>
        </Link>

        <DesktopNavMenu />
        <MobileNavMenu />
      </nav>
    </div>
  );
}
