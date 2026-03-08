import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { Code, Palette, Lightbulb, Target } from "lucide-react";
import { useTranslation } from "react-i18next";

const TIMELINE_YEARS = ["2019", "2021", "2022", "2023", "2024"];

const renderHighlightedText = (
  text: string,
  highlightClassName: string,
): ReactNode[] => {
  const chunks = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return chunks.map((chunk, index) => {
    const isHighlighted = chunk.startsWith("**") && chunk.endsWith("**");

    if (isHighlighted) {
      return (
        <span key={`${chunk}-${index}`} className={highlightClassName}>
          {chunk.slice(2, -2)}
        </span>
      );
    }

    return <span key={`${chunk}-${index}`}>{chunk}</span>;
  });
};

export const AboutSection = () => {
  const { t } = useTranslation(["home", "common"]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const timelineItemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimationArmed, setIsAnimationArmed] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
  const [visibleTimelineItems, setVisibleTimelineItems] = useState<
    Record<number, boolean>
  >({});

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    if (typeof window === "undefined") {
      setIsVisible(true);
      return;
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotionQuery.matches) {
      setIsVisible(true);
      return;
    }

    setIsAnimationArmed(true);

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -2% 0px",
      },
    );

    observer.observe(sectionElement);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      setIsTitleVisible(true);
      setIsSubtitleVisible(true);
      return;
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotionQuery.matches || !("IntersectionObserver" in window)) {
      setIsTitleVisible(true);
      setIsSubtitleVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === titleRef.current) {
            setIsTitleVisible(true);
          }
          if (entry.target === subtitleRef.current) {
            setIsSubtitleVisible(true);
          }
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.45,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      setVisibleTimelineItems(
        Array.from({ length: TIMELINE_YEARS.length }).reduce<
          Record<number, boolean>
        >((acc, _, index) => ({ ...acc, [index]: true }), {}),
      );
      return;
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotionQuery.matches || !("IntersectionObserver" in window)) {
      setVisibleTimelineItems(
        Array.from({ length: TIMELINE_YEARS.length }).reduce<
          Record<number, boolean>
        >((acc, _, index) => ({ ...acc, [index]: true }), {}),
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLDivElement;
          const index = Number(element.dataset.timelineIndex);
          if (Number.isNaN(index)) return;
          setVisibleTimelineItems((prev) =>
            prev[index] ? prev : { ...prev, [index]: true },
          );
          observer.unobserve(element);
        });
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    timelineItemRefs.current.forEach((timelineItemElement) => {
      if (timelineItemElement) {
        observer.observe(timelineItemElement);
      }
    });

    return () => observer.disconnect();
  }, []);

  const skillCards = useMemo(
    () => [
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
    ],
    [t],
  );

  const sectionTitle = t("about.title").trim();
  const [titleFirstWord, ...titleRestWords] = sectionTitle.split(/\s+/);
  const titleRemainder = titleRestWords.join(" ");

  return (
    <section
      ref={sectionRef}
      className={`about-section relative overflow-hidden py-24 ${
        isAnimationArmed ? "about-animate" : ""
      }`}
    >
      <div className="about-orb about-orb-primary" aria-hidden="true" />
      <div className="about-orb about-orb-secondary" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center">
          <h2
            ref={titleRef}
            className={`about-title-reveal text-4xl font-bold md:text-5xl ${
              isTitleVisible ? "is-visible" : ""
            }`}
          >
            <span className="text-foreground">{titleFirstWord}</span>
            {titleRemainder ? (
              <span className="text-gradient-primary"> {titleRemainder}</span>
            ) : null}
          </h2>
          <p
            ref={subtitleRef}
            className={`about-subtitle-reveal mx-auto mt-5 max-w-3xl text-lg text-zinc-300 md:text-xl ${
              isSubtitleVisible ? "is-visible" : ""
            }`}
          >
            {t("about.subtitle")}
          </p>
        </div>

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-2">
          <div
            className={`about-reveal ${isVisible ? "is-visible" : ""}`}
            style={{ "--about-delay": "0.14s" } as CSSProperties}
          >
            <div className="about-glass-panel space-y-6">
              <p className="text-lg leading-relaxed text-zinc-300">
                {renderHighlightedText(
                  t("about.story2"),
                  "text-accent-text font-semibold",
                )}
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {skillCards.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <article
                    key={skill.title}
                    className={`about-skill-card about-reveal ${isVisible ? "is-visible" : ""}`}
                    style={
                      {
                        "--about-delay": `${0.22 + index * 0.08}s`,
                      } as CSSProperties
                    }
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-lg bg-primary/15 p-2 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-foreground">{skill.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span key={`${skill.title}-${item}`} className="about-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <aside
            className={`about-reveal ${isVisible ? "is-visible" : ""}`}
            style={{ "--about-delay": "0.24s" } as CSSProperties}
          >
            <div className="about-glass-panel about-timeline-panel">
              <h3 className="text-2xl font-bold">
                <span className="text-foreground">{t("about.timeline.title")}</span>
              </h3>

              <div className="about-timeline relative mt-8 space-y-7">
                {TIMELINE_YEARS.map((year, index) => (
                  <article key={year} className="timeline-item">
                    <div className="flex items-start gap-4">
                      <span className="w-16 flex-shrink-0 text-xl font-bold text-accent-text md:text-2xl">
                        {year}
                      </span>

                      <div
                        className="flex-1"
                        data-timeline-index={index}
                        ref={(element) => {
                          timelineItemRefs.current[index] = element;
                        }}
                      >
                        <h4
                          className={`about-timeline-title text-lg font-semibold text-foreground ${
                            visibleTimelineItems[index] ? "is-visible" : ""
                          }`}
                          style={
                            {
                              "--about-delay": "0s",
                            } as CSSProperties
                          }
                        >
                          {t(`about.timeline.items.${year}.title`)}
                        </h4>
                        <p
                          className={`about-timeline-description mt-2 text-zinc-300 ${
                            visibleTimelineItems[index] ? "is-visible" : ""
                          }`}
                          style={
                            {
                              "--about-delay": "0.14s",
                            } as CSSProperties
                          }
                        >
                          {t(`about.timeline.items.${year}.description`)}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
