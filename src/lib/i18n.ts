import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation resources
const resources = {
  // English Translations
  en: {
    translation: {
      nav: {
        about: "About",
        services: "Services",
        projects: "Projects",
        contact: "Contact",
        blog: "Blog",
        cta: "Let's talk",
      },
      hero: {
        greeting: "Hi, I am",
        name: "Rafael Lopes",
        title: "Full-Stack Developer",
        subtitle:
          "I create digital experiences that combine design and code to generate real results for small and medium businesses.",
        cta1: "View Portfolio",
        cta2: "Get in Touch",
        typingPhrases: [
          "Custom digital solutions for your business.",
          "I create digital experiences that unite people and technology to generate value for your business.",
          "I create digital products that give visibility to your business.",
        ],
      },
      about: {
        title: "About Rafael Lopes",
        subtitle:
          "Developer passionate about transforming ideas into digital solutions.",
        story1:
          "For over **3 years** I have been helping entrepreneurs digitize their businesses with custom solutions. My approach combines **cutting-edge technology** with **simple language**, ensuring you understand every step of the process.",
        story2:
          "I specialize in creating digital experiences that not only make a visual impact but **turn visitors into clients**. Every project starts with a clear strategy: transforming investment into real results.",
        story3:
          "When I'm not coding, you can find me exploring new technologies, studying market trends, or helping other developers in the community.",
        timeline: {
          title: "Professional Evolution",
          items: {
            "2019": {
              title: "Journey Begins",
              description:
                "First steps in web development with HTML, CSS and JavaScript",
            },
            "2021": {
              title: "Frontend Specialization",
              description:
                "Mastery of React, TypeScript and modern development tools",
            },
            "2022": {
              title: "Fullstack & DevOps",
              description:
                "Expansion to backend with Node.js, APIs and cloud infrastructure",
            },
            "2024": {
              title: "AI & Automation",
              description:
                "Integration of AI solutions and automation to optimize businesses",
            },
          },
        },
        skills: {
          development: {
            title: "Development",
            items: ["React", "Java", "TypeScript", "Node.js", "Python"],
          },
          design: {
            title: "Design & UX",
            items: ["Figma", "UI/UX Design", "Design Systems", "Prototyping"],
          },
          soft: {
            title: "Soft Skills",
            items: [
              "Problem Solving",
              "Clear Communication",
              "Analytical Thinking",
            ],
          },
          focus: {
            title: "Result Focused",
            items: ["Performance", "SEO", "Conversion", "Security"],
          },
        },
      },
      services: {
        title: "Services",
        subtitle: "Complete solutions to boost your digital presence",
        moreDetails: "More details",
        lessDetails: "Less details",
        cards: {
          web: {
            title: "Websites & Systems",
            description: "From corporate sites to tailor-made systems.",
            features: [
              "Corporate websites that sell",
              "High-converting landing pages",
              "Custom web systems",
              "Efficient and secure APIs",
              "Maintenance and performance optimization",
            ],
            expandedFeatures: [
              "Personalized strategies (tailor-made + advanced SEO)",
              "High performance (responsive, speed, security)",
              "GDPR/LGPD compliance and data protection best practices",
              "Integrations (payments, WhatsApp, CRM, other APIs)",
            ],
            color: "primary",
            buttonText: "Discuss my project",
          },
          performance: {
            title: "Performance & Audits",
            description: "Speed up, fix issues and rank better on Google.",
            features: [
              "Performance audit (Google Lighthouse)",
              "Technical SEO optimization",
              "Accessibility and security",
              "Error and downtime reduction",
              "Practical, actionable reports",
            ],
            expandedFeatures: [
              "Better UX: fast, responsive and accessible site",
              "Metrics: organic traffic ↑, Google ranking ↑, conversion ↑",
              "Security/compliance: GDPR/LGPD, vulnerability mitigation",
            ],
            color: "secondary",
            buttonText: "Start my diagnosis",
          },
          ai: {
            title: "AI & Automations",
            description: "Save time and reduce costs with practical AI.",
            features: [
              "Custom AI chatbots",
              "Smart workflow automations",
              "No-code AI apps",
              "Strategic AI consulting",
              "Integrations: Manychat, n8n, OpenAI, Zapier",
            ],
            expandedFeatures: [
              "Automate repetitive tasks and reduce costs",
              "Generative AI and agents for support, sales and lead recovery",
              "Systems that learn from your data (RAG embeddings when it makes sense)",
              "Secure integrations with your digital ecosystem",
              "Your business working 24/7, hours saved, data-driven decisions",
            ],
            color: "primary",
            buttonText: "I want an automation plan",
          },
        },
        items: {
          frontend: {
            title: "Frontend Development",
            description:
              "Modern and responsive interfaces that enchant your customers and increase conversions.",
          },
          backend: {
            title: "Integrations & Backend",
            description:
              "Robust APIs, automations and integrations to optimize your business processes.",
          },
          consulting: {
            title: "Tech Consulting",
            description:
              "Performance analysis, SEO and security to maximize the return on your digital investment.",
          },
        },
      },
      portfolio: {
        title: "Featured Projects",
        subtitle:
          "Real solutions that generated concrete results for my clients",
        viewProject: "View Project",
        viewAll: "View All Projects",
        filters: {
          all: "All",
          web: "Web",
          system: "System",
          ai: "AI",
          mobile: "Mobile",
          automation: "Automation",
        },
        aria: {
          viewDemo: "View demo",
          viewCode: "View source code",
        },
        projects: {
          1: {
            title: "Modern E-commerce",
            description:
              "Complete online store with integrated payments and admin dashboard.",
            category: "Web",
            metrics: {
              performance: "+40% conversion",
              seo: "95% Lighthouse",
              users: "10k+ users",
            },
          },
          2: {
            title: "Management System",
            description:
              "Complete platform for managing customers, sales, and real-time reports.",
            category: "System",
            metrics: {
              performance: "50% less time",
              seo: "Full integration",
              users: "500+ companies",
            },
          },
          3: {
            title: "AI Chatbot for Sales",
            description:
              "Smart virtual assistant that qualifies leads and schedules meetings automatically.",
            category: "AI",
            metrics: {
              performance: "24/7 support",
              seo: "300% more leads",
              users: "90% satisfaction",
            },
          },
          4: {
            title: "High-Impact Landing Page",
            description:
              "Conversion-optimized page for a digital product launch campaign.",
            category: "Web",
            metrics: {
              performance: "85% conversion",
              seo: "Top 3 Google",
              users: "50k+ visits",
            },
          },
          5: {
            title: "Mobile Delivery App",
            description:
              "Delivery app with geolocation, integrated payments, and rating system.",
            category: "Mobile",
            metrics: {
              performance: "4.8★ rating",
              seo: "100k+ downloads",
              users: "500+ restaurants",
            },
          },
          6: {
            title: "Marketing Automation",
            description:
              "System integrating CRM, email marketing, and data analysis to maximize sales.",
            category: "Automation",
            metrics: {
              performance: "400% ROI",
              seo: "75% less manual work",
              users: "200+ campaigns",
            },
          },
        },
      },
      testimonials: {
        title: "What Clients Say",
        subtitle:
          "Success stories from entrepreneurs who trusted our expertise",
      },
      contact: {
        title: "Ready to Start?",
        subtitle:
          "Let's transform your idea into a digital solution that generates results",
        form: {
          name: "Your name",
          email: "Your email",
          message: "Tell me about your project",
          send: "Send Message",
        },
        info: {
          title: "Let's build something together",
          subtitle: "I am available for new projects and partnerships",
        },
      },
      footer: {
        rights: "All rights reserved.",
        madeWith: "Made with",
        and: "and",
      },
    },
  },
  // Portuguese Translations
  pt: {
    translation: {
      nav: {
        about: "Sobre",
        services: "Serviços",
        projects: "Projetos",
        contact: "Contato",
        blog: "Blog",
        cta: "Vamos conversar",
      },
      hero: {
        greeting: "Olá, eu sou",
        name: "Rafael Lopes",
        title: "Desenvolvedor Full-Stack",
        subtitle:
          "Crio experiências digitais que unem pessoas e tecnologia para gerar resultados reais no seu negócio.",
        cta1: "Ver Portfólio",
        cta2: "Entrar em Contato",
        typingPhrases: [
          "Soluções digitais sob medida para o seu negócio.",
          "Crio experiências digitais que unem pessoas e tecnologia para gerar valor ao seu negócio.",
          "Crio produtos digitais que dão visibilidade ao seu negócio.",
        ],
      },
      about: {
        title: "Sobre Rafael Lopes",
        subtitle:
          "Desenvolvedor apaixonado por transformar ideias em soluções digitais.",
        story1:
          "Há mais de **3 anos** ajudo empreendedores a digitalizarem seus negócios com soluções sob medida. Minha abordagem combina **tecnologia de ponta** com **linguagem simples**, garantindo que você entenda cada etapa do processo.",
        story2:
          "Especializo-me em criar experiências digitais que não apenas impressionam visualmente, mas **convertem visitantes em clientes**. Todo projeto nasce de uma estratégia clara: transformar investimento em resultado real.",
        story3:
          "Quando não estou codificando, você me encontra explorando novas tecnologias, estudando tendências de mercado ou ajudando outros desenvolvedores na comunidade.",
        timeline: {
          title: "Evolução Profissional",
          items: {
            "2019": {
              title: "Início da Jornada",
              description:
                "Primeiros passos no desenvolvimento web com HTML, CSS e JavaScript",
            },
            "2021": {
              title: "Especialização Frontend",
              description:
                "Domínio de React, TypeScript e ferramentas modernas de desenvolvimento",
            },
            "2022": {
              title: "Fullstack & DevOps",
              description:
                "Expansão para backend com Node.js, APIs e infraestrutura cloud",
            },
            "2024": {
              title: "IA & Automação",
              description:
                "Integração de soluções de IA e automação para otimizar negócios",
            },
          },
        },
        skills: {
          development: {
            title: "Desenvolvimento",
            items: ["React", "Next.js", "TypeScript", "Node.js", "Python"],
          },
          design: {
            title: "Design & UX",
            items: ["Figma", "UI/UX Design", "Design Systems", "Prototipagem"],
          },
          soft: {
            title: "Soft Skills",
            items: [
              "Resolução de Problemas",
              "Comunicação Clara",
              "Pensamento Analítico",
            ],
          },
          focus: {
            title: "Foco em Resultado",
            items: ["Performance", "SEO", "Conversão", "Segurança"],
          },
        },
      },
      services: {
        title: "Serviços",
        subtitle: "Soluções completas para potencializar sua presença digital",
        moreDetails: "Mais detalhes",
        lessDetails: "Menos detalhes",
        cards: {
          web: {
            title: "Sites & Sistemas",
            description: "Do institucional ao sistema sob medida.",
            features: [
              "Sites institucionais que vendem",
              "Landing pages de alta conversão",
              "Sistemas web sob medida",
              "APIs eficientes e seguras",
              "Manutenção e otimização de performance",
            ],
            expandedFeatures: [
              "Estratégias personalizadas (sob medida + SEO avançado)",
              "Alta performance (responsivo, velocidade, segurança)",
              "Conformidade LGPD/RGPD e boas práticas de proteção de dados",
              "Integrações (pagamentos, WhatsApp, CRM, outras APIs)",
            ],
            color: "primary",
            buttonText: "Falar sobre meu projeto",
          },
          performance: {
            title: "Performance & Auditoria",
            description: "Acelere, corrija e apareça melhor no Google.",
            features: [
              "Auditoria de performance (Google Lighthouse)",
              "Otimização técnica de SEO",
              "Acessibilidade e segurança",
              "Redução de erros e quedas",
              "Relatórios práticos e acionáveis",
            ],
            expandedFeatures: [
              "UX melhor: site rápido, responsivo e acessível",
              "Métricas: tráfego orgânico ↑, ranking no Google ↑, conversão ↑",
              "Segurança/conformidade: LGPD/RGPD, mitigação de vulnerabilidades",
            ],
            color: "secondary",
            buttonText: "Começar meu diagnóstico",
          },
          ai: {
            title: "IA & Automações",
            description: "Economize tempo e reduza custos com IA prática.",
            features: [
              "Chatbots de IA personalizados",
              "Automações inteligentes de workflow",
              "Aplicativos de IA sem código",
              "Consultoria estratégica em IA",
              "Integrações: Manychat, n8n, OpenAI, Zapier",
            ],
            expandedFeatures: [
              "Automatize tarefas repetitivas e reduza custos",
              "IA generativa e agentes para atendimento, vendas e recuperação de Leads",
              "Sistemas que aprendem com seus dados (RAG embeddings quando fizer sentido)",
              "Integrações seguras ao seu ecossistema digital",
              "Seu negócio trabalhando 24/7, economia de horas, decisões baseadas em dados",
            ],
            color: "primary",
            buttonText: "Quero um plano de automação",
          },
        },
        items: {
          frontend: {
            title: "Desenvolvimento Frontend",
            description:
              "Interfaces modernas e responsivas que encantam seus clientes e aumentam as conversões.",
          },
          backend: {
            title: "Integrações & Backend",
            description:
              "APIs robustas, automações e integrações para otimizar seus processos de negócio.",
          },
          consulting: {
            title: "Consultoria Tech",
            description:
              "Análise de performance, SEO e segurança para maximizar o retorno do seu investimento digital.",
          },
        },
      },
      portfolio: {
        title: "Projetos em Destaque",
        subtitle:
          "Soluções reais que geraram resultados concretos para meus clientes",
        viewProject: "Ver Projeto",
        viewAll: "Ver Todos os Projetos",
        filters: {
          all: "Todos",
          web: "Web",
          system: "Sistema",
          ai: "IA",
          mobile: "Mobile",
          automation: "Automação",
        },
        aria: {
          viewDemo: "Ver demo",
          viewCode: "Ver código",
        },
        projects: {
          1: {
            title: "E-commerce Moderno",
            description:
              "Loja online completa com sistema de pagamentos integrado e painel administrativo.",
            category: "Web",
            metrics: {
              performance: "+40% conversão",
              seo: "95% Lighthouse",
              users: "10k+ usuários",
            },
          },
          2: {
            title: "Sistema de Gestão",
            description:
              "Plataforma completa para gestão de clientes, vendas e relatórios em tempo real.",
            category: "Sistema",
            metrics: {
              performance: "50% menos tempo",
              seo: "Integração completa",
              users: "500+ empresas",
            },
          },
          3: {
            title: "Chatbot IA para Vendas",
            description:
              "Assistente virtual inteligente que qualifica leads e agenda reuniões automaticamente.",
            category: "IA",
            metrics: {
              performance: "24/7 atendimento",
              seo: "300% mais leads",
              users: "90% satisfação",
            },
          },
          4: {
            title: "Landing Page Alto Impacto",
            description:
              "Página de conversão otimizada para campanha de lançamento de produto digital.",
            category: "Web",
            metrics: {
              performance: "85% conversão",
              seo: "Top 3 Google",
              users: "50k+ visits",
            },
          },
          5: {
            title: "App Mobile Delivery",
            description:
              "Aplicativo de delivery com geolocalização, pagamento integrado e sistema de avaliação.",
            category: "Mobile",
            metrics: {
              performance: "4.8★ rating",
              seo: "100k+ downloads",
              users: "500+ restaurantes",
            },
          },
          6: {
            title: "Automação de Marketing",
            description:
              "Sistema que integra CRM, email marketing e análise de dados para maximizar vendas.",
            category: "Automação",
            metrics: {
              performance: "400% ROI",
              seo: "75% menos trabalho manual",
              users: "200+ campanhas",
            },
          },
        },
      },
      testimonials: {
        title: "O que Dizem os Clientes",
        subtitle:
          "Histórias de sucesso de empreendedores que confiaram na nossa expertise",
      },
      contact: {
        title: "Pronto para Começar?",
        subtitle:
          "Vamos transformar sua ideia em uma solução digital que gera resultados",
        form: {
          name: "Seu nome",
          email: "Seu email",
          message: "Conte-me sobre seu projeto",
          send: "Enviar Mensagem",
        },
        info: {
          title: "Vamos construir algo juntos",
          subtitle: "Estou disponível para novos projetos e parcerias",
        },
      },
      footer: {
        rights: "Todos os direitos reservados.",
        madeWith: "Feito com",
        and: "e",
      },
    },
  },
  // Spanish Translations
  es: {
    translation: {
      nav: {
        about: "Acerca de",
        services: "Servicios",
        projects: "Proyectos",
        contact: "Contacto",
        blog: "Blog",
        cta: "Hablemos",
      },
      hero: {
        greeting: "Hola, soy",
        name: "Rafael Lopes",
        title: "Desarrollador Full-Stack",
        subtitle:
          "Creo experiencias digitales que combinan diseño y código para generar resultados reales para pequeñas y medianas empresas.",
        cta1: "Ver Portafolio",
        cta2: "Contactar",
        typingPhrases: [
          "Soluciones digitales personalizadas para tu negocio.",
          "Creo experiencias digitales que unen personas y tecnología para generar valor a tu negocio.",
          "Creo productos digitales que dan visibilidad a tu negocio.",
        ],
      },
      about: {
        title: "Acerca de Rafael Lopes",
        subtitle:
          "Desarrollador apasionado por transformar ideas en soluciones digitales.",
        story1:
          "Durante más de **5 años** he ayudado a emprendedores a digitalizar sus negocios con soluciones a medida. Mi enfoque combina **tecnología de vanguardia** con **lenguaje simple**, asegurando que entiendas cada paso del proceso.",
        story2:
          "Me especializo en crear experiencias digitales que no solo impresionan visualmente, sino que **convierten visitantes en clientes**. Cada proyecto nace de una estrategia clara: transformar la inversión en resultados reales.",
        story3:
          "Cuando no estoy programando, me puedes encontrar explorando nuevas tecnologías, estudiando tendencias del mercado o ayudando a otros desarrolladores en la comunidad.",
        timeline: {
          title: "Evolución Profesional",
          items: {
            "2019": {
              title: "Comienzo del Viaje",
              description:
                "Primeros pasos en desarrollo web con HTML, CSS y JavaScript",
            },
            "2021": {
              title: "Especialización Frontend",
              description:
                "Dominio de React, TypeScript y herramientas modernas de desarrollo",
            },
            "2022": {
              title: "Fullstack & DevOps",
              description:
                "Expansión al backend con Node.js, APIs e infraestructura cloud",
            },
            "2024": {
              title: "IA & Automatización",
              description:
                "Integración de soluciones de IA y automatización para optimizar negocios",
            },
          },
        },
        skills: {
          development: {
            title: "Desarrollo",
            items: ["React", "Next.js", "TypeScript", "Node.js", "Python"],
          },
          design: {
            title: "Diseño & UX",
            items: [
              "Figma",
              "Diseño UI/UX",
              "Sistemas de Diseño",
              "Prototipado",
            ],
          },
          soft: {
            title: "Habilidades Blandas",
            items: [
              "Resolución de Problemas",
              "Comunicación Clara",
              "Pensamiento Analítico",
            ],
          },
          focus: {
            title: "Enfoque en Resultados",
            items: ["Rendimiento", "SEO", "Conversión", "Seguridad"],
          },
        },
      },
      services: {
        title: "Servicios",
        subtitle: "Soluciones completas para potenciar tu presencia digital",
        moreDetails: "Más detalles",
        lessDetails: "Menos detalles",
        cards: {
          web: {
            title: "Sitios & Sistemas",
            description: "Desde sitios corporativos hasta sistemas a medida.",
            features: [
              "Sitios corporativos que venden",
              "Landing pages de alta conversión",
              "Sistemas web a medida",
              "APIs eficientes y seguras",
              "Mantenimiento y optimización de rendimiento",
            ],
            expandedFeatures: [
              "Estrategias personalizadas (a medida + SEO avanzado)",
              "Alto rendimiento (responsivo, velocidad, seguridad)",
              "Cumplimiento RGPD/LGPD y buenas prácticas de protección de datos",
              "Integraciones (pagos, WhatsApp, CRM, otras APIs)",
            ],
            color: "primary",
            buttonText: "Hablar sobre mi proyecto",
          },
          performance: {
            title: "Rendimiento & Auditoría",
            description: "Acelera, corrige y aparece mejor en Google.",
            features: [
              "Auditoría de rendimiento (Google Lighthouse)",
              "Optimización técnica de SEO",
              "Accesibilidad y seguridad",
              "Reducción de errores y caídas",
              "Informes prácticos y accionables",
            ],
            expandedFeatures: [
              "Mejor UX: sitio rápido, responsivo y accesible",
              "Métricas: tráfico orgánico ↑, ranking en Google ↑, conversión ↑",
              "Seguridad/cumplimiento: RGPD/LGPD, mitigación de vulnerabilidades",
            ],
            color: "secondary",
            buttonText: "Empezar mi diagnóstico",
          },
          ai: {
            title: "IA & Automatizaciones",
            description: "Ahorra tiempo y reduce costos con IA práctica.",
            features: [
              "Chatbots de IA personalizados",
              "Automatizaciones inteligentes de workflow",
              "Aplicaciones de IA sin código",
              "Consultoría estratégica en IA",
              "Integraciones: Manychat, n8n, OpenAI, Zapier",
            ],
            expandedFeatures: [
              "Automatiza tareas repetitivas y reduce costos",
              "IA generativa y agentes para soporte, ventas y recuperación de leads",
              "Sistemas que aprenden con tus datos (RAG embeddings cuando tenga sentido)",
              "Integraciones seguras con tu ecosistema digital",
              "Tu negocio funcionando 24/7, ahorro de horas, decisiones basadas en datos",
            ],
            color: "primary",
            buttonText: "Quiero un plan de automatización",
          },
        },
        items: {
          frontend: {
            title: "Desarrollo Frontend",
            description:
              "Interfaces modernas y responsivas que encantan a tus clientes y aumentan las conversiones.",
          },
          backend: {
            title: "Integraciones & Backend",
            description:
              "APIs robustas, automatizaciones e integraciones para optimizar tus procesos de negocio.",
          },
          consulting: {
            title: "Consultoría Tech",
            description:
              "Análisis de rendimiento, SEO y seguridad para maximizar el retorno de tu inversión digital.",
          },
        },
      },
      portfolio: {
        title: "Proyectos Destacados",
        subtitle:
          "Soluciones reales que generaron resultados concretos para mis clientes",
        viewProject: "Ver Proyecto",
        viewAll: "Ver Todos los Proyectos",
        filters: {
          all: "Todos",
          web: "Web",
          system: "Sistema",
          ai: "IA",
          mobile: "Móvil",
          automation: "Automatización",
        },
        aria: {
          viewDemo: "Ver demo",
          viewCode: "Ver código fuente",
        },
        projects: {
          1: {
            title: "E-commerce Moderno",
            description:
              "Tienda online completa con sistema de pagos integrado y panel administrativo.",
            category: "Web",
            metrics: {
              performance: "+40% conversión",
              seo: "95% Lighthouse",
              users: "10k+ usuarios",
            },
          },
          2: {
            title: "Sistema de Gestión",
            description:
              "Plataforma completa para gestión de clientes, ventas y reportes en tiempo real.",
            category: "Sistema",
            metrics: {
              performance: "50% menos tiempo",
              seo: "Integración completa",
              users: "500+ empresas",
            },
          },
          3: {
            title: "Chatbot IA para Ventas",
            description:
              "Asistente virtual inteligente que califica leads y agenda reuniones automáticamente.",
            category: "IA",
            metrics: {
              performance: "24/7 atención",
              seo: "300% más leads",
              users: "90% satisfacción",
            },
          },
          4: {
            title: "Landing Page de Alto Impacto",
            description:
              "Página de conversión optimizada para campaña de lanzamiento de producto digital.",
            category: "Web",
            metrics: {
              performance: "85% conversión",
              seo: "Top 3 Google",
              users: "50k+ visitas",
            },
          },
          5: {
            title: "App Móvil de Delivery",
            description:
              "Aplicación de delivery con geolocalización, pago integrado y sistema de valoración.",
            category: "Móvil",
            metrics: {
              performance: "4.8★ rating",
              seo: "100k+ descargas",
              users: "500+ restaurantes",
            },
          },
          6: {
            title: "Automatización de Marketing",
            description:
              "Sistema que integra CRM, email marketing y análisis de datos para maximizar ventas.",
            category: "Automatización",
            metrics: {
              performance: "400% ROI",
              seo: "75% menos trabajo manual",
              users: "200+ campañas",
            },
          },
        },
      },
      testimonials: {
        title: "Lo que Dicen los Clientes",
        subtitle:
          "Historias de éxito de emprendedores que confiaron en nuestra experiencia",
      },
      contact: {
        title: "¿Listo para Empezar?",
        subtitle:
          "Transformemos tu idea en una solución digital que genera resultados",
        form: {
          name: "Tu nombre",
          email: "Tu email",
          message: "Cuéntame sobre tu proyecto",
          send: "Enviar Mensaje",
        },
        info: {
          title: "Construyamos algo juntos",
          subtitle: "Estoy disponible para nuevos proyectos y asociaciones",
        },
      },
      footer: {
        rights: "Todos los derechos reservados.",
        madeWith: "Hecho con",
        and: "y",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ["navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
