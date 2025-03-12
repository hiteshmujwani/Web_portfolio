import React from "react";
import { Highlight } from "@/components/ui/hero-highlight";
import {
  IconBrandGithub,
  IconBrandGithubFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Book, BookAIcon, BookCheck, Dot, DotIcon, Github } from "lucide-react";
import Link from "next/link";

const AboutContent = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 py-10 sm:py-14">
        <div>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold">
            The Journey Behind My Code
          </div>
          <div className="text-xs sm:text-lg md:text-xl font-bold">
            👋 Hey, I'm Hitesh!
          </div>
        </div>

        <div className="flex flex-col gap-3 text-md sm:text-lg md:text-xl leading-7 font-base ">
          <div>
            A passionate
            <Highlight>
              {" "}
              Full-Stack Developer, UI/UX Designer, and Mobile App Developer{" "}
            </Highlight>
            with a journey fueled by self-discovery and persistence. Though I
            pursued a<strong> B.Com from Rajasthan University</strong> due to
            incorrect guidance, I soon realized my true passion lay in{" "}
            <strong>technology and development</strong>. While working in a{" "}
            <strong>BPO for two years</strong>, I started exploring
            <strong> web development</strong>—and that’s when everything
            changed.
          </div>

          <div>
            As my interest grew, I <strong>quit my job</strong> to fully
            dedicate myself to learning. I completed a{" "}
            <strong>MERN stack training program </strong>, followed by a
            <Highlight> 6-month full-stack development internship</Highlight>,
            which ultimately led me to my first role as a{" "}
            <strong>Frontend Developer</strong>. Along the way, I also honed my
            skills in <strong>UI/UX design</strong>, realizing that building
            user-friendly, visually appealing experiences is just as important
            as writing clean code.
          </div>

          <div>
            Driven by curiosity, I expanded into{" "}
            <strong> mobile app development</strong> and learned
            <strong> React Native</strong>, completing a{" "}
            <strong> 3-month internship</strong> focused on building
            cross-platform mobile applications. To further deepen my expertise,
            I am currently pursuing an{" "}
            <Highlight> MCA (Master of Computer Applications)</Highlight> to
            gain a
            <strong>
              {" "}
              stronger foundation in software development and advanced
              technologies
            </strong>
            .
          </div>

          <div>
            With hands-on experience in{" "}
            <strong> web and mobile development</strong>, I thrive in the world
            of <strong> development & design</strong>, always eager to innovate
            and grow.
            <Highlight>This is just the beginning!</Highlight>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col gap-5 md:gap-0 md:flex-row md:items-center md:py-10">
        <div className="flex flex-col gap-3 ">
          <div className="flex items-start gap-2">
            <BookCheck className="hidden md:flex" />

            <div>
              <div className=" text-base  sm:text-lg font-medium">
                Bachelors in Commerce - Rajasthan University
              </div>
              <div className="font-medium">2020 - 2023</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <BookCheck className="hidden md:flex" />

            <div>
              <div className=" text-base sm:text-lg font-medium">
                Masters In Computer Applications - Kukukshetra University
              </div>
              <div className="font-medium">2024 - 2026</div>
            </div>
          </div>
        </div>
        <div className="font-medium flex  gap-3 text-lg">
          <Link href={""} className="">
            <IconBrandGithub className="dark:text-black size-8 md:size-10 dark:bg-white text-white bg-black rounded-full p-1 hover:translate-y-[-10px] duration-300" />{" "}
          </Link>{" "}
          <Link href={""}>
            <IconBrandLinkedin className="dark:text-black size-8 md:size-10 dark:bg-white text-white bg-black rounded-full p-1 hover:translate-y-[-10px] duration-300" />
          </Link>{" "}
          <Link href={""}>
            <IconBrandInstagram className="dark:text-black size-8 md:size-10 dark:bg-white text-white bg-black rounded-full p-1 hover:translate-y-[-10px] duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
