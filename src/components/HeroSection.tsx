import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const phrases = [
  "Soluções digitais sob medida para o seu negócio.",
  "Crio experiências digitais que unem pessoas e tecnologia para gerar valor ao seu negócio.",
  "Crio produtos digitais que dão visibilidade ao seu negócio.",
];

export const HeroSection = () => {
  const { t } = useTranslation();
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timeout: NodeJS.Timeout;

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
  }, [displayText, isDeleting, currentPhraseIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Greeting */}
        <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-float-up">
          {t("hero.greeting")} 👋
        </p>

        {/* Main Heading */}
        <div
          className="mb-6 animate-float-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient-primary">{t("hero.name")}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
            {t("hero.title")}
          </h2>
        </div>

        {/* Typing Effect Subtitle */}
        <div
          className="mb-8 animate-float-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground min-h-[3rem] flex items-center justify-center">
            <span className="inline-block border-r-2 border-primary animate-pulse">
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
            onClick={() => scrollToSection("projetos")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-lg px-8 py-3"
          >
            {t("hero.cta1")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contato")}
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-3"
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
            { Icon: Github, href: "#", label: "GitHub" },
            { Icon: Linkedin, href: "#", label: "LinkedIn" },
            { Icon: Mail, href: "#", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="animate-float-up" style={{ animationDelay: "1s" }}>
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowDown className="w-6 h-6 mx-auto animate-bounce group-hover:text-primary" />
            <span className="block text-sm mt-2">{t("nav.about")}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
