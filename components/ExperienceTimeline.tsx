"use client";

import { Briefcase, GraduationCap, Award } from "lucide-react";
import ScrollFloat from "./ui/ScrollFloat";
import { useLang } from "@/lib/i18n";

const experiences = [
  {
    year: { en: "Since Sep 2026", fr: "Depuis sept. 2026" },
    title: "Data Scientist / Engineer",
    company: "Theodo Data & AI — Paris, France",
    description: {
      en: "Full-time on the data & AI team after my end-of-studies internship there, working on data platforms and LLM-based products.",
      fr: "En CDI dans l'équipe data & IA après y avoir fait mon stage de fin d'études : plateformes data et produits basés sur des LLM.",
    },
    icon: Briefcase,
    iconColor: "text-accent-green",
    iconBg: "bg-accent-green/10",
    type: "professional",
  },
  {
    year: { en: "Feb 2026 – Sep 2026", fr: "Févr. 2026 – sept. 2026" },
    title: { en: "End-of-studies Intern — Data Scientist / Engineer", fr: "Stage de fin d'études — Data Scientist / Engineer" },
    company: "Theodo Data & AI — Paris, France",
    description: {
      en: "LLM-based data structuring and agentic tooling.",
      fr: "Structuration de données par LLM et création d'outils agentiques.",
    },
    icon: Briefcase,
    iconColor: "text-accent-green",
    iconBg: "bg-accent-green/10",
    type: "professional",
  },
  {
    year: { en: "Feb 2026 – Aug 2026", fr: "Févr. 2026 – août 2026" },
    title: "HackerRank Campus Ambassador",
    company: "HackerRank — Université Grenoble Alpes",
    description: {
      en: "Ran the campus developer community: organized coding challenges and prepared students for technical assessments, with a focus on AI. Ranked 118th out of 1,983 at HackerRank Orchestrate (Aug 2026), a 24-hour hackathon to build and ship an AI agent.",
      fr: "Animation de la communauté de développeurs du campus : organisation de compétitions de code et préparation des étudiants aux tests techniques, avec un focus sur l'IA. 118e sur 1 983 participants à HackerRank Orchestrate (août 2026), un hackathon de 24 h pour construire et déployer un agent IA.",
    },
    icon: Award,
    iconColor: "text-accent-amber",
    iconBg: "bg-accent-amber/10",
    type: "community",
  },
  {
    year: { en: "Jul 2025 – Sep 2025", fr: "Juil. 2025 – sept. 2025" },
    title: { en: "Data Engineer / Scientist Intern", fr: "Stage assistant ingénieur — Data Engineer / Scientist" },
    company: { en: "Theodo Data & AI, pharmaceutical client — Paris, France", fr: "Theodo Data & AI, client pharmaceutique — Paris, France" },
    description: {
      en: "Replaced a manual ingestion process with an automated pipeline (PDF extraction, web scraping). Built ETL jobs as Python wheels on Databricks, containerized services with Docker, and shipped a Document AI solution using LiteLLM for semantic chunking and retrieval.",
      fr: "Remplacement d'un processus d'ingestion manuel par un pipeline automatisé (extraction PDF, web scraping). Jobs ETL packagés en wheels Python sur Databricks, services conteneurisés avec Docker, et une solution Document AI avec LiteLLM pour le découpage sémantique et la recherche.",
    },
    icon: Briefcase,
    iconColor: "text-accent-green",
    iconBg: "bg-accent-green/10",
    type: "professional",
  },
  {
    year: { en: "Feb 2025 – Jul 2025", fr: "Févr. 2025 – juil. 2025" },
    title: { en: "Exchange Semester — TU Graz", fr: "Semestre d'échange — TU Graz" },
    company: "Graz University of Technology — Graz, Austria",
    description: {
      en: "Advanced studies in Data Science, Artificial Intelligence, GPU Programming (CUDA), and Geometric 3D-Modeling. Focused on high-performance computing and Human-Computer Interaction.",
      fr: "Cours avancés en data science, intelligence artificielle, programmation GPU (CUDA) et modélisation géométrique 3D. Focus sur le calcul haute performance et l'interaction homme-machine.",
    },
    icon: GraduationCap,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10",
    type: "education",
  },
  {
    year: { en: "Aug 2023 – Sep 2026", fr: "Août 2023 – sept. 2026" },
    title: { en: "Engineering Degree — ENSIMAG", fr: "Diplôme d'ingénieur — ENSIMAG" },
    company: "Grenoble INP - ENSIMAG — Grenoble, France",
    description: {
      en: "Engineering degree in applied mathematics and computer science, MMIS track. OS design, algorithmics, distributed systems and artificial intelligence.",
      fr: "Diplôme d'ingénieur en mathématiques appliquées et informatique, filière MMIS. Conception d'OS, algorithmique, systèmes distribués et intelligence artificielle.",
    },
    icon: GraduationCap,
    iconColor: "text-pink-400",
    iconBg: "bg-pink-400/10",
    type: "education",
  },
];

export default function ExperienceTimeline() {
  const { lang, t } = useLang();
  return (
    <section id="experience" className="px-6 py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <ScrollFloat
            key={lang}
            animationDuration={1}
            ease="back.out(1.5)"
            scrollStart="top bottom-=10%"
            scrollEnd="bottom center"
            stagger={0.03}
            containerClassName="mb-4"
          >
            {t({ en: "Professional Journey", fr: "Parcours" })}
          </ScrollFloat>
          <div className="h-1 w-20 bg-accent-green rounded-full mb-6" />
          <p className="text-muted text-center max-w-lg mx-auto">
            {t({
              en: "From engineering school and internships to data science at Theodo.",
              fr: "De l'école d'ingénieur et des stages jusqu'à la data science chez Theodo.",
            })}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-card-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={t(exp.year)}
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
                          {t(exp.year)}
                        </span>
                        <h3 className="font-semibold text-base">{t(exp.title)}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-accent font-medium mb-2">
                      {t(exp.company)}
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      {t(exp.description)}
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
