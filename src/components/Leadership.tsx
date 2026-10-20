import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  HiOutlineUsers, HiOutlineAcademicCap, HiOutlineCodeBracket, HiOutlineSquares2X2,
  HiOutlineCalendarDays, HiOutlineArrowPath, HiOutlineChartBar, HiOutlineShieldCheck,
} from "react-icons/hi2";
import { Section, fadeUp } from "./Section";

const items = [
  { key: "lead", Icon: HiOutlineUsers },
  // { key: "mentor", Icon: HiOutlineAcademicCap },
  { key: "review", Icon: HiOutlineCodeBracket },
  { key: "arch", Icon: HiOutlineSquares2X2 },
  // { key: "planning", Icon: HiOutlineCalendarDays },
  { key: "agile", Icon: HiOutlineArrowPath },
  { key: "management", Icon: HiOutlineChartBar },
  { key: "standards", Icon: HiOutlineShieldCheck },
] as const;

export function Leadership() {
  const { t } = useTranslation();

  return (
    <Section
      id="leadership"
      kicker={t("leadership.kicker")}
      title={t("leadership.title")}
      subtitle={t("leadership.subtitle")}
    >
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4" style={{ background: "transparent" }}>
        {items.map((it, i) => (
          <motion.div
            key={it.key}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: (i % 4) * 0.04 }}
            className="bg-card p-5 transition-colors hover:bg-accent"
          >
            <div className="flex items-center justify-between">
              <it.Icon className="h-5 w-5 text-primary" />
              <span className="font-mono text-[10px] text-code-dim">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-4 text-sm font-medium">{t(`leadership.items.${it.key}.title`)}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
              {t(`leadership.items.${it.key}.desc`)}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
