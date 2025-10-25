// src/lib/analytics.ts
// Google Analytics (GA4) via gtag.js
// Measurement ID: G-17XTVR8E46

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
