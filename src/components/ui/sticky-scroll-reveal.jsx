"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import Link from "next/link";
import HeroVideoDialog from "../magicui/hero-video-dialog";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      className="relative flex h-[70vh] justify-between lg:space-x-10  overflow-y-scroll  "
      ref={ref}
    >
      <div className="div relative flex items-start h-screen py-3 md:py-5 lg:py-10">
        <div className="w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="mb-15">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold dark:text-[#eeeeed] text-black mb-1"
              >
                <div className="flex justify-between items-start lg:items-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-medium">
                    {item.title}
                  </div>
                  <div className="flex gap-3">
                    <Link href={"https://www.hiteshmujwani.online"}>
                      <Badge
                        className={
                          "py-1 px-2 text-sm sm:text-base bg-[#ffffff] text-black"
                        }
                      >
                        Live
                      </Badge>
                    </Link>
                    <Link href={"https://github.com/hiteshmujwani"}>
                      <Badge
                        className={
                          "py-1 px-2  text-sm sm:text-base bg-[#ffffff] text-black"
                        }
                      >
                        Source Code
                      </Badge>
                    </Link>
                  </div>
                </div>
              </motion.h2>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold dark:text-[#eeeeed]/70 text-black/70"
              >
                <div className="text-sm sm:text-base md:text-lg  font-medium flex gap-3 justify-between items-center">
                  <div>{item.Subtitles}</div>
                  <div>Duration : {item.duration}</div>
                </div>
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className=" mt-10 max-w-3xl dark:text-[#eeeeed] text-black"
              >
                <div className="flex flex-col gap-3">
                  <div className="text-base sm:text-lg md:text-xl">
                    {item.description}
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {item.techStack.map((techname, index) => (
                      <Badge
                        key={index}
                        className={
                          "py-1 px-2 text-sm sm:text-base bg-[#ffffff] text-black"
                        }
                      >
                        {techname}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "sticky top-10 hidden xl:h-[280px] w-[500px] lg:h-[230px] overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        <HeroVideoDialog
          className=""
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc={content[activeCard].image ?? null}
          thumbnailAlt="Hero Video"
        />
      </div>
    </motion.div>
  );
};
