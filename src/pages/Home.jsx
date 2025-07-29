import "aos/dist/aos.css";
import { AboutUs } from "../components/AboutUs";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { Project } from "../components/Project";
import { Service } from "../components/Service";

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <AboutUs />
      <Project />
      <Contact />
    </>
  );
}
