import { useState } from "react";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { HiCommandLine, HiCodeBracket, HiUserGroup, HiGlobeAmericas } from "react-icons/hi2";
import { fadeUp } from "./Section";

function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-[4/5] w-full max-w-[280px] p-2">
      {/* frame accents */}
      <span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-primary" />
      <span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-primary" />
      <span className="absolute -left-1 top-1/2 h-16 w-0.5 -translate-y-1/2 bg-primary glow-primary" />

      <div className="relative h-full w-full overflow-hidden rounded-sm border border-border bg-card">
        {failed ? (
          <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_50%_40%,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_70%)]">
            <span className="font-mono text-6xl font-extrabold text-foreground/90">
              AJ<span className="text-primary">_</span>
            </span>
          </div>
        ) : (
          <img
            src="/profile.jpg"
            alt="Alex Junior"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover grayscale"
          />
        )}
      </div>
    </div>
  );
}

export function About() {
  const { t } = useTranslation();
  const chips = t("about.chips", { returnObjects: true }) as string[];

  const stats = [
    { Icon: HiCommandLine, value: "13+", label: t("about.stats.years") },
    // { Icon: HiCodeBracket, value: "50+", label: t("about.stats.projects") },
    { Icon: HiUserGroup, value: "Lead", label: t("about.stats.lead") },
    // { Icon: HiGlobeAmericas, value: "100%", label: t("about.stats.remote") },
  ];

  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-14 md:py-16">
      <div className="container-page grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:gap-14">
        <motion.div {...fadeUp}>
          <h2 className="kicker mb-4">{t("about.kicker")}</h2>
          <Portrait />
        </motion.div>

        <motion.div {...fadeUp} className="md:pt-8">
          <p className="max-w-xl text-2xl font-medium leading-snug tracking-tight md:text-[28px]">
            <Trans i18nKey="about.title" components={{ hl: <span className="text-primary" /> }} />
          </p>

          <div className="mt-6 max-w-2xl space-y-3 text-[15px] leading-relaxed text-muted-foreground">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
            {/* <p>{t("about.p4")}</p> */}
          </div>

          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
            {chips.map((c) => (
              <span key={c}>
                <span className="text-primary">#</span>
                {c}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 lg:grid-cols-4">
            {stats.map(({ Icon, value, label }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm border border-border-strong text-foreground">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-mono text-2xl font-medium leading-none text-primary">
                    {value}
                  </div>
                  <div className="mt-1.5 font-mono text-[10px] uppercase leading-tight tracking-[0.06em] text-muted-foreground">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
