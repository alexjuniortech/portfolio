import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Section } from "./Section";

const stack = [
  { name: "Node.js", level: 98 },
  { name: "Docker", level: 96 },
  { name: "PostgreSQL", level: 93 },
  { name: "Golang", level: 92 },
  { name: "Kubernetes", level: 88 },
  { name: "AWS", level: 87 },
  { name: "Python", level: 78 },
];

export function StackChart() {
  const { t } = useTranslation();

  return (
    <Section id="stack" kicker={t("stack.kicker")} title={t("stack.title")} subtitle={t("stack.subtitle")}>
      <div className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2">
        {stack.map((s, i) => (
          <div key={s.name}>
            <div className="mb-2 flex items-baseline justify-between font-mono text-xs">
              <span className="text-foreground">{s.name}</span>
              <span className="text-muted-foreground">{s.level}%</span>
            </div>
            <div className="h-1 overflow-hidden bg-border">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: i * 0.05, ease: "easeOut" }}
                className="h-full bg-primary"
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
