import {
  BiLogoCss3,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoSass,
  BiLogoTypescript,
} from "react-icons/bi";
import { TbBrandElastic, TbBrandNextjs } from "react-icons/tb";
import { MaterialUIIcon } from "../../assets/icons/material-ui";
import { RestAPIIcon } from "../../assets/icons/rest-api";
import { SEOIcon } from "../../assets/icons/seo";
import { ISkill } from "../../Utils/Interface";

export const skillList: ISkill[] = [
  {
    icon: BiLogoJavascript,
    level: 5,
    name: "JavaScript",
  },
  {
    icon: BiLogoHtml5,
    level: 5,
    name: "HTML5",
  },
  {
    icon: BiLogoCss3,
    level: 4,
    name: "CSS3",
  },
  {
    icon: BiLogoReact,
    level: 5,
    name: "React.js",
  },
  {
    icon: BiLogoGit,
    level: 3,
    name: "Git",
  },
  {
    icon: BiLogoTypescript,
    level: 4,
    name: "Typescript",
  },
  {
    icon: TbBrandNextjs,
    level: 3,
    name: "Next.js",
  },
  {
    icon: MaterialUIIcon,
    level: 3,
    name: "Material-UI",
  },
  {
    icon: BiLogoPostgresql,
    level: 3,
    name: "PostgreSQL",
  },
  {
    icon: SEOIcon,
    level: 3,
    name: "SEO",
  },
  {
    icon: RestAPIIcon,
    level: 3,
    name: "REST API",
  },
  {
    icon: BiLogoNodejs,
    level: 4,
    name: "Node.js",
  },
  {
    icon: TbBrandElastic,
    level: 3,
    name: "ElasticSearch",
  },
  {
    icon: BiLogoSass,
    level: 4,
    name: "SASS",
  },
];
