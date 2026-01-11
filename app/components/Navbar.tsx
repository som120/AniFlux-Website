"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import logo from "../assets/aniflux_logo.png";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Auto-hide the navbar when scrolling down, show when scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-center pt-6"
    >
      <div className="w-[90%] md:w-[600px] h-14 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-6 flex items-center justify-between shadow-lg shadow-blue-500/5">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={logo}
              alt="AniFlux Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-bold text-white tracking-tight">AniFlux</span>
        </div>

        {/* Desktop Links (Hidden on small screens) */}
        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
          <a href="#" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Community
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Pricing
          </a>
        </div>

        {/* CTA Button */}
        <button className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
          Get App
        </button>
      </div>
    </motion.nav>
  );
}
