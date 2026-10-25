"use client";

import Link from "next/link";
import { ArrowLeft, GitBranch, Cpu, Zap, TestTube2 } from "lucide-react";
import { useLang } from "@/lib/i18n";

const stages = [
  {
    name: { en: "Lexical analysis", fr: "Analyse lexicale" },
    detail: {
      en: "Turns the source text into a token stream, rejecting malformed literals and identifiers with a located error message.",
      fr: "Transforme le texte source en flux de tokens, en rejetant les littéraux et identifiants mal formés avec un message d'erreur localisé.",
    },
    valid: 0,
    invalid: 0,
  },
  {
    name: { en: "Syntax analysis", fr: "Analyse syntaxique" },
    detail: {
      en: "Builds the abstract syntax tree from the token stream and reports grammatical errors with their position in the source.",
      fr: "Construit l'arbre de syntaxe abstraite à partir des tokens et signale les erreurs de grammaire avec leur position dans le source.",
    },
    valid: 43,
    invalid: 68,
  },
  {
    name: { en: "Contextual analysis", fr: "Analyse contextuelle" },
    detail: {
      en: "Walks the tree to resolve identifiers, build the class and symbol tables, and type-check every expression — the stage where most of a program's real errors surface.",
      fr: "Parcourt l'arbre pour résoudre les identifiants, construire les tables de classes et de symboles, et typer chaque expression — l'étape où remontent la plupart des vraies erreurs d'un programme.",
    },
    valid: 72,
    invalid: 103,
  },
  {
    name: { en: "Code generation", fr: "Génération de code" },
    detail: {
      en: "Emits assembly for the IMA abstract machine: register allocation, object layout and method dispatch, arithmetic overflow checks.",
      fr: "Produit l'assembleur pour la machine abstraite IMA : allocation de registres, disposition des objets et appel de méthodes, contrôles de débordement arithmétique.",
    },
    valid: 98,
    invalid: 18,
  },
];

const facts = [
  { icon: Cpu, label: { en: "Target", fr: "Cible" }, value: { en: "IMA abstract machine", fr: "Machine abstraite IMA" } },
  { icon: GitBranch, label: { en: "Team", fr: "Équipe" }, value: { en: "5 engineers, ~200 commits mine", fr: "5 ingénieurs, ~200 commits de ma part" } },
  { icon: TestTube2, label: { en: "Test corpus", fr: "Corpus de tests" }, value: { en: "440+ Deca programs", fr: "440+ programmes Deca" } },
  { icon: Zap, label: "Extension", value: { en: "CORDIC trigonometry", fr: "Trigonométrie CORDIC" } },
];

