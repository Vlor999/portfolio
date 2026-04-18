"use client";

import { Github } from "lucide-react";
import ScrollFloat from "./ui/ScrollFloat";
import SpotlightCard from "./SpotlightCard";

const projects = [
  {
    title: "G4AL — Vibe Gaming",
    description:
      "A top-down 2D survival game where you command NPCs naturally using your voice. Built for the Mistral Worldwide Hackathon 2026, it uses the Voxtral model to interpret spoken orders into structured game actions, integrated with ElevenLabs TTS.",
    tags: ["Python", "Mistral AI", "Voxtral", "ElevenLabs", "GameDev"],
    github: "https://github.com/Vlor999/G4AL",
    highlight: true,
  },
  {
    title: "HCI — RAG Robot Decider",
    description:
      "A Retrieval-Augmented Generation decision engine for autonomous forest navigation. Uses local LLM inference with Ollama to adapt paths based on previous experiences and environmental conditions. Achieved 82% user satisfaction.",
    tags: ["Python", "Ollama", "RAG", "MLOps", "uv"],
    github: "https://github.com/Vlor999/HCI",
    highlight: true,
  },
  {
    title: "compression-jpeg",
    description:
      "A C-based image compression system developed at ENSIMAG. Implements a full PPM to JPEG compressor pipeline, focusing on efficient data structures and low-level optimization.",
    tags: ["C", "Algorithms", "Image-Processing"],
    github: "https://github.com/Vlor999/compression-jpeg",
    highlight: true,
  },
  {
    title: "02-segmentation-UNet",
    description:
      "Implementation of a U-Net architecture for medical image segmentation as part of the Perception Vision and Learning course. Fine-tuned for high accuracy on complex visual datasets.",
    tags: ["PyTorch", "Deep-Learning", "Vision"],
    github: "https://github.com/Vlor999/02-segmentation-UNet",
    highlight: false,
  },
  {
    title: "shape-modeling",
    description:
      "Geometric 3D modeling project focusing on advanced mesh manipulation and surface representation techniques. Developed during academic studies at TU Graz.",
    tags: ["Python", "3D-Modeling", "Graphics"],
    github: "https://github.com/Vlor999/shape-modeling",
    highlight: false,
  },
  {
    title: "Game of Life",
    description:
      "A version of Conway's Game of Life implemented in C++. Features a graphical interface and highly optimized grid updates, exploring cellular automata and concurrent patterns.",
    tags: ["C++", "SFML", "Algorithms"],
    github: "https://github.com/Vlor999/gameOfLife",
    highlight: false,
  },
];

const tagColors: Record<string, string> = {
  Python: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Mistral AI": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Voxtral: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  ElevenLabs: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  GameDev: "bg-green-500/10 text-green-400 border-green-500/20",
  Ollama: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  RAG: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  MLOps: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  uv: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  C: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  Algorithms: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Image-Processing": "bg-rose-500/10 text-rose-400 border-rose-500/20",
  PyTorch: "bg-orange-600/10 text-orange-400 border-orange-600/20",
  "Deep-Learning": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Vision: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "3D-Modeling": "bg-lime-500/10 text-lime-400 border-lime-500/20",
  Graphics: "bg-red-500/10 text-red-400 border-red-500/20",
  "C++": "bg-blue-600/10 text-blue-300 border-blue-600/20",
  SFML: "bg-cyan-600/10 text-cyan-300 border-cyan-600/20",
};

function getTagColor(tag: string) {
  return tagColors[tag] || "bg-card-border/50 text-muted border-card-border";
}



export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <ScrollFloat
            animationDuration={1}
            ease="back.out(2)"
            scrollStart="top bottom-=10%"
            scrollEnd="bottom center"
            stagger={0.03}
            containerClassName="mb-4"
          >
            Selected Work
          </ScrollFloat>
          <div className="h-1 w-20 bg-accent rounded-full mb-6" />
          <p className="text-muted text-center max-w-lg mx-auto">
            A showcase of my recent engineering projects, ranging from AI-driven 
            game systems to low-level system optimization.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <SpotlightCard
              key={project.title}
              className={`group flex flex-col h-full ${
                project.highlight ? "border-accent/30" : "border-card-border"
              }`}
              spotlightColor={project.highlight ? "rgba(99, 102, 241, 0.15)" : "rgba(255, 255, 255, 0.05)"}
            >
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  {project.highlight && (
                    <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-muted/80 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded-lg border ${getTagColor(
                        tag
                      )}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-card-border/50">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
