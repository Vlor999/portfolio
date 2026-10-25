"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="px-6 py-12 border-t border-card-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-1 text-sm text-muted">
          {t({ en: "Built with", fr: "Fait avec" })} <Heart className="w-3.5 h-3.5 text-red-400 inline" /> {t({ en: "by", fr: "par" })}{" "}
          <span className="text-foreground font-medium">Willem Adnet</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Vlor999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/willem-adnet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:adnet.willem@icloud.com"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-muted/60">
          &copy; {new Date().getFullYear()} {t({ en: "All rights reserved.", fr: "Tous droits réservés." })}
        </p>
      </div>
    </footer>
  );
}
