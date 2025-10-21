import { Code, Palette, Lightbulb, Target } from "lucide-react";
import { useTranslation } from "react-i18next";

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="sobre" className="py-20 relative bg-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">
              {t("about.title").split(" ")[0]}{" "}
            </span>
            <span className="text-gradient-primary">
              {t("about.title").split(" ")[1]} {t("about.title").split(" ")[2]}
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">{t("about.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story */}
          <div className="space-y-6 text-zinc-300">
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                {t("about.story1").split("**")[0]}
                <span className="text-primary font-semibold">
                  {t("about.story1").split("**")[1]}
                </span>
                {t("about.story1").split("**")[2]}
                <span className="text-secondary">
                  {t("about.story1").split("**")[3]}
                </span>
                {t("about.story1").split("**")[4]}
                <span className="text-primary">
                  {t("about.story1").split("**")[5]}
                </span>
                {t("about.story1").split("**")[6]}
              </p>

              <p className="text-lg leading-relaxed">
                {t("about.story2").split("**")[0]}
                <span className="text-gradient-primary font-semibold">
                  {t("about.story2").split("**")[1]}
                </span>
                {t("about.story2").split("**")[2]}
              </p>

              <p className="text-lg leading-relaxed">{t("about.story3")}</p>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-4 mt-12">
              {[
                {
                  icon: Code,
                  title: t("about.skills.development.title"),
                  items: t("about.skills.development.items", {
                    returnObjects: true,
                  }) as string[],
                },
                {
                  icon: Palette,
                  title: t("about.skills.design.title"),
                  items: t("about.skills.design.items", {
                    returnObjects: true,
                  }) as string[],
                },
                {
                  icon: Lightbulb,
                  title: t("about.skills.soft.title"),
                  items: t("about.skills.soft.items", {
                    returnObjects: true,
                  }) as string[],
                },
                {
                  icon: Target,
                  title: t("about.skills.focus.title"),
                  items: t("about.skills.focus.items", {
                    returnObjects: true,
                  }) as string[],
                },
              ].map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {skill.title}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-sm bg-muted text-zinc-300 rounded-md"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
              {t("about.timeline.title").split(" ")[0]}{" "}
              <span className="text-gradient-secondary">
                {t("about.timeline.title").split(" ")[1]}
              </span>
            </h3>

            <div className="space-y-8">
              {["2019", "2021", "2022", "2023", "2024"].map((year, index) => (
                <div key={index} className="timeline-item group">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-20">
                      <span className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                        {year}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {t(`about.timeline.items.${year}.title`)}
                      </h4>
                      <p className="text-zinc-300 text-base">
                        {t(`about.timeline.items.${year}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Timeline Line */}
            <div className="absolute left-0 top-12 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
