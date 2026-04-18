"use client";

import { Code2, Brain, Wrench, Terminal, Cpu } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import ScrollFloat from "./ui/ScrollFloat";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    color: "text-accent",
    skills: ["Python", "C/C++", "Java", "SQL", "Bash", "CUDA"],
  },
  {
    title: "AI / Machine Learning",
    icon: Brain,
    color: "text-accent-green",
    skills: ["MLX / MLX-LM", "PyTorch", "Hugging Face", "Vision (YOLO)", "RAG Systems"],
  },
  {
    title: "Systems & DevOps",
    icon: Cpu,
    color: "text-pink-400",
    skills: ["Linux / OS Design", "Distributed Systems", "GPU Programming", "Concurrent Coding"],
  },
  {
    title: "Tools & Infrastructure",
    icon: Wrench,
    color: "text-cyan-400",
    skills: ["Git / CI/CD", "uv / FastAPI", "Databricks / ETL", "GCP / Docker"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
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
            Technical Stack
          </ScrollFloat>
          <div className="h-1 w-20 bg-accent-amber rounded-full mb-6" />
          <p className="text-muted text-center max-w-lg mx-auto">
            A comprehensive overview of the languages, frameworks, and tools 
            I use to build scalable systems and intelligent applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <SpotlightCard
              key={cat.title}
              className="border-card-border/50 flex flex-col"
              spotlightColor="rgba(255, 255, 255, 0.03)"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-background/50 border border-card-border/50 ${cat.color}`}>
                  <cat.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm tracking-tight uppercase">{cat.title}</h3>
              </div>
              <ul className="space-y-2 flex-1">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-muted/90 group/item">
                    <div className="w-1 h-1 rounded-full bg-card-border group-hover/item:bg-accent transition-colors" />
                    {skill}
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

