"use client";

import { ArrowRight, Github, Linkedin, Mail, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Ambassador badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-accent-amber/30 bg-accent-amber/5 text-accent-amber text-sm font-medium animate-fade-in-up">
          <Award className="w-4 h-4" />
          HackerRank Ambassador
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up animate-delay-100">
          <span className="bg-gradient-to-r from-accent to-accent-green bg-clip-text text-transparent">
            Willem{" "}Adnet
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-muted max-w-2xl mx-auto mb-4 animate-fade-in-up animate-delay-200">
          Software Developer &amp; AI/ML Engineer
        </p>
        <p className="text-base text-muted/70 max-w-xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
          Building impactful open-source tools, pushing the boundaries of AI,
          and growing developer communities worldwide.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-300">
          <a
            href="https://www.hackerrank.com/profile/adnet_willem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent-green text-black font-semibold text-base hover:brightness-110 transition-all hover:scale-105"
          >
            View HackerRank Profile
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Vlor999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-card-border text-foreground font-medium text-base hover:bg-card transition-all hover:scale-105"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-5 justify-center mt-10 animate-fade-in-up animate-delay-400">
          <a
            href="https://github.com/Vlor999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/willem-adnet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@willemadnet.dev"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
