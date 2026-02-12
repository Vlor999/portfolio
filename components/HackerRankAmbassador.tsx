"use client";

import {
  Award,
  Rocket,
  Users,
  Code,
  Trophy,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const roadmapSteps = [
  {
    id: 1,
    title: "First Steps",
    icon: Rocket,
    description: "Create your HackerRank account and complete the onboarding.",
    details: [
      "Sign up at hackerrank.com",
      "Complete your profile",
      "Take the initial skill assessment",
    ],
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/30",
  },
  {
    id: 2,
    title: "Hands-On Practice",
    icon: Code,
    description: "Solve challenges across multiple domains to build your skills.",
    details: [
      "Start with easy problems",
      "Explore Algorithms, Data Structures, SQL",
      "Earn badges and track your progress",
    ],
    color: "text-accent-green",
    bg: "bg-accent-green/10",
    border: "border-accent-green/30",
  },
  {
    id: 3,
    title: "Compete & Certify",
    icon: Trophy,
    description: "Join contests and earn official skill certifications.",
    details: [
      "Participate in weekly contests",
      "Earn role-based certifications",
      "Climb the global leaderboard",
    ],
    color: "text-accent-amber",
    bg: "bg-accent-amber/10",
    border: "border-accent-amber/30",
  },
  {
    id: 4,
    title: "Join the Community",
    icon: Users,
    description: "Connect with developers and become an Ambassador yourself.",
    details: [
      "Help peers in discussions",
      "Share your solutions and insights",
      "Apply to the Ambassador program",
    ],
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/30",
  },
];

export default function HackerRankAmbassador() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="hackerrank" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-accent-amber/30 bg-accent-amber/5 text-accent-amber text-sm font-medium">
            <Award className="w-4 h-4" />
            HackerRank Ambassador
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Growing the Developer Community
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            As a HackerRank Ambassador, I&apos;m dedicated to helping developers
            improve their skills and connect with opportunities through coding
            challenges and certifications.
          </p>
        </div>

        {/* Ambassador Impact */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Users,
              label: "Developers Reached",
              value: "500+",
              color: "text-accent",
            },
            {
              icon: Trophy,
              label: "Challenges Solved",
              value: "200+",
              color: "text-accent-green",
            },
            {
              icon: Award,
              label: "Certifications",
              value: "5+",
              color: "text-accent-amber",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl border border-card-border bg-card"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <p className={`text-3xl font-bold font-mono ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-sm text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Interactive Roadmap */}
        <h3 className="text-2xl font-bold text-center mb-10">
          Your HackerRank Journey
        </h3>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Steps list */}
          <div className="space-y-3">
            {roadmapSteps.map((step, i) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  activeStep === i
                    ? `${step.bg} ${step.border} border`
                    : "border-card-border bg-card hover:bg-card/80"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg ${step.bg} flex items-center justify-center`}
                  >
                    <step.icon className={`w-5 h-5 ${step.color}`} />
                  </div>
                  <div className="flex-1">
                    <p
                      className={`font-semibold ${
                        activeStep === i ? step.color : "text-foreground"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-muted">{step.description}</p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      activeStep === i
                        ? `${step.color} rotate-90`
                        : "text-muted"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Active step details */}
          <div
            className={`p-8 rounded-2xl border ${roadmapSteps[activeStep].border} ${roadmapSteps[activeStep].bg}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center`}
              >
                {(() => {
                  const Icon = roadmapSteps[activeStep].icon;
                  return (
                    <Icon
                      className={`w-6 h-6 ${roadmapSteps[activeStep].color}`}
                    />
                  );
                })()}
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider">
                  Step {roadmapSteps[activeStep].id}
                </p>
                <h4
                  className={`text-xl font-bold ${roadmapSteps[activeStep].color}`}
                >
                  {roadmapSteps[activeStep].title}
                </h4>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {roadmapSteps[activeStep].details.map((detail) => (
                <li key={detail} className="flex items-start gap-3">
                  <CheckCircle2
                    className={`w-5 h-5 mt-0.5 ${roadmapSteps[activeStep].color} shrink-0`}
                  />
                  <span className="text-sm text-foreground/80">{detail}</span>
                </li>
              ))}
            </ul>

            {activeStep < roadmapSteps.length - 1 ? (
              <button
                onClick={() => setActiveStep((prev) => prev + 1)}
                className={`inline-flex items-center gap-2 text-sm font-medium ${roadmapSteps[activeStep].color} hover:underline`}
              >
                Next Step <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <a
                href="https://www.hackerrank.com/profile/adnet_willem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent-amber text-black font-semibold text-sm hover:brightness-110 transition-all"
              >
                Start Your Journey <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
