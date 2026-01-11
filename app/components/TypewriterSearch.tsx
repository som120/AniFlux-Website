"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import jjk from "../assets/sanime/jjk.jpg";
import solo from "../assets/sanime/solo.png";
import onePiece from "../assets/sanime/onepeice.jpg";

import bleach from "../assets/sanime/bleach2.jpg";

const searchQueries = [
  {
    text: "Jujutsu Kaisen",
    result: "Jujutsu Kaisen • TV • 2020",
    status: "Airing",
    image: jjk,
  },
  {
    text: "Solo Leveling",
    result: "Solo Leveling • TV • 2024",
    status: "New",
    image: solo,
  },
  {
    text: "One Piece",
    result: "One Piece • TV • 1999",
    status: "Airing",
    image: onePiece,
  },
  {
    text: "Bleach",
    result: "Bleach: TYBW • TV • 2022",
    status: "Completed",
    image: bleach,
  },
];

export default function TypewriterSearch() {
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const currentQuery = searchQueries[currentQueryIndex].text;

    // Typing Logic
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentQuery.length) {
          setDisplayedText(currentQuery.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, show dropdown, wait, then delete
          setShowDropdown(true);
          setTimeout(() => {
            setShowDropdown(false);
            setIsDeleting(true);
          }, 2000); // Wait 2 seconds before deleting
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(currentQuery.slice(0, displayedText.length - 1));
        } else {
          // Finished deleting, move to next query
          setIsDeleting(false);
          setCurrentQueryIndex((prev) => (prev + 1) % searchQueries.length);
        }
      }
    };

    // Speed of typing vs deleting
    const typingSpeed = isDeleting ? 50 : 100; // Delete fast, type normal
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentQueryIndex]);

  return (
    <div className="w-full max-w-md mx-auto relative z-20">
      {/* Search Bar Container */}
      <div className="relative flex items-center bg-neutral-900 border border-neutral-700 rounded-full px-4 py-3 shadow-2xl shadow-blue-500/10">
        {/* Search Icon */}
        <svg
          className="w-5 h-5 text-neutral-500 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        {/* Typing Input */}
        <div className="text-lg text-white font-mono flex items-center">
          {displayedText}
          {/* Blinking Cursor */}
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-[2px] h-5 bg-blue-500 ml-1"
          />
        </div>
      </div>

      {/* Mock Dropdown Result */}
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-neutral-800/90 backdrop-blur-xl border border-neutral-700 rounded-xl overflow-hidden shadow-xl"
          >
            <div className="p-3 hover:bg-neutral-700/50 cursor-pointer flex items-center gap-4 transition-colors">
              {/* Poster Thumbnail */}
              <div className="w-10 h-14 bg-neutral-600 rounded overflow-hidden flex-shrink-0">
                <img
                  src={
                    typeof searchQueries[currentQueryIndex].image === "string"
                      ? (searchQueries[currentQueryIndex].image as string)
                      : (searchQueries[currentQueryIndex].image as any).src
                  }
                  alt={searchQueries[currentQueryIndex].text}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h4 className="text-white text-sm font-semibold">
                  {searchQueries[currentQueryIndex].result}
                </h4>
                <div className="flex gap-2 mt-1">
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
                    {searchQueries[currentQueryIndex].status}
                  </span>
                  <span className="text-[10px] bg-neutral-700 text-neutral-300 px-2 py-0.5 rounded">
                    Sub & Dub
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
