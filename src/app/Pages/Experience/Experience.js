'use client'

import React from "react";
import ExperienceContent from "./_components/ExperienceContent";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="font-lora relative px-4 sm:px-12 xl:px-24">
     
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <ExperienceContent />
      </motion.div>
    </div>
  );
};

export default Experience;
