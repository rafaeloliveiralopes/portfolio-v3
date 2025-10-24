// src/hooks/useAnalytics.ts
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";
import i18n from "@/lib/i18n";

/**
 * Hook to track page views on route changes.
 * Automatically sends page_view event to GA4 whenever the user navigates.
 */
export function useAnalytics() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;
    const title = document.title || "page";
    const locale = i18n.language || navigator.language || "pt-BR";
    const theme = document.documentElement
      .getAttribute("class")
      ?.includes("dark")
      ? "dark"
      : "light";

    trackPageView(path, title, locale, theme);
  }, [location]);
}
