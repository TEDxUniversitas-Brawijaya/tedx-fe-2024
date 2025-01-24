"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shared/dropdown-menu";
import { MerchFilter, merchsData } from "@/lib/static/merchs";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Section3({
  merchs,
  filter,
}: {
  merchs: (typeof merchsData)[keyof typeof merchsData];
  filter: MerchFilter;
}) {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  return (
    <section className="flex w-full flex-col gap-16 bg-white px-5 py-24 md:px-16 lg:flex-row">
      <div className="flex flex-row items-center justify-between gap-x-6 gap-y-16 lg:flex-col lg:justify-start">
        <div className="sticky aspect-[1.74/1] w-[120px] lg:w-[366px]">
          <Image src="/img/catalog-logo.png" alt="Catalog Logo" fill />
        </div>
        <div className="hidden w-full space-y-10 lg:block">
          <div className="space-y-2">
            {Object.keys(merchsData).map((key) => {
              return (
                <div
                  key={key}
                  className="flex cursor-pointer flex-row items-center justify-between border-b-2 border-[#CACACA]/35 py-2"
                  onClick={() => {
                    router.push(`?filter=${key}`, {
                      scroll: false,
                    });
                  }}
                >
                  <span className="text-xl uppercase text-black">{key}</span>
                  <span className="text-2xl font-semibold leading-none text-[#FF1818]">
                    {merchsData[key as MerchFilter].length}
                  </span>
                </div>
              );
            })}
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
                  <span className="uppercase text-black">{filter}</span>
                  <span className="text-2xl font-semibold leading-none text-[#FF1818]">
                    {merchs.length}
                  </span>
                </div>
                <ChevronDownIcon
                  size={17}
                  className={`transition-all duration-300 ${showMenu && "rotate-180"}`}
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-white p-0">
              {Object.keys(merchsData).map((key) => (
                <DropdownMenuItem
                  key={key}
                  className="flex w-full flex-row items-center gap-4 border-b-2 border-[#CACACA]/35 p-2 focus:bg-zinc-100"
                  onClick={() => {
                    router.push(`?filter=${key}`, {
                      scroll: false,
                    });
                  }}
                >
                  <span className="uppercase text-black">{key}</span>
                  <span className="font-semibold leading-none text-[#FF1818]">
                    {merchsData[key as MerchFilter].length}
                  </span>
                </DropdownMenuItem>
              ))}
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
      <div className="grid h-full w-full grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
        {merchs.map((merch, index) => (
          <ProductCard key={index} {...merch} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({
  name,
  price,
}: {
  name: string;
  price: number;
  image: string;
}) {
  return (
    <div className="space-y-6">
      <div className="h-[323px] w-full bg-red-200" />
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-black">{name}</span>
          <span className="text-xl text-[#8E8E8E]">
            {price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </span>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <div className="size-8 rounded-full bg-[#D9D9D9]" />
          <div className="size-8 rounded-full bg-[#020202]" />
        </div>
      </div>
    </div>
  );
}
