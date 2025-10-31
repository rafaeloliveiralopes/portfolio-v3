import { Monitor, Zap, Bot, ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";
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
  const { t, i18n } = useTranslation();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

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

  return (
    <section id="serviços" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">{t("services.title")}</span>
          </h2>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
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
                className={`service-card group ${
                  index === 2 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
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
                  {service.features.map((feature, idx) => (
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
                {isExpanded && (
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
                  <a href="#contato" aria-label={service.buttonText}>
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
