"use client";

import { Briefcase, GraduationCap, Award, Users } from "lucide-react";
import ScrollFloat from "./ui/ScrollFloat";

const experiences = [
  {
    year: "Feb 2026 – Present",
    title: "Data Scientist / AI Engineer",
    company: "Theodo Data & AI — Paris, France",
    description:
      "Create pipelines for data ingestion and processing, and implement LLM-based solutions for unstructured data retrieval. Creation of agent based repository and agent based data processing pipeline.",
    icon: Briefcase,
    iconColor: "text-accent-green",
    iconBg: "bg-accent-green/10",
    type: "professional",
  },
  {
    year: "Jul 2025 – Sep 2025",
    title: "Data Engineer / Scientist Intern",
    company: "Theodo Data & AI — Paris, France",
    description:
      "Automated manual data ingestion pipelines using Python Wheels on Databricks. Implemented LLM-based PDF extraction for unstructured data retrieval, significantly improving data processing speed and accuracy.",
    icon: Briefcase,
    iconColor: "text-accent-green",
    iconBg: "bg-accent-green/10",
    type: "professional",
  },
  {
    year: "Feb 2025 – Jul 2025",
    title: "Exchange Semester — TU Graz",
    company: "Graz University of Technology — Graz, Austria",
    description:
      "Advanced studies in Data Science, Artificial Intelligence, GPU Programming (CUDA), and Geometric 3D-Modeling. Focused on high-performance computing and Human-Computer Interaction.",
    icon: GraduationCap,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10",
    type: "education",
  },
  {
    year: "2025 – Present",
    title: "HackerRank Ambassador",
    company: "HackerRank",
    description:
      "Leading community initiatives, organizing coding challenges, and mentoring students to bridge the gap between academia and the tech industry.",
    icon: Award,
    iconColor: "text-accent-amber",
    iconBg: "bg-accent-amber/10",
    type: "community",
  },
  {
    year: "Sep 2023 – Present",
    title: "Engineering Student — ENSIMAG",
    company: "Grenoble INP - ENSIMAG — Grenoble, France",
    description:
      "Ranked in top-tier French engineering school. Specializing in Applied Mathematics, Computer Science, and Artificial Intelligence. Deep-diving into OS design, algorithmics, and distributed systems.",
    icon: GraduationCap,
    iconColor: "text-pink-400",
    iconBg: "bg-pink-400/10",
    type: "education",
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="px-6 py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <ScrollFloat
            animationDuration={1}
            ease="back.out(1.5)"
            scrollStart="top bottom-=10%"
            scrollEnd="bottom center"
            stagger={0.03}
            containerClassName="mb-4"
          >
            Professional Journey
          </ScrollFloat>
          <div className="h-1 w-20 bg-accent-green rounded-full mb-6" />
          <p className="text-muted text-center max-w-lg mx-auto">
            My career path from engineering internships to current roles 
            in AI research and data engineering.
          </p>
        </div>

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
