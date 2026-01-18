"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import InteractiveShowcase from "./components/InteractiveShowcase";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ScrollText from "./components/ScrollText";

import AnimeWall from "./components/AnimeWall";
import Community from "./components/Community";
import DownloadSection from "./components/DownloadSection";
import Lottie from "lottie-react";
import showreelAnimation from "./assets/lottie_file/Showreel-Grid-Mobile-[remix].json";

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



          {/* Dashboard Preview */}
          <div className="relative overflow-hidden h-[600px] md:h-[1200px]">
            <motion.div
              style={{ y: yApp }}
              className="w-full md:w-[1600px] h-full flex items-center justify-center"
            >
              <Lottie
                animationData={showreelAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </motion.div>
            {/* Top fade overlay */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
            {/* Bottom fade overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
          </div>
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

        {/* 6. Download Section */}
        <DownloadSection />

        {/* 7. Footer */}
        <Footer />
      </div>
    </div>
  );
}
