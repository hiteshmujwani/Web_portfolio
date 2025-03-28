"use client";

import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { Download } from "lucide-react";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{
        y: 0,
        animation: "linear",
        opacity: 1,
      }}
      transition={{ stiffness: 0, duration: 1.5 }}
      className="flex items-center py-4 sm:py-6"
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-1.5">
          {/* <div className="bg-black p-1 rounded-lg">
            <div className="text-lg font-bold text-white">HM</div>
          </div> */}
          <div className="flex flex-col">
            <div className="leading-4 text-lg lg:text-xl dark:text-[#eeeeed]  font-bold ">
              HITESH MUJWANI <br />
              <span className="text-sm lg:text-lg font-medium">
                <FlipWords
                  className={"text-black dark:text-[#EEEEED]"}
                  words={[
                    "Frontend Developer",
                    "UI/UX Designer",
                    "Web Developer",
                    "Fullstack Developer",
                  ]}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button className={"flex sm:hidden dark:bg-[#EEEEED]"}>
            <Download />
          </Button>
          <Button className={"hidden sm:flex  dark:bg-[#EEEEED]"}>
            <Download />
            Download CV
          </Button>
          <Button className={"dark:bg-[#EEEEED]"}>
            <ThemeToggle />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