export default function DecaCaseStudy() {
  const { t } = useLang();

  return (
    <main className="min-h-screen px-6 py-16 text-foreground">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          {t({ en: "Back to portfolio", fr: "Retour au portfolio" })}
        </Link>

        <header className="mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">
            {t({ en: "Case study · ENSIMAG", fr: "Étude de cas · ENSIMAG" })}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {t({ en: "DECA Compiler", fr: "Compilateur DECA" })}
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            {t({
              en: "A complete compiler for Deca — a Java-like object-oriented teaching language — from source text down to assembly for the IMA abstract machine. Built in a team of five over a semester.",
              fr: "Un compilateur complet pour Deca — un langage pédagogique orienté objet proche de Java — du texte source jusqu'à l'assembleur de la machine abstraite IMA. Réalisé en équipe de cinq sur un semestre.",
            })}
          </p>
          <p className="text-sm text-muted/70 mt-4">
            {t({
              en: "The source lives in a private academic repository and stays private: it is coursework, and publishing it would hand the solution to future students. This page is the write-up.",
              fr: "Le code est dans un dépôt académique privé et le restera : c'est un projet de cours, et le publier donnerait la solution aux promotions suivantes. Cette page en est le compte rendu.",
            })}
          </p>
        </header>

        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {facts.map((f) => (
            <div
              key={t(f.label)}
              className="flex items-center gap-3 p-4 rounded-xl border border-card-border bg-card/50"
            >
              <f.icon className="w-5 h-5 text-accent shrink-0" />
              <div>
                <p className="text-[11px] uppercase tracking-wider text-muted">
                  {t(f.label)}
                </p>
                <p className="text-sm font-medium">{t(f.value)}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">{t({ en: "The pipeline", fr: "Le pipeline" })}</h2>
          <p className="text-muted leading-relaxed mb-6">
            {t({
              en: "The compiler runs the four classical phases, each one independently testable and each one wired to its own stage in continuous integration. A program that fails at any phase must fail with a precise, located message rather than a stack trace — a large share of the test corpus exists to pin exactly that behaviour.",
              fr: "Le compilateur enchaîne les quatre phases classiques, chacune testable séparément et reliée à son propre stage en intégration continue. Un programme qui échoue à une phase doit échouer avec un message précis et localisé plutôt qu'une stack trace — une grande partie du corpus de tests sert justement à verrouiller ce comportement.",
            })}
          </p>
          <div className="space-y-3">
            {stages.map((s, i) => (
              <div
                key={s.name.en}
                className="p-5 rounded-xl border border-card-border bg-card/50"
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-semibold">
                    <span className="text-accent font-mono text-sm mr-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {t(s.name)}
                  </h3>
                  {s.valid + s.invalid > 0 && (
                    <span className="text-xs font-mono text-muted whitespace-nowrap">
                      {s.valid} {t({ en: "valid", fr: "valides" })} · {s.invalid} {t({ en: "invalid", fr: "invalides" })}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted/80 leading-relaxed">
                  {t(s.detail)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">{t({ en: "What I owned", fr: "Ma part" })}</h2>
          <p className="text-muted leading-relaxed mb-4">
            {t({
              en: "My main contribution was the delivery pipeline and the validation strategy around it. The GitLab CI pipeline mirrors the compiler itself — one stage per phase, so a regression names the phase that broke instead of reporting one red build. Maven artifacts and the local repository are cached between stages, which is what keeps a four-stage pipeline from paying the dependency-resolution cost four times.",
              fr: "Ma contribution principale a été le pipeline de livraison et la stratégie de validation autour. Le pipeline GitLab CI reflète le compilateur lui-même — un stage par phase, pour qu'une régression désigne la phase cassée au lieu d'un simple build rouge. Les artefacts Maven et le dépôt local sont mis en cache entre les stages, ce qui évite à un pipeline de quatre stages de payer quatre fois la résolution des dépendances.",
            })}
          </p>
          <p className="text-muted leading-relaxed mb-4">
            {t({
              en: "The test suite runs the compiler against 440+ Deca programs, roughly half of which are expected to fail — the invalid cases that check the compiler rejects bad input for the right reason. Running those serially made the feedback loop too slow to be useful during development, so I parallelized the launchers and added JaCoCo coverage reporting to show which parts of the compiler the corpus actually reached.",
              fr: "La suite de tests lance le compilateur sur plus de 440 programmes Deca, dont environ la moitié doivent échouer — les cas invalides qui vérifient que le compilateur rejette une entrée incorrecte pour la bonne raison. Les exécuter en série rendait la boucle de feedback trop lente pour être utile en développement : j'ai donc parallélisé les lanceurs et ajouté la couverture JaCoCo pour voir quelles parties du compilateur le corpus atteignait vraiment.",
            })}
          </p>
          <p className="text-muted leading-relaxed">
            {t({
              en: "I also standardized the team's commit conventions on Commitizen — which is what led to my own multilingual fork of it, so contributors could read the prompts in their own language.",
              fr: "J'ai aussi standardisé les conventions de commit de l'équipe avec Commitizen — d'où mon fork multilingue, pour que chacun puisse lire les invites dans sa langue.",
            })}
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">
            {t({
              en: "Extension: trigonometry without a math library",
              fr: "Extension : de la trigonométrie sans bibliothèque mathématique",
            })}
          </h2>
          <p className="text-muted leading-relaxed">
            {t({
              en: "The IMA machine offers no transcendental functions, so sine and cosine had to be built from arithmetic the target actually has. We implemented CORDIC: the angle is first folded into [-π, π], then 27 iterations of shift-and-add rotations converge on the result, each step reusing a precomputed arctangent table and a fixed scaling constant. No multiplication by a lookup table, no floating-point library — just shifts, adds and a sign test per iteration. We validated the output against reference values across the range and plotted the residual error to confirm the iteration count was enough for the precision we claimed.",
              fr: "La machine IMA n'offre aucune fonction transcendante : sinus et cosinus devaient être construits avec l'arithmétique dont la cible dispose. Nous avons implémenté CORDIC : l'angle est d'abord ramené dans [-π, π], puis 27 itérations de rotations par décalages et additions convergent vers le résultat, chaque étape réutilisant une table d'arctangentes précalculée et une constante d'échelle fixe. Pas de multiplication par une table, pas de bibliothèque flottante — juste des décalages, des additions et un test de signe par itération. Nous avons validé les résultats contre des valeurs de référence sur tout l'intervalle et tracé l'erreur résiduelle pour confirmer que le nombre d'itérations suffisait à la précision annoncée.",
            })}
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">
            {t({
              en: "How much energy does a compiled program cost?",
              fr: "Combien d'énergie coûte un programme compilé ?",
            })}
          </h2>
          <p className="text-muted leading-relaxed">
            {t({
              en: "The part of the project I found most interesting was not in the specification. We took one identical program, wrote it three times — in Deca, in Java and in C — and measured the energy each version actually consumed, reading Intel RAPL counters",
              fr: "La partie du projet que j'ai trouvée la plus intéressante n'était pas dans le cahier des charges. Nous avons écrit un même programme trois fois — en Deca, en Java et en C — et mesuré l'énergie réellement consommée par chaque version, en lisant les compteurs Intel RAPL",
            })}{" "}
            (<code className="text-xs font-mono text-accent">
              /sys/class/powercap/intel-rapl
            </code>
            ){" "}
            {t({
              en: "before and after execution to get a figure in microjoules. It turns a compiler exercise into a measurable question: what does our code generation cost, in joules, against a production compiler and against hand-written C?",
              fr: "avant et après l'exécution pour obtenir un chiffre en microjoules. Un exercice de compilation devient une question mesurable : combien coûte notre génération de code, en joules, face à un compilateur de production et à du C écrit à la main ?",
            })}
          </p>
        </section>

        <footer className="pt-8 border-t border-card-border">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t({ en: "Back to all projects", fr: "Retour à tous les projets" })}
          </Link>
        </footer>
      </article>
    </main>
  );
}
