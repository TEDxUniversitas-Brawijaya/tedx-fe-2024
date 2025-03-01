import Image from "next/image";
import { DialogContent } from "./dialog";

const CreamDialogBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <DialogContent
      className="flex h-fit min-h-[400px] max-w-[90%] items-center justify-center overflow-hidden rounded-xl bg-[#D6D6D6] md:max-h-[95dvh] md:min-h-0 md:max-w-fit"
      closeButton={false}
    >
      <div className="relative z-10 overflow-auto">{children}</div>
      <div className="absolute left-0 top-0 opacity-80">
        <Image
          src="/img/plain-x-logo.png"
          alt="X Logo"
          className="-rotate-[-25.98deg]"
          draggable={false}
          width={140}
          height={140}
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          src="/img/circular-eye-black.png"
          alt="Eye Circular"
          draggable={false}
          width={200}
          height={200}
        />
      </div>
      <div className="absolute left-0 top-0 h-full w-full">
        <Image
          src="/img/paper-texture-3.png"
          alt="Paper Texture"
          className="object-cover"
          draggable={false}
          fill
          priority
        />
      </div>
    </DialogContent>
  );
};

export default CreamDialogBackground;
