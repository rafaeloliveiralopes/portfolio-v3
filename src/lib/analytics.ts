// src/lib/analytics.ts
// Google Analytics (GA4) via gtag.js
// Measurement ID: G-17XTVR8E46

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (
      command: string,
      eventName: string,
      eventData?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Call gtag function. If gtag is not available, push to dataLayer.
 */
export const gtag = (
  command: string,
  eventName: string,
  eventData?: Record<string, unknown>
) => {
  if (typeof window !== "undefined") {
    if (window.gtag) return window.gtag(command, eventName, eventData);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push([command, eventName, eventData || {}]);
  }
};

/**
 * Track page view event in GA4.
 * For SPA, call this manually after route changes.
 *
 * @param path - Current page path (e.g., location.pathname)
 * @param title - Page title (e.g., document.title)
 * @param locale - User's locale (e.g., 'pt-BR', 'en', 'es')
 * @param theme - Current theme ('light' or 'dark')
 */
export function trackPageView(
  path: string,
  title: string,
  locale: string,
  theme?: string
) {
  gtag("event", "page_view", {
    page_path: path,
    page_title: title,
    locale,
    theme: theme || "light",
  });
}

/**
 * Track CTA (Call-To-Action) click event.
 *
 * @param label - CTA button label/identifier (e.g., 'get-started', 'contact-me')
 * @param section - Section where CTA appears (e.g., 'hero', 'services', 'footer')
 * @param locale - User's locale
 * @param path - Current page path
 */
export function trackCTA(
  label: string,
  section: string,
  locale: string,
  path: string
) {
  gtag("event", "cta_click", {
    label,
    section,
    page_path: path,
    locale,
  });
}

/**
 * Track WhatsApp click event.
 *
 * @param position - Where the link was clicked (e.g., 'hero', 'services', 'footer')
 * @param locale - User's locale
 * @param country - Country ISO2 code (e.g., 'BR', 'US', 'ES')
 * @param path - Current page path
 */
export function trackWhatsApp(
  position: string,
  locale: string,
  country: string,
  path: string
) {
  gtag("event", "whatsapp_click", {
    position,
    locale,
    country,
    page_path: path,
  });
}
