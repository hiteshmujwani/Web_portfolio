import { FloatingNav } from "@/app/_components/Floating-Dock";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { LinkPreview } from "@/components/ui/link-preview";
import { ArrowRight, ArrowRightSquare } from "lucide-react";
import React from "react";

const HeroContent = () => {
  return (
    <div className="sm:w-xl lg:w-2xl">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1">
          <div>
            <AnimatedTooltip
              style={
                "lg:h-24 lg:w-24 sm:h-20 sm:w-20 h-16 w-16 bg-white dark:bg-[#EEEEED] p-1 rounded-lg"
              }
              items={[
                {
                  id: 1,
                  name: "Hitesh Mujwani",
                  designation: "Software Developer",
                  image: "/profile-2.jpg",
                },
              ]}
            />
            {/* <img
              src="./profile-2.jpg"
              className="h-full w-full object-cover rounded-lg object-top grayscale hover:grayscale-0"
            /> */}
          </div>
          <div className="flex flex-col justify-center bg-gradient-to-r bg-clip-text text-transparent from-[#111] to-[#666] dark:from-[#EEEEED] dark:to-[#242424] p-2 rounded-lg">
            <div className="text-xl sm:text-4xl lg:text-5xl font-bold">
              Hi, I'm Hitesh Mujwani
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl ">
              <FlipWords
                className={"text-black dark:text-[#EEEEED]"}
                words={[
                  "Frontend Developer",
                  "UI/UX Designer",
                  "Web Developer",
                  "Fullstack Developer",
                ]}
              />
            </div>
          </div>
        </div>
        <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r gradient from-[#111] to-[#666] dark:from-[#EEEEED] dark:to-[#242424] flex flex-wrap gap-1">
          Bringing Ideas to Life with
          <LinkPreview url="https://www.figma.com" className="font-bold">
            UI/UX
          </LinkPreview>
          ,
          <LinkPreview url="https://nextjs.org/" className="font-bold">
            Next.js
          </LinkPreview>
          ,
          <LinkPreview url="https://react.dev/" className="font-bold">
            React
          </LinkPreview>
          ,
          <LinkPreview
            url="https://www.geeksforgeeks.org/mern-stack/"
            className="font-bold"
          >
            MERN Stack
          </LinkPreview>
          &
          <LinkPreview url="https://reactnative.dev/" className="font-bold">
            Mobile App Development.
          </LinkPreview>
        </div>
        <div>
          <Button className={"text-lg dark:bg-[#eeeeed]"}>
            Let's Connect <ArrowRight className="" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;

// <div className="w-3xl py-18">
//       <div className="flex flex-col gap-3">
//         <div className="flex gap-3">
//           <div className="h-24 w-24 rounded-lg p-1 bg-white">
//             <img
//               src="./profile-2.jpg"
//               className="h-full w-full object-cover rounded-lg object-top grayscale"
//             />
//           </div>
//           <div className="flex flex-col gap-1 justify-center gradient-text">
//             <div className="text-5xl font-bold">Hey, I'm Hitesh Mujwani</div>
//             <div className="text-3xl">A Fullstack developer </div>
//           </div>
//         </div>
//         <div className="text-4xl font-bold gradient-text">
//           Bringing Ideas to Life with UI/UX, Next.js, React, MERN Stack & Mobile
//           App Development.
//         </div>
//         <div>
//           <Button>
//             Let's Connect <ArrowRight className="" />
//           </Button>
//         </div>
//       </div>
//     </div>
