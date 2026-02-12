import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import HackerRankAmbassador from "@/components/HackerRankAmbassador";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ExperienceTimeline />
        <HackerRankAmbassador />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
