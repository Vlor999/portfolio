"use client";

import { useMemo } from "react";
import { useLang } from "@/lib/i18n";
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
  { label: { en: 'Home', fr: 'Accueil' }, href: '#' },
  { label: { en: 'Projects', fr: 'Projets' }, href: '#projects' },
  { label: 'Open Source', href: '#opensource' },
  { label: { en: 'Experience', fr: 'Parcours' }, href: '#experience' },
  { label: { en: 'Skills', fr: 'Compétences' }, href: '#skills' },
];

const BACKGROUND_COLORS = ['#4f46e5', '#ec4899', '#8b5cf6'];

export default function Home() {
  const { lang, t } = useLang();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const items = useMemo(() => navItems.map((i) => ({ ...i, label: t(i.label) })), [lang]);

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
        items={items}
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



