import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";

export const PortfolioSection = () => {
  const { t } = useTranslation();
  // Use category key instead of translated text
  const [selectedCategoryKey, setSelectedCategoryKey] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Dynamic project data from i18n
  const projectIds = [1, 2, 3, 4, 5, 6];
  const projects = projectIds.map((id) => {
    const projectData = t(`portfolio.projects.${id}`, { returnObjects: true });
    return {
      id,
      ...(typeof projectData === "object" ? projectData : {}),
      image: getProjectImage(id),
      tech: getProjectTech(id),
      links: {
        demo: "#",
        github: "#",
      },
    };
  });

  // Category mapping
  const categoryKeys = ["all", "web", "system", "ai", "automation"];
  const categories = categoryKeys.map((key) => ({
    key,
    label: t(`portfolio.filters.${key}`),
  }));

  // Helper function to get project images
  function getProjectImage(id: number): string {
    const images: Record<number, string> = {
      1: "/mockup-studio-de-beleza.png",
      2: "/sistema-de-cadastro.png",
      3: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80",
      4: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      5: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
      6: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
    };
    return images[id] || "";
  }

  // Helper function to get project tech stack
  function getProjectTech(id: number): string[] {
    const techStacks: Record<number, string[]> = {
      1: ["Javascript", "React", "NodeJS", "Bootstrap"],
      2: [
        "AngularJS",
        "TailwindCSS",
        "Docker",
        "PostgreSQL",
        "Java",
        "Spring Boot",
      ],
      3: ["OpenAI", "Webhook", "Zapier", "WhatsApp API"],
      4: ["React", "Framer Motion", "Analytics", "A/B Testing"],
      5: ["React Native", "Firebase", "Maps API", "Push Notifications"],
      6: ["Python", "API Integration", "Machine Learning", "Dashboard"],
    };
    return techStacks[id] || [];
  }

  const filteredProjects =
    selectedCategoryKey === "all"
      ? projects
      : projects.filter((project: Record<string, unknown>) => {
          const projectCategory = project.category as string;
          const filterLabel = t(`portfolio.filters.${selectedCategoryKey}`);
          return projectCategory === filterLabel;
        });

  return (
    <section id="projetos" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{t("portfolio.title")} </span>
            <span className="text-gradient-primary"></span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t("portfolio.subtitle")}
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategoryKey(category.key)}
                className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  selectedCategoryKey === category.key
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30"
                }`}
              >
                {category.key === "all" && <Filter className="w-4 h-4" />}
                {category.label}
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
                    alt={(project as Record<string, unknown>).title as string}
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
                      {(project as Record<string, unknown>).category as string}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {(project as Record<string, unknown>).title as string}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {(project as Record<string, unknown>).description as string}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      {t("portfolio.techStack")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  {/* Keep disabled until have metrics */}
                  {/* <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(
                      (project as Record<string, unknown>).metrics as Record<
                        string,
                        string
                      >
                    ).map(([key, value]) => (
                      <div key={key} className="p-2 bg-muted/50 rounded-lg">
                        <div className="text-xs text-muted-foreground capitalize mb-1">
                          {key}
                        </div>
                        <div className="text-xs font-semibold text-primary">
                          {value as string}
                        </div>
                      </div>
                    ))}
                  </div> */}
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
