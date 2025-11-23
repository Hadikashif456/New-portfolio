import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import SkillsMatrix from "@/components/sections/SkillsMatrix";
import ProjectGrid from "@/components/sections/ProjectGrid";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";
import SectionReveal from "@/components/ui/SectionReveal";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <SectionReveal>
        <Stats />
      </SectionReveal>
      <SectionReveal>
        <SkillsMatrix />
      </SectionReveal>
      <SectionReveal>
        <ProjectGrid />
      </SectionReveal>
      <SectionReveal>
        <About />
      </SectionReveal>
      <Footer />
    </div>
  );
}
