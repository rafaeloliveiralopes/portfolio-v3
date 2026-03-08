import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ExternalLink, Filter } from "lucide-react";

export const PortfolioSection = () => {
  const { t } = useTranslation(["projects", "common"]);
  // Use category key instead of translated text
  const [selectedCategoryKey, setSelectedCategoryKey] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const filterRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const projectCardRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
  const [visibleFilters, setVisibleFilters] = useState<Record<number, boolean>>(
    {},
  );
  const [visibleProjectCards, setVisibleProjectCards] = useState<
    Record<number, boolean>
  >({});
  const [isAnimationArmed, setIsAnimationArmed] = useState(false);

  // Dynamic project data from i18n
  const projectIds = [1, 2, 3, 4, 6];
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
      3: "/robot-humanoid.jpg",
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

  useEffect(() => {
    if (typeof window === "undefined") {
      setIsTitleVisible(true);
      setIsSubtitleVisible(true);
      setVisibleFilters(
        Array.from({ length: categories.length }).reduce<Record<number, boolean>>(
          (acc, _, index) => ({ ...acc, [index]: true }),
          {},
        ),
      );
      return;
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotionQuery.matches || !("IntersectionObserver" in window)) {
      setIsTitleVisible(true);
      setIsSubtitleVisible(true);
      setVisibleFilters(
        Array.from({ length: categories.length }).reduce<Record<number, boolean>>(
          (acc, _, index) => ({ ...acc, [index]: true }),
          {},
        ),
      );
      return;
    }

    setIsAnimationArmed(true);

    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === titleRef.current) {
            setIsTitleVisible(true);
          }

          if (entry.target === subtitleRef.current) {
            setIsSubtitleVisible(true);
          }

          headerObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.45,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    const filterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLButtonElement;
          const index = Number(element.dataset.filterIndex);
          if (Number.isNaN(index)) return;
          setVisibleFilters((prev) =>
            prev[index] ? prev : { ...prev, [index]: true },
          );
          filterObserver.unobserve(element);
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    if (titleRef.current) headerObserver.observe(titleRef.current);
    if (subtitleRef.current) headerObserver.observe(subtitleRef.current);
    filterRefs.current.forEach((filterElement) => {
      if (filterElement) {
        filterObserver.observe(filterElement);
      }
    });

    return () => {
      headerObserver.disconnect();
      filterObserver.disconnect();
    };
  }, [categories.length]);

  useEffect(() => {
    if (typeof window === "undefined") {
      setVisibleProjectCards((prev) =>
        filteredProjects.reduce<Record<number, boolean>>(
          (acc, project) => ({
            ...acc,
            [project.id as number]: true,
          }),
          { ...prev },
        ),
      );
      return;
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotionQuery.matches || !("IntersectionObserver" in window)) {
      setVisibleProjectCards((prev) =>
        filteredProjects.reduce<Record<number, boolean>>(
          (acc, project) => ({
            ...acc,
            [project.id as number]: true,
          }),
          { ...prev },
        ),
      );
      return;
    }

    if (!isAnimationArmed) return;

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLDivElement;
          const id = Number(element.dataset.projectId);
          if (Number.isNaN(id)) return;
          setVisibleProjectCards((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
          cardObserver.unobserve(element);
        });
      },
      {
        threshold: 0.32,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    filteredProjects.forEach((project) => {
      const id = project.id as number;
      const cardElement = projectCardRefs.current[id];
      if (cardElement && !visibleProjectCards[id]) {
        cardObserver.observe(cardElement);
      }
    });

    return () => cardObserver.disconnect();
  }, [filteredProjects, isAnimationArmed, visibleProjectCards]);

  return (
    <section
      className={`portfolio-section py-20 relative bg-zinc-950 ${
        isAnimationArmed ? "portfolio-animate" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`portfolio-title-reveal text-4xl md:text-5xl font-bold mb-6 ${
              isTitleVisible ? "is-visible" : ""
            }`}
          >
            <span className="text-foreground">
              {t("portfolio.title").split(" ").slice(0, -1).join(" ")}{" "}
            </span>
            <span className="text-gradient-primary">
              {t("portfolio.title").split(" ").slice(-1)[0]}
            </span>
          </h2>
          <p
            ref={subtitleRef}
            className={`portfolio-subtitle-reveal text-xl max-w-3xl mx-auto mb-8 ${
              isSubtitleVisible ? "is-visible" : ""
            }`}
          >
            {t("portfolio.subtitle")}
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, categoryIndex) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategoryKey(category.key)}
                className={`portfolio-filter-reveal px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  visibleFilters[categoryIndex] ? "is-visible" : ""
                } ${
                  selectedCategoryKey === category.key
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30"
                }`}
                data-filter-index={categoryIndex}
                ref={(element) => {
                  filterRefs.current[categoryIndex] = element;
                }}
              >
                {category.key === "all" && <Filter className="w-4 h-4" />}
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`portfolio-card-reveal group cursor-pointer ${
                visibleProjectCards[project.id as number] ? "is-visible" : ""
              }`}
              data-project-id={project.id as number}
              ref={(element) => {
                projectCardRefs.current[project.id as number] = element;
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/90 transition-all duration-300 hover:shadow-glow">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={(project as Record<string, unknown>).title as string}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Overlay with Links */}
                  {/* <div
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
                  </div> */}

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                      {(project as Record<string, unknown>).category as string}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {(project as Record<string, unknown>).title as string}
                  </h3>

                  <p className="text-zinc-300 text-base mb-4 leading-relaxed">
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
                          className="px-2 py-1 bg-secondary/20 text-xs rounded-md"
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
        {/* Disabled untill have more projects */}
        {/* <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
          >
            {t("portfolio.viewAll")}
          </Button>
        </div> */}
      </div>
    </section>
  );
};
