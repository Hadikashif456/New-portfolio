"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
    { label: "YEARS EXPERIENCE", value: 3 },
    { label: "PROJECTS COMPLETED", value: 33 },
    { label: "SATISFIED CLIENTS", value: 50 },
    { label: "HOURS CODED", value: 3200 },
];

export default function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="py-20 px-8 bg-black text-white border-t border-gray-900">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {stats.map((stat, index) => (
                    <StatItem key={index} stat={stat} isInView={isInView} />
                ))}
            </div>
        </section>
    );
}

function StatItem({ stat, isInView }: { stat: { label: string; value: number }; isInView: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const increment = end / (duration / 16); // 60fps

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, stat.value]);

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <span className="text-4xl md:text-6xl font-bold font-mono block mb-2">
                {count}
                {stat.label.includes("HOURS") ? "+" : ""}
            </span>
            <span className="text-xs md:text-sm text-gray-500 tracking-widest">{stat.label}</span>
        </div>
    );
}
