import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HiArrowUpRight, HiArrowRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
import { Section, fadeUp } from "./Section";

type Project = { name: string; description: string; stack: string[] };

// Deterministic sparkline per project so each preview looks distinct
function previewPath(seed: number) {
  const points = Array.from({ length: 9 }, (_, i) => {
    const y = 55 + Math.sin(i * 0.9 + seed * 1.7) * 18 + Math.cos(i * 1.6 + seed) * 10;
    return [i * 25, Math.round(y)] as const;
  });
  const line = points.map(([x, y], i) => `${i ? "L" : "M"}${x},${y}`).join(" ");
  return { line, area: `${line} L200,100 L0,100 Z` };
}

function Preview({ name, stack, index }: { name: string; stack: string[]; index: number }) {
  const { line, area } = previewPath(index);

  return (
    <div className="relative h-40 overflow-hidden border-b border-border bg-background">
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
        <span className="ml-2 truncate font-mono text-[9px] text-muted-foreground">
          ~/{name.toLowerCase().replace(/\s+/g, "-")}
        </span>
      </div>
      <div className="grid h-[calc(100%-29px)] grid-cols-[64px_1fr]">
        <div className="space-y-2 border-r border-border p-3">
          {[70, 50, 60, 40].map((w, i) => (
            <div key={i} className="h-1 rounded-full bg-muted-foreground/20" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="relative p-3">
          <div className="font-mono text-[10px] text-muted-foreground">{stack.slice(0, 2).join(" + ")}</div>
          <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-3/4 w-full">
            <defs>
              <linearGradient id={`fill-${index}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={area} fill={`url(#fill-${index})`} />
            <path d={line} fill="none" stroke="var(--primary)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const { t } = useTranslation();
  const items = t("projects.items", { returnObjects: true }) as Project[];

  return (
    <Section
      id="projects"
      kicker={t("projects.kicker")}
      title={t("projects.title")}
      subtitle={t("projects.subtitle")}
      action={
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-primary"
        >
          {t("projects.viewAll")}
          <HiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      }
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <motion.article
            key={p.name}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: (i % 3) * 0.05 }}
            className="group relative flex flex-col overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-primary/40"
          >
            {i < 3 && (
              <span className="absolute right-2.5 top-9 z-10 rounded-sm border border-primary/50 bg-background/80 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em] text-primary">
                Featured
              </span>
            )}
            <Preview name={p.name} stack={p.stack} index={i} />

            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-[15px] font-medium">{p.name}</h3>
              <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-4 flex items-end justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-sm border border-border bg-background px-1.5 py-0.5 font-mono text-[10px] text-foreground/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex shrink-0 gap-1.5">
                  <a
                    href="#"
                    aria-label={t("projects.code")}
                    className="grid h-8 w-8 place-items-center rounded-sm border border-border-strong text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <FaGithub className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="#"
                    aria-label={t("projects.demo")}
                    className="grid h-8 w-8 place-items-center rounded-sm border border-border-strong text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <HiArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
