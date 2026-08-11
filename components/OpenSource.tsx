"use client";
import React from "react";
import { Github, GitBranch, Terminal, Calculator } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import ScrollFloat from "./ui/ScrollFloat";

const contributions = [
  {
    title: "MLX — Window Functions",
    org: "ml-explore/mlx · 4 PRs merged",
    description: "Contributed the window functions now shipping in mlx.core to Apple's machine learning framework: hanning (#3124), hamming (#3135), blackman (#3136) and bartlett (#3155). Each one validated against NumPy as a numerical reference, plus a prototype native i0 (modified Bessel) kernel to unlock the Kaiser window.",
    icon: Calculator,
    github: "https://github.com/ml-explore/mlx/pulls?q=is%3Apr+author%3AVlor999",
    tags: ["Python", "C++", "Signal Processing"],
    color: "rgba(34, 197, 94, 0.15)"
  },
  {
    title: "pytest & oh-my-zsh",
    org: "pytest-dev · ohmyzsh · under review",
    description: "Proposed a --name-only option for pytest's terminal reporter, and git aliases to diff the current branch against main/develop in oh-my-zsh. Both PRs open upstream.",
    icon: GitBranch,
    github: "https://github.com/pytest-dev/pytest/pull/14451",
    tags: ["Python", "Shell", "DX"],
    color: "rgba(99, 102, 241, 0.15)"
  },
  {
    title: "mxtop — Apple Silicon",
    org: "Vlor999/mxtop · maintainer",
    description: "Maintain mxtop, a real-time performance monitoring CLI for Apple M-series chips, revived from the unmaintained asitop and published on PyPI. Reworked the rendering so GPU/ANE and memory-bandwidth metrics read at a glance.",
    icon: Terminal,
    github: "https://github.com/Vlor999/mxtop",
    tags: ["Python", "Monitoring", "CLI"],
    color: "rgba(245, 158, 11, 0.15)"
  }
];

export default function OpenSource() {
  return (
    <section id="opensource" className="px-6 py-20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <ScrollFloat
            animationDuration={1}
            ease="back.out(2)"
            scrollStart="top bottom-=10%"
            scrollEnd="bottom center"
            stagger={0.03}
            containerClassName="mb-4 text-4xl font-bold tracking-tight"
          >
            Open Source
          </ScrollFloat>
          <div className="h-1 w-20 bg-accent-green rounded-full mb-6" />
          <p className="text-muted text-center max-w-lg mx-auto">
            Passionate about contributing back to the community and 
            improving tools millions of developers use daily.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contributions.map((item) => (
            <SpotlightCard 
              key={item.title}
              spotlightColor={item.color}
              className="border-card-border/50 h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-background/50 border border-card-border/50">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                  <p className="text-xs text-muted font-mono">{item.org}</p>
                </div>
              </div>
              
              <p className="text-sm text-muted/80 leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-background/40 border border-card-border/50 text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-card-border/30">
                <a 
                  href={item.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-semibold flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  View Repository
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
