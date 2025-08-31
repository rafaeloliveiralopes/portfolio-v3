import { useState, useEffect } from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "CEO, Boutique Elegance",
    company: "Moda Feminina",
    content: "O Rafael transformou completamente nossa presença online. Nossas vendas aumentaram 300% no primeiro trimestre após o lançamento do site. A comunicação foi clara em todo o processo.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b796?w=80&q=80"
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Diretor",
    company: "TechSolutions Ltda",
    content: "Precisávamos de um sistema complexo de gestão e o Rafael entregou além das expectativas. O sistema reduziu nosso tempo de processamento em 50% e a equipe se adaptou rapidamente.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80"
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Fundadora",
    company: "Nutrição Vital",
    content: "O chatbot de IA que o Rafael desenvolveu para nossa clínica revolucionou o atendimento. Conseguimos qualificar leads 24/7 e nossa taxa de conversão dobrou. Excelente trabalho!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80"
  },
  {
    id: 4,
    name: "João Santos",
    role: "Proprietário",
    company: "Santos Advocacia",
    content: "A landing page desenvolvida pelo Rafael para nossa campanha de captação de clientes superou todas as métricas. Taxa de conversão de 40% e posicionamento no topo do Google.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80"
  },
  {
    id: 5,
    name: "Patrícia Oliveira", 
    role: "Gerente de Marketing",
    company: "Digital Agency Pro",
    content: "Contratamos o Rafael para otimizar a performance de nossos sites de clientes. Os resultados foram impressionantes: melhoria média de 60% no Lighthouse Score e aumento significativo no tráfego orgânico.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-secondary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-primary/50 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">O que dizem </span>
            <span className="text-gradient-primary">meus clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reais de negócios que confiaram em meu trabalho para 
            transformar sua presença digital.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-elegant">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-primary text-primary" 
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-lg md:text-xl text-center text-muted-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-primary/20"
                />
                <div className="text-left">
                  <div className="font-bold text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-primary font-medium">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 bg-card border border-border rounded-full hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              aria-label="Depoimento anterior"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 bg-card border border-border rounded-full hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              aria-label="Próximo depoimento"
            >
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-border hover:bg-primary/50"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {isAutoPlaying ? "Pausar" : "Reproduzir"} reprodução automática
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">
            Quer ser o próximo <span className="text-gradient-primary">caso de sucesso</span>?
          </h3>
          <p className="text-muted-foreground mb-6">
            Vamos conversar sobre como posso ajudar seu negócio a alcançar resultados similares.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
          >
            Começar Meu Projeto
          </Button>
        </div>
      </div>
    </section>
  );
};