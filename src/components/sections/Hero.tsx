"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function Hero() {
    const [text, setText] = useState("");
    const fullText = "HELLO, I'M HADI KASHIF.\nCREATIVE DEVELOPER.";
    const [coordinates, setCoordinates] = useState({ lat: 0, long: 0 });

    // Typewriter effect
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    // Coordinates update
    useEffect(() => {
        const interval = setInterval(() => {
            setCoordinates({
                lat: 31.5204 + Math.random() * 0.01,
                long: 74.3587 + Math.random() * 0.01,
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] text-center z-10">
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight font-mono">
                    {text}
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-4 h-12 md:h-20 bg-white ml-2 align-middle"
                    />
                </h1>
            </div>

            <div className="absolute bottom-10 left-10 font-mono text-xs md:text-sm text-gray-500">
                <p>LOC: {coordinates.lat.toFixed(4)}° N, {coordinates.long.toFixed(4)}° E</p>
                <p>STATUS: ONLINE</p>
            </div>

            <div className="absolute bottom-10 right-10 font-mono text-xs md:text-sm text-gray-500 animate-pulse">
                SCROLL TO EXPLORE ↓
            </div>

            {/* Background Grid or Particles could go here */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        </section>
    );
}
