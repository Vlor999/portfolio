"use client";

import { Github } from "lucide-react";

const projects = [
  {
    title: "Weather Prediction System",
    description:
      "End-to-end weather forecasting system leveraging real-time Open-Meteo API data, with Pandas pipelines and PyTorch deep learning models. Includes an interactive OpenCV dashboard for predictions and historical analysis.",
    tags: ["Python", "PyTorch", "Hugging-Face", "Pandas", "OpenCV"],
    github: "https://github.com/Vlor999/meteo",
    highlight: true,
  },
  {
    title: "Object Detection & Recognition",
    description:
      "Real-time object detection with a fine-tuned PyTorch model achieving 85% mAP. YOLO-based human recognition pipeline with feature embeddings, optimized to 18 FPS facial recognition inference.",
    tags: ["Python", "PyTorch", "Hugging-Face", "YOLO26", "OpenCV"],
    github: "https://github.com/Vlor999/vision-yolo",
    highlight: true,
  },
  {
    title: "RAG Robot Decision System",
    description:
      "Retrieval-Augmented Generation decision engine for autonomous forest navigation, using local LLM inference with Ollama. Achieved 82% user satisfaction via human-in-the-loop evaluation across 100 scenarios.",
    tags: ["Python", "Ollama", "RAG", "pytest"],
    github: "https://github.com/Vlor999/HCI",
    highlight: true,
  },
  {
    title: "3D Gaussian Splatting — CUDA",
    description:
      "GPU-accelerated 3D Gaussian Splatting renderer built with CUDA and C/C++ as part of the GPU Programming course at TU Graz. Optimized kernel performance for real-time point cloud rendering.",
    tags: ["CUDA", "C/C++", "CMake"],
    github: "https://github.com/Vlor999/projetCuda4",
    highlight: false,
  },
  {
    title: "DECA Compiler",
    description:
      "Compiler for the DECA language developed in a 5-person team. Implemented the Abstract Syntax Tree and assembly code generation, with an automated CI/CD test pipeline focused on parallelization.",
    tags: ["Java", "Python", "CI/CD"],
    github: "https://github.com/Vlor999",
    highlight: false,
  },
  {
    title: "Game of Life",
    description:
      "Interactive implementation of Conway's Game of Life in C++ with SFML for graphical rendering. Features configurable grid sizes, density parameters, and a full CI test pipeline.",
    tags: ["C/C++", "SFML", "CMake", "CLI"],
    github: "https://github.com/Vlor999/gameOfLife",
    highlight: false,
  },
];

const tagColors: Record<string, string> = {
  Python: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  PyTorch: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Pandas: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  OpenCV: "bg-green-500/10 text-green-400 border-green-500/20",
  YOLO26: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Ollama: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  RAG: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  pytest: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  CUDA: "bg-lime-500/10 text-lime-400 border-lime-500/20",
  "C/C++": "bg-sky-500/10 text-sky-400 border-sky-500/20",
  CMake: "bg-red-500/10 text-red-400 border-red-500/20",
  Java: "bg-orange-600/10 text-orange-300 border-orange-600/20",
  "CI/CD": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  SFML: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  CLI: "bg-gray-500/10 text-gray-400 border-gray-500/20",
  "Hugging-Face": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

function getTagColor(tag: string) {
  return tagColors[tag] || "bg-card-border/50 text-muted border-card-border";
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
        <p className="text-muted text-center mb-12 max-w-lg mx-auto">
          A selection of projects I&apos;ve built and contributed to.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative p-6 rounded-2xl border bg-card transition-all hover:border-muted/30 ${
                project.highlight
                  ? "border-accent/30 glow-accent"
                  : "border-card-border"
              }`}
            >
              {project.highlight && (
                <div className="absolute -top-2 right-4 px-2.5 py-0.5 text-xs font-medium bg-accent text-white rounded-full">
                  Featured
                </div>
              )}

              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-0.5 text-xs rounded-md border ${getTagColor(
                      tag
                    )}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end pt-3 border-t border-card-border">
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
