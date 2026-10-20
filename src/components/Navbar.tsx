import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUpRight, HiSun, HiMoon, HiBars2, HiXMark } from "react-icons/hi2";
import { LANGS, type LangCode } from "@/i18n";
import { useTheme } from "@/hooks/useTheme";

const links = [
  { id: "top", key: "home" },
  { id: "about", key: "about" },
  { id: "skills", key: "skills" },
  // { id: "projects", key: "projects" },
  { id: "experience", key: "experience" },
  { id: "leadership", key: "leadership" },
  { id: "contact", key: "contact" },
] as const;

function useActiveSection() {
  const [active, setActive] = useState<string>("top");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggle } = useTheme();
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setLang = (code: LangCode) => {
    void i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-6">
        <a href="#top" className="font-mono text-xl font-bold tracking-tight text-primary">
          AJ<span className="animate-pulse">_</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.key}>
                <a
                  href={`#${l.id}`}
                  className={`relative font-mono text-[11px] uppercase tracking-[0.08em] transition-colors ${
                    isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {t(`nav.${l.key}`)}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-1/2 h-px w-4 -translate-x-1/2 bg-primary"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden items-center font-mono text-[11px] sm:flex">
            {LANGS.map((l, i) => (
              <span key={l.code} className="flex items-center">
                {i > 0 && <span className="px-1 text-muted-foreground/50">/</span>}
                <button
                  onClick={() => setLang(l.code)}
                  className={`transition-colors ${
                    i18n.language === l.code
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </button>
              </span>
            ))}
          </div>

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            {theme === "dark" ? <HiSun className="h-4 w-4" /> : <HiMoon className="h-4 w-4" />}
          </button>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-sm border border-primary/60 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-foreground transition-colors hover:bg-primary hover:text-primary-foreground md:inline-flex"
          >
            {t("nav.talk")}
            <HiArrowUpRight className="h-3 w-3" />
          </a>

          <button
            className="p-1.5 text-foreground lg:hidden"
            aria-label="Menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <HiXMark className="h-5 w-5" /> : <HiBars2 className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="container-page flex flex-col py-3">
              {links.map((l) => (
                <a
                  key={l.key}
                  href={`#${l.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2.5 font-mono text-xs uppercase tracking-[0.08em] ${
                    active === l.id ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {t(`nav.${l.key}`)}
                </a>
              ))}
              <div className="mt-2 flex gap-3 border-t border-border pt-3 font-mono text-xs sm:hidden">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={i18n.language === l.code ? "text-primary" : "text-muted-foreground"}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
