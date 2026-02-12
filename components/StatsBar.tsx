"use client";

import { Github, Star, GitFork, Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import HuggingFaceStats from "./HuggingFaceStats";

interface GitHubStats {
  publicRepos: number;
  followers: number;
  totalStars: number;
}

export default function StatsBar() {
  const [gh, setGh] = useState<GitHubStats | null>(null);

  useEffect(() => {
    async function fetchGH() {
      try {
        const res = await fetch("https://api.github.com/users/Vlor999");
        if (!res.ok) return;
        const data = await res.json();

        // Fetch stars from repos
        const reposRes = await fetch(
          "https://api.github.com/users/Vlor999/repos?per_page=100&sort=updated"
        );
        const repos = reposRes.ok ? await reposRes.json() : [];
        const totalStars = repos.reduce(
          (acc: number, r: { stargazers_count?: number }) =>
            acc + (r.stargazers_count || 0),
          0
        );

        setGh({
          publicRepos: data.public_repos,
          followers: data.followers,
          totalStars,
        });
      } catch {
        // Silent fail
      }
    }
    fetchGH();
  }, []);

  return (
    <section id="stats" className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Open Source Activity
        </h2>
        <p className="text-muted text-center mb-12 max-w-lg mx-auto">
          Real-time stats from my GitHub and Hugging Face profiles.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* GitHub Card */}
          <div className="p-6 rounded-2xl border border-card-border bg-card glow-green">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Github className="w-5 h-5" /> GitHub
              </h3>
              <a
                href="https://github.com/Vlor999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-foreground transition-colors"
              >
                @Vlor999
              </a>
            </div>
            {gh ? (
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-background/50 border border-card-border rounded-xl p-4 text-center">
                  <Code2 className="w-5 h-5 text-accent-green mx-auto mb-2" />
                  <p className="text-2xl font-bold font-mono text-accent-green">
                    {gh.publicRepos}
                  </p>
                  <p className="text-xs text-muted mt-1">Repos</p>
                </div>
                <div className="bg-background/50 border border-card-border rounded-xl p-4 text-center">
                  <Star className="w-5 h-5 text-accent-amber mx-auto mb-2" />
                  <p className="text-2xl font-bold font-mono text-accent-amber">
                    {gh.totalStars}
                  </p>
                  <p className="text-xs text-muted mt-1">Stars</p>
                </div>
                <div className="bg-background/50 border border-card-border rounded-xl p-4 text-center">
                  <GitFork className="w-5 h-5 text-accent mx-auto mb-2" />
                  <p className="text-2xl font-bold font-mono text-accent">
                    {gh.followers}
                  </p>
                  <p className="text-xs text-muted mt-1">Followers</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-background/50 border border-card-border rounded-xl p-4 h-24 animate-pulse"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Hugging Face Card */}
          <HuggingFaceStats />
        </div>
      </div>
    </section>
  );
}
