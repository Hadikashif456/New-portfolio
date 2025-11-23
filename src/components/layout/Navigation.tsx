"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MagneticButton from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-white">
            <div className="text-xl font-bold tracking-tighter">
                <MagneticButton>
                    <Link href="/">HADI KASHIF</Link>
                </MagneticButton>
            </div>

            <ul className="flex gap-8 items-center">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <MagneticButton>
                            <Link
                                href={link.href}
                                className={cn(
                                    "relative text-sm uppercase tracking-widest hover:text-gray-300 transition-colors",
                                    pathname === link.href && "text-gray-400"
                                )}
                            >
                                {link.name}
                                <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                            </Link>
                        </MagneticButton>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
