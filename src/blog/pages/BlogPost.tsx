import { useParams, Navigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { getPostBySlug } from "../utils/content";
import { MdxProvider } from "../components/MdxProvider";
import { Layout } from "../components/Layout";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

export default function BlogPost() {
  const { lng, slug } = useParams<{ lng: "en" | "es" | "pt"; slug: string }>();
  const { t } = useTranslation("blog");
  const post = getPostBySlug(lng ?? "pt", slug ?? "");

  if (!post) {
    return <Navigate to={`/${lng}/blog`} replace />;
  }

  const baseUrl = import.meta.env.VITE_BASE_URL || "https://rafaellopes.dev";
  const canonicalUrl = post.canonical
    ? `${baseUrl}${post.canonical}`
    : `${baseUrl}${post.url}`;

  const formattedDate = new Date(post.date).toLocaleDateString(post.lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const updatedDate = post.updated
    ? new Date(post.updated).toLocaleDateString(post.lang, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  // Generate hreflang alternates from translations field
  const alternates = Object.entries(post.translations || {})
    .filter(([, slug]) => slug)
    .map(([lang, slug]) => ({
      lang,
      url: `${baseUrl}/${lang}/blog/${slug}`,
    }));

  const PostComponent = post.component;

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Hreflang alternates */}
        {alternates.map(({ lang, url }) => (
          <link key={lang} rel="alternate" hrefLang={lang} href={url} />
        ))}

        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        {post.updated && (
          <meta property="article:modified_time" content={post.updated} />
        )}
        {post.tags?.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        {post.cover && <meta property="og:image" content={post.cover} />}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        {post.cover && <meta name="twitter:image" content={post.cover} />}

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.updated || post.date,
            inLanguage: post.lang,
            image: post.cover,
            author: {
              "@type": "Person",
              name: "Rafael Lopes",
              url: baseUrl,
            },
            publisher: {
              "@type": "Person",
              name: "Rafael Lopes",
              url: baseUrl,
            },
          })}
        </script>
      </Helmet>

      <Layout>
        <article className="container mx-auto px-6 py-32 max-w-4xl">
          {/* Cover image */}
          {post.cover && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={post.cover}
                alt={post.title}
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          )}

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{formattedDate}</time>
              </div>
              {post.readingTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>
                    {post.readingTime} {t("post.minRead")}
                  </span>
                </div>
              )}
              {updatedDate && (
                <div className="text-sm">
                  {t("post.updated")}: {updatedDate}
                </div>
              )}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          {/* Content */}
          <div className="max-w-none bg-zinc-800 lg:p-6 rounded-lg">
            <Suspense
              fallback={<div className="animate-pulse">Loading content...</div>}
            >
              <MdxProvider>
                <PostComponent />
              </MdxProvider>
            </Suspense>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-primary border border-border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{t("author.about")}</h3>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img
                src="/rafael-lopes-ai-engineer.jpg"
                alt={t("author.name")}
                className="w-24 h-24 rounded-full object-cover border-2 border-secondary shadow-lg"
                loading="lazy"
              />
              <div className="flex-1">
                <p className="text-zinc-300 leading-relaxed">
                  {t("author.bio")}
                </p>
              </div>
            </div>
          </div>

          {/* Language alternates */}
          {alternates.length > 0 && (
            <footer className="mt-16 pt-8 border-t">
              <p className="text-sm text-muted-foreground mb-4">
                {t("post.availableIn")}:
              </p>
              <div className="flex flex-wrap gap-2">
                {alternates.map(({ lang, url }) => (
                  <Link key={lang} to={url.replace(baseUrl, "")}>
                    <Button variant="outline" size="sm">
                      {lang === "en"
                        ? "English"
                        : lang === "es"
                        ? "Español"
                        : "Português"}
                    </Button>
                  </Link>
                ))}
              </div>
            </footer>
          )}
        </article>
      </Layout>
    </>
  );
}
