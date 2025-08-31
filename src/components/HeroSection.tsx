import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Construo experiências digitais que unem design e código.";

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-glow">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Avatar */}
        <div className="mb-8 animate-float-up">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl font-bold text-gradient-primary">
              RL
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-6 animate-float-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-foreground">O que eu </span>
            <span className="text-gradient-primary">faço</span>
          </h1>
        </div>

        {/* Typing Effect Subtitle */}
        <div className="mb-8 animate-float-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-xl md:text-2xl text-muted-foreground h-8 overflow-hidden">
            <span className="inline-block border-r-2 border-primary animate-pulse">
              {displayText}
            </span>
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Soluções digitais para donos de negócios: linguagem simples, 
            entrega rápida e foco em resultado.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-float-up" style={{ animationDelay: "0.6s" }}>
          <Button 
            size="lg"
            onClick={() => scrollToSection("projetos")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-lg px-8 py-3"
          >
            Ver Portfolio
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contato")}
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-3"
          >
            Entrar em Contato
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-float-up" style={{ animationDelay: "0.8s" }}>
          {[
            { Icon: Github, href: "#", label: "GitHub" },
            { Icon: Linkedin, href: "#", label: "LinkedIn" },
            { Icon: Mail, href: "#", label: "Email" }
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
            <span className="block text-sm mt-2">Rolar para baixo</span>
          </button>
        </div>
      </div>
    </section>
  );
};