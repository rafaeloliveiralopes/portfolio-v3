import { lazy, type ReactNode } from "react";
import { type FrontmatterT } from "./schema";

// Lazy-load MDX modules to avoid Suspense errors
const IntroducingAiAgentsEn = lazy(
  () => import("../posts/en/2025/introducing-ai-agents.mdx")
);
const IntroduccionAgentesEs = lazy(
  () => import("../posts/es/2025/introduccion-agentes-ia.mdx")
);
const IntroducaoAgentesPt = lazy(
  () => import("../posts/pt/2025/introducao-agentes-ia.mdx")
);

export type Post = FrontmatterT & {
  id: string;
  url: string; // /:lng/blog/:slug
  component: React.ComponentType<Record<string, unknown>>;
};

// Manually define posts with their metadata
const all: Post[] = [
  {
    lang: "en" as const,
    slug: "introducing-ai-agents",
    title: "AI Agents in Practice: When to Use Them and How to Get Started",
    description:
      "A practical guide with use cases for customer service, automation, and content creation.",
    date: "2025-10-30",
    updated: "2025-10-30",
    tags: ["ai", "agents", "automation", "customer-service"],
    cover: "/robot-humanoid1.jpg",
    readingTime: 7,
    translations: {
      es: "introduccion-agentes-ia",
      pt: "introducao-agentes-ia",
    },
    canonical: "/en/blog/introducing-ai-agents",
    id: "posts/en/2025/introducing-ai-agents.mdx",
    url: "/en/blog/introducing-ai-agents",
    component: IntroducingAiAgentsEn,
  },
  {
    lang: "es" as const,
    slug: "introduccion-agentes-ia",
    title: "Agentes de IA en la práctica: cuándo usarlos y cómo empezar",
    description:
      "Guía práctica con casos de uso para atención al cliente, automatización y creación de contenido.",
    date: "2025-10-30",
    updated: "2025-10-30",
    tags: ["ia", "agentes", "automatizacion", "atencion-cliente"],
    cover: "/robot-humanoid1.jpg",
    readingTime: 7,
    translations: {
      en: "introducing-ai-agents",
      pt: "introducao-agentes-ia",
    },
    canonical: "/es/blog/introduccion-agentes-ia",
    id: "posts/es/2025/introduccion-agentes-ia.mdx",
    url: "/es/blog/introduccion-agentes-ia",
    component: IntroduccionAgentesEs,
  },
  {
    lang: "pt" as const,
    slug: "introducao-agentes-ia",
    title: "Agentes de IA na prática: quando usar e como começar",
    description:
      "Guia prático com casos de uso para atendimento, automações e criação de conteúdo.",
    date: "2025-10-30",
    updated: "2025-10-30",
    tags: ["ia", "agentes", "automacao", "atendimento"],
    cover: "/robot-humanoid1.jpg",
    readingTime: 7,
    translations: {
      en: "introducing-ai-agents",
      es: "introduccion-agentes-ia",
    },
    canonical: "/pt/blog/introducao-agentes-ia",
    id: "posts/pt/2025/introducao-agentes-ia.mdx",
    url: "/pt/blog/introducao-agentes-ia",
    component: IntroducaoAgentesPt,
  },
].sort((a, b) => (a.date > b.date ? -1 : 1));
export function getPosts(lang: "en" | "es" | "pt") {
  return all.filter((p) => p.lang === lang);
}

export function getPostBySlug(lang: "en" | "es" | "pt", slug: string) {
  return all.find((p) => p.lang === lang && p.slug === slug) || null;
}

export function getAllPosts() {
  return all;
}
