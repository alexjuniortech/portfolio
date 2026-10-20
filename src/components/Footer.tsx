import { useTranslation } from "react-i18next";
import { HiArrowUp } from "react-icons/hi2";
import { socials } from "./Section";

const links = ["about", "skills", "experience", "leadership", "contact"] as const;

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-card/40 py-6">
      <div className="container-page flex flex-col items-center gap-5 md:flex-row md:justify-between">
        <div className="flex items-center gap-4">
          <span className="font-mono text-lg font-bold text-primary">AJ_</span>
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Alex Junior. {t("footer.rights")}
          </span>
        </div>

        <ul className="flex flex-wrap justify-center gap-5">
          {links.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(`nav.${key}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {socials.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 grid h-8 w-8 place-items-center rounded-sm border border-primary/60 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <HiArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
