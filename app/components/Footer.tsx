"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full h-[180px] md:h-[300px] bg-blue-600 text-white overflow-hidden">
      {/* Links Section */}
      <div className="absolute top-4 right-4 md:top-12 md:right-12 flex flex-col items-end gap-1 md:gap-2 text-xs md:text-xl font-medium tracking-wide z-20">
        <a href="https://github.com/som120/AniFlux" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:scale-105 transition-all duration-300">
          Github
        </a>
        <a href="/terms-and-conditions" className="hover:text-black hover:scale-105 transition-all duration-300">
          Terms & Conditions
        </a>
        <a href="/privacy-policy" className="hover:text-black hover:scale-105 transition-all duration-300">
          Privacy Policy
        </a>
        <a href="/delete-account" className="hover:text-black hover:scale-105 transition-all duration-300">
          Delete Account
        </a>
      </div>

      {/* Big Text Section */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none z-10">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[18vw] md:text-[16vw] font-bold tracking-tighter text-black leading-[0.75] pb-2 md:pb-4"
        >
          AniFlux
        </motion.h1>
      </div>
    </footer>
  );
}
