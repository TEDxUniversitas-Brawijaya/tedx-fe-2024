"use client";

import { adminNavMenus } from "@/lib/static/nav-menus";
import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="z-10 h-screen p-3 pr-0">
      <nav className="flex h-full flex-col gap-5 rounded-xl bg-tedx-black p-5 text-white">
        <div className="relative h-[40px] w-[151px]">
          <Image src={"/img/tedx-logo.png"} alt="TEDx Logo" fill />
        </div>

        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col">
            {adminNavMenus.map(({ label, href, icon }) => (
              <Link
                key={href + label}
                href={href!}
                className={`flex items-center gap-2 rounded-lg p-2 text-sm font-semibold transition-all duration-150 ${pathname === href ? "bg-white text-tedx-black" : "text-neutral-400 hover:bg-neutral-800"}`}
              >
                {icon}
                <span className="whitespace-nowrap">{label}</span>
              </Link>
            ))}
          </div>
          <button
            onClick={() => signOut()}
            className="flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-semibold text-tedx-red transition-all duration-150 hover:bg-tedx-red hover:text-white"
          >
            <LogOutIcon className="size-5" />
            <span>Log out</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
