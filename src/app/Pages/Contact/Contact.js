'use client'

import React from "react";
import ContactSection from "./_components/ContactSection";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="font-lora relative px-4 sm:px-12 xl:px-24 bg-transparent " id="contact">
    
      <div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <ContactSection />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
