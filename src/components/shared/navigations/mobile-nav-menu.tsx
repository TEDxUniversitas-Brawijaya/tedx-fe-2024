"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { MenuIcon, XIcon } from "lucide-react";

import { Button } from "../button";
import Image from "next/image";
import Link from "next/link";
import { eventMenus } from "@/lib/static/nav-menus";
import { motion } from "framer-motion";
import useMounted from "@/hooks/useMounted";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MobileNavMenu() {
  const pathname = usePathname();
  const isMounted = useMounted();

  const [showMenu, setShowMenu] = useState(false);

  if (!isMounted)
    return (
      <div className="block size-10 animate-pulse rounded-md bg-neutral-700 lg:hidden" />
    );

  return (
    <>
      <button onClick={() => setShowMenu(true)} className="block lg:hidden">
        <MenuIcon className="size-10" />
      </button>

      <motion.div
        initial={{ top: "-150vh" }}
        animate={showMenu ? { top: "0", bottom: "0" } : { top: "-150vh" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed left-0 right-0 z-[100] h-screen overflow-hidden bg-tedx-black p-5 text-tedx-white lg:hidden"
      >
        <div className="flex w-full flex-col">
          <div className="flex justify-between">
            <Link href={"/"} onClick={() => setShowMenu(false)}>
              <div className="relative aspect-[15/4] w-36">
                <Image src="/img/tedx-logo.png" alt="TEDxUB Logo" fill />
              </div>
            </Link>
            <div className="flex justify-end">
              <button onClick={() => setShowMenu(false)}>
                <XIcon className="size-10" />
              </button>
            </div>
          </div>

          <div className="relative flex grow flex-col items-center justify-center gap-5 pt-20 text-xl font-semibold">
            <Link
              onClick={() => setShowMenu(false)}
              href={"/"}
              className={`underline-offset-4 hover:underline ${pathname === "/" && "text-tedx-red"}`}
            >
              Home
            </Link>
            <Link
              onClick={() => setShowMenu(false)}
              href={"/about-us"}
              className={`underline-offset-4 hover:underline ${pathname === "/about-us" && "text-tedx-red"}`}
            >
              About Us
            </Link>

            <Link
              onClick={() => setShowMenu(false)}
              href={"/our-team"}
              className={`underline-offset-4 hover:underline ${pathname === "/our-team" && "text-tedx-red"}`}
            >
              Our Team
            </Link>

            <Accordion type="single" collapsible className="w-28">
              <AccordionItem value="events" className="border-none">
                <AccordionTrigger className="justify-center gap-4 p-0 font-semibold">
                  Events
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-center gap-3 overflow-visible whitespace-nowrap pb-0 pt-3 font-medium">
                  {eventMenus.map(({ href, label }) => (
                    <div
                      key={label}
                      onClick={() => {
                        if (href) setShowMenu(false);
                      }}
                      className={` ${pathname === href && "text-base text-tedx-red"} ${!href && "focus:bg-none"}`}
                    >
                      {href ? (
                        <Link href={href} className="hover:undeline">
                          {label}
                        </Link>
                      ) : (
                        <div className="text-neutral-500">{label}</div>
                      )}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Link
              onClick={() => setShowMenu(false)}
              href={"/store/merch"}
              className={`underline-offset-4 hover:underline ${pathname === "/store/merch" && "text-tedx-red"}`}
            >
              Merch
            </Link>
            <Button className="bg-tedx-red text-xl font-semibold hover:text-tedx-red/80">
              <Link onClick={() => setShowMenu(false)} href={"/store/ticket"}>
                Grab Ticket
              </Link>
            </Button>
          </div>

          <div className="absolute -bottom-20 -left-0 flex w-full justify-center">
            <div className="relative aspect-square w-2/3">
              <Image src={"/svg/x-shadow.svg"} alt="X" fill />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
