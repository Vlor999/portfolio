"use client";

import { Code2, Brain, Wrench, Cpu, BadgeCheck, Languages } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import ScrollFloat from "./ui/ScrollFloat";
import { useLang, type T } from "@/lib/i18n";

const skillCategories: { title: string | T; icon: typeof Code2; color: string; skills: (string | T)[] }[] = [
  {
    title: { en: "Programming", fr: "Programmation" },
    icon: Code2,
    color: "text-accent",
    skills: ["Python", "C/C++", "Java", "Swift", "SQL", "Bash", "CUDA"],
  },
  {
    title: { en: "AI / Machine Learning", fr: "IA / Machine Learning" },
    icon: Brain,
    color: "text-accent-green",
    skills: ["MLX / MLX-LM", "PyTorch / ONNX", "Pandas / NumPy", "Hugging Face", "Vision (YOLO, OpenCV)", { en: "RAG Systems", fr: "Systèmes RAG" }],
  },
  {
    title: { en: "Systems & DevOps", fr: "Systèmes & DevOps" },
    icon: Cpu,
    color: "text-pink-400",
    skills: [
      { en: "Linux / OS Design", fr: "Linux / conception d'OS" },
      { en: "Distributed Systems", fr: "Systèmes distribués" },
      { en: "GPU Programming", fr: "Programmation GPU" },
      { en: "Concurrent Coding", fr: "Programmation concurrente" },
    ],
  },
  {
    title: { en: "Tools & Infrastructure", fr: "Outils & infrastructure" },
    icon: Wrench,
    color: "text-cyan-400",
    skills: ["Git / GitHub Actions", "uv / FastAPI", "Databricks / ETL", "GCP / Docker"],
  },
  {
    title: "Certifications",
    icon: BadgeCheck,
    color: "text-accent-amber",
    skills: [
      "Claude Certified Developer – Foundations (Anthropic, 2026)",
      "Gemini Enterprise Deployment – Partner Specialist (Google Cloud, 2026)",
    ],
  },
  {
    title: { en: "Languages", fr: "Langues" },
    icon: Languages,
    color: "text-violet-400",
    skills: [
      { en: "French — native", fr: "Français — langue maternelle" },
      { en: "English — professional working proficiency", fr: "Anglais — capacité professionnelle" },
      { en: "German — basic", fr: "Allemand — notions" },
    ],
  },
];

export default function Skills() {
  const { lang, t } = useLang();
  return (
    <section id="skills" className="px-6 py-20">
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
            {t({ en: "Technical Stack", fr: "Stack technique" })}
          </ScrollFloat>
          <div className="h-1 w-20 bg-accent-amber rounded-full mb-6" />
          <p className="text-muted text-center max-w-lg mx-auto">
            {t({
              en: "The languages, frameworks and tools I use to build scalable systems and intelligent applications.",
              fr: "Les langages, frameworks et outils que j'utilise pour construire des systèmes scalables et des applications intelligentes.",
            })}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <SpotlightCard
              key={t(cat.title)}
              className="border-card-border/50 flex flex-col"
              spotlightColor="rgba(255, 255, 255, 0.03)"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-background/50 border border-card-border/50 ${cat.color}`}>
                  <cat.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm tracking-tight uppercase">{t(cat.title)}</h3>
              </div>
              <ul className="space-y-2 flex-1">
                {cat.skills.map((skill) => (
                  <li key={t(skill)} className="flex items-center gap-2 text-sm text-muted/90 group/item">
                    <div className="w-1 h-1 rounded-full bg-card-border group-hover/item:bg-accent transition-colors" />
                    {t(skill)}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

