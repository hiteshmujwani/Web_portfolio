"use client";

import React from "react";
import ProjectSection from "./_components/ProjectSection";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="font-lora relative px-4 sm:px-12 xl:px-24">
      
      <div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <ProjectSection />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
