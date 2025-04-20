"use client";

import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { Download } from "lucide-react";
import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  }),
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`flex font-lora items-center px-4 py-4 sm:px-12 xl:px-24 sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/10 backdrop-blur-lg dark:bg-black/10" : ""
    }`}>
      <div className="flex justify-between items-center w-full">
        {/* Left Side */}
        <div className="flex items-center gap-1.5">
          <div className="flex flex-col">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              className="leading-4 text-lg lg:text-xl dark:text-[#eeeeed] font-bold"
            >
              HITESH MUJWANI
            </motion.div>

            <motion.span
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-sm lg:text-lg font-medium"
            >
              <FlipWords
                className={"text-black dark:text-[#EEEEED]"}
                words={[
                  "Frontend Developer",
                  "UI/UX Designer",
                  "Web Developer",
                  "Fullstack Developer",
                ]}
              />
            </motion.span>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-2">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <a href="/Hitesh-Mujwani-Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="flex sm:hidden dark:bg-[#EEEEED]">
              <Download />
            </Button>
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <a href="/Hitesh-Mujwani-Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="hidden sm:flex dark:bg-[#EEEEED]">
              <Download />
              Download CV
            </Button>
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={4}
          >
              <ThemeToggle />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
