"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../shared/dropdown-menu";
import Image from "next/image";

export default function Section3() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section className="flex w-full flex-col gap-16 bg-white px-5 md:px-16 py-24 lg:flex-row">
      <div className="flex flex-row items-center justify-between gap-x-6 gap-y-16 lg:flex-col lg:justify-start">
        {/* <div className="h-[70px] w-[120px] bg-red-200 lg:h-[210px] lg:w-[366px]" /> */}
        <div className="sticky aspect-[1.74/1] w-[120px] lg:w-[366px] ">
          <Image src="/img/catalog-logo.png" alt="Catalog Logo" fill />
        </div>
        <div className="hidden w-full space-y-10 lg:block">
          <div className="space-y-2">
            <div className="flex flex-row items-center justify-between border-b-2 border-[#CACACA]/35 py-2">
              <span className="text-xl text-black">T-SHIRT</span>
              <span className="text-2xl font-semibold leading-none text-[#FF1818]">
                5
              </span>
            </div>
            <div className="flex flex-row items-center justify-between border-b-2 border-[#CACACA]/35 py-2">
              <span className="text-xl text-black">WORKSHIRT</span>
              <span className="text-2xl font-semibold leading-none text-[#FF1818]">
                5
              </span>
            </div>
            <div className="flex flex-row items-center justify-between border-b-2 border-[#CACACA]/35 py-2">
              <span className="text-xl text-black">STICKERS</span>
              <span className="text-2xl font-semibold leading-none text-[#FF1818]">
                5
              </span>
            </div>
            <div className="flex flex-row items-center justify-between border-b-2 border-[#CACACA]/35 py-2">
              <span className="text-xl text-black">BAGS</span>
              <span className="text-2xl font-semibold leading-none text-[#FF1818]">
                5
              </span>
            </div>
            <div className="flex flex-row items-center justify-between border-b-2 border-[#CACACA]/35 py-2">
              <span className="text-xl text-black">HATS</span>
              <span className="text-2xl font-semibold leading-none text-[#FF1818]">
                5
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black">BUNDLING</h3>
            <div className="space-y-2">
              <div className="flex flex-row items-center justify-between border-b-2 border-[#CACACA]/35 py-2">
                <span className="text-xl text-black">BUNDLING 1</span>
              </div>
              <div className="flex flex-row items-center justify-between border-b-2 border-[#CACACA]/35 py-2">
                <span className="text-xl text-black">BUNDLING 2</span>
              </div>
              <div className="flex flex-row items-center justify-between border-b-2 border-[#CACACA]/35 py-2">
                <span className="text-xl text-black">BUNDLING 3</span>
              </div>
              <div className="flex flex-row items-center justify-between border-b-2 border-[#CACACA]/35 py-2">
                <span className="text-xl text-black">BUNDLING 4</span>
              </div>
              <div className="flex flex-row items-center justify-between border-b-2 border-[#CACACA]/35 py-2">
                <span className="text-xl text-black">BUNDLING 5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <DropdownMenu open={showMenu} onOpenChange={setShowMenu}>
            <DropdownMenuTrigger className="w-48">
              <div className="flex w-full flex-row items-center justify-between rounded-lg border-b-2 border-[#CACACA]/35 bg-white p-2">
                <div className="space-x-4">
                  <span className="text-black">T-SHIRT</span>
                  <span className="text-2xl font-semibold leading-none text-[#FF1818]">
                    5
                  </span>
                </div>
                <ChevronDownIcon
                  size={17}
                  className={`transition-all duration-300 ${showMenu && "rotate-180"}`}
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-white p-0">
              <DropdownMenuItem className="flex w-full flex-row items-center gap-4 border-b-2 border-[#CACACA]/35 p-2 focus:bg-zinc-100">
                <span className="text-black">T-SHIRT</span>
                <span className="font-semibold leading-none text-[#FF1818]">
                  5
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex w-full flex-row items-center gap-4 border-b-2 border-[#CACACA]/35 bg-white p-2 focus:bg-zinc-100">
                <span className="text-black">WORKSHIRT</span>
                <span className="font-semibold leading-none text-[#FF1818]">
                  5
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex w-full flex-row items-center gap-4 border-b-2 border-[#CACACA]/35 bg-white p-2 focus:bg-zinc-100">
                <span className="text-black">STICKERS</span>
                <span className="font-semibold leading-none text-[#FF1818]">
                  5
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex w-full flex-row items-center gap-4 border-b-2 border-[#CACACA]/35 bg-white p-2 focus:bg-zinc-100">
                <span className="text-black">BAGS</span>
                <span className="font-semibold leading-none text-[#FF1818]">
                  5
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex w-full flex-row items-center gap-4 border-b-2 border-[#CACACA]/35 bg-white p-2 focus:bg-zinc-100">
                <span className="text-black">HATS</span>
                <span className="font-semibold leading-none text-[#FF1818]">
                  5
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex w-full flex-row items-center gap-4 border-b-2 border-[#CACACA]/35 bg-white p-2 focus:bg-zinc-100">
                <span className="text-black">BUNDLING 1</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex w-full flex-row items-center gap-4 border-b-2 border-[#CACACA]/35 bg-white p-2 focus:bg-zinc-100">
                <span className="text-black">BUNDLING 2</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid h-full w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

function ProductCard() {
  return (
    <div className="space-y-6">
      <div className="h-[323px] w-full bg-red-200" />
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-black">T-SHIRT</span>
          <span className="text-xl text-[#8E8E8E]">Rp. 19.000</span>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <div className="size-8 rounded-full bg-[#D9D9D9]" />
          <div className="size-8 rounded-full bg-[#020202]" />
        </div>
      </div>
    </div>
  );
}
