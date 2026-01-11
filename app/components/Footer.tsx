"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../assets/aniflux_logo.png";

export default function Footer() {
  return (
    <footer className="bg-black py-32 px-4 border-t border-neutral-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8"
        >
          Ready to flux?
        </motion.h2>

        <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">
          Join 10,000+ anime fans tracking their journey with AniFlux. Free
          forever for the first 1,000 users.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
            Download for iOS
          </button>
          <button className="px-8 py-4 bg-neutral-900 text-white border border-neutral-800 font-bold rounded-full hover:bg-neutral-800 hover:scale-105 transition-transform">
            Get Android APK
          </button>
        </div>

        <div className="mt-32 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 rounded-full overflow-hidden">
              <Image
                src={logo}
                alt="AniFlux Logo"
                fill
                className="object-cover"
              />
            </div>
            <p>© 2026 AniFlux. All rights reserved.</p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-white">
              Discord
            </a>
            <a href="https://github.com/som120/AniFlux" target="_blank" className="hover:text-white">
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
