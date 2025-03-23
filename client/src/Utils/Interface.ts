import { IconType } from "react-icons";

export interface ILink {
  label: string;
  link: string;
}

export interface IJobCard {
  company: string;
  location: string;
  companyDescription: string;
  job: string;
  date: string;
  description: Array<string>;
  link: string;
}

export interface IHobby {
  title: string;
  image: string;
}

export interface ISkill {
  name: string;
  icon: IconType;
  level: number;
}
