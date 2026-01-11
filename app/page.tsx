"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import InteractiveShowcase from "./components/InteractiveShowcase";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ScrollText from "./components/ScrollText";
import TypewriterSearch from "./components/TypewriterSearch";
import AnimeWall from "./components/AnimeWall";
import Community from "./components/Community";

export default function AniFluxHero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yApp = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div className="bg-black text-white overflow-x-hidden relative">
      {/* 0. Navbar */}
      <Navbar />

      {/* --- HERO SECTION --- */}
      {/* Added pt-32 to push content down from behind the navbar */}
      <div
        ref={targetRef}
        className="min-h-screen relative mb-20 pt-32 lg:pt-40"
      >
        {/* Background Grid */}
        <div
          className="fixed inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#444 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Floating Parallax Elements (Left & Right) */}
        <motion.div
          style={{ y: yBg }}
          className="hidden md:block fixed top-40 left-10 lg:left-20 z-10 p-4 bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-xl"
        >
          <p className="text-pink-500 font-bold">AniFlux Watchlist</p>
          <p className="text-sm text-gray-400">Next Episode: Sunday</p>
        </motion.div>

        <motion.div
          style={{ y: yBg }}
          className="hidden md:block fixed top-60 right-10 lg:right-20 z-10 p-4 bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-xl"
        >
          <p className="text-blue-500 font-bold">Sync Progress</p>
          <p className="text-sm text-gray-400">MAL & Anilist</p>
        </motion.div>

        {/* Main Center Content */}
        {/* Added gap-10 to separate Title, Search, and Image */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[80vh] gap-10 px-4">
          {/* Header Text */}
          <div className="text-center">
            <h1 className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
              AniFlux
            </h1>
            <p className="mt-6 text-xl text-gray-400">Track. Watch. Save.</p>
          </div>

          {/* Typewriter Search Bar */}
          {/* Added margin top/bottom to give it space */}
          <div className="w-full max-w-lg my-6">
            <TypewriterSearch />
          </div>

          {/* Dashboard Preview */}
          <motion.div
            style={{ y: yApp }}
            className="w-[90%] md:w-[900px] h-[300px] md:h-[500px] bg-gray-800 rounded-lg shadow-2xl border border-gray-700 flex items-center justify-center relative overflow-hidden"
          >
            {/* If you have the image, uncomment the line below */}
            {/* <Image src="/dashboard.png" alt="App Dashboard" fill className="object-cover" /> */}
            <span className="text-gray-500 z-10">
              AniFlux Dashboard Preview
            </span>

            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-30 bg-black">
        <AnimeWall />
        <div className="bg-black min-h-[50vh] flex items-center justify-center px-4">
          <ScrollText content="Experience anime like never before. No ads. No buffering. Just pure immersion." />
        </div>

        {/* 2. Features Grid */}
        <Features />

        {/* 3. Interactive Tabs */}
        <InteractiveShowcase />

        {/* 4. Social Proof */}
        <Testimonials />

        {/* 5. Community */}
        <Community />

        {/* 6. Footer */}
        <Footer />
      </div>
    </div>
  );
}
