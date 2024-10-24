"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "./icons/menu-icon";
import { useState } from "react";
import { motion } from "framer-motion";
import XIcon from "./icons/x-icon";

export default function Navbar() {
  const pathname = usePathname();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative">
      <nav className="fixed z-30 flex w-full items-center justify-between gap-5 bg-tedx-black px-5 py-3 text-tedx-white md:px-20">
        <Link href={"/"}>
          <div className="relative aspect-[15/4] w-36">
            <Image src="/img/tedx-logo.png" alt="TEDxUB Logo" fill />
          </div>
        </Link>

        <div className="hidden space-x-10 font-semibold md:block">
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
          <Link
            href={"/pencarian-volunteer"}
            className="rounded-md bg-tedx-red px-5 py-2 text-base font-semibold transition-all duration-150 hover:bg-tedx-red/80"
          >
            Pencarian Volunteer
          </Link>
        </div>

        <button onClick={() => setShowMenu(true)} className="block md:hidden">
          <MenuIcon className="size-10" />
        </button>
      </nav>
      <motion.div
        animate={!showMenu ? {} : { top: "0", bottom: "0" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={`fixed left-0 right-0 z-[100] h-screen overflow-hidden bg-tedx-black p-5 text-tedx-white ${
          !showMenu ? "hidden" : "top-[-150vh]"
        }`}
      >
        <div className="flex w-full flex-col">
          <div className="flex justify-end">
            <button onClick={() => setShowMenu(false)}>
              <XIcon className="size-10" />
            </button>
          </div>

          <div className="relative flex grow flex-col items-center justify-center gap-5 pt-20 text-xl font-semibold">
            <Link
              onClick={() => setShowMenu(false)}
              href={"/about-us"}
              className={`underline-offset-4 hover:underline ${pathname === "/about-us" && "text-tedx-red"}`}
            >
              About Us
            </Link>
            <Link
              onClick={() => setShowMenu(false)}
              href={"/events"}
              className={`underline-offset-4 hover:underline ${pathname === "/events" && "text-tedx-red"}`}
            >
              Events
            </Link>
            <Link
              onClick={() => setShowMenu(false)}
              href={"/merch"}
              className={`underline-offset-4 hover:underline ${pathname === "/merch" && "text-tedx-red"}`}
            >
              Merch
            </Link>
            <Link
              onClick={() => setShowMenu(false)}
              href={"/pencarian-volunteer"}
              className="rounded-md bg-tedx-red px-5 py-2 text-xl font-semibold transition-all duration-150 hover:bg-tedx-red/80"
            >
              Pencarian Volunteer
            </Link>
          </div>

          <div className="absolute -bottom-1/4 -left-0 flex w-full justify-center">
            <div className="relative aspect-square w-full">
              <Image src={"/svg/x-shadow.svg"} alt="X" fill />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
