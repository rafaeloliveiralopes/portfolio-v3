// src/lib/analytics.ts
// Google Analytics (GA4) via gtag.js
// Measurement ID from environment variable (VITE_GA4_ID)

type GtagCommand = "config" | "event" | "set";
type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (
      command: GtagCommand,
      eventName: string,
      params?: GtagParams
    ) => void;
  }
}

/**
 * Initialize Google Analytics by loading gtag.js script and configuring GA4.
 * Should be called once during app bootstrap (e.g., main.tsx).
 * Reads GA4 Measurement ID from VITE_GA4_ID environment variable.
 *
 * In dev, you can leave VITE_GA4_ID empty to skip GA initialization.
 * In production, ensure VITE_GA4_ID is set in .env.production or hosting dashboard.
 */
export function initGA(): void {
  const GA_ID = import.meta.env.VITE_GA4_ID;

  // Skip initialization if no GA ID or not in browser environment
  if (!GA_ID || typeof window === "undefined") {
    return;
  }

  // Load gtag.js script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag as typeof window.gtag;

  // Configure GA4
  gtag("js", new Date());
  gtag("config", GA_ID);
}

/**
 * Small guard to avoid errors in dev without GA.
 * Calls gtag if available, otherwise does nothing.
 */
const gtag = (command: GtagCommand, eventName: string, params?: GtagParams) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(command, eventName, params);
  }
};

/**
 * Send page_view event with language parameter.
 * Called automatically by useAnalytics hook on route changes.
 *
 * @param page_path - Current page path (e.g., '/pt' or '/en/contact')
 * @param language - User's current language (e.g., 'pt', 'en', 'es')
 */
export const sendPageView = (page_path: string, language: string) => {
  gtag("event", "page_view", { page_path, language });
};

/**
 * Send custom event with optional language parameter.
 * Use for tracking CTA clicks, form submissions, and other user interactions.
 *
 * @param name - Event name (e.g., 'cta_click', 'contact_submit')
 * @param params - Event parameters (automatically includes language if not provided)
 *
 * @example
 * sendEvent("cta_click", { label: "hero_primary", language: i18n.language });
 * sendEvent("contact_submit", { method: "email", language: i18n.language });
 */
export const sendEvent = (
  name: string,
  params: GtagParams & { language?: string } = {}
) => {
  gtag("event", name, { ...params });
};

/**
 * Legacy helper for CTA tracking.
 * Prefer using sendEvent directly for better flexibility.
 *
 * @deprecated Use sendEvent("cta_click", { label, section, language }) instead
 */
export function trackCTA(
  label: string,
  section: string,
  language: string,
  path: string
) {
  sendEvent("cta_click", { label, section, page_path: path, language });
}

/**
 * Legacy helper for WhatsApp tracking.
 * Prefer using sendEvent directly for better flexibility.
 *
 * @deprecated Use sendEvent("whatsapp_click", { position, language, country }) instead
 */
export function trackWhatsApp(
  position: string,
  language: string,
  country: string,
  path: string
) {
  sendEvent("whatsapp_click", { position, language, country, page_path: path });
}
