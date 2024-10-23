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
      <nav className="bg-tedx-black text-tedx-white fixed z-30 flex w-full items-center justify-between gap-5 px-5 py-3 md:px-20">
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
        </div>

        <button onClick={() => setShowMenu(true)}>
          <MenuIcon className="size-10" />
        </button>
      </nav>
      <motion.div
        animate={!showMenu ? {} : { top: "0", bottom: "0" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`bg-tedx-black text-tedx-white fixed left-0 right-0 z-[100] h-screen overflow-hidden p-5 ${
          !showMenu ? "hidden" : "top-[-200vh]"
        }`}
      >
        <div className="flex w-full flex-col">
          <div className="flex justify-end">
            <button onClick={() => setShowMenu(false)}>
              <XIcon className="size-10" />
            </button>
          </div>

          <div className="relative flex grow flex-col items-center justify-center gap-5 pt-20 text-2xl font-semibold">
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
