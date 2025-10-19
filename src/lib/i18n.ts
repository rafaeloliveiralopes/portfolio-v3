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
      },
      about: {
        title: "About Rafael Lopes",
        subtitle:
          "Developer passionate about transforming ideas into digital solutions that generate real results for small and medium businesses.",
        story1:
          "For over **5 years** I have been helping entrepreneurs digitize their businesses with custom solutions. My approach combines **cutting-edge technology** with **simple language**, ensuring you understand every step of the process.",
        story2:
          "I specialize in creating digital experiences that not only impress visually, but **convert visitors into customers**. Each project is strategically designed to maximize your ROI.",
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
            items: ["React", "Next.js", "TypeScript", "Node.js", "Python"],
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
            items: ["Performance", "SEO", "Conversion", "Measurable ROI"],
          },
        },
      },
      services: {
        title: "Services",
        subtitle: "Complete solutions to boost your digital presence",
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
      },
      about: {
        title: "Sobre Rafael Lopes",
        subtitle:
          "Desenvolvedor apaixonado por transformar ideias em soluções digitais que geram resultados reais para pequenos e médios negócios.",
        story1:
          "Há mais de **5 anos** ajudo empreendedores a digitalizarem seus negócios com soluções sob medida. Minha abordagem combina **tecnologia de ponta** com **linguagem simples**, garantindo que você entenda cada etapa do processo.",
        story2:
          "Especializo-me em criar experiências digitais que não apenas impressionam visualmente, mas **convertem visitantes em clientes**. Cada projeto é pensado estrategicamente para maximizar seu ROI.",
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
            items: ["Performance", "SEO", "Conversão", "ROI Mensurável"],
          },
        },
      },
      services: {
        title: "Serviços",
        subtitle: "Soluções completas para potencializar sua presença digital",
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
      },
      about: {
        title: "Acerca de Rafael Lopes",
        subtitle:
          "Desarrollador apasionado por transformar ideas en soluciones digitales que generan resultados reales para pequeñas y medianas empresas.",
        story1:
          "Durante más de **5 años** he ayudado a emprendedores a digitalizar sus negocios con soluciones a medida. Mi enfoque combina **tecnología de vanguardia** con **lenguaje simple**, asegurando que entiendas cada paso del proceso.",
        story2:
          "Me especializo en crear experiencias digitales que no solo impresionan visualmente, sino que **convierten visitantes en clientes**. Cada proyecto está estratégicamente diseñado para maximizar tu ROI.",
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
            items: ["Rendimiento", "SEO", "Conversión", "ROI Medible"],
          },
        },
      },
      services: {
        title: "Servicios",
        subtitle: "Soluciones completas para potenciar tu presencia digital",
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
