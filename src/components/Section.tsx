import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";

export const socials = [
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/alexjuniortech" },
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/alexjuniortech" },
  { Icon: HiOutlineEnvelope, label: "Email", href: "mailto:alexjunior.web@gmail.com" },
  // { Icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/0" },
];

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.45, ease: "easeOut" },
} as const;

type SectionProps = {
  id: string;
  kicker: string;
  title?: ReactNode;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
};

export function Section({ id, kicker, title, subtitle, action, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border py-14 md:py-16">
      <div className="container-page">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="kicker">{kicker}</h2>
            {title && (
              <p className="mt-3 text-xl font-medium tracking-tight text-foreground md:text-2xl">
                {title}
              </p>
            )}
            {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
          </div>
          {action}
        </div>
        {children}
      </div>
    </section>
  );
}
