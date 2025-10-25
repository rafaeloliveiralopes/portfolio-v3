import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

// Supported languages and namespaces
const supportedLanguages = ["pt", "en", "es"];
const namespaces = ["common", "home", "services", "projects", "contact", "seo"];
const defaultNamespace = "common";
const defaultLanguage = "pt";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Languages & namespaces
    supportedLngs: supportedLanguages,
    fallbackLng: defaultLanguage,
    ns: namespaces,
    defaultNS: defaultNamespace,

    // HTTP Backend configuration for lazy loading
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },

    // Detection order: localStorage > path > querystring > navigator
    detection: {
      order: ["localStorage", "path", "querystring", "navigator"],
      caches: ["localStorage"],
    },

    // Interpolation (variable replacement)
    interpolation: {
      escapeValue: false,
    },

    // Partial bundled languages (don't require all namespaces on load)
    partialBundledLanguages: true,

    // React specific - enable Suspense for proper loading
    react: {
      useSuspense: true,
    },
  });

export default i18n;
