// src/hooks/useAnalytics.ts
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { sendPageView } from "@/lib/analytics";
import i18n from "@/lib/i18n";

/**
 * Hook to track page views on route changes.
 * Automatically sends page_view event to GA4 with language parameter
 * whenever the user navigates.
 *
 * Avoids double-hit on first load by using useEffect with location dependency.
 */
export function useAnalytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Only fires on real route changes (not on component mount)
    const page_path = pathname + search;
    const language = i18n.language || "pt";

    sendPageView(page_path, language);
  }, [pathname, search]);
}
