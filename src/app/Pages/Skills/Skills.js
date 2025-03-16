import React from "react";
import SkillsContent from "./_components/SkillsContent";

const Skills = () => {
  return (
    <div className="font-lora relative px-4 sm:px-12 xl:px-24">
      <div className="h-full w-full absolute z-[-1] top-0 left-0 ">
        <img
          src="/skillsmobilebg.png"
          className="object-cover h-full w-full md:hidden dark:invert-100"
        />
        <img
          src="/skillsbg.png"
          className="object-cover h-full w-full hidden md:block dark:invert-100"
        />
      </div>
      <div>
        <SkillsContent />
      </div>
    </div>
  );
};

export default Skills;
