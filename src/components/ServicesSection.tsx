import { Monitor, Zap, Bot, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const services = [
  {
    icon: Monitor,
    title: "Sites & Sistemas",
    description: "Do institucional ao sistema sob medida.",
    features: [
      "Sites institucionais que vendem",
      "Landing pages de alta conversão", 
      "Sistemas web sob medida",
      "APIs eficientes e seguras",
      "Manutenção e otimização de performance"
    ],
    expandedFeatures: [
      "Estratégias personalizadas (sob medida + SEO avançado)",
      "Alta performance (responsivo, velocidade, segurança)",
      "Conformidade LGPD/RGPD e boas práticas de proteção de dados",
      "Integrações (pagamentos, WhatsApp, CRM, outras APIs)"
    ],
    color: "primary",
    buttonText: "Falar sobre meu projeto",
    buttonAction: "Começar meu diagnóstico"
  },
  {
    icon: Zap,
    title: "Performance & Auditoria", 
    description: "Acelere, corrija e apareça melhor no Google.",
    features: [
      "Auditoria de performance (Google Lighthouse)",
      "Otimização técnica de SEO",
      "Acessibilidade e segurança", 
      "Redução de erros e quedas",
      "Relatórios práticos e acionáveis"
    ],
    expandedFeatures: [
      "UX melhor: site rápido, responsivo e acessível",
      "Métricas: tráfego orgânico ↑, ranking no Google ↑, conversão ↑",
      "Segurança/conformidade: LGPD/RGPD, mitigação de vulnerabilidades"
    ],
    color: "secondary",
    buttonText: "Começar meu diagnóstico", 
    buttonAction: "Menos detalhes"
  },
  {
    icon: Bot,
    title: "IA & Automações",
    description: "Economize tempo e reduza custos com IA prática.",
    features: [
      "Chatbots de IA personalizados",
      "Automações inteligentes de workflow",
      "Aplicativos de IA sem código",
      "Consultoria estratégica em IA",
      "Integrações: Manychat, n8n, OpenAI, Zapier"
    ],
    expandedFeatures: [
      "Automatize tarefas repetitivas e reduza custos",
      "IA generativa e agentes para atendimento, vendas e recuperação de Leads",
      "Sistemas que aprendem com seus dados (RAG embeddings quando fizer sentido)",
      "Integrações seguras ao seu ecossistema digital",
      "Seu negócio trabalhando 24/7, economia de horas, decisões baseadas em dados"
    ],
    color: "primary",
    buttonText: "Quero um plano de automação",
    buttonAction: "Menos detalhes"
  }
];

export const ServicesSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="serviços" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">O que eu </span>
            <span className="text-gradient-primary">faço</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções digitais para donos de negócios: linguagem simples, 
            entrega rápida e foco em resultado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedCard === index;
            
            return (
              <div key={index} className="service-card group">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg mb-6 ${
                  service.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                }`}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient-primary transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                        service.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                      }`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Expanded Features */}
                {isExpanded && (
                  <div className="mb-6 animate-float-up">
                    <ul className="space-y-3">
                      {service.expandedFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                            service.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                          }`} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <Button 
                  className={`w-full mb-4 ${
                    service.color === 'primary' 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                  }`}
                >
                  {service.buttonText}
                </Button>

                {/* Expand/Collapse Button */}
                <button
                  onClick={() => toggleExpanded(index)}
                  className="flex items-center justify-center w-full text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="mr-2">
                    {isExpanded ? "Menos detalhes" : "Mais detalhes"}
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : ''
                  }`} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};