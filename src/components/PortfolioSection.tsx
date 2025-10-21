import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";
import { useTranslation } from "react-i18next";

type Metrics = {
  performance: string;
  seo: string;
  users: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tech: string[];
  metrics: Metrics;
  links: { demo: string; github: string };
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description:
      "Loja online completa com sistema de pagamentos integrado e painel administrativo.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    category: "Web",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    metrics: {
      performance: "+40% conversão",
      seo: "95% Lighthouse",
      users: "10k+ usuários",
    },
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 2,
    title: "Sistema de Gestão",
    description:
      "Plataforma completa para gestão de clientes, vendas e relatórios em tempo real.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    category: "Sistema",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
    metrics: {
      performance: "50% menos tempo",
      seo: "Integração completa",
      users: "500+ empresas",
    },
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 3,
    title: "Chatbot IA para Vendas",
    description:
      "Assistente virtual inteligente que qualifica leads e agenda reuniões automaticamente.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80",
    category: "IA",
    tech: ["OpenAI", "Webhook", "Zapier", "WhatsApp API"],
    metrics: {
      performance: "24/7 atendimento",
      seo: "300% mais leads",
      users: "90% satisfação",
    },
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 4,
    title: "Landing Page Alto Impacto",
    description:
      "Página de conversão otimizada para campanha de lançamento de produto digital.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    category: "Web",
    tech: ["React", "Framer Motion", "Analytics", "A/B Testing"],
    metrics: {
      performance: "85% conversão",
      seo: "Top 3 Google",
      users: "50k+ visits",
    },
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 5,
    title: "App Mobile Delivery",
    description:
      "Aplicativo de delivery com geolocalização, pagamento integrado e sistema de avaliação.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    category: "Mobile",
    tech: ["React Native", "Firebase", "Maps API", "Push Notifications"],
    metrics: {
      performance: "4.8★ rating",
      seo: "100k+ downloads",
      users: "500+ restaurantes",
    },
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 6,
    title: "Automação de Marketing",
    description:
      "Sistema que integra CRM, email marketing e análise de dados para maximizar vendas.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
    category: "Automação",
    tech: ["Python", "API Integration", "Machine Learning", "Dashboard"],
    metrics: {
      performance: "400% ROI",
      seo: "75% menos trabalho manual",
      users: "200+ campanhas",
    },
    links: {
      demo: "#",
      github: "#",
    },
  },
];

type CategoryKey = "all" | "web" | "system" | "ai" | "mobile" | "automation";

const categoryKeys: CategoryKey[] = [
  "all",
  "web",
  "system",
  "ai",
  "mobile",
  "automation",
];

export const PortfolioSection = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Map translated label -> key and vice-versa
  const categories = useMemo(
    () =>
      categoryKeys.map((key) => ({
        key,
        label: t(`portfolio.filters.${key}`),
      })),
    [t]
  );

  // Build translated view-model for cards (title, description, category, metrics)
  type ProjectPatch = Partial<
    Pick<Project, "title" | "description" | "category">
  > & {
    metrics?: Partial<Metrics>;
  };

  const translatedProjects = useMemo<Project[]>(() => {
    return projects.map((p) => {
      const patch = t(`portfolio.projects.${p.id}`, {
        returnObjects: true,
      }) as unknown as ProjectPatch;
      return {
        ...p,
        title: patch.title ?? p.title,
        description: patch.description ?? p.description,
        category: patch.category ?? p.category,
        metrics: { ...p.metrics, ...(patch.metrics || {}) },
      };
    });
  }, [t]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return translatedProjects;
    // Map selected key to translated category to match translatedProjects.category
    const label = t(`portfolio.filters.${selectedCategory}`);
    return translatedProjects.filter((project) => project.category === label);
  }, [selectedCategory, translatedProjects, t]);

  return (
    <section id="projetos" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">
              {t("portfolio.title")}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t("portfolio.subtitle")}
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === key
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30"
                }`}
              >
                {key === "all" && <Filter className="w-4 h-4" />}
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer animate-float-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Overlay with Links */}
                  <div
                    className={`absolute inset-0 bg-primary/90 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <a
                      href={project.links.demo}
                      className="p-3 bg-background/20 rounded-full hover:bg-background/40 transition-colors"
                      aria-label={t("portfolio.aria.viewDemo")}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.links.github}
                      className="p-3 bg-background/20 rounded-full hover:bg-background/40 transition-colors"
                      aria-label={t("portfolio.aria.viewCode")}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {(
                      ["performance", "seo", "users"] as Array<keyof Metrics>
                    ).map((key) => (
                      <div key={key} className="p-2 bg-muted/50 rounded-lg">
                        <div className="text-xs text-muted-foreground capitalize mb-1">
                          {key}
                        </div>
                        <div className="text-xs font-semibold text-primary">
                          {project.metrics[key]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
          >
            {t("portfolio.viewAll")}
          </Button>
        </div>
      </div>
    </section>
  );
};
