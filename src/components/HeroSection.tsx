import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { sendEvent } from "@/lib/analytics";
import i18n from "@/lib/i18n";

export const HeroSection = () => {
  const { t } = useTranslation(["home", "common"]);
  const phrases = t("hero.typingPhrases", { returnObjects: true }) as string[];
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentPhrase) {
      // Pause after finishing typing
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayText === "") {
      // Change to the next phrase
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      // Write or delete characters
      const speed = isDeleting ? 30 : 50;
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentPhrase.slice(0, prev.length - 1)
            : currentPhrase.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex, phrases]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleCTAClick = (label: string, section: string) => {
    sendEvent("cta_click", { label, section, language: i18n.language });
    scrollToSection(section);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Greeting */}
        <p className="text-lg md:text-xl mb-4 animate-float-up">
          {t("hero.greeting")}
          <span className="wave-hand ml-2 inline-block" aria-hidden="true">
            👋
          </span>
        </p>

        {/* Main Heading */}
        <div
          className="mb-6 animate-float-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient-primary">{t("hero.name")}</span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-secondary">
            {t("hero.title")}
          </p>
        </div>

        {/* Typing Effect Subtitle */}
        <div
          className="mb-8 animate-float-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-xl md:text-2xl text-zinc-300 min-h-[3rem] flex items-center justify-center">
            <span className="inline-block border-r-2 border-primary">
              {displayText}
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-float-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            size="lg"
            onClick={() => handleCTAClick("hero_services", "services")}
            className="bg-[hsl(var(--primary-cta))] text-[hsl(var(--on-primary-cta))] hover:bg-[hsl(var(--primary-cta-hover))] active:bg-[hsl(var(--primary-cta-active))] focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary)/0.4)] shadow-glow text-lg px-8 py-3"
          >
            {t("hero.cta1")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => handleCTAClick("hero_contact", "contact")}
            className="border-[hsl(var(--secondary))] bg-[hsl(var(--background))] text-[hsl(var(--secondary))] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary-foreground))] focus-visible:ring-2 focus-visible:ring-[hsl(var(--secondary)/0.4)] text-lg px-8 py-3"
          >
            {t("hero.cta2")}
          </Button>
        </div>

        {/* Social Links */}
        <div
          className="flex justify-center space-x-6 mb-12 animate-float-up"
          style={{ animationDelay: "0.8s" }}
        >
          {[
            {
              Icon: SiGithub,
              href: "https://github.com/rafaeloliveiralopes",
              label: "GitHub",
              external: true,
            },
            {
              Icon: SiLinkedin,
              href: "https://www.linkedin.com/in/rafael-lopes-desenvolvedor-fullstack",
              label: "LinkedIn",
              external: true,
            },
            {
              Icon: Mail,
              href: "mailto:rafaellopes.dev@gmail.com",
              label: "Email",
            },
          ].map(({ Icon, href, label, external }) => (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <span className="sr-only">{label}</span>
              <Icon
                className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="animate-float-up" style={{ animationDelay: "1s" }}>
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-primary transition-colors group"
            aria-label={t("common:nav.about")}
          >
            <ArrowDown
              className="w-6 h-6 mx-auto animate-bounce group-hover:text-primary"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            />
            <span className="block text-sm mt-2">{t("common:nav.about")}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
