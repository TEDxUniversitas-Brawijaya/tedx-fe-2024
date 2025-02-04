"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shared/dropdown-menu";
import {
  merchBundlingData,
  MerchFilter,
  merchsData,
} from "@/lib/static/merchs";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Section3({
  merchs,
  filter,
}: {
  merchs: (typeof merchsData)[keyof typeof merchsData];
  filter: MerchFilter | "bundling";
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
          <div>
            <h3 className="mb-5 text-xl font-semibold">REGULAR</h3>
            {Object.keys(merchsData).map((key) => {
              const isTypeActive = filter === key;

              return (
                <div
                  key={key}
                  className={`flex cursor-pointer flex-row items-center justify-between border-b-2 border-[#CACACA]/35 py-2 transition-all duration-150 hover:bg-neutral-100 ${isTypeActive ? "text-tedx-black" : "text-neutral-400"}`}
                  onClick={() => {
                    router.push(`?filter=${key}`, {
                      scroll: false,
                    });
                  }}
                >
                  <span className="text-xl uppercase">
                    {key === "tshirt" ? "t-shirt" : key}
                  </span>
                  <span
                    className={`text-2xl font-semibold leading-none ${isTypeActive ? "text-[#FF1818]" : "text-[#FF1818]/50"}`}
                  >
                    {merchsData[key as MerchFilter].length}
                  </span>
                </div>
              );
            })}
          </div>
          <div>
            <h3 className="mb-5 text-xl font-semibold">BUNDLING</h3>
            <div
              className={`flex cursor-pointer flex-row items-center justify-between border-b-2 border-[#CACACA]/35 py-2 transition-all duration-150 hover:bg-neutral-100 ${filter === "bundling" ? "text-tedx-black" : "text-neutral-400"}`}
              onClick={() => {
                router.push(`?filter=bundling`, {
                  scroll: false,
                });
              }}
            >
              <span className="text-xl uppercase">BUNDLING</span>
              <span
                className={`text-2xl font-semibold leading-none ${filter === "bundling" ? "text-[#FF1818]" : "text-[#FF1818]/50"}`}
              >
                {merchBundlingData.length}
              </span>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <DropdownMenu open={showMenu} onOpenChange={setShowMenu}>
            <DropdownMenuTrigger className="w-48">
              <div className="flex w-full flex-row items-center justify-between rounded-lg border-b-2 border-[#CACACA]/35 bg-white p-2">
                <div className="flex items-center gap-3">
                  <span className="uppercase text-black">{filter}</span>
                  <span className="font-semibold leading-none text-[#FF1818]">
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
              {Object.keys(merchsData).map((key) => {
                const isTypeActive = filter === key;

                return (
                  <DropdownMenuItem
                    key={key}
                    className={`${isTypeActive ? "text-tedx-black" : "text-neutral-400"} flex w-full flex-row items-center justify-between gap-4 border-b-2 border-[#CACACA]/35 p-2 focus:bg-zinc-100`}
                    onClick={() => {
                      router.push(`?filter=${key}`, {
                        scroll: false,
                      });
                    }}
                  >
                    <span className="uppercase">{key}</span>
                    <span
                      className={`font-semibold leading-none text-[#FF1818] ${isTypeActive ? "text-[#FF1818]" : "text-[#FF1818]/50"}`}
                    >
                      {merchsData[key as MerchFilter].length}
                    </span>
                  </DropdownMenuItem>
                );
              })}
              <DropdownMenuItem
                className={`${filter === "bundling" ? "text-tedx-black" : "text-neutral-400"} flex w-full flex-row items-center justify-between gap-4 border-b-2 border-[#CACACA]/35 p-2 focus:bg-zinc-100`}
                onClick={() => {
                  router.push(`?filter=bundling`, {
                    scroll: false,
                  });
                }}
              >
                <span className="uppercase">BUNDLING</span>
                <span
                  className={`font-semibold leading-none text-[#FF1818] ${filter === "bundling" ? "text-[#FF1818]" : "text-[#FF1818]/50"}`}
                >
                  {merchBundlingData.length}
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid h-full w-full grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
        {merchs.map((merch, index) => (
          <ProductCard
            key={index}
            {...merch}
            isBundling={filter === "bundling"}
          />
        ))}
      </div>
    </section>
  );
}

function ProductCard({
  name,
  price,
  image,
  isBundling = false,
}: {
  name: string;
  price: number;
  image: string;
  isBundling: boolean;
}) {
  const regularRedirectPath = `/form/merch?item=${name.toLowerCase().replace("t-shirt", "tshirt").replaceAll(" ", "-")}`;

  const bundlingRedirectPath = `/form/merch-bundle?item=${name.toLowerCase().replaceAll(" ", "-")}`;

  return (
    <Link
      href={isBundling ? bundlingRedirectPath : regularRedirectPath}
      className="group space-y-6 rounded-xl border-[1.5px] border-transparent p-3 transition-all duration-150 hover:border-neutral-300"
    >
      <div
        className={`relative w-full overflow-hidden rounded-lg bg-neutral-200 ${isBundling ? "aspect-[3/4]" : "aspect-[4/3]"}`}
      >
        <Image
          src={image}
          fill
          alt={name}
          objectFit="cover"
          className="transition-all duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-bold text-black md:text-3xl">
            {name}
          </span>
          <span className="text-base text-[#8E8E8E] md:text-xl">
            {price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </span>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <div className="size-6 rounded-full bg-[#D9D9D9]" />
          <div className="size-6 rounded-full bg-[#020202]" />
        </div>
      </div>
    </Link>
  );
}
