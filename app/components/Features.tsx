import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import BentoCard from "./BentoCard";
import Image from "next/image";
import screenshot1 from "../assets/1.png";

export default function Features() {
  return (
    <section id="features" className="bg-black py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 text-center">
            Everything you need to <span className="text-blue-500">Flux.</span>
          </h2>
        </Reveal>

        {/* Bento Grid (scales as one) */}
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6"
        >
          {/* Card 1 — Large */}
          <BentoCard className="md:col-span-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Cloud Synchronization
              </h3>
              <p className="text-neutral-400 mt-2">
                Never lose your progress. Your watchlist syncs instantly across devices using Firebase & Appwrite.
              </p>
            </div>

            <div className="mt-8 w-full h-32 bg-neutral-800/50 rounded-lg border border-neutral-700 flex items-center justify-center">
              <span className="text-xs font-mono text-green-400">
                STATUS: SYNCED ✅
              </span>
            </div>
          </BentoCard>

          {/* Card 2 — Tall (FIXED MOBILE POSITION) */}
          <BentoCard className="md:row-span-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col">
            <h3 className="text-2xl font-semibold text-white">Fluid Experience</h3>
            <p className="text-neutral-400 mt-2">
              Built with Flutter 3. Enjoy buttery smooth animations and native performance on Android.
            </p>

            {/* Phone screenshot */}
            <div className="mt-auto flex justify-center pt-6">
              <Image
                src={screenshot1}
                alt="AniFlux App Screenshot"
                className="w-auto h-120 object-contain rounded-2xl"
              />
            </div>
          </BentoCard>

          {/* Card 3 */}
          <BentoCard className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-white">
              Powered by AniList
            </h3>
            <p className="text-neutral-400 text-sm mt-2">Real-time metadata. Get instant access to ratings, genres, and synopses via the GraphQL API.</p>
          </BentoCard>

          {/* Card 4 */}
          <BentoCard className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-white">Seasonal Filters</h3>
            <p className="text-neutral-400 text-sm mt-2">
              Find your next obsession. Filter by Airing Now, Upcoming, Top 100, or Popular Movies.
            </p>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  );
}
