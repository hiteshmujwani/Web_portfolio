import CursorFollower from "./_components/CursorFollower";
import { FloatingNav } from "./_components/Floating-Dock";
import Header from "./_components/Header";
import About from "./Pages/About/About";
import Hero from "./Pages/Hero/Hero";

export default function Home() {
  return (
    <div className="text-primary">
      <CursorFollower />
      <Hero />
      <About />
    </div>
  );
}
