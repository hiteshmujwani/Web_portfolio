import CursorFollower from "./_components/CursorFollower";
import { FloatingNav } from "./_components/Floating-Dock";
import Header from "./_components/Header";
import { ScrollDown } from "./_components/ScrollDown";
import About from "./Pages/About/About";
import Experience from "./Pages/Experience/Experience";
import Hero from "./Pages/Hero/Hero";
import Skills from "./Pages/Skills/Skills";

export default function Home() {
  return (
    <div className=" bg-[#EEEEED]/90 dark:bg-[#000000]/90">
      <CursorFollower />
      <Hero />
      <About />
      <Skills />
      <Experience />
    </div>
  );
}
