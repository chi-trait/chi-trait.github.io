import { ReactElement } from "react";

export enum PageIds {
  about = "About",
  cfp = "Call for Papers",
  //Speakers = "Speakers",
  schedule = "Schedule",
}
export interface People {
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
    format: string | ReactElement;
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
  contact: string;
  acronym: string;
  year: string;
  description: string | ReactElement;
  fullName: string;
  backgroundImg: string;
  confLogoImg: string;
  logoImg: string;
  logoWithWord: string;
  confName: string;
}

export interface Metadata {
  overview: Overview;
  organizers: People[];
  speakers: People[];
  cfp: CFP;
  pcs: ProgramCommittee[];
  schedule: Schedule[];
}
