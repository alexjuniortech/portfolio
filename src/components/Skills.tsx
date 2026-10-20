import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";
import {
  HiOutlineServerStack,
  HiOutlineCircleStack,
  HiOutlineCloud,
  HiOutlineCube,
  HiOutlineCog6Tooth,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { Section, fadeUp } from "./Section";

const groups: { key: string; Icon: IconType; items: string[] }[] = [
  { 
    key: "backend", 
    Icon: HiOutlineServerStack, 
    items: ["Node.js", "PHP", "Golang", "Python"] 
  },
  { 
    key: "databases", 
    Icon: HiOutlineCircleStack, 
    items: ["PostgreSQL", "MySQL", "Redis", "MongoDB"] 
  },
  { 
    key: "cloud", 
    Icon: HiOutlineCloud, 
    items: ["AWS", "Google Cloud", "Azure"] 
  },
  {
    key: "architecture",
    Icon: HiOutlineCube,
    items: [
      "Clean Architecture", "DDD", "SOLID", "Clean Code", "Design Patterns",
      "CQRS", "Event Driven", "REST", "GraphQL", "Microservices",
    ],
  },
  {
    key: "devops",
    Icon: HiOutlineCog6Tooth,
    items: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Terraform", "Linux", "Nginx"],
  },
  {
    key: "observability",
    Icon: HiOutlineChartBar,
    items: ["Prometheus", "Grafana", "Loki", "OpenTelemetry"],
  },
];

export function Skills() {
  const { t } = useTranslation();

  return (
    <Section id="skills" kicker={t("skills.kicker")} title={t("skills.title")} subtitle={t("skills.subtitle")}>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ key, Icon, items }, i) => (
          <motion.div
            key={key}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: (i % 3) * 0.05 }}
            className="group rounded-md border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <Icon className="h-7 w-7 text-primary" strokeWidth={1.25} />
            <h3 className="mt-4 text-sm font-medium">{t(`skills.groups.${key}`)}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
              {items.join(" · ")}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
