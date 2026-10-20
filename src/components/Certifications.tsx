import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaAws, FaDocker, FaGoogle } from "react-icons/fa6";
import { SiKubernetes } from "react-icons/si";
import type { IconType } from "react-icons";
import { Section, fadeUp } from "./Section";

const certs: { key: "aws" | "cka" | "gcp" | "docker"; Icon: IconType }[] = [
  { key: "aws", Icon: FaAws },
  { key: "cka", Icon: SiKubernetes },
  { key: "gcp", Icon: FaGoogle },
  { key: "docker", Icon: FaDocker },
];

export function Certifications() {
  const { t } = useTranslation();

  return (
    <Section id="certifications" kicker={t("certifications.kicker")} title={t("certifications.title")}>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {certs.map((c, i) => (
          <motion.div
            key={c.key}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.04 }}
            className="flex items-center gap-4 rounded-md border border-dashed border-border-strong bg-card p-4"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-border text-foreground/80">
              <c.Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="text-[13px] font-medium leading-snug">{t(`certifications.items.${c.key}`)}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] text-primary/80">
                {t("certifications.planned")}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
