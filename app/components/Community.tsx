"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, MessageCircle } from "lucide-react";

// Mock data (or real data if we had a way to fetch continuously, but hardcoded is safer for this demo)
// Using the 2 contributors found + duplicates to fill the space for the visual effect
const CONTRIBUTORS = [
    { login: "som120", avatar_url: "https://avatars.githubusercontent.com/u/104649891?v=4", html_url: "https://github.com/som120" },
    { login: "sumCottage", avatar_url: "https://avatars.githubusercontent.com/u/197411859?v=4", html_url: "https://github.com/sumCottage" },
    // Duplicates to simulate a crowd for the visual effect
    { login: "som120", avatar_url: "https://avatars.githubusercontent.com/u/104649891?v=4", html_url: "https://github.com/som120" },
    { login: "sumCottage", avatar_url: "https://avatars.githubusercontent.com/u/197411859?v=4", html_url: "https://github.com/sumCottage" },
    { login: "som120", avatar_url: "https://avatars.githubusercontent.com/u/104649891?v=4", html_url: "https://github.com/som120" },
    { login: "sumCottage", avatar_url: "https://avatars.githubusercontent.com/u/197411859?v=4", html_url: "https://github.com/sumCottage" },
    { login: "som120", avatar_url: "https://avatars.githubusercontent.com/u/104649891?v=4", html_url: "https://github.com/som120" },
    { login: "sumCottage", avatar_url: "https://avatars.githubusercontent.com/u/197411859?v=4", html_url: "https://github.com/sumCottage" },
    { login: "som120", avatar_url: "https://avatars.githubusercontent.com/u/104649891?v=4", html_url: "https://github.com/som120" },
    { login: "sumCottage", avatar_url: "https://avatars.githubusercontent.com/u/197411859?v=4", html_url: "https://github.com/sumCottage" },
];

export default function Community() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-[600px] md:h-[800px] overflow-hidden bg-black flex items-center justify-center group"
        >
            {/* Grid Background */}
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: "radial-gradient(#444 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                }}
            />

            {/* Cursor Glow Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100 z-0"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
                    ),
                }}
            />

            {/* Floating Avatars */}
            <div className="absolute inset-0 z-10">
                {CONTRIBUTORS.map((user, i) => (
                    <AvatarBubble
                        key={i}
                        user={user}
                        index={i}
                        total={CONTRIBUTORS.length}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pointer-events-none">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight pointer-events-auto"
                >
                    Join a great <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                        community
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed pointer-events-auto"
                >
                    Check out our GitHub to see who's building AniFlux or contribute to the project.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
                >
                    <a
                        href="https://github.com/som120/AniFlux"
                        className="flex items-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-bold transition-all transform hover:scale-105 border border-gray-700 hover:border-gray-500"
                    >
                        <Github size={20} />
                        Star on GitHub
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

// Contributors can be dragged
function AvatarBubble({ user, index, total }: any) {
    // Random starting positions spread around the center
    const randomX = (index % 2 === 0 ? 1 : -1) * (150 + (index * 50));
    const randomY = (index % 3 === 0 ? -1 : 1) * (80 + (index * 40));
    const size = 60 + (index % 3) * 20;

    return (
        <motion.div
            drag
            dragMomentum={false}
            initial={{ x: randomX, y: randomY, opacity: 0, scale: 0 }}
            animate={{
                y: [randomY, randomY - 15, randomY],
            }}
            transition={{
                y: {
                    duration: 3 + (index % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                },
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 }
            }}
            whileInView={{ opacity: 0.8, scale: 1 }}
            viewport={{ once: true }}
            style={{
                width: size,
                height: size,
                left: "50%",
                top: "50%",
                position: 'absolute',
                marginLeft: -(size / 2),
                marginTop: -(size / 2),
                zIndex: 10,
                cursor: "grab"
            }}
            whileHover={{
                zIndex: 50,
                opacity: 1,
                scale: 1.2,
                rotate: [0, -5, 5, 0], // Subtle shake
                // Matching the cursor glow color: rgba(29, 78, 216, ...)
                boxShadow: "0 0 20px 5px rgba(29, 78, 216, 0.6), 0 0 40px 10px rgba(29, 78, 216, 0.4), inset 0 0 10px rgba(255,255,255,0.5)",
                borderColor: "rgba(29, 78, 216, 1)"
            }}
            whileDrag={{ scale: 1.2, cursor: "grabbing", zIndex: 60 }}
            className="rounded-full overflow-hidden border-2 border-white/10 shadow-2xl transition-colors bg-black"
        >
            <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full pointer-events-none"
                onClick={(e) => e.preventDefault()}
            >
                <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-full h-full object-cover pointer-events-none"
                />
            </a>
        </motion.div>
    );
}
