import { CoreCard } from "./core-card";
import { ITeam } from "@/types/team-types";

export const TeamSection = ({ title, position = "start", members }: ITeam) => {
  const containerClasses =
    position === "end"
      ? "lg:justify-end text-right"
      : "lg:justify-start text-left";

  return (
    <div className="z-20">
      <h3
        className={`text-center text-3xl text-white md:text-2xl ${position === "end" ? "md:text-right" : "md:text-left"}`}
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
    </div>
  );
};
