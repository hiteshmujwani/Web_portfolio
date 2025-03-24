import Header from "@/app/_components/Header";
import React from "react";
import HeroContent from "./_components/HeroContent";
import CursorFollower from "@/app/_components/CursorFollower";
import { FlipWords } from "@/components/ui/flip-words";
import { FloatingNav } from "@/app/_components/Floating-Dock";
import { ScrollDown } from "@/app/_components/ScrollDown";

const Hero = () => {
  return (
    <div className=" h-screen font-lora hero-section relative  px-4 sm:px-12 xl:px-24">
      <div className="h-full w-full absolute z-[-1] top-0 left-0 ">
        <img
          src="/mainbgmobile.png"
          className="object-cover h-full w-full md:hidden dark:invert-100"
        />
        <img
          src="/mainbg.png"
          className="object-cover h-full w-full hidden md:block dark:invert-100"
        />
      </div>
      <div className="">
        <div className=" ">
          <div className="">
            <Header />
          </div>
          <div className=" flex items-center py-10 sm:py-14">
            <HeroContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
