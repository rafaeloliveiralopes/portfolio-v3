import matter from "gray-matter";
import { Frontmatter, type FrontmatterT } from "./schema";

// Vite: imports content and React module from MDX
const files = import.meta.glob("../posts/**/*.mdx", { eager: true, as: "raw" });
const modules = import.meta.glob("../posts/**/*.mdx", { eager: true });

type MdxModule = {
  default: React.ComponentType<Record<string, unknown>>;
};

export type Post = FrontmatterT & {
  id: string;
  url: string; // /:lng/blog/:slug
  component: React.ComponentType<Record<string, unknown>>;
};

function parseFront(source: string) {
  const { data } = matter(source);
  return Frontmatter.parse(data);
}

function langFromPath(p: string): "en" | "es" | "pt" {
  if (p.includes("/en/")) return "en";
  if (p.includes("/es/")) return "es";
  return "pt";
}

const all: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const fm = parseFront(raw as string);
    const lang = fm.lang ?? langFromPath(path);
    const key = path.replace("../", ""); // posts/en/2025/slug.mdx
    const module = modules[path] as MdxModule;
    const component = module.default;
    return {
      ...fm,
      id: key,
      url: `/${lang}/blog/${fm.slug}`,
      component,
    };
  })
  // sort by date descending
  .sort((a, b) => (a.date > b.date ? -1 : 1));

export function getPosts(lang: "en" | "es" | "pt") {
  return all.filter((p) => p.lang === lang);
}

export function getPostBySlug(lang: "en" | "es" | "pt", slug: string) {
  return all.find((p) => p.lang === lang && p.slug === slug) || null;
}

export function getAllPosts() {
  return all;
}
