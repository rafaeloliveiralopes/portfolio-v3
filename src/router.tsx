import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import BlogIndex from "@/blog/pages/BlogIndex";
import BlogPost from "@/blog/pages/BlogPost";

// Supported locales
const SUPPORTED_LOCALES = ["pt", "en", "es"];
const DEFAULT_LOCALE = "pt";

/**
 * Gets the preferred locale from localStorage, query params, or defaults to PT
 */
const getPreferredLocale = (): string => {
  // Check localStorage first
  const stored = localStorage.getItem("preferredLocale");
  if (stored && SUPPORTED_LOCALES.includes(stored)) {
    return stored;
  }

  // Check query string
  const params = new URLSearchParams(window.location.search);
  const qsLang = params.get("lang");
  if (qsLang && SUPPORTED_LOCALES.includes(qsLang)) {
    return qsLang;
  }

  // Default to PT
  return DEFAULT_LOCALE;
};

/**
 * Route wrapper that syncs locale with i18n and HTML lang attribute
 */
const LocaleRoute = ({
  locale,
  element,
}: {
  locale: string;
  element: React.ReactNode;
}) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Sync locale with i18n
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }

    // Sync HTML lang attribute
    document.documentElement.setAttribute("lang", locale);

    // Persist locale preference
    localStorage.setItem("preferredLocale", locale);
  }, [locale, i18n]);

  return <>{element}</>;
};

export const AppRouter = () => {
  const preferredLocale = getPreferredLocale();

  return (
    <Router>
      <Routes>
        {/* Root redirect to preferred locale */}
        <Route
          path="/"
          element={<Navigate to={`/${preferredLocale}`} replace />}
        />

        {/* Locale-prefixed routes */}
        {SUPPORTED_LOCALES.map((locale) => (
          <Route key={locale} path={`/${locale}`}>
            <Route
              index
              element={
                <LocaleRoute
                  locale={locale}
                  element={<Index locale={locale} />}
                />
              }
            />
            <Route
              path="blog"
              element={<LocaleRoute locale={locale} element={<BlogIndex />} />}
            />
            <Route
              path="blog/:slug"
              element={<LocaleRoute locale={locale} element={<BlogPost />} />}
            />
          </Route>
        ))}

        {/* Catch-all 404 (includes invalid locales) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
