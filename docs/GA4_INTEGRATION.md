# Google Analytics (GA4) Integration Guide

**Measurement ID:** `G-17XTVR8E46`

## Setup Complete

### Files Created/Modified

1. ✅ `index.html` - Added gtag.js snippet
2. ✅ `src/lib/analytics.ts` - GA4 helpers (trackPageView, trackCTA, trackWhatsApp)
3. ✅ `src/hooks/useAnalytics.ts` - Auto-track page views on route changes
4. ✅ `src/pages/Index.tsx` - Integrated useAnalytics hook

---

## Usage Examples

### 1. Automatic Page View Tracking

- ✅ The `useAnalytics()` hook is already integrated in `Index.tsx`
- Every route change automatically sends a `page_view` event to GA4
- Includes: `page_path`, `page_title`, `locale`, `theme`

### 2. Track CTA (Call-To-Action) Clicks

Use in any button component:

```tsx
import { trackCTA } from "@/lib/analytics";
import { useLocation } from "react-router-dom";
import i18n from "@/lib/i18n";

export function MyButton() {
  const location = useLocation();

  const handleClick = () => {
    trackCTA(
      "get-started", // CTA label (e.g., 'get-started', 'learn-more')
      "hero", // Section where it appears (e.g., 'hero', 'services', 'footer')
      i18n.language, // Current locale
      location.pathname // Current page path
    );
    // ... rest of your button logic
  };

  return <button onClick={handleClick}>Começar Agora</button>;
}
```

### 3. Track WhatsApp Clicks

Use in WhatsApp link components:

```tsx
import { trackWhatsApp } from "@/lib/analytics";
import { useLocation } from "react-router-dom";
import i18n from "@/lib/i18n";

export function WhatsAppLink() {
  const location = useLocation();

  const handleWhatsAppClick = () => {
    trackWhatsApp(
      "hero", // Position where link appears
      i18n.language, // Current locale
      selectedCountry.iso2 || "BR", // Country code
      location.pathname // Current page path
    );
  };

  return (
    <a
      href={whatsappUrl}
      onClick={handleWhatsAppClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      Falar no WhatsApp
    </a>
  );
}
```

---

## GA4 Event Schema

### page_view Event

```text
{
  event: 'page_view',
  page_path: '/services',
  page_title: 'Serviços - Rafael Lopes',
  locale: 'pt-BR',
  theme: 'dark'
}
```

### cta_click Event

```text
{
  event: 'cta_click',
  label: 'get-started',
  section: 'hero',
  page_path: '/services',
  locale: 'pt-BR'
}
```

### whatsapp_click Event

```text
{
  event: 'whatsapp_click',
  position: 'hero',
  locale: 'pt-BR',
  country: 'BR',
  page_path: '/services'
}
```

---

## Privacy & Security

✅ **No sensitive data is sent to GA4:**

- ❌ Form content (name, email, message)
- ❌ Personal identifiers
- ✅ Only: locale, theme, country, event labels, page paths

---

## Future Enhancements

When implementing **Consent Mode v2** (GDPR/LGPD compliance):

1. Update `analytics.ts` to check consent status before firing events
2. Add consent banner component
3. Sync with Google Consent Mode API

Example:

```ts
export const trackPageView = (path, title, locale, theme) => {
  // Check if user has consented to analytics
  // const consentStatus = getConsentStatus(); // your implementation
  // if (consentStatus !== 'granted') return;

  gtag('event', 'page_view', { ... });
};
```

---

## Troubleshooting

### Events not showing in GA4?

1. Wait ~1 hour for events to appear in GA4 dashboard (real-time can be faster)
2. Check GA4 > DebugView to see events in real-time during testing
3. Verify `G-17XTVR8E46` Measurement ID is correct in `index.html`

### How to enable DebugView in GA4?

- Open browser Console
- Run: `gtag('config', 'G-17XTVR8E46', { debug_mode: true });`
- Go to GA4 Dashboard > DebugView tab

---

## Commit Message

```bash
git add index.html src/lib/analytics.ts src/hooks/useAnalytics.ts src/pages/Index.tsx
git commit -m "feat(analytics): install GA4 via gtag.js and add SPA page_view routing."
```
