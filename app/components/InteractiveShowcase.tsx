"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import screenshot2 from "../assets/2.png";
import screenshot3 from "../assets/3.png";
import screenshot4 from "../assets/4.png";

const tabs = [
  {
    id: "track",
    label: "Seamless Tracking",
    description:
      "One-tap updates. Mark Anime as Completed, Planning, or Watching instantly. ",
    color: "bg-blue-500",
    mockContent: (
      <div className="w-full h-full flex items-center justify-center">
        <Image
          src={screenshot2}
          alt="Seamless Tracking"
          className="h-full w-auto object-contain rounded-xl"
        />
      </div>
    ),
  },
  {
    id: "ai",
    label: "Advanced Calendars",
    description:
      "Never miss an episode. See exactly what's airing today, tomorrow, and next season.",
    color: "bg-purple-500",
    mockContent: (
      <div className="w-full h-full flex items-center justify-center">
        <Image
          src={screenshot3}
          alt="Advanced Calendars"
          className="h-full w-auto object-contain rounded-xl"
        />
      </div>
    ),
  },
  {
    id: "social",
    label: "Rich Details",
    description: "High-res posters, character lists, and studio info at your fingertips.",
    color: "bg-pink-500",
    mockContent: (
      <div className="w-full h-full flex items-center justify-center">
        <Image
          src={screenshot4}
          alt="Rich Details"
          className="h-full w-auto object-contain rounded-xl"
        />
      </div>
    ),
  },
];

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-black py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: Text & Tabs */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Otaku Elite.
              </span>
            </h2>
            <p className="text-neutral-400 mb-10 text-lg">
              Stop using spreadsheets. Experience the fluid way to track your
              anime journey.
            </p>

            <div className="space-y-4">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${activeTab.id === tab.id
                    ? "bg-neutral-900 border-neutral-700"
                    : "bg-transparent border-transparent hover:bg-neutral-900/50"
                    }`}
                >
                  <h3
                    className={`text-lg font-semibold ${activeTab.id === tab.id
                      ? "text-white"
                      : "text-neutral-500"
                      }`}
                  >
                    {tab.label}
                  </h3>
                  {activeTab.id === tab.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-neutral-400 text-sm mt-2"
                    >
                      {tab.description}
                    </motion.p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Display */}
          <div className="h-[600px] w-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                {/* This creates the "Glow" behind the image based on the active color */}
                <div
                  className={`absolute inset-0 ${activeTab.color} blur-[100px] opacity-20`}
                ></div>

                {/* The image only */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  {activeTab.mockContent}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
