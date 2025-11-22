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
const FiveRepetitiveTasksAutomationEn = lazy(
  () =>
    import(
      "../posts/en/2025/five-repetitive-tasks-any-business-can-automate-using-AI-or-chatbots.mdx"
    )
);
const CincoTareasAutomatizarIAEs = lazy(
  () =>
    import(
      "../posts/es/2025/cinco-tareas-repetitivas-que-cualquier-empresa-puede-automatizar-usando-IA-o-chatbot.mdx"
    )
);
const ComoSaberSeSiteConvertePt = lazy(
  () =>
    import(
      "../posts/pt/2025/como-saber-se-seu-site-ou-landing-page-realmente-converte.mdx"
    )
);
const HowToKnowIfSiteConvertsEn = lazy(
  () =>
    import(
      "../posts/en/2025/how-to-know-if-your-website-or-landing-page-really-converts.mdx"
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
  {
    lang: "en" as const,
    slug: "5-repetitive-tasks-automate-ai-chatbot",
    title: "5 Repetitive Tasks Any Company Can Automate Using AI or a Chatbot",
    description:
      "Discover five common operational tasks in marketing, sales, and administration that can be automated with AI, freeing your team for strategic work and boosting business efficiency.",
    date: "2025-11-02",
    tags: [
      "automation",
      "artificial-intelligence",
      "chatbot",
      "productivity",
      "marketing",
      "sales",
      "administration",
      "efficiency",
    ],
    cover:
      "/automacao-processos-empresariais-inteligencia-artificial-topview.png",
    readingTime: 10,
    translations: {
      es: "5-tareas-automatizar-ia-chatbot",
      pt: "5-tarefas-automatizar-ia-chatbot",
    },
    canonical: "/en/blog/5-repetitive-tasks-automate-ai-chatbot",
    id: "posts/en/2025/five-repetitive-tasks-any-business-can-automate-using-AI-or-chatbots.mdx",
    url: "/en/blog/5-repetitive-tasks-automate-ai-chatbot",
    component: FiveRepetitiveTasksAutomationEn,
  },
  {
    lang: "es" as const,
    slug: "5-tareas-automatizar-ia-chatbot",
    title:
      "5 tareas repetitivas que cualquier empresa puede automatizar con IA o un chatbot",
    description:
      "Descubre cinco tareas operativas habituales en marketing, ventas y administración que pueden automatizarse con IA, liberando a tu equipo para trabajos estratégicos y aumentando la eficiencia del negocio.",
    date: "2025-11-02",
    tags: [
      "automatizacion",
      "inteligencia-artificial",
      "chatbot",
      "productividad",
      "marketing",
      "ventas",
      "administracion",
      "eficiencia",
    ],
    cover:
      "/automacao-processos-empresariais-inteligencia-artificial-topview.png",
    readingTime: 10,
    translations: {
      en: "5-repetitive-tasks-automate-ai-chatbot",
      pt: "5-tarefas-automatizar-ia-chatbot",
    },
    canonical: "/es/blog/5-tareas-automatizar-ia-chatbot",
    id: "posts/es/2025/cinco-tareas-repetitivas-que-cualquier-empresa-puede-automatizar-usando-IA-o-chatbot.mdx",
    url: "/es/blog/5-tareas-automatizar-ia-chatbot",
    component: CincoTareasAutomatizarIAEs,
  },
  {
    lang: "pt" as const,
    slug: "como-saber-se-site-converte",
    title: "Como Saber se Seu Site ou Landing Page Realmente Converte",
    description:
      "Descubra os principais indicadores-chave que revelam se seu site está gerando leads e vendas e como medi-los de forma objetiva.",
    date: "2025-11-15",
    tags: [
      "conversao",
      "landing-page",
      "otimizacao",
      "marketing-digital",
      "analytics",
      "cro",
      "performance",
      "metricas",
    ],
    cover: "/funil-de-vendas.webp",
    readingTime: 12,
    translations: {
      en: "how-to-know-if-site-converts",
    },
    canonical: "/pt/blog/como-saber-se-site-converte",
    id: "posts/pt/2025/como-saber-se-seu-site-ou-landing-page-realmente-converte.mdx",
    url: "/pt/blog/como-saber-se-site-converte",
    component: ComoSaberSeSiteConvertePt,
  },
  {
    lang: "en" as const,
    slug: "how-to-know-if-site-converts",
    title: "How to Know if Your Website or Landing Page Really Converts",
    description:
      "Discover the key indicators that reveal whether your website is generating leads and sales, and how to measure them objectively.",
    date: "2025-11-15",
    tags: [
      "conversion",
      "landing-page",
      "optimization",
      "digital-marketing",
      "analytics",
      "cro",
      "performance",
      "metrics",
    ],
    cover: "/funil-de-vendas.webp",
    readingTime: 12,
    translations: {
      pt: "como-saber-se-site-converte",
    },
    canonical: "/en/blog/how-to-know-if-site-converts",
    id: "posts/en/2025/how-to-know-if-your-website-or-landing-page-really-converts.mdx",
    url: "/en/blog/how-to-know-if-site-converts",
    component: HowToKnowIfSiteConvertsEn,
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
