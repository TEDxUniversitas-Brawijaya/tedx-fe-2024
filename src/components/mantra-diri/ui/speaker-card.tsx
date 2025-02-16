import Image from "next/image";
import { cn } from "../../../lib/utils";

type Props = {
  name: string;
  img: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
};

export default function Speakercard({
  name,
  img,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: Props) {
  return (
    <div className="flex flex-col items-center gap-6">
      <span
        className={cn(
          "text-2xl font-bold italic text-tedx-red transition-opacity duration-300 ease-in-out opacity-0",
          isHovered && "opacity-100",
        )}
      >
        {name}
      </span>
      <div
        className="relative aspect-square h-[15rem] lg:h-[20rem]"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        <Image src={img} alt="Speaker Akmal" fill className={cn(
          "transition-all duration-300 ease-in-out grayscale",
          isHovered && "grayscale-0"
        )} />
      </div>
    </div>
  );
}
