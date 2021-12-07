import { ReactElement } from "react";

export enum PageIds {
  Schedule = "Schedule",

  CFP = "Call for Papers",

  //Speakers = "Speakers",
  Organizers = "Organizers",

  committee = "Program Committee",
}
export interface Organizer {
  name: string;
  description: string;
  img: string;
  webpage: string;
  affliation: string;
}

export interface CFP {
  description: string;
  themes: string[];
  dates: {
    description?: string;
    date: string | ReactElement;
    type: "submission" | "notification" | "workshop";
  }[];
  submit: {
    platform: {
      name: string;
      url: string;
    };
    format: string;
    template: {
      name: string;
      url: string;
    };
    type: string;
  };
}

export interface ProgramCommittee {
  name: string;
  affiliation: string;
}

export interface Schedule {
  start: string;
  end: string;
  title: string;
  description?: string | ReactElement;
}

export interface Overview {
  acronym: string;
  year: string;
  description: string;
  fullName: string;
  backgroundImg: string;
  confLogoImg: string;
  confName: string;
}

export interface Metadata {
  overview: Overview;
  organizers: Organizer[];
  cfp: CFP;
  pcs: ProgramCommittee[];
  schedule: Schedule[];
}
