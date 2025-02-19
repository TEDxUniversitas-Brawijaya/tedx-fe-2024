import { CoreCard } from "./core-card";
import { ITeam } from "@/types/team-types";
import Image from "next/image";

export const TeamSection = ({
  title,
  position = "start",
  members,
  volunteer,
}: ITeam) => {
  const containerClasses =
    position === "end"
      ? "lg:justify-end text-right"
      : "lg:justify-start text-left";

  return (
    <div className="z-20">
      <h3
        className={`text-center font-header text-3xl text-white md:text-2xl ${position === "end" ? "lg:text-right" : "lg:text-left"}`}
      >
        {title}
      </h3>
      <div
        className={`mt-7 flex items-center gap-5 ${containerClasses} flex-wrap justify-center lg:justify-normal`}
      >
        {members.map((member) => (
          <CoreCard
            key={member.name}
            name={member.name}
            bwPath={member.bwPath}
            colorPath={member.colorPath}
          />
        ))}
      </div>
      {volunteer && (
        <>
          <h4
            className={`mt-10 text-center font-header text-3xl text-white md:mt-6 md:text-2xl ${position === "end" ? "lg:text-right" : "lg:text-left"}`}
          >
            Volunteer
          </h4>
          <div
            className={`mt-8 flex flex-wrap items-center justify-center gap-5 ${position === "end" ? "lg:justify-end" : "lg:justify-start"}`}
          >
            {volunteer.map((dx, idx) => (
              <div
                key={idx * 101}
                className="relative flex h-[90px] w-[250px] items-center justify-center"
              >
                <p className="text-center font-header text-xl text-white">
                  {dx}
                </p>
                <Image
                  src="/img/volunteer-frame.png"
                  alt="volunteer Frame"
                  className="absolute top-0"
                  fill
                  draggable={false}
                  priority
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
