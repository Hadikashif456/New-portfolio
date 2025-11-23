import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="bg-black min-h-screen text-white">
            {/* Hero */}
            <section className="h-[60vh] flex flex-col justify-end pb-20 px-8 border-b border-gray-900">
                <div className="max-w-7xl mx-auto w-full">
                    <Link href="/" className="text-sm text-gray-500 hover:text-white mb-8 block transition-colors">
                        ← BACK TO HOME
                    </Link>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4">{project.title}</h1>
                    <div className="flex gap-8 text-sm font-mono text-gray-400">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                        <span>{project.role}</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-8">
                <div className="max-w-4xl mx-auto grid gap-20">
                    <div>
                        <h2 className="text-sm font-mono text-gray-500 mb-4 tracking-widest">OVERVIEW</h2>
                        <p className="text-xl md:text-2xl leading-relaxed">{project.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-sm font-mono text-gray-500 mb-4 tracking-widest">CHALLENGE</h2>
                            <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
                        </div>
                        <div>
                            <h2 className="text-sm font-mono text-gray-500 mb-4 tracking-widest">GOAL</h2>
                            <p className="text-gray-300 leading-relaxed">{project.goal}</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-sm font-mono text-gray-500 mb-4 tracking-widest">TOOLS USED</h2>
                        <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool) => (
                                <span key={tool} className="border border-gray-800 px-3 py-1 text-sm rounded-full">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-sm font-mono text-gray-500 mb-4 tracking-widest">OUTCOME</h2>
                        <p className="text-gray-300 leading-relaxed">{project.outcome}</p>
                    </div>
                </div>
            </section>

            {/* Gallery Placeholder */}
            <section className="py-20 px-8 bg-zinc-900">
                <div className="max-w-7xl mx-auto grid gap-8">
                    {project.images.map((img, i) => (
                        <div key={i} className="w-full h-[60vh] bg-gray-800 flex items-center justify-center text-gray-600">
                            [IMAGE: {img}]
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
