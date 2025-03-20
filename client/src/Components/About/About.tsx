import "embla-carousel-react";
import "./About.scss";
import Carousel from "./Carousel/Carousel";
import { listJobs } from "./job-list";

export const About = () => {
  return (
    <Carousel slides={listJobs} options={{ direction: "rtl", containScroll: false }} />
  );
};
