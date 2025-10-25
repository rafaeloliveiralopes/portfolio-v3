import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SeoHeadProps {
  /** Current locale (pt, en, or es) */
  locale: string;
  /** Optional custom title (falls back to seo.title from i18n) */
  title?: string;
  /** Optional custom description (falls back to seo.description from i18n) */
  description?: string;
}

/**
 * SEO component with absolute canonical URLs and hreflang alternates.
 * Implements international SEO best practices per copilot-instructions.md
 *
 * @example
 * <SeoHead locale="pt" />
 * <SeoHead locale="en" title="Custom Title" description="Custom description" />
 */
export const SeoHead = ({ locale, title, description }: SeoHeadProps) => {
  const { t } = useTranslation(["seo"]);
  const baseUrl = import.meta.env.VITE_BASE_URL || "https://rafaellopes.dev";

  // Use custom title/description or fall back to i18n
  const finalTitle = title || t("seo.title");
  const finalDescription = description || t("seo.description");

  // Generate absolute URLs for hreflang and canonical
  const alternates = [
    { lang: "pt", url: `${baseUrl}/pt` },
    { lang: "en", url: `${baseUrl}/en` },
    { lang: "es", url: `${baseUrl}/es` },
  ];

  // Canonical points to current locale
  const canonicalUrl = `${baseUrl}/${locale}`;

  return (
    <Helmet>
      {/* Primary meta tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />

      {/* Canonical URL (absolute) */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang alternates for each supported language */}
      {alternates.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}

      {/* x-default hreflang points to Portuguese (default locale) */}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/pt`} />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta
        property="og:locale"
        content={
          locale === "pt" ? "pt_BR" : locale === "es" ? "es_ES" : "en_US"
        }
      />
      {alternates
        .filter((alt) => alt.lang !== locale)
        .map(({ lang, url }) => (
          <meta
            key={lang}
            property="og:locale:alternate"
            content={
              lang === "pt" ? "pt_BR" : lang === "es" ? "es_ES" : "en_US"
            }
          />
        ))}

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
    </Helmet>
  );
};
