import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { HiArrowRight, HiOutlineMapPin, HiOutlineSignal } from "react-icons/hi2";
import { fadeUp, socials } from "./Section";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(1000),
});

const fieldClass =
  "w-full rounded-sm border border-border bg-background px-3 py-2.5 text-[13px] outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

export function Contact() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setError("Please check your inputs.");
      return;
    }
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 4000);
  };

  const info = [
    ...socials.map((s) => ({ ...s, text: s.href.replace(/^mailto:|^https?:\/\//, "") })),
    // { Icon: HiOutlineMapPin, label: "location", href: undefined, text: t("contact.location") },
    // { Icon: HiOutlineSignal, label: "available", href: undefined, text: t("contact.available") },
  ];

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-14 md:py-16">
      <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr_1.15fr]">
        <motion.div {...fadeUp}>
          <h2 className="kicker">{t("contact.kicker")}</h2>
          {/* <p className="mt-6 text-xl font-medium tracking-tight">{t("contact.heading")}</p> */}
          {/* <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
            {t("contact.subtitle")}
          </p> */}
          <motion.ul {...fadeUp} className="space-y-3 lg:pt-11 ">
          {info.map(({ Icon, label, href, text }) => {
            const content = (
              <>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-sm border border-border-strong text-primary">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span className="text-[13px]">{text}</span>
              </>
            );
            return (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-foreground/90 transition-colors hover:text-primary"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-center gap-3 text-foreground/90">{content}</div>
                )}
              </li>
            );
          })}
        </motion.ul>
        </motion.div>

         {/* <motion.form
          className="p-4"
        ></motion.form> */}

        {/* <motion.ul {...fadeUp} className="space-y-3 lg:pt-11 ">
          {info.map(({ Icon, label, href, text }) => {
            const content = (
              <>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-sm border border-border-strong text-primary">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span className="text-[13px]">{text}</span>
              </>
            );
            return (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-foreground/90 transition-colors hover:text-primary"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-center gap-3 text-foreground/90">{content}</div>
                )}
              </li>
            );
          })}
        </motion.ul> */}

        {/* 
        <motion.form
          {...fadeUp}
          onSubmit={onSubmit}
          className="rounded-md border border-border-strong bg-card p-4 shadow-[0_0_40px_-20px_var(--primary)]"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input name="name" required maxLength={100} placeholder={t("contact.name")} aria-label={t("contact.name")} className={fieldClass} />
            <input name="email" type="email" required maxLength={255} placeholder={t("contact.email")} aria-label={t("contact.email")} className={fieldClass} />
          </div>
          <textarea
            name="message"
            required
            maxLength={1000}
            rows={5}
            placeholder={t("contact.message")}
            aria-label={t("contact.message")}
            className={`${fieldClass} mt-3 resize-none`}
          />

          {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
          {sent && <p className="mt-2 text-xs text-primary">{t("contact.sent")}</p>}

          <button
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-primary-foreground glow-primary transition-opacity hover:opacity-90"
          >
            {t("contact.send")}
            <HiArrowRight className="h-3.5 w-3.5" />
          </button>
        </motion.form> 
        */}
      </div>
    </section>
  );
}
