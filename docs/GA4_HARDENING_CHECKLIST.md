# GA4 Hardening Checklist & Next Steps

**Status:** GA4 Base Installation ✅ Complete  
**Measurement ID:** `G-17XTVR8E46`  
**Priority:** High → Medium

---

## 📋 Next Steps Checklist

### 1. Mark Conversions in GA4 (UI)

**Status:** ⏳ Pending (must be done in GA4 Dashboard)

Steps in GA4:

- Navigate to **Admin → Conversions → New**

- Create 2 events as conversions:
  - `contact_form_submit` (when form is submitted)
  - `whatsapp_click` (when user clicks WhatsApp)

**Benefit:** Track conversion funnels and ROI.

---

### 2. Filter Internal Traffic (Your IP)

**Status:** ⏳ Pending (must be done in GA4 Dashboard)

Steps in GA4:

1. **Admin → Data Streams → Configure tag settings**

2. Click **Define Internal Traffic**
3. Create a filter with your IP (ex: `177.XXX.XXX.XXX`)
4. **Admin → Data Settings → Data Filters → Internal**
5. Mark as **Active**

**Benefit:** Prevents your own traffic (testing) from skewing data.

---

### 3. Exclude Unwanted Referrals (Referral Exclusion)

**Status:** ⏳ Pending (must be done in GA4 Dashboard)

Steps in GA4:

1. **Admin → Data Streams → More tagging settings**

2. **List unwanted referrals**
3. Add domains that "break" attribution (ex: your payment processor, URL shorteners, etc.)

**Benefit:** Keep traffic source data clean.

**For WhatsApp:** Use UTMs in your WhatsApp links for better tracking.

---

### 4. Implement CTA & WhatsApp Tracking in Code

**Status:** ⏳ Pending in Code

**Files involved:**

- `src/components/HeroSection.tsx` - "Get Started" button (CTA)
- `src/components/Footer.tsx` - WhatsApp links
- `src/components/ContactSection.tsx` - WhatsApp button in form

**Example for Hero CTA:**

```tsx
// src/components/HeroSection.tsx
import { trackCTA } from "@/lib/analytics";
import { useLocation } from "react-router-dom";
import i18n from "@/lib/i18n";

const handleCTAClick = () => {
  trackCTA(
    "get-started", // label
    "hero", // section
    i18n.language, // locale
    location.pathname // path
  );
  scrollToSection("contact");
};
```

**Example for WhatsApp Link:**

```tsx
// src/components/Footer.tsx
import { trackWhatsApp } from "@/lib/analytics";
import { useLocation } from "react-router-dom";
import i18n from "@/lib/i18n";

const handleWhatsAppClick = () => {
  trackWhatsApp(
    "footer", // position
    i18n.language, // locale
    selectedCountry?.iso2 || "BR", // country
    location.pathname // path
  );
};

// In the link:
<a
  href={whatsappUrl}
  onClick={handleWhatsAppClick}
  target="_blank"
  rel="noopener noreferrer"
>
  Talk on WhatsApp
</a>;
```

**Suggested commit:**

```bash
git add src/components/HeroSection.tsx src/components/Footer.tsx src/components/ContactSection.tsx
git commit -m "feat(analytics): track cta and whatsapp clicks with locale and country."
```

---

### 5. Consent Mode v2 (LGPD/GDPR)

**Status:** ⏳ Pending (will be implemented later)

When you add a consent banner:

1. Install library (ex: `@orejime/javascript` or `klaro`)
2. The banner will control if events are sent to GA4
3. We'll adapt `src/lib/analytics.ts` to respect consent

**Example of how it will look:**

```tsx
// src/lib/analytics.ts (future)
export const trackPageView = (path, title, locale, theme) => {
  const hasConsent = window.consentManager?.hasConsent('analytics');
  if (!hasConsent) return; // Respects user consent

  gtag('event', 'page_view', { ... });
};
```

---

### 6. Export to BigQuery

**Status:** ⏳ Pending (optional, for advanced analytics)

Steps in GA4:

1. **Admin → BigQuery Links → Link**

2. Authorize your Google Cloud account
3. GA4 will export real-time data to BigQuery

**Benefit:** Advanced dashboards, custom analysis, integrated Looker Studio.

---

### 7. Bot & Spam Filtering

**Status:** ✅ Already covered

With the internal filter active (step 2), GA4 already filters bots automatically.

---

### 8. Data Retention & Google Signals

**Status:** ⏳ Pending (recommended configuration)

Steps in GA4:

1. **Admin → Data Settings → Data Retention**
2. Set to **14 months** (maximum before anonymizing)
3. **Google Signals:** Enable if you need cross-device reports (respecting consent)

---

## 📚 Commit Roadmap

```bash
# 1. Implement tracking in components
git commit -m "feat(analytics): track cta and whatsapp clicks with locale and country."

# 2. (Optional) UTM Guide for Marketing
git commit -m "docs(marketing): add UTM convention guide for cta and whatsapp links."

# 3. (Future) Consent Mode v2
git commit -m "feat(analytics): implement consent mode v2 for LGPD compliance."
```

---

## 🎯 Quick QA (5 min)

### Test Tracking is Working

1. **Enable DebugView in GA4:**

   - Open your site
   - Browser console: `gtag('config', 'G-17XTVR8E46', { debug_mode: true })`

2. **Navigate and Check Events:**

   - Open 2-3 different routes
   - Click "Get Started" and "WhatsApp" buttons
   - Go to GA4 Dashboard → **DebugView**
   - See events: `page_view`, `cta_click`, `whatsapp_click` in real-time

3. **Submit Form:**

   - Fill and submit the form (without sensitive data)
   - Verify that **name, email, message do NOT appear** in GA4
   - Only status, country, and route should appear

4. **Check UTMs (optional):**
   - If you share link with `?utm_source=email&utm_medium=newsletter`
   - GA4 should track as "Email / Newsletter"

---

## 🚀 Immediate Next Actions

### Today (High Priority)

- [ ] Configure conversions in GA4 (steps 1 above)
- [ ] Filter internal IP in GA4 (step 2)
- [ ] Run quick QA (DebugView)

### This Week (Medium Priority)

- [ ] Implement `trackCTA` in buttons
- [ ] Implement `trackWhatsApp` in links
- [ ] Commit with event tracking

### Next Weeks

- [ ] Create UTM guide for marketing
- [ ] Implement Consent Mode v2 (LGPD)
- [ ] Connect BigQuery (if needed for advanced analytics)

---

## 📖 Complementary Documentation

- **Full Guide:** See `docs/GA4_INTEGRATION.md`
- **Setup Summary:** See `GA4_SETUP_COMPLETE.md`
- **Code Examples:** See the suggested component files above

---

## 💡 Quick Tips

1. **Standard UTM for your links:**

   - WhatsApp: `?utm_source=whatsapp&utm_medium=chat&utm_campaign=contact`
   - CTA: `?utm_source=website&utm_medium=cta&utm_campaign=get-started`

2. **Test Consent Mode later:**

   - User denies analytics → no events sent to GA4
   - User accepts → normal events

3. **Keep privacy:**
   - ✅ Track: pages, buttons, locales, country
   - ❌ Never track: emails, names, message content

---

**Branch:** `analytics`  
**Status:** Ready for production deployment ✅  
**Next step:** Execute QA and configure conversions in GA4
