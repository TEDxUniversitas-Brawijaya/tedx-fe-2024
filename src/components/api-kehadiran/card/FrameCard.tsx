import Image from "next/image";

interface IFrameCard {
  title: string;
  content: string;
  rotation: string;
}

const FrameCard = ({ title, content, rotation }: IFrameCard) => {
  return (
    <div
      className="itemes-center relative flex aspect-[712/488] h-[388px] w-[612px] flex-col justify-center gap-2 px-12 text-center text-white"
      style={{
        rotate: rotation,
      }}
    >
      <p className="font-header text-4xl">&quot;{title}&quot;</p>
      <p>{content}</p>
      <div className="absolute left-0 top-0 h-full w-full">
        <Image
          src="/img/card-frame.png"
          alt="Paper Texture"
          fill
          priority
        />
      </div>
    </div>
  );
};

export default FrameCard;
