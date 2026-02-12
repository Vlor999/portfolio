"use client";

import { Briefcase, GraduationCap, Award, Users } from "lucide-react";

const experiences = [
  {
    year: "2025 – Present",
    title: "HackerRank Ambassador",
    company: "HackerRank",
    description:
    "Promoting coding culture and helping developers worldwide improve their skills through challenges, certifications, and community events.",
    icon: Award,
    iconColor: "text-accent-amber",
    iconBg: "bg-accent-amber/10",
    type: "community",
  },
  {
    year: "2025 – Present",
    title: "AI / ML Contributor",
    company: "Hugging Face",
    description:
    "Publishing open-source models on Hugging Face Hub, exploring NLP and computer vision, and contributing to the democratization of AI.",
    icon: Users,
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    type: "open-source",
  },
  {
    year: "Jul 2025 – Sep 2025",
    title: "Data Engineer / Data Scientist Intern",
    company: "Theodo — Paris, France",
    description:
      "Designed and deployed an automated data ingestion pipeline on Databricks using Python Wheels, replacing manual workflows. Developed intelligent PDF data extraction using LLM APIs for automated chunking and information retrieval from unstructured documents.",
    icon: Briefcase,
    iconColor: "text-accent-green",
    iconBg: "bg-accent-green/10",
    type: "professional",
  },
  {
    year: "2023 – Present",
    title: "Computer Science Student - Applied Mathematics & AI",
    company: "ENSIMAG — Grenoble, France",
    description:
      "Studying algorithms, data structures, distributed systems, software engineering, and artificial intelligence. Exchange semester at TU Graz (Austria) covering GPU Programming, Data Science, and HCI.",
    icon: GraduationCap,
    iconColor: "text-pink-400",
    iconBg: "bg-pink-400/10",
    type: "education",
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Experience</h2>
        <p className="text-muted text-center mb-16 max-w-lg mx-auto">
          My journey through tech, community, and open source.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-card-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.title}
                className={`relative flex items-start gap-6 md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-card-border border-2 border-background -translate-x-1.5 mt-6 z-10" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content */}
                <div className="ml-14 md:ml-0 md:w-1/2">
                  <div className="p-6 rounded-2xl border border-card-border bg-card hover:border-muted/30 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-lg ${exp.iconBg} flex items-center justify-center`}
                      >
                        <exp.icon className={`w-5 h-5 ${exp.iconColor}`} />
                      </div>
                      <div>
                        <span className="text-xs text-muted font-mono">
                          {exp.year}
                        </span>
                        <h3 className="font-semibold text-base">{exp.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-accent font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
