"use client";

import { Github, PlayCircle, FileText } from "lucide-react";
import Link from "next/link";
import ScrollFloat from "./ui/ScrollFloat";
import SpotlightCard from "./SpotlightCard";
import { useLang, type T } from "@/lib/i18n";

const projects: {
  title: string;
  description: T;
  tags: string[];
  github?: string;
  demo?: string;
  caseStudy?: string;
  highlight: boolean;
}[] = [
  {
    title: "DECA Compiler",
    description: {
      en: "A compiler for the DECA language, built in a team of five: AST construction, semantic analysis and assembly code emission. Set up the CI/CD pipeline and parallelized the test suite to keep build times short. Source is a private school repository.",
      fr: "Un compilateur pour le langage DECA, réalisé en équipe de cinq : construction de l'AST, analyse sémantique et génération de code assembleur. J'ai mis en place la CI/CD et parallélisé la suite de tests pour garder des builds rapides. Le code est dans un dépôt privé de l'école.",
    },
    tags: ["Java", "Python", "Compilers", "CI/CD"],
    caseStudy: "/projects/deca",
    highlight: true,
  },
  {
    title: "G4AL — Vibe Gaming",
    description: {
      en: "A top-down 2D survival game where you command NPCs naturally using your voice. Built for the Mistral Worldwide Hackathon 2026, it uses the Voxtral model to interpret spoken orders into structured game actions, integrated with ElevenLabs TTS.",
      fr: "Un jeu de survie 2D en vue de dessus où l'on commande les PNJ à la voix. Réalisé pour le Mistral Worldwide Hackathon 2026, il utilise le modèle Voxtral pour transformer les ordres parlés en actions de jeu structurées, avec la synthèse vocale ElevenLabs.",
    },
    tags: ["Python", "Mistral AI", "Voxtral", "ElevenLabs", "GameDev"],
    github: "https://github.com/Vlor999/G4AL",
    demo: "https://youtu.be/rfyE4DMG94s",
    highlight: true,
  },
  {
    title: "HCI — RAG Robot Decider",
    description: {
      en: "Local-first RAG that lets a forest robot explain its path choices from its own records: hybrid BM25 + embedding retrieval, structure-aware document ingestion, optional Claude agent mode with operator-approved facts, and a streaming phone web app.",
      fr: "Un RAG local qui permet à un robot forestier d'expliquer ses choix de trajet à partir de ses propres archives : recherche hybride BM25 + embeddings, ingestion de documents qui respecte leur structure, mode agent Claude optionnel avec faits validés par l'opérateur, et web app mobile en streaming.",
    },
    tags: ["Python", "RAG", "LLM", "uv"],
    github: "https://github.com/Vlor999/HCI",
    highlight: true,
  },
  {
    title: "pr-radar",
    description: {
      en: "Desktop app showing your open GitHub PRs as a tree: stacks, reviews, CI status, discussions and merges at a glance. Installable with Homebrew: brew install --cask vlor999/tap/pr-radar.",
      fr: "Application de bureau qui affiche vos PR GitHub ouvertes sous forme d'arbre : stacks, reviews, statut de la CI, discussions et merges en un coup d'œil. Installable avec Homebrew : brew install --cask vlor999/tap/pr-radar.",
    },
    tags: ["TypeScript", "Desktop", "GitHub API"],
    github: "https://github.com/Vlor999/pr-radar",
    highlight: true,
  },
  {
    title: "mxtop",
    description: {
      en: "Performance monitoring CLI for Apple Silicon, maintained fork of asitop: real-time CPU, GPU, ANE, memory bandwidth and power metrics in the terminal. Published on PyPI (pip install mxtop).",
      fr: "CLI de monitoring des performances pour Apple Silicon, fork maintenu d'asitop : CPU, GPU, ANE, bande passante mémoire et consommation en temps réel dans le terminal. Publiée sur PyPI (pip install mxtop).",
    },
    tags: ["Python", "macOS", "CLI"],
    github: "https://github.com/Vlor999/mxtop",
    highlight: true,
  },
  {
    title: "Jauge",
    description: {
      en: "Menu bar app for Apple silicon Macs that keeps the battery at the level you choose: charge limit, discharge while plugged in, calibration, heat protection and scheduling. Root daemon talking to the SMC, Shortcuts actions and a CLI (jaugectl). Signed, notarized, installable with Homebrew.",
      fr: "App de barre de menus pour Mac Apple silicon qui garde la batterie au niveau choisi : limite de charge, décharge sur secteur, calibration, protection thermique et planification. Daemon root qui dialogue avec le SMC, actions Raccourcis et une CLI (jaugectl). Signée, notarisée, installable avec Homebrew.",
    },
    tags: ["Swift", "SwiftUI", "macOS"],
    github: "https://github.com/Vlor999/jauge",
    highlight: true,
  },
  {
    title: "compression-jpeg",
    description: {
      en: "PPM/PGM to JPEG encoder in C, built in a team of three at ENSIMAG: YCbCr conversion, chroma subsampling, DCT, zigzag, quantization, RLE and Huffman coding, down to a standard-compliant JPEG file.",
      fr: "Encodeur PPM/PGM vers JPEG en C, réalisé à trois à l'ENSIMAG : conversion YCbCr, sous-échantillonnage, DCT, zigzag, quantification, RLE et codage de Huffman, jusqu'à un fichier JPEG conforme au standard.",
    },
    tags: ["C", "Algorithms", "Image-Processing"],
    github: "https://github.com/Vlor999/compression-jpeg",
    highlight: true,
  },
  {
    title: "Game of Life",
    description: {
      en: "Conway's Game of Life in C++ with an SFML 2 graphical interface, configurable grid size and initial density from the command line.",
      fr: "Le Jeu de la vie de Conway en C++ avec une interface graphique SFML 2, taille de grille et densité initiale configurables en ligne de commande.",
    },
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
  Swift: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  MLX: "bg-zinc-500/10 text-zinc-300 border-zinc-500/20",
};

function getTagColor(tag: string) {
  return tagColors[tag] || "bg-card-border/50 text-muted border-card-border";
}



export default function Projects() {
  const { lang, t } = useLang();
  return (
    <section id="projects" className="px-6 py-20 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <ScrollFloat
            key={lang}
            animationDuration={1}
            ease="back.out(2)"
            scrollStart="top bottom-=10%"
            scrollEnd="bottom center"
            stagger={0.03}
            containerClassName="mb-4"
          >
            {t({ en: "Selected Work", fr: "Projets" })}
          </ScrollFloat>
          <div className="h-1 w-20 bg-accent rounded-full mb-6" />
          <p className="text-muted text-center max-w-lg mx-auto">
            {t({
              en: "A showcase of my recent engineering projects, ranging from AI-driven game systems to low-level system optimization.",
              fr: "Une sélection de mes projets récents, des jeux pilotés par l'IA à l'optimisation bas niveau.",
            })}
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
                      {t({ en: "Featured", fr: "À la une" })}
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-muted/80 leading-relaxed mb-6">
                  {t(project.description)}
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

              <div className="flex items-center gap-6 pt-6 border-t border-card-border/50">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    {t({ en: "View Source", fr: "Voir le code" })}
                  </a>
                )}
                {project.caseStudy && (
                  <Link
                    href={project.caseStudy}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    {t({ en: "Read case study", fr: "Lire l'étude de cas" })}
                  </Link>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                  >
                    <PlayCircle className="w-4 h-4" />
                    {t({ en: "Watch Demo", fr: "Voir la démo" })}
                  </a>
                )}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
