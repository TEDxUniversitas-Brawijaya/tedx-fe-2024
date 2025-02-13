import Image from "next/image";
import { TeamSection } from "../ui/team-section";
import { teamData } from "@/lib/static/our-team";

const Section2 = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#313131] px-[40px] pb-[120px] md:px-[120px]">
      <div className="relative z-10 mt-10 md:mt-40">
        <p className="max-w-[830px] text-white">
          Inilah insan-insan di balik perjalanan Pencarian Mantra Diri yang
          mengelola dan memastikan setiap proses perjalanan ini dapat berjalan
          lancar.
        </p>
        <div className="my-[120px] space-y-[120px]">
          {teamData.map((team, index) => (
            <TeamSection
              key={team.title}
              title={team.title}
              position={team.position}
              members={team.members}
            />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center space-y-5 text-[#A5A5A5]">
          <p className="text-xl">dan teman-teman volunteers...</p>
          <Image
            src={"/img/circle-thing.png"}
            alt="Circle Thing"
            width={200}
            height={50}
          />
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-1/4 -top-[50vh] aspect-square h-[1000px] w-[1000px] opacity-[0.8]">
          <Image
            src="/img/circle-red.png"
            alt="Circle Red"
            className="object-cover"
            draggable={false}
            fill
            priority
          />
        </div>
        <div className="absolute -right-1/4 top-1/4 aspect-square h-[1000px] w-[1000px] opacity-[0.8]">
          <Image
            src="/img/circle-yellow.png"
            alt="Circle Yellow"
            className="object-cover"
            draggable={false}
            fill
            priority
          />
        </div>
        <div className="absolute -left-1/4 top-2/4 aspect-square h-[1000px] w-[1000px] opacity-[0.8]">
          <Image
            src="/img/circle-blue.png"
            alt="Circle Blue"
            className="object-cover"
            draggable={false}
            fill
            priority
          />
        </div>
        <div className="absolute -right-1/4 top-3/4 aspect-square h-[1000px] w-[1000px] opacity-[0.8]">
          <Image
            src="/img/circle-pink.png"
            alt="Circle Pink"
            className="object-cover"
            draggable={false}
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
