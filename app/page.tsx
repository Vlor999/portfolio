import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Footer from "@/components/Footer";
import GradualBlur from "@/components/ui/GradualBlur";
import PillNav from "@/components/ui/PillNav";
import LiquidEther from "@/components/ui/LiquidEther";

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#projects' },
  { label: 'Open Source', href: '#opensource' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
];

const BACKGROUND_COLORS = ['#4f46e5', '#ec4899', '#8b5cf6'];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent text-foreground selection:bg-accent/30 selection:text-accent overflow-x-hidden">
      {/* Global Background Effect */}
      <div className="fixed inset-0 z-0 opacity-100 pointer-events-none">
        <LiquidEther
          colors={BACKGROUND_COLORS}
          mouseForce={12}
          cursorSize={100}
          resolution={0.35}
          autoDemo={true}
        />
      </div>

      <PillNav 
        items={navItems}
        baseColor="#09090b"
        pillColor="#18181b"
        pillTextColor="#fafafa"
        hoveredPillTextColor="#ffffff"
      />
      
      <div className="relative z-10">
        <Hero />
        <StatsBar />
        <Projects />
        <OpenSource />
        <ExperienceTimeline />
        <Skills />
        
        <GradualBlur preset="page-footer" strength={3} />
        
        <Footer />
      </div>
    </main>
  );
}



