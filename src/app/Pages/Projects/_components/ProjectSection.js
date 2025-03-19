import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import React from "react";
import { projectsData } from "@/app/constant/Data";

const ProjectSection = () => {
  const content = [
    {
      title: <div></div>,
      subtitle: (
        <div className="text-lg  font-medium flex justify-between items-center">
          <div>Responsive Portfolio For Personal Projects</div>
          <div>Duration : 10 Days</div>
        </div>
      ),
      description: (
        <div className="flex flex-col">
          <div className="text-xl">
            A visually stunning and fully responsive portfolio showcasing my
            skills, experience, and projects. Built with modern web
            technologies, it delivers an engaging and seamless user experience.
          </div>
          <div className="flex"></div>
        </div>
      ),
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Running out of content
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex flex-col gap-6 py-10 sm:py-14 dark:text-[#eeeeed]">
        {/* title section  */}
        <div>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold">
            The Work That Defines Me
          </div>
          <div className="text-xs sm:text-lg md:text-xl font-bold">
            🔥Innovate. Build. Repeat.
          </div>
        </div>
        {/* title section  */}

        {/* project section for large screen  */}
        <div className="w-full py-4 ">
          <StickyScroll content={projectsData} />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
