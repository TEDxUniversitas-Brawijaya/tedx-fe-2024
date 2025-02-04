import Image from "next/image";

export default function FormLoading() {
  return (
    <div className="relative h-screen w-full bg-tedx-black">
      {/* Background Images */}
      <div className="absolute left-[28%] top-10 opacity-50">
        <Image
          src="/img/plain-x-logo.png"
          alt="X Logo"
          className="-rotate-[-25.98deg]"
          draggable={false}
          width={200}
          height={200}
        />
      </div>
      <div className="absolute left-0 top-0 h-full w-full opacity-[0.15]">
        <Image
          src="/img/paper-texture-4.png"
          alt="Paper Texture"
          className="object-cover"
          draggable={false}
          fill
          priority
        />
      </div>
    </div>
  );
}
