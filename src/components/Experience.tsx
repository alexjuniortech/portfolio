import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { Section, fadeUp } from "./Section";

type Item = {
  company: string;
  role: string;
  period: string;
  description: string[];
  stack: string[];
};

export function Experience() {
  const { t } = useTranslation();
  const items = t("experience.items", { returnObjects: true }) as Item[];

  return (
    <Section id="experience" kicker={t("experience.kicker")} title={t("experience.title")}>
      <div className="relative">
        {/* timeline rail */}
        <div className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-[136px]" />

        {items.map((item, i) => (
          <motion.div
            key={item.company + i}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.04 }}
            className="relative grid grid-cols-1 gap-3 pb-10 pl-8 last:pb-0 md:grid-cols-[120px_1fr_1.4fr] md:gap-x-10 md:pl-0"
          >
            <span className="absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border border-primary bg-background md:left-[129px]">
              <span className="h-[7px] w-[7px] rounded-full bg-primary" />
            </span>

            <div className="font-mono text-xs text-primary md:pt-1 md:text-right">{item.period}</div>

            <div className="flex items-start gap-3 md:pl-6">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-border-strong bg-card text-foreground">
                <HiOutlineBriefcase className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-[15px] font-medium leading-snug">{item.role}</h3>
                <div className="mt-0.5 text-[13px] text-muted-foreground">{item.company}</div>
              </div>
            </div>

            <div>
              <ul className="space-y-2">
                {item.description.map((paragraph, pi) => (
                  <li
                    key={pi}
                    className="break-words text-[13px] leading-relaxed text-muted-foreground"
                  >
                    {item.description.length > 1 && <span className="mr-2 text-primary">›</span>}
                    {paragraph}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-sm border border-border px-1.5 py-0.5 font-mono text-[10px] text-foreground/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
