import React from "react";
import ExperienceContent from "./_components/ExperienceContent";

const Experience = () => {
  return (
    <div className="font-lora relative px-4 sm:px-12 xl:px-24">
      <div className="h-full w-full absolute z-[-1] top-0 left-0 ">
        <img
          src="/aboutbgmobile.png"
          className="object-cover h-full w-full md:hidden dark:invert-100"
        />
        <img
          src="/aboutbg.png"
          className="object-cover h-full w-full hidden md:block dark:invert-100"
        />
      </div>
      <div>
        <ExperienceContent />
      </div>
    </div>
  );
};

export default Experience;
