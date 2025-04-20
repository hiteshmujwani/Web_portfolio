import { BlurFade } from "@/components/magicui/blur-fade";
import CursorFollower from "./_components/CursorFollower";
import { FloatingNav } from "./_components/Floating-Dock";
import Header from "./_components/Header";
import { ScrollDown } from "./_components/ScrollDown";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Experience from "./Pages/Experience/Experience";
import Hero from "./Pages/Hero/Hero";
import Projects from "./Pages/Projects/Projects";
import Services from "./Pages/Services/Services";
import Skills from "./Pages/Skills/Skills";

export default function Home() {
  return (
    <div className=" bg-[#EEEEED]/90 dark:bg-[#000000]/90">
      <CursorFollower />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}
