"use client";

import { useEffect, useState } from "react";
import { Download, Box, Loader2, ExternalLink } from "lucide-react";

interface HFData {
  count: number;
  downloads: number;
}

import CountUp from "./ui/CountUp";

export default function HuggingFaceStats() {
  const [stats, setStats] = useState<HFData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(
          "https://huggingface.co/api/models?author=Vlor999"
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const models = await res.json();
        const totalDownloads = models.reduce(
          (acc: number, model: { downloads?: number }) =>
            acc + (model.downloads || 0),
          0
        );
        setStats({ count: models.length, downloads: totalDownloads });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="p-6 rounded-2xl border border-card-border bg-card glow-accent">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="text-2xl">🤗</span> Hugging Face
        </h3>
        <a
          href="https://huggingface.co/Vlor999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-6">
          <Loader2 className="w-6 h-6 animate-spin text-accent" />
        </div>
      )}

      {error && (
        <p className="text-sm text-red-400 text-center py-4">
          Unable to load stats
        </p>
      )}

      {stats && (
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background/50 border border-card-border rounded-xl p-4 text-center">
            <Box className="w-5 h-5 text-accent mx-auto mb-2" />
            <p className="text-2xl font-bold font-mono text-accent">
              <CountUp to={stats.count} from={0} duration={1} />
            </p>
            <p className="text-xs text-muted mt-1">Models</p>
          </div>
          <div className="bg-background/50 border border-card-border rounded-xl p-4 text-center">
            <Download className="w-5 h-5 text-accent-green mx-auto mb-2" />
            <p className="text-2xl font-bold font-mono text-accent-green">
              <CountUp to={stats.downloads} from={0} duration={1.5} separator="," />
            </p>
            <p className="text-xs text-muted mt-1">Downloads</p>
          </div>
        </div>
      )}
    </div>
  );
}

