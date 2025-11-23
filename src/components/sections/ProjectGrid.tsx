"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function ProjectGrid() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-32 px-8 bg-black text-white" id="projects">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter">SELECTED WORK</h2>

                <div className="flex flex-col">
                    {projects.map((project, index) => (
                        <Link key={index} href={`/work/${project.slug}`}>
                            <motion.div
                                className="group relative border-t border-gray-800 py-12 flex justify-between items-center cursor-pointer overflow-hidden"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="z-10 transition-transform duration-500 group-hover:translate-x-4">
                                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">{project.title}</h3>
                                    <p className="text-gray-500 font-mono">{project.category}</p>
                                </div>

                                <div className="z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-xl">↗</span>
                                </div>

                                {/* Hover Image Reveal */}
                                <motion.div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] pointer-events-none opacity-0 z-0"
                                    animate={{
                                        opacity: hoveredIndex === index ? 0.4 : 0,
                                        scale: hoveredIndex === index ? 1 : 0.8,
                                        rotate: hoveredIndex === index ? -5 : 0,
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {/* Using a colored div as placeholder if image fails, or actual image */}
                                    <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-600">
                                        [PROJECT IMAGE]
                                    </div>
                                </motion.div>
                            </motion.div>
                        </Link>
                    ))}
                    <div className="border-t border-gray-800" />
                </div>
            </div>
        </section>
    );
}
