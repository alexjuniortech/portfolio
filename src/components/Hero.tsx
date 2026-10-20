import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HiArrowDownTray, HiArrowRight, HiCodeBracket } from "react-icons/hi2";
import type { LangCode } from "@/i18n";
import { socials } from "./Section";

const CV_BASE_URL = "https://alexjuniortech-cv.s3.sa-east-1.amazonaws.com";

const resumeUrl = (lang: string) =>
  `${CV_BASE_URL}/${(["pt", "es", "en"] as LangCode[]).includes(lang as LangCode) ? lang : "en"}/Alex+Junior.pdf`;

type Token = [kind: "k" | "v" | "p" | "s" | "c" | "x", text: string];

// Syntax-highlighted snippet shown in the editor window
const code: Token[][] = [
  [["k", "const "], ["v", "alexJunior"], ["x", " = {"]],
  [["p", "  role: "], ["s", "'Senior Software Engineer'"], ["x", ","]],
  [["p", "  focus: "], ["x", "["], ["s", "'Backend'"], ["x", ", "], ["s", "'Cloud'"], ["x", ", "], ["s", "'Architecture'"], ["x", "],"]],
  [["p", "  experience: "], ["s", "'13+ years'"], ["x", ","]],
  [["p", "  leadership: "], ["s", "'Tech Lead'"], ["x", ","]],
  [["p", "  mission: "], ["s", "'Build systems that scale"]],
  [["s", "    and teams that ship.'"], ["x", ","]],
  [["p", "  stack: "], ["x", "["]],
  [["s", "    'Node.js'"], ["x", ", "], ["s", "'PHP'"], ["x", ", "], ["s", "'Golang'"], ["x", ","]],
  [["s", "    'Docker'"], ["x", ", "], ["s", "'Kubernetes'"], ["x", ", "], ["s", "'AWS'"], ["x", ","]],
  [["s", "    'PostgreSQL'"], ["x", ", "], ["s", "'Redis'"]],
  [["x", "  ]"]],
  [["x", "};"]],
  [],
  [["c", "// Building reliable systems, one commit at a time."]],
];

const tokenClass: Record<Token[0], string> = {
  k: "text-code-key",
  v: "text-primary",
  p: "text-code-key",
  s: "text-primary",
  c: "text-primary/50",
  x: "text-muted-foreground",
};

function CodeWindow() {
  return (
    <div className="relative z-10 overflow-hidden rounded-md border border-border-strong bg-card/95 shadow-2xl shadow-black/60 backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
          <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
          <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
          alexjunior.web@gmail.com
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        </div>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[11.5px] leading-[1.75]">
        {code.map((line, i) => (
          <div key={i} className="flex">
            <span className="w-8 shrink-0 select-none text-code-dim">
              {String(i + 1).padStart(2, "0")}
            </span>
            <code>
              {line.map(([kind, text], j) => (
                <span key={j} className={tokenClass[kind]}>
                  {text}
                </span>
              ))}
            </code>
          </div>
        ))}
      </pre>
    </div>
  );
}

function Globe() {
  const r = 150;
  const meridians = [150, 120, 85, 45, 10];
  const parallels = [-110, -70, -30, 10, 50, 90, 125];

  return (
    <div className="pointer-events-none absolute -right-16 top-1/2 h-[380px] w-[380px] -translate-y-1/2">
      <div className="absolute inset-10 rounded-full bg-primary/25 blur-3xl" />
      <motion.svg
        viewBox="-160 -160 320 320"
        className="relative h-full w-full text-primary"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <g fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.55">
          <circle r={r} strokeWidth="1" opacity="0.9" />
          {meridians.map((rx) => (
            <ellipse key={rx} rx={rx} ry={r} />
          ))}
          {parallels.map((y) => {
            const rx = Math.sqrt(r * r - y * y);
            return <ellipse key={y} cy={y} rx={rx} ry={rx * 0.18} />;
          })}
        </g>
      </motion.svg>
    </div>
  );
}

function Corner({ className }: { className: string }) {
  return <span className={`absolute h-3 w-3 border-primary ${className}`} />;
}

export function Hero() {
  const { t, i18n } = useTranslation();
  const [first, ...rest] = t("hero.name").split(" ");

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 md:pb-20 md:pt-32">
      {/* Social rail */}
      <div className="absolute left-5 top-28 hidden flex-col items-center gap-5 xl:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-primary glow-primary" />
        <span className="-mt-4 h-28 w-px bg-gradient-to-b from-primary to-primary/10" />
        {socials.slice(0, 3).map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>

      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-sm text-primary"
          >
            {"< "}
            {t("hero.greeting")}
            {" />"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 font-mono text-5xl font-extrabold uppercase leading-none tracking-tight sm:text-6xl md:text-7xl"
          >
            {first} <span className="text-primary">{rest.join(" ")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 font-mono text-sm uppercase tracking-[0.14em] text-foreground/90 md:text-base"
          >
            {t("hero.role")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {/* <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-sm bg-primary px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-primary-foreground glow-primary transition-opacity hover:opacity-90"
            >
              {t("hero.work")}
              <HiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a> */}
            <a
              href={resumeUrl(i18n.resolvedLanguage ?? i18n.language)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-sm border border-border-strong px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {t("hero.resume")}
              <HiArrowDownTray className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 font-mono text-[11px] uppercase tracking-[0.06em] text-primary/80"
          >
            // {t("hero.tag")}
          </motion.p> */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative lg:py-6 lg:pr-20"
        >
          <div className="hidden lg:block">
            <Globe />
            <Corner className="-right-0 top-0 border-r border-t" />
            <Corner className="-right-0 bottom-0 border-b border-r" />
          </div>
          <CodeWindow />
        </motion.div>
      </div>
    </section>
  );
}
