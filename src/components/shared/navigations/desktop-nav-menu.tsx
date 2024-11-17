"use client";

import useMounted from "@/hooks/useMounted";
import { eventMenus } from "@/lib/static/nav-menus";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";

export default function DesktopNavMenu() {
  const pathname = usePathname();
  const isMounted = useMounted();

  const [showMenu, setShowMenu] = useState(false);

  if (!isMounted)
    return (
      <div className="hidden gap-5 md:flex">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="w-20 animate-pulse rounded-md bg-neutral-700 text-transparent"
          >
            .
          </div>
        ))}
      </div>
    );

  return (
    <div className="hidden space-x-10 font-semibold md:block">
      <Link
        href={"/about-us"}
        className={`underline-offset-4 hover:underline ${pathname === "/about-us" && "text-tedx-red"}`}
      >
        About Us
      </Link>
      <DropdownMenu open={showMenu} onOpenChange={setShowMenu}>
        <DropdownMenuTrigger>
          <button
            className={`flex items-center gap-1 underline-offset-4 hover:underline`}
          >
            <p>Events</p>
            <ChevronDownIcon
              size={17}
              className={`transition-all duration-300 ${showMenu && "rotate-180"}`}
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {eventMenus.map(({ href, label }) => (
            <DropdownMenuItem
              disabled={!href}
              key={label}
              onClick={() => {
                if (href) setShowMenu(false);
              }}
              className={`p-0 text-sm ${pathname === href && "text-tedx-red"} ${!href && "focus:bg-none"}`}
            >
              {href ? (
                <Link href={href} className="size-full px-2 py-1.5">
                  {label}
                </Link>
              ) : (
                <div className="px-2 py-1.5">{label}</div>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Link
        href={"/merch"}
        className={`underline-offset-4 hover:underline ${pathname === "/merch" && "text-tedx-red"}`}
      >
        Merch
      </Link>
    </div>
  );
}
