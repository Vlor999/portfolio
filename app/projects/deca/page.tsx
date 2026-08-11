import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, GitBranch, Cpu, Zap, TestTube2 } from "lucide-react";

export const metadata: Metadata = {
  title: "DECA Compiler — Willem Adnet",
  description:
    "A compiler for the Deca language targeting the IMA abstract machine: lexing, parsing, contextual analysis and code generation, plus a CORDIC trigonometry extension and an energy-consumption study.",
};

const stages = [
  {
    name: "Lexical analysis",
    detail:
      "Turns the source text into a token stream, rejecting malformed literals and identifiers with a located error message.",
    valid: 0,
    invalid: 0,
  },
  {
    name: "Syntax analysis",
    detail:
      "Builds the abstract syntax tree from the token stream and reports grammatical errors with their position in the source.",
    valid: 43,
    invalid: 68,
  },
  {
    name: "Contextual analysis",
    detail:
      "Walks the tree to resolve identifiers, build the class and symbol tables, and type-check every expression — the stage where most of a program's real errors surface.",
    valid: 72,
    invalid: 103,
  },
  {
    name: "Code generation",
    detail:
      "Emits assembly for the IMA abstract machine: register allocation, object layout and method dispatch, arithmetic overflow checks.",
    valid: 98,
    invalid: 18,
  },
];

const facts = [
  { icon: Cpu, label: "Target", value: "IMA abstract machine" },
  { icon: GitBranch, label: "Team", value: "5 engineers, ~200 commits mine" },
  { icon: TestTube2, label: "Test corpus", value: "440+ Deca programs" },
  { icon: Zap, label: "Extension", value: "CORDIC trigonometry" },
];

export default function DecaProject() {
  return (
    <main className="min-h-screen px-6 py-16 text-foreground">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </Link>

        <header className="mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">
            Case study · ENSIMAG
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            DECA Compiler
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            A complete compiler for Deca — a Java-like object-oriented teaching
            language — from source text down to assembly for the IMA abstract
            machine. Built in a team of five over a semester.
          </p>
          <p className="text-sm text-muted/70 mt-4">
            The source lives in a private academic repository and stays private:
            it is coursework, and publishing it would hand the solution to future
            students. This page is the write-up.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {facts.map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-3 p-4 rounded-xl border border-card-border bg-card/50"
            >
              <f.icon className="w-5 h-5 text-accent shrink-0" />
              <div>
                <p className="text-[11px] uppercase tracking-wider text-muted">
                  {f.label}
                </p>
                <p className="text-sm font-medium">{f.value}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">The pipeline</h2>
          <p className="text-muted leading-relaxed mb-6">
            The compiler runs the four classical phases, each one independently
            testable and each one wired to its own stage in continuous
            integration. A program that fails at any phase must fail with a
            precise, located message rather than a stack trace — a large share of
            the test corpus exists to pin exactly that behaviour.
          </p>
          <div className="space-y-3">
            {stages.map((s, i) => (
              <div
                key={s.name}
                className="p-5 rounded-xl border border-card-border bg-card/50"
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-semibold">
                    <span className="text-accent font-mono text-sm mr-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.name}
                  </h3>
                  {s.valid + s.invalid > 0 && (
                    <span className="text-xs font-mono text-muted whitespace-nowrap">
                      {s.valid} valid · {s.invalid} invalid
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted/80 leading-relaxed">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">What I owned</h2>
          <p className="text-muted leading-relaxed mb-4">
            My main contribution was the delivery pipeline and the validation
            strategy around it. The GitLab CI pipeline mirrors the compiler
            itself — one stage per phase, so a regression names the phase that
            broke instead of reporting one red build. Maven artifacts and the
            local repository are cached between stages, which is what keeps a
            four-stage pipeline from paying the dependency-resolution cost four
            times.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The test suite runs the compiler against 440+ Deca programs, roughly
            half of which are <em>expected to fail</em> — the invalid cases that
            check the compiler rejects bad input for the right reason. Running
            those serially made the feedback loop too slow to be useful during
            development, so I parallelized the launchers and added JaCoCo
            coverage reporting to show which parts of the compiler the corpus
            actually reached.
          </p>
          <p className="text-muted leading-relaxed">
            I also standardized the team&apos;s commit conventions on Commitizen —
            which is what led to my own multilingual fork of it, so contributors
            could read the prompts in their own language.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">
            Extension: trigonometry without a math library
          </h2>
          <p className="text-muted leading-relaxed">
            The IMA machine offers no transcendental functions, so sine and
            cosine had to be built from arithmetic the target actually has. We
            implemented <strong>CORDIC</strong>: the angle is first folded into
            [-π, π], then 27 iterations of shift-and-add rotations converge on
            the result, each step reusing a precomputed arctangent table and a
            fixed scaling constant. No multiplication by a lookup table, no
            floating-point library — just shifts, adds and a sign test per
            iteration. We validated the output against reference values across
            the range and plotted the residual error to confirm the iteration
            count was enough for the precision we claimed.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">
            How much energy does a compiled program cost?
          </h2>
          <p className="text-muted leading-relaxed">
            The part of the project I found most interesting was not in the
            specification. We took one identical program, wrote it three times —
            in Deca, in Java and in C — and measured the energy each version
            actually consumed, reading Intel RAPL counters
            (<code className="text-xs font-mono text-accent">
              /sys/class/powercap/intel-rapl
            </code>
            ) before and after execution to get a figure in microjoules. It turns
            a compiler exercise into a measurable question: what does our code
            generation cost, in joules, against a production compiler and against
            hand-written C?
          </p>
        </section>

        <footer className="pt-8 border-t border-card-border">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all projects
          </Link>
        </footer>
      </article>
    </main>
  );
}
