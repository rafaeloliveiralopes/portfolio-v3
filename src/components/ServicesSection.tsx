import { Monitor, Zap, Bot, ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useMemo, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

type TranslatedService = {
  title: string;
  description: string;
  features: string[];
  expandedFeatures: string[];
  color: "primary" | "secondary";
  buttonText: string;
};

type ServiceItem = TranslatedService & { icon: LucideIcon };

export const ServicesSection = () => {
  const { t } = useTranslation(["services", "common"]);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Record<number, boolean>>({});
  const [isAnimationArmed, setIsAnimationArmed] = useState(false);

  // Build translated services model
  const services = useMemo<ServiceItem[]>(() => {
    const web = t("services.cards.web", {
      returnObjects: true,
    }) as unknown as TranslatedService;
    const performance = t("services.cards.performance", {
      returnObjects: true,
    }) as unknown as TranslatedService;
    const ai = t("services.cards.ai", {
      returnObjects: true,
    }) as unknown as TranslatedService;

    return [
      { icon: Monitor, ...web },
      { icon: Zap, ...performance },
      { icon: Bot, ...ai },
    ];
  }, [t]);

  const toggleExpanded = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      setIsTitleVisible(true);
      setIsSubtitleVisible(true);
      setVisibleCards(
        Array.from({ length: services.length }).reduce<Record<number, boolean>>(
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
      setVisibleCards(
        Array.from({ length: services.length }).reduce<Record<number, boolean>>(
          (acc, _, index) => ({ ...acc, [index]: true }),
          {},
        ),
      );
      return;
    }

    setIsAnimationArmed(true);

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          if (entry.target === titleRef.current) {
            setIsTitleVisible(true);
          }
          if (entry.target === subtitleRef.current) {
            setIsSubtitleVisible(true);
          }
          headerObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLDivElement;
          const index = Number(element.dataset.cardIndex);
          if (Number.isNaN(index)) return;
          setVisibleCards((prev) =>
            prev[index] ? prev : { ...prev, [index]: true },
          );
          cardObserver.unobserve(element);
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    if (titleRef.current) headerObserver.observe(titleRef.current);
    if (subtitleRef.current) headerObserver.observe(subtitleRef.current);

    cardRefs.current.forEach((cardElement) => {
      if (cardElement) {
        cardObserver.observe(cardElement);
      }
    });

    return () => {
      headerObserver.disconnect();
      cardObserver.disconnect();
    };
  }, [services.length]);

  return (
    <section
      data-testid="services-section"
      aria-label={t("services.title")}
      className={`services-section py-20 relative ${isAnimationArmed ? "services-animate" : ""}`}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`services-title-reveal text-4xl md:text-5xl font-bold mb-6 ${
              isTitleVisible ? "is-visible" : ""
            }`}
          >
            <span className="text-gradient-primary">{t("services.title")}</span>
          </h2>
          <p
            ref={subtitleRef}
            className={`services-subtitle-reveal text-xl lg:text-2xl max-w-3xl mx-auto ${
              isSubtitleVisible ? "is-visible" : ""
            }`}
          >
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedCard === index;

            return (
              <div
                key={index}
                className={`service-card service-card-reveal group ${
                  visibleCards[index] ? "is-visible" : ""
                } ${
                  index === 2 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                data-card-index={index}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
              >
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-lg mb-6 ${
                    service.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary/10 text-secondary"
                  }`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient-primary transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 font-semibold mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {Array.isArray(service.features) &&
                    service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                            service.color === "primary"
                              ? "bg-primary"
                              : "bg-secondary"
                          }`}
                        />
                        <span className="text-lg text-gray-300">{feature}</span>
                      </li>
                    ))}
                </ul>

                {/* Expanded Features */}
                {isExpanded && Array.isArray(service.expandedFeatures) && (
                  <div className="mb-6 animate-float-up">
                    <ul className="space-y-3">
                      {service.expandedFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                              service.color === "primary"
                                ? "bg-primary"
                                : "bg-secondary"
                            }`}
                          />
                          <span className="text-lg text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <Button
                  asChild
                  className={`w-full mb-4 ${
                    service.color === "primary"
                      ? "bg-[hsl(var(--primary-cta))] text-[hsl(var(--on-primary-cta))] hover:bg-[hsl(var(--primary-cta-hover))] active:bg-[hsl(var(--primary-cta-active))] focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary)/0.4)]"
                      : "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary)/0.8)] active:bg-[hsl(var(--secondary)/0.7)] focus-visible:ring-2 focus-visible:ring-[hsl(var(--secondary)/0.4)]"
                  }`}
                >
                  <a href="#contact" aria-label={service.buttonText}>
                    {service.buttonText}
                  </a>
                </Button>

                {/* Expand/Collapse Button */}
                <button
                  onClick={() => toggleExpanded(index)}
                  className="flex items-center justify-center w-full text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="mr-2">
                    {isExpanded
                      ? t("services.lessDetails")
                      : t("services.moreDetails")}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
