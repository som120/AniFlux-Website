"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import googlePlayIcon from "../assets/google_play.png";
import githubLogo from "../assets/GitHub_Invertocat_Black.png";
import { Download, Loader2 } from "lucide-react";

interface ReleaseInfo {
    downloadUrl: string;
    version: string;
    size: string;
}

export default function DownloadSection() {
    const [releaseInfo, setReleaseInfo] = useState<ReleaseInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Try to load from localStorage first for instant display
        const cached = localStorage.getItem("aniflux-release");
        if (cached) {
            try {
                const parsed = JSON.parse(cached);
                setReleaseInfo(parsed);
                setLoading(false);
            } catch {
                // Invalid cache, will fetch fresh
            }
        }

        const fetchLatestRelease = async () => {
            try {
                const res = await fetch("https://api.github.com/repos/som120/AniFlux/releases/latest");
                if (!res.ok) {
                    throw new Error("Failed to fetch release");
                }
                const data = await res.json();

                // Find the APK asset
                const apkAsset = data.assets?.find((asset: { name: string }) =>
                    asset.name.endsWith(".apk")
                );

                if (apkAsset) {
                    const info: ReleaseInfo = {
                        downloadUrl: apkAsset.browser_download_url,
                        version: data.tag_name || data.name || "Latest",
                        size: formatBytes(apkAsset.size),
                    };
                    setReleaseInfo(info);
                    localStorage.setItem("aniflux-release", JSON.stringify(info));
                    setError(false);
                } else {
                    // No APK found, fallback to releases page
                    setError(true);
                }
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchLatestRelease();
    }, []);

    // Helper to format file size
    const formatBytes = (bytes: number): string => {
        if (bytes === 0) return "0 B";
        const k = 1024;
        const sizes = ["B", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
    };

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
        <div id="download" className="bg-black py-32 px-4 border-t border-neutral-900 relative overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8"
                >
                    Ready to flux?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto"
                >
                    Join the new wave of anime fans upgrading their tracking experience.
                    <br />Free, open-source, and privacy-focused.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-4"
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a
                            href="#"
                            className="px-8 py-4 bg-neutral-900 text-white border border-neutral-800 font-bold rounded-full transition-transform flex items-center gap-3 opacity-50 cursor-not-allowed"
                        >
                            <Image src={googlePlayIcon} alt="Google Play" width={20} height={20} />
                            Google Play
                        </a>
                        <a
                            href={releaseInfo?.downloadUrl || "https://github.com/som120/AniFlux/releases"}
                            onClick={handleDownload}
                            target={error || loading || !releaseInfo?.downloadUrl ? "_blank" : undefined}
                            rel={error || loading || !releaseInfo?.downloadUrl ? "noopener noreferrer" : undefined}
                            className="px-8 py-4 bg-neutral-900 text-white border border-neutral-800 font-bold rounded-full hover:bg-neutral-800 hover:scale-105 transition-transform flex items-center gap-3"
                        >
                            {loading ? (
                                <Loader2 size={20} className="animate-spin" />
                            ) : (
                                <Image src={githubLogo} alt="GitHub" width={20} height={20} className="invert" />
                            )}
                            <span className="flex flex-col items-start">
                                <span>Download APK</span>
                                {releaseInfo && !error && (
                                    <span className="text-xs text-neutral-500 font-normal">
                                        {releaseInfo.version} • {releaseInfo.size}
                                    </span>
                                )}
                            </span>
                            <Download size={18} className="ml-1" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
