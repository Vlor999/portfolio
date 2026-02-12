"use client";

import { Code2, Brain, Wrench, Database, Globe, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "text-accent",
    border: "border-accent/20",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 75 },
      { name: "C/C++", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "AI / ML",
    icon: Brain,
    color: "text-accent-green",
    border: "border-accent-green/20",
    skills: [
      { name: "MLX/MLX-LM", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "Hugging Face", level: 70 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "text-cyan-400",
    border: "border-cyan-400/20",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "CI/CD", level: 75 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    title: "CLI & Scripting",
    icon: Terminal,
    color: "text-orange-400",
    border: "border-orange-400/20",
    skills: [
      { name: "Bash", level: 80 },
      { name: "Makefile", level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
        <p className="text-muted text-center mb-12 max-w-lg mx-auto">
          Technologies and tools I work with daily.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className={`p-6 rounded-2xl border border-card-border bg-card hover:${cat.border} transition-colors`}
            >
              <div className="flex items-center gap-3 mb-5">
                <cat.icon className={`w-5 h-5 ${cat.color}`} />
                <h3 className="font-semibold">{cat.title}</h3>
              </div>
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground/80">{skill.name}</span>
                      <span className="text-muted text-xs font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-background/50 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r from-card-border ${
                          cat.color === "text-accent"
                            ? "to-accent"
                            : cat.color === "text-accent-green"
                            ? "to-accent-green"
                            : cat.color === "text-accent-amber"
                            ? "to-accent-amber"
                            : cat.color === "text-pink-400"
                            ? "to-pink-400"
                            : cat.color === "text-cyan-400"
                            ? "to-cyan-400"
                            : "to-orange-400"
                        } transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
