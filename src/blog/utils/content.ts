import { lazy, type ReactNode } from "react";
import { type FrontmatterT } from "./schema";

// Lazy-load MDX modules to avoid Suspense errors
const ThreeErrorsAutomationCostsEn = lazy(
  () => import("../posts/en/2025/three-errors-that-double-automation-costs.mdx")
);
const TresErroresAutomacionEs = lazy(
  () =>
    import(
      "../posts/es/2025/tres-errores-que-duplican-los-costes-de-la-automatizacion.mdx"
    )
);
const TresErrosCustosAutomacaoPt = lazy(
  () => import("../posts/pt/2025/tres-erros-que-duplicam-custos-automacao.mdx")
);
const CincoTarefasAutomatizarIAPt = lazy(
  () =>
    import(
      "../posts/pt/2025/cinco-tarefas-repetitivas-que-qualquer-empresa-pode-automatizar-usando-IA-ou-chatbot.mdx"
    )
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
    slug: "three-costly-automation-mistakes",
    title:
      "Three Errors that Double the Costs of Automation—and How to Avoid Them",
    description:
      "Discover the main pitfalls that make automation projects in service, documentation, and content more expensive—and how to avoid them with planning, process optimization, and human engagement.",
    date: "2025-10-30",
    // updated: "2025-10-30",
    tags: [
      "automation",
      "management",
      "processes",
      "technology",
      "common-errors",
      "efficiency",
    ],
    cover: "/automacao-processos-empresariais.png",
    readingTime: 7,
    translations: {
      es: "tres-errores-que-encarecen-la-automatizacion",
      pt: "erros-custos-automacao",
    },
    canonical: "/en/blog/three-costly-automation-mistakes",
    id: "posts/en/2025/three-errors-that-double-automation-costs.mdx",
    url: "/en/blog/three-costly-automation-mistakes",
    component: ThreeErrorsAutomationCostsEn,
  },
  {
    lang: "es" as const,
    slug: "tres-errores-que-encarecen-la-automatizacion",
    title:
      "Tres errores que duplican los costes de la automatización y cómo evitarlos",
    description:
      "Descubre los principales errores que encarecen los proyectos de automatización en atención, documentación y contenido, y cómo evitarlos mediante planificación, optimización de procesos y compromiso humano.",
    date: "2025-10-30",
    // updated: "2025-10-30",
    tags: [
      "automatizacion",
      "gestion",
      "procesos",
      "tecnologia",
      "errores-comunes",
      "eficiencia",
    ],
    cover: "/automacao-processos-empresariais.png",
    readingTime: 7,
    translations: {
      en: "three-costly-automation-mistakes",
      pt: "erros-custos-automacao",
    },
    canonical: "/es/blog/tres-errores-que-encarecen-la-automatizacion",
    id: "posts/es/2025/tres-errores-que-duplican-los-costes-de-la-automatizacion.mdx",
    url: "/es/blog/tres-errores-que-encarecen-la-automatizacion",
    component: TresErroresAutomacionEs,
  },
  {
    lang: "pt" as const,
    slug: "erros-custos-automacao",
    title: "Três Erros que Duplicam os Custos da Automação e Como Evitá-los",
    description:
      "Descubra os principais equívocos que encarecem projetos de automação em atendimento, documentação, conteúdo e como evitá-los com planejamento, otimização de processos e engajamento humano.",
    date: "2025-10-30",
    // updated: "2025-10-30",
    tags: [
      "automação",
      "gestão",
      "processos",
      "tecnologia",
      "IA",
      "eficiência",
      "produtividade",
      "sistemas",
    ],
    cover: "/automacao-processos-empresariais.png",
    readingTime: 7,
    translations: {
      en: "three-costly-automation-mistakes",
      es: "tres-errores-que-encarecen-la-automatizacion",
    },
    canonical: "/pt/blog/erros-custos-automacao",
    id: "posts/pt/2025/tres-erros-que-duplicam-custos-automacao.mdx",
    url: "/pt/blog/erros-custos-automacao",
    component: TresErrosCustosAutomacaoPt,
  },
  {
    lang: "pt" as const,
    slug: "5-tarefas-automatizar-ia-chatbot",
    title:
      "5 Tarefas Repetitivas que Qualquer Empresa Pode Automatizar Usando IA ou Chatbot",
    description:
      "Descubra cinco tarefas operacionais comuns em marketing, vendas e administração que podem ser automatizadas com IA, liberando sua equipe para trabalhos estratégicos e aumentando a eficiência do negócio.",
    date: "2025-11-02",
    // updated: "2025-11-02",
    tags: [
      "automação",
      "inteligência-artificial",
      "chatbot",
      "produtividade",
      "marketing",
      "vendas",
      "administração",
      "eficiência",
    ],
    cover:
      "/automacao-processos-empresariais-inteligencia-artificial-topview.png",
    readingTime: 10,
    translations: {
      en: "5-repetitive-tasks-automate-ai-chatbot",
      es: "5-tareas-automatizar-ia-chatbot",
    },
    canonical: "/pt/blog/5-tarefas-automatizar-ia-chatbot",
    id: "posts/pt/2025/cinco-tarefas-repetitivas-que-qualquer-empresa-pode-automatizar-usando-IA-ou-chatbot.mdx",
    url: "/pt/blog/5-tarefas-automatizar-ia-chatbot",
    component: CincoTarefasAutomatizarIAPt,
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
