import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./locales/en";
import { pt } from "./locales/pt";
import { es } from "./locales/es";

export const LANGS = [
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "pt", label: "PT", flag: "🇧🇷" },
  { code: "es", label: "ES", flag: "🇪🇸" },
] as const;

export type LangCode = (typeof LANGS)[number]["code"];

if (!i18n.isInitialized) {
  const initial =
    (typeof window !== "undefined" &&
      (localStorage.getItem("lang") as LangCode | null)) ||
    "en";

  void i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
      es: { translation: es },
    },
    lng: initial,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    returnObjects: true,
  });
}

export default i18n;
