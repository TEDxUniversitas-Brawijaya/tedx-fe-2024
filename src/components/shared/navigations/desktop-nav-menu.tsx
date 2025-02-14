"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";

import { Button } from "../button";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { eventMenus } from "@/lib/static/nav-menus";
import useMounted from "@/hooks/useMounted";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DesktopNavMenu() {
  const pathname = usePathname();
  const isMounted = useMounted();

  const [showMenu, setShowMenu] = useState(false);

  if (!isMounted)
    return (
      <div className="hidden gap-5 lg:flex">
        {[...Array(5)].map((_, index) => (
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
    <div className="hidden space-x-10 font-semibold lg:block">
      <Link
        href={"/about-us"}
        className={`underline-offset-4 hover:underline ${pathname === "/about-us" && "text-tedx-red"}`}
      >
        About Us
      </Link>
      <Link
        href={"/our-team"}
        className={`underline-offset-4 hover:underline ${pathname === "/our-team" && "text-tedx-red"}`}
      >
        Our Team
      </Link>
      <DropdownMenu open={showMenu} onOpenChange={setShowMenu}>
        <DropdownMenuTrigger>
          <div
            className={`flex items-center gap-1 underline-offset-4 hover:underline`}
          >
            <p>Events</p>
            <ChevronDownIcon
              size={17}
              className={`transition-all duration-300 ${showMenu && "rotate-180"}`}
            />
          </div>
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
        href={"/store/merch"}
        className={`underline-offset-4 hover:underline ${pathname === "/store/merch" && "text-tedx-red"}`}
      >
        Merch
      </Link>
      <Button className="bg-tedx-red font-semibold hover:bg-tedx-red/80">
        <Link href={"/store/ticket"}>Grab Ticket</Link>
      </Button>
    </div>
  );
}
