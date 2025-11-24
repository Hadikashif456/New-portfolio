"use client";

import { motion } from "framer-motion";

const skills = [
    "Python", "NumPy", "Machine Learning", "DSA",
    "Adobe Premiere Pro", "Python Frameworks", "C++", "SQL",
    "Git", "GitHub", "Assembly Language", "AI/Machine Learning"
];

export default function SkillsMatrix() {
    return (
        <section className="py-32 px-8 bg-black text-white relative">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter">SKILL MATRIX</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="border border-gray-800 p-6 hover:bg-white hover:text-black transition-colors duration-300 cursor-default group"
                        >
                            <span className="text-lg md:text-xl font-mono group-hover:font-bold">{skill}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
