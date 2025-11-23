"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 h-[200px] w-[2px] bg-gray-800 z-40 hidden md:block">
            <motion.div
                className="absolute top-0 left-0 w-full bg-white origin-top"
                style={{ scaleY, height: "100%" }}
            />
        </div>
    );
}
