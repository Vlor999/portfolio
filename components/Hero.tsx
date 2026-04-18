"use client";
import { ArrowRight, Github, Linkedin, Mail, Award, Cpu, Brain, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import DecryptedText from "./ui/DecryptedText";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">


        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-12 rounded-full border border-card-border bg-card/50 text-muted text-xs font-semibold uppercase tracking-widest"
        >
          <Award className="w-4 h-4 text-accent-amber" />
          HackerRank Ambassador & Open Source Contributor
        </motion.div>

        {/* Name with DecryptedText */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter leading-[1.1] cursor-default">
            <DecryptedText 
              text="Willem Adnet"
              animateOn="view"
              revealDirection="center"
              speed={60}
              maxIterations={15}
              className="bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent"
              encryptedClassName="text-muted/20"
            />
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 mb-16"
        >
          <p className="text-xl sm:text-2xl font-medium text-foreground max-w-3xl mx-auto leading-relaxed">
            Computer Science Engineer <span className="text-muted">at</span> ENSIMAG <span className="text-muted">&amp;</span> TU Graz
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-muted-foreground text-sm font-medium">
            <span className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-accent" /> High-Performance Systems
            </span>
            <span className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-accent-green" /> Deep Learning & RAG
            </span>
            <span className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-accent-amber" /> Open Source Advocate
            </span>
          </div>
        </motion.div>


        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-foreground text-background font-bold text-base hover:scale-[1.02] active:scale-95 transition-all"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex gap-4">
            <a
              href="https://github.com/Vlor999"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl border border-card-border bg-card/50 text-muted hover:text-foreground hover:bg-card transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/willem-adnet"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl border border-card-border bg-card/50 text-muted hover:text-foreground hover:bg-card transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:adnet.willem@icloud.com"
              className="p-4 rounded-2xl border border-card-border bg-card/50 text-muted hover:text-foreground hover:bg-card transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

