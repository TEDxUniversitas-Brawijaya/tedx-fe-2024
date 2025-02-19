export interface ICore {
  name: string;
  bwPath: string;
  colorPath: string;
}

export interface ITeam {
  title: string;
  position: "start" | "end";
  members: ICore[];
  volunteer?: string[];
}
