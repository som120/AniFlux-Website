"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import logo from "../assets/aniflux_logo.png";
import { Github, Download } from "lucide-react";

interface ReleaseInfo {
  downloadUrl: string;
  version: string;
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [stars, setStars] = useState<number | null>(null);
  const [releaseInfo, setReleaseInfo] = useState<ReleaseInfo | null>(null);

  useEffect(() => {
    // 1. Try to load from localStorage first for instant display
    const cachedStars = localStorage.getItem("aniflux-stars");
    if (cachedStars) {
      setStars(parseInt(cachedStars, 10));
    }

    const cachedRelease = localStorage.getItem("aniflux-release");
    if (cachedRelease) {
      try {
        const parsed = JSON.parse(cachedRelease);
        setReleaseInfo(parsed);
      } catch {
        // Invalid cache
      }
    }

    // 2. Function to fetch fresh data
    const fetchStars = async () => {
      try {
        const res = await fetch("https://api.github.com/repos/som120/AniFlux");
        if (!res.ok) {
          // Silently fail if rate limited or other error
          return;
        }
        const data = await res.json();
        const count = data.stargazers_count;
        if (typeof count === "number") {
          setStars(count);
          localStorage.setItem("aniflux-stars", count.toString());
        }
      } catch {
        // Silently fail - cached value will be used
      }
    };

    const fetchLatestRelease = async () => {
      try {
        const res = await fetch("https://api.github.com/repos/som120/AniFlux/releases/latest");
        if (!res.ok) return;
        const data = await res.json();

        const apkAsset = data.assets?.find((asset: { name: string }) =>
          asset.name.endsWith(".apk")
        );

        if (apkAsset) {
          const info: ReleaseInfo = {
            downloadUrl: apkAsset.browser_download_url,
            version: data.tag_name || data.name || "Latest",
          };
          setReleaseInfo(info);
          // Also update localStorage for DownloadSection to use
          const fullInfo = {
            ...info,
            size: formatBytes(apkAsset.size),
          };
          localStorage.setItem("aniflux-release", JSON.stringify(fullInfo));
        }
      } catch {
        // Silently fail
      }
    };

    const formatBytes = (bytes: number): string => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
    };

    // 3. Fetch immediately
    fetchStars();
    fetchLatestRelease();

    // 4. Poll every 5 minutes to avoid rate limiting (60 requests/hour limit)
    const interval = setInterval(() => {
      fetchStars();
      fetchLatestRelease();
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  // Auto-hide the navbar when scrolling down, show when scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (releaseInfo?.downloadUrl) {
      e.preventDefault();
      // Create a temporary anchor to trigger download
      const link = document.createElement("a");
      link.href = releaseInfo.downloadUrl;
      link.setAttribute("download", "");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    // If no release info, let it navigate to releases page normally
  };

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
      <div className="w-[92%] md:w-[720px] h-14 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-4 md:px-8 flex items-center justify-between shadow-lg shadow-blue-500/5">
        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer">
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
        <div className="hidden md:flex items-center gap-5 text-sm text-neutral-400">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#community" className="hover:text-white transition-colors">
            Community
          </a>
          <a
            href="https://github.com/som120/AniFlux"
            target="_blank"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Github size={15} />
            <span>Star on GitHub</span>
            {stars !== null && (
              <span className="flex items-center gap-0.5 bg-white/10 px-2 py-0.5 rounded-full text-xs font-semibold ml-1">
                {stars} <span className="text-yellow-400">★</span>
              </span>
            )}
          </a>
        </div>

        {/* CTA Button */}
        <a
          href={releaseInfo?.downloadUrl || "https://github.com/som120/AniFlux/releases/latest"}
          onClick={handleDownload}
          target={releaseInfo?.downloadUrl ? undefined : "_blank"}
          rel={releaseInfo?.downloadUrl ? undefined : "noopener noreferrer"}
          className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-1.5"
        >
          <Download size={14} />
          Get App
        </a>
      </div>
    </motion.nav>
  );
}

