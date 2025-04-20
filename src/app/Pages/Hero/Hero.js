"use client";

import Header from "@/app/_components/Header";
import React, { useRef } from "react";
import HeroContent from "./_components/HeroContent";
import { motion, useInView } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="h-[60vh] font-lora hero-section relative px-4 sm:px-12 xl:px-24">
      <div className="h-full w-full fixed z-[-1] top-0 left-0">
        <img
          src="/mainbgmobile.png"
          className="object-cover h-full w-full md:hidden dark:invert-100"
        />
        <img
          src="/mainbg.png"
          className="object-cover h-full w-full hidden md:block dark:invert-100"
        />
      </div>

      <div>
      
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center py-10 sm:py-14"
        >
          <HeroContent />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
