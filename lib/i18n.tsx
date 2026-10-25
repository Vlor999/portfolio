"use client";

import { useEffect, useSyncExternalStore } from "react";

export type Lang = "en" | "fr";
export type T = Record<Lang, string>;

const listeners = new Set<() => void>();
let chosen: Lang | null = null;

function getSnapshot(): Lang {
  if (chosen) return chosen;
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "fr") return saved;
  } catch {}
  return navigator.language.startsWith("fr") ? "fr" : "en";
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setLang(lang: Lang) {
  chosen = lang;
  try {
    localStorage.setItem("lang", lang);
  } catch {}
  listeners.forEach((l) => l());
}

// Static export: the server HTML is English, the client switches after hydration.
export function useLang() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, () => "en" as Lang);
  const t = (s: string | T) => (typeof s === "string" ? s : s[lang]);
  return { lang, t };
}

export function LangToggle() {
  const { lang } = useLang();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="fixed top-6 right-6 z-[1001] flex rounded-full border border-card-border bg-card/80 backdrop-blur p-1 text-xs font-semibold">
      {(["en", "fr"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-3 py-1.5 rounded-full uppercase transition-colors ${
            lang === l ? "bg-foreground text-background" : "text-muted hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
