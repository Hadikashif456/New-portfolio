"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-20 px-8 bg-black text-white border-t border-gray-900" id="contact">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">LET'S WORK<br />TOGETHER</h2>
                    <a href="mailto:kashifhadi645@gmail.com" className="text-xl md:text-2xl text-gray-400 hover:text-white transition-colors border-b border-gray-800 hover:border-white pb-1">
                        kashifhadi645@gmail.com
                    </a>
                </div>

                <div className="flex flex-col gap-4 text-sm text-gray-500 font-mono">
                    <p>LAHORE, PAKISTAN</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-white transition-colors">LINKEDIN</Link>
                        <Link href="#" className="hover:text-white transition-colors">GITHUB</Link>
                        <Link href="#" className="hover:text-white transition-colors">INSTAGRAM</Link>
                    </div>
                    <p className="mt-4">© 2025 HADI KASHIF</p>
                </div>
            </div>
        </footer>
    );
}
