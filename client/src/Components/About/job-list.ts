import { IJobCard } from "../../Utils/Interface";

export const listJobs: IJobCard[] = [
  {
    company: "Hansen",
    location: "Toronto, Canada",
    companyDescription:
      "Global provider of software and services to the energy, water and communications industries",
    job: "Software Developer",
    date: "2022 to date",
    description: [
      "Developed and implemented comprehensive unit tests for multiple front-end components, ensuring robust and error-free functionality.",
      "Successfully translated wireframes into fully functional web pages, adhering to design specifications and delivering a seamless user experience.",
      "Effectively resolved multiple QA tickets, addressing bugs and issues promptly and ensuring high-quality software releases.",
    ],
    link: "https://www.hansencx.com/",
  },
  {
    company: "Flip",
    location: "Maringa, Brazil",
    companyDescription:
      "Websites and CRM software startup for real estate agencies founded in 2020 with a current pipeline of over 1,000 users",
    job: "Full-stack developer",
    date: "2020 – 2022",
    description: [
      "Led the company’s Front-End developments and, as the real estate industry is admittedly resistant to technologies, focused on user experience and a fast-response system, using React, Typescript, Material-UI, Next.js, Google API, Node, PostgreSQL, and Feathers",
      "Developed the website map search tool using Elasticsearch to increase efficiency on responses and usability for users to find the real estate units available",
    ],
    link: "https://flipeffect.com.br/",
  },
  {
    company: "SG Sistemas",
    location: "Maringa, Brazil",
    companyDescription:
      "Local leader provider of ERP systems for small and medium-sized retail companies",
    job: "Full-stack developer",
    date: "2020",
    description: [
      "Developed crucial features for a newly developing system, such as sales reports and invoice generator, during scrum sprints",
      "Delivered high-quality codes that enhanced the system’s speed using React, Typescript, Sass, Java, Spring boot, and PostgreSQL",
    ],
    link: "https://sgsistemas.com.br/",
  },
  {
    company: "Enext Consulting",
    location: "Sao Paulo, Brazil",
    companyDescription:
      "Latin America leader in the Digital Marketing and E-Commerce consulting segment",
    job: "Front-End Developer",
    date: "2019",
    description: [
      "Developed features adjustments for major Brazilian companies’ websites using Saas platforms, such as VTex Oracle commerce cloud, and several technologies, such as React, Typescript, Sass, Pug, and HTML",
      "Developed the home and products pages for a new e-commerce platform of a global motorcycle company in a limited-time project, leveraging the client’s team to design an appropriate process to sell such products online, which was considered an innovation for the segment",
    ],
    link: "https://enext.com.br/?ref=conteudo.polinize.com",
  },
];
