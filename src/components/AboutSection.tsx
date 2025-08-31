import { Code, Palette, Lightbulb, Target } from "lucide-react";

const timeline = [
  {
    year: "2019",
    title: "Início da Jornada",
    description: "Primeiros passos no desenvolvimento web com HTML, CSS e JavaScript"
  },
  {
    year: "2021", 
    title: "Especialização Frontend",
    description: "Domínio de React, TypeScript e ferramentas modernas de desenvolvimento"
  },
  {
    year: "2022",
    title: "Fullstack & DevOps",
    description: "Expansão para backend com Node.js, APIs e infraestrutura cloud"
  },
  {
    year: "2024",
    title: "IA & Automação",
    description: "Integração de soluções de IA e automação para otimizar negócios"
  }
];

const skills = [
  {
    icon: Code,
    title: "Desenvolvimento",
    items: ["React", "Next.js", "TypeScript", "Node.js", "Python"]
  },
  {
    icon: Palette,
    title: "Design & UX", 
    items: ["Figma", "UI/UX Design", "Design Systems", "Prototipagem"]
  },
  {
    icon: Lightbulb,
    title: "Soft Skills",
    items: ["Resolução de Problemas", "Comunicação Clara", "Pensamento Analítico"]
  },
  {
    icon: Target,
    title: "Foco em Resultado",
    items: ["Performance", "SEO", "Conversão", "ROI Mensurável"]
  }
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Sobre </span>
            <span className="text-gradient-primary">Rafael Lopes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvedor apaixonado por transformar ideias em soluções digitais 
            que geram resultados reais para pequenos e médios negócios.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story */}
          <div className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Há mais de <span className="text-primary font-semibold">5 anos</span> ajudo 
                empreendedores a digitalizarem seus negócios com soluções sob medida. 
                Minha abordagem combina <span className="text-secondary">tecnologia de ponta</span> com 
                <span className="text-primary"> linguagem simples</span>, garantindo que você entenda 
                cada etapa do processo.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Especializo-me em criar experiências digitais que não apenas impressionam 
                visualmente, mas <span className="text-gradient-primary font-semibold">convertem visitantes em clientes</span>. 
                Cada projeto é pensado estrategicamente para maximizar seu ROI.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Quando não estou codificando, você me encontra explorando novas tecnologias, 
                estudando tendências de mercado ou ajudando outros desenvolvedores na comunidade.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-4 mt-12">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 group">
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
                          className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
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
              Evolução <span className="text-gradient-secondary">Profissional</span>
            </h3>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item group">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-20">
                      <span className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                        {item.year}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Timeline Line */}
            <div className="absolute left-10 top-12 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};