import { useTranslation } from "react-i18next";
import { getPosts } from "../utils/content";
import { PostCard } from "../components/PostCard";
import { SeoHead } from "@/components/SeoHead";
import { Layout } from "../components/Layout";
import { useEffect, useState } from "react";

interface BlogIndexProps {
  locale: "en" | "es" | "pt";
}

export default function BlogIndex({ locale }: BlogIndexProps) {
  const { t } = useTranslation("blog");
  const [posts, setPosts] = useState<ReturnType<typeof getPosts>>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const loadedPosts = getPosts(locale);
      setPosts(loadedPosts);
    } catch (err) {
      console.error("Error loading posts:", err);
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  }, [locale]);

  return (
    <>
      <SeoHead
        locale={locale}
        title={t("index.title")}
        description={t("index.description")}
      />
      <Layout>
        <section className="container mx-auto px-6 py-32 max-w-7xl">
          <header className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-4">{t("index.heading")}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("index.subtitle")}
            </p>
          </header>

          {error ? (
            <div className="text-center py-16">
              <p className="text-lg text-destructive mb-4">
                {t("index.errorLoadingPosts")}
              </p>
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                {t("index.noPosts")}
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>
      </Layout>
    </>
  );
}
