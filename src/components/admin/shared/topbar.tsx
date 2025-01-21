"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Topbar() {
  const { data } = useSession();

  return (
    <div className="mb-5 flex w-full items-center justify-between rounded-xl bg-tedx-black p-5 text-tedx-white">
      <h2 className="text-xl font-semibold">Halo, {data?.user?.name}</h2>
      <div className="relative size-10 overflow-hidden rounded-full bg-tedx-grey">
        <Image src={data?.user?.image || ""} alt="Profile Picture" fill />
      </div>
    </div>
  );
}
