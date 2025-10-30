import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getPosts } from "../utils/content";
import { PostCard } from "../components/PostCard";
import { SeoHead } from "@/components/SeoHead";

export default function BlogIndex() {
  const { lng } = useParams<{ lng: "en" | "es" | "pt" }>();
  const { t } = useTranslation("blog");
  const posts = getPosts(lng ?? "pt");

  return (
    <>
      <SeoHead
        locale={lng ?? "pt"}
        title={t("index.title")}
        description={t("index.description")}
      />
      <section className="container mx-auto px-6 py-16 max-w-7xl">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">{t("index.heading")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("index.subtitle")}
          </p>
        </header>

        {posts.length === 0 ? (
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
    </>
  );
}
