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
        cta1: "View Services",
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
            "2023": {
              title: "Software Engineering",
              description: "Started Bachelor's degree in Software Engineering",
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
          "Custom solutions that strengthen your business competitiveness",
        viewProject: "View Project",
        viewAll: "View All Projects",
        techStack: "Technologies:",
        filters: {
          all: "All",
          web: "Web",
          system: "System",
          ai: "AI",
          automation: "Automation",
        },
        aria: {
          viewDemo: "View demo",
          viewCode: "View source code",
        },
        projects: {
          1: {
            title: "Landing Page",
            description:
              "Professional landing page for beauty studios, focused on visibility, client acquisition, and service valorization.",
            category: "Web",
            metrics: {
              performance: "+20% conversion",
              seo: "95% Lighthouse",
              users: "100+ visitors",
            },
          },
          2: {
            title: "Registration System",
            description:
              "Complete platform for managing more than 700 members of a Quilombola NGO.",
            category: "System",
            metrics: {
              performance: "50% faster queries",
              compliance: "LGPD compliance",
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
          "Real results from businesses that trusted my work to transform their digital presence.",
        autoplay: "Autoplay",
        pause: "Pause",
        play: "Play",
        previous: "Previous testimonial",
        next: "Next testimonial",
        goTo: "Go to testimonial",
        cta: {
          title: "Want to be the next",
          titleHighlight: "success story",
          subtitle:
            "Let's talk about how I can help your business achieve similar results.",
          button: "Start My Project",
        },
        items: {
          1: {
            name: "Maria Silva",
            role: "CEO",
            company: "Boutique Elegance",
            content:
              "Rafael completely transformed our online presence. Our sales increased 300% in the first quarter after the website launch. The communication was clear throughout the process.",
          },
          2: {
            name: "Carlos Mendes",
            role: "Director",
            company: "TechSolutions Ltd",
            content:
              "We needed a complex management system and Rafael delivered beyond expectations. The system reduced our processing time by 50% and the team adapted quickly.",
          },
          3: {
            name: "Ana Costa",
            role: "Founder",
            company: "Vital Nutrition",
            content:
              "The AI chatbot Rafael developed for our clinic revolutionized customer service. We can qualify leads 24/7 and our conversion rate doubled. Excellent work!",
          },
          4: {
            name: "João Santos",
            role: "Owner",
            company: "Santos Law Firm",
            content:
              "The landing page Rafael developed for our client acquisition campaign exceeded all metrics. 20% conversion rate and top positioning on Google.",
          },
          5: {
            name: "Patrícia Oliveira",
            role: "Marketing Manager",
            company: "Digital Agency Pro",
            content:
              "We hired Rafael to optimize the performance of our clients' websites. The results were impressive: 60% average improvement in Lighthouse Score and significant increase in organic traffic.",
          },
        },
      },
      contact: {
        title: "Let's",
        titleHighlight: "talk?",
        subtitle:
          "Ready to transform your idea into reality? Get in touch and let's build something amazing together.",
        info: {
          title: "Get in",
          titleHighlight: "touch",
          description:
            "I am always available to discuss new projects, partnerships, or simply exchange ideas about technology. Choose the most convenient way for you.",
        },
        contactInfo: {
          email: "Email",
          whatsapp: "WhatsApp",
          location: "Location",
          locationValue: "Uruaçu-Goiás, Brazil",
        },
        stats: {
          responseTime: "Response time",
          deliveredProjects: "Delivered projects",
        },
        form: {
          name: "Name *",
          namePlaceholder: "Your full name",
          email: "Email *",
          emailPlaceholder: "your@email.com",
          phone: "Phone",
          phonePlaceholder: "+55 (00) 00000-0000 (optional)",
          subject: "Subject *",
          subjectPlaceholder: "What would you like to discuss?",
          company: "Company",
          companyPlaceholder: "Your company name (optional)",
          message: "Message *",
          messagePlaceholder: "Tell me about your project or idea...",
          send: "Send Message",
          sending: "Sending...",
          guarantee:
            "Response guaranteed within 24 hours. Your data is protected.",
        },
        validation: {
          nameMin: "Name must be at least 2 characters",
          nameMax: "Name must be less than 100 characters",
          emailInvalid: "Invalid email address",
          emailMax: "Email must be less than 100 characters",
          phoneMax: "Phone must be less than 30 characters",
          subjectRequired: "Subject is required",
          subjectMax: "Subject must be less than 200 characters",
          messageMin: "Message must be at least 10 characters",
          messageMax: "Message must be less than 5000 characters",
        },
        toast: {
          successTitle: "Message sent successfully!",
          successDescription: "I'll get in touch soon. Thank you!",
          errorTitle: "Error sending message",
          errorDescription: "Try again or contact directly.",
        },
      },
      footer: {
        brand: {
          description:
            "Developer specialized in creating digital solutions that transform businesses and generate real results for small and medium enterprises.",
        },
        cta: {
          title: "Ready to start your project?",
          subtitle: "Let's talk about how I can help your business.",
          fillForm: "Fill Form",
          whatsapp: "Talk on WhatsApp",
        },
        navigation: {
          title: "Navigation",
          about: "About",
          services: "Services",
          projects: "Projects",
          contact: "Contact",
        },
        services: {
          title: "Services",
          webSystems: "Websites & Systems",
          performance: "Performance & SEO",
          aiAutomation: "AI & Automations",
          consulting: "Tech Consulting",
        },
        contact: {
          title: "Direct Contact",
          location: "Uruaçu-Goiás, Brazil",
        },
        bottom: {
          rights: "All rights reserved.",
          madeWith: "Made with",
          love: "❤️",
          and: "and lots of",
          coffee: "☕",
          backToTop: "Back to top",
        },
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
        cta1: "Ver Serviços",
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
            "2023": {
              title: "Engenharia de Software",
              description: "Início da graduação em Engenharia de Software",
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
            items: ["React", "Java", "TypeScript", "Node.js", "Python"],
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
          "Soluções sob medida que fortalecem a competitividade do seu negócio",
        viewProject: "Ver Projeto",
        viewAll: "Ver Todos os Projetos",
        techStack: "Tecnologias:",
        filters: {
          all: "Todos",
          web: "Web",
          system: "Sistema",
          ai: "IA",
          automation: "Automação",
        },
        aria: {
          viewDemo: "Ver demo",
          viewCode: "Ver código",
        },
        projects: {
          1: {
            title: "Landing Page",
            description:
              "Landing page profissional para studios de beleza, com foco em visibilidade, captação de clientes e valorização dos serviços.",
            category: "Web",
            // metrics: {
            //   performance: "+20% conversão",
            //   seo: "95% Lighthouse",
            //   users: "100+ visitantes",
            // },
          },
          2: {
            title: "Sistema de Cadastro",
            description:
              "Plataforma segura e eficiente para gestão de mais de 700 associados da Associação Quilombola Urbana João Borges Vieira, com foco em privacidade e conformidade com a LGPD.",
            category: "Sistema",
            // metrics: {
            //   performance: "Consultas 50% mais rápidas",
            //   compliance: "Conformidade com a LGPD",
            // },
          },
          3: {
            title: "Chatbot IA para Vendas",
            description:
              "Assistente virtual inteligente que qualifica leads e agenda reuniões automaticamente.",
            category: "IA",
            // metrics: {
            //   performance: "24/7 atendimento",
            //   seo: "300% mais leads",
            //   users: "90% satisfação",
            // },
          },
          4: {
            title: "Landing Page Alto Impacto",
            description:
              "Página de conversão otimizada para campanha de lançamento de produto digital.",
            category: "Web",
            // metrics: {
            //   performance: "85% conversão",
            //   seo: "Top 3 Google",
            //   users: "50k+ visits",
            // },
          },
          5: {
            title: "App Mobile Delivery",
            description:
              "Aplicativo de delivery com geolocalização, pagamento integrado e sistema de avaliação.",
            category: "Mobile",
            // metrics: {
            //   performance: "4.8★ rating",
            //   seo: "100k+ downloads",
            //   users: "500+ restaurantes",
            // },
          },
          6: {
            title: "Automação de Marketing",
            description:
              "Sistema que integra CRM, email marketing e análise de dados para maximizar vendas.",
            category: "Automação",
            // metrics: {
            //   performance: "400% ROI",
            //   seo: "75% menos trabalho manual",
            //   users: "200+ campanhas",
            // },
          },
        },
      },
      testimonials: {
        title: "O que Dizem os Clientes",
        subtitle:
          "Resultados reais de negócios que confiaram em meu trabalho para transformar sua presença digital.",
        autoplay: "Reprodução automática",
        pause: "Pausar",
        play: "Reproduzir",
        previous: "Depoimento anterior",
        next: "Próximo depoimento",
        goTo: "Ir para depoimento",
        cta: {
          title: "Quer ser o próximo",
          titleHighlight: "caso de sucesso",
          subtitle:
            "Vamos conversar sobre como posso ajudar seu negócio a alcançar resultados similares.",
          button: "Começar Meu Projeto",
        },
        items: {
          1: {
            name: "Maria Silva",
            role: "CEO",
            company: "Boutique Elegance",
            content:
              "O Rafael transformou completamente nossa presença online. Nossas vendas aumentaram 300% no primeiro trimestre após o lançamento do site. A comunicação foi clara em todo o processo.",
          },
          2: {
            name: "Carlos Mendes",
            role: "Diretor",
            company: "TechSolutions Ltda",
            content:
              "Precisávamos de um sistema complexo de gestão e o Rafael entregou além das expectativas. O sistema reduziu nosso tempo de processamento em 50% e a equipe se adaptou rapidamente.",
          },
          3: {
            name: "Ana Costa",
            role: "Fundadora",
            company: "Nutrição Vital",
            content:
              "O chatbot de IA que o Rafael desenvolveu para nossa clínica revolucionou o atendimento. Conseguimos qualificar leads 24/7 e nossa taxa de conversão dobrou. Excelente trabalho!",
          },
          4: {
            name: "João Santos",
            role: "Proprietário",
            company: "Santos Advocacia",
            content:
              "A landing page desenvolvida pelo Rafael para nossa campanha de captação de clientes superou todas as métricas. Taxa de conversão de 20% e posicionamento no topo do Google.",
          },
          5: {
            name: "Patrícia Oliveira",
            role: "Gerente de Marketing",
            company: "Digital Agency Pro",
            content:
              "Contratamos o Rafael para otimizar a performance de nossos sites de clientes. Os resultados foram impressionantes: melhoria média de 60% no Lighthouse Score e aumento significativo no tráfego orgânico.",
          },
        },
      },
      contact: {
        title: "Vamos",
        titleHighlight: "conversar?",
        subtitle:
          "Pronto para transformar sua ideia em realidade? Entre em contato e vamos construir algo incrível juntos.",
        info: {
          title: "Entre em",
          titleHighlight: "contato",
          description:
            "Estou sempre disponível para discutir novos projetos, parcerias ou simplesmente trocar ideias sobre tecnologia. Escolha a forma mais conveniente para você.",
        },
        contactInfo: {
          email: "Email",
          whatsapp: "WhatsApp",
          location: "Localização",
          locationValue: "Uruaçu-Goiás, Brasil",
        },
        stats: {
          responseTime: "Tempo de resposta",
          deliveredProjects: "Projetos entregues",
        },
        form: {
          name: "Nome *",
          namePlaceholder: "Seu nome completo",
          email: "Email *",
          emailPlaceholder: "seu@email.com",
          phone: "Telefone",
          phonePlaceholder: "+55 (00) 00000-0000 (opcional)",
          subject: "Assunto *",
          subjectPlaceholder: "Sobre o que gostaria de conversar?",
          company: "Empresa",
          companyPlaceholder: "Nome da sua empresa (opcional)",
          message: "Mensagem *",
          messagePlaceholder: "Conte-me sobre seu projeto ou ideia...",
          send: "Enviar Mensagem",
          sending: "Enviando...",
          guarantee:
            "Resposta garantida em até 24 horas. Seus dados estão protegidos.",
        },
        validation: {
          nameMin: "O nome deve ter pelo menos 2 caracteres",
          nameMax: "O nome deve ter menos de 100 caracteres",
          emailInvalid: "Endereço de email inválido",
          emailMax: "O email deve ter menos de 100 caracteres",
          phoneMax: "O telefone deve ter menos de 30 caracteres",
          subjectRequired: "O assunto é obrigatório",
          subjectMax: "O assunto deve ter menos de 200 caracteres",
          messageMin: "A mensagem deve ter pelo menos 10 caracteres",
          messageMax: "A mensagem deve ter menos de 5000 caracteres",
        },
        toast: {
          successTitle: "Mensagem enviada com sucesso!",
          successDescription: "Entrarei em contato em breve. Obrigado!",
          errorTitle: "Erro ao enviar mensagem",
          errorDescription: "Tente novamente ou entre em contato diretamente.",
        },
      },
      footer: {
        brand: {
          description:
            "Desenvolvedor especializado em criar soluções digitais que transformam negócios e geram resultados reais para pequenas e médias empresas.",
        },
        cta: {
          title: "Pronto para começar seu projeto?",
          subtitle: "Vamos conversar sobre como posso ajudar seu negócio.",
          fillForm: "Preencher Formulário",
          whatsapp: "Falar no WhatsApp",
        },
        navigation: {
          title: "Navegação",
          about: "Sobre",
          services: "Serviços",
          projects: "Projetos",
          contact: "Contato",
        },
        services: {
          title: "Serviços",
          webSystems: "Sites & Sistemas",
          performance: "Performance & SEO",
          aiAutomation: "IA & Automações",
          consulting: "Consultoria Tech",
        },
        contact: {
          title: "Contato Direto",
          location: "Uruaçu-Goiás, Brasil",
        },
        bottom: {
          rights: "Todos os direitos reservados.",
          madeWith: "Feito com",
          love: "❤️",
          and: "e muito",
          coffee: "☕",
          backToTop: "Voltar ao topo",
        },
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
        cta1: "Ver Servicios",
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
            "2023": {
              title: "Ingeniería de Software",
              description: "Inicio de la carrera en Ingeniería de Software",
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
            items: ["React", "Java", "TypeScript", "Node.js", "Python"],
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
          "Soluciones a medida que fortalecen la competitividad de tu negocio",
        viewProject: "Ver Proyecto",
        viewAll: "Ver Todos los Proyectos",
        techStack: "Tecnologías:",
        filters: {
          all: "Todos",
          web: "Web",
          system: "Sistema",
          ai: "IA",
          utomation: "Automatización",
        },
        aria: {
          viewDemo: "Ver demo",
          viewCode: "Ver código fuente",
        },
        projects: {
          1: {
            title: "Landing Page",
            description:
              "Landing page profesional para estudios de belleza, enfocada en visibilidad, captación de clientes y valorización de servicios.",
            category: "Web",
            // metrics: {
            //   performance: "+20% conversión",
            //   seo: "95% Lighthouse",
            //   users: "100+ visitantes",
            // },
          },
          2: {
            title: "Sistema de Gestión",
            description:
              "Plataforma completa para gestión de clientes, ventas y reportes en tiempo real.",
            category: "Sistema",
            // metrics: {
            //   performance: "Consultas 50% más rápidas",
            //   compliance: "Cumplimiento RGPD",
            // },
          },
          3: {
            title: "Chatbot IA para Ventas",
            description:
              "Asistente virtual inteligente que califica leads y agenda reuniones automáticamente.",
            category: "IA",
            // metrics: {
            //   performance: "24/7 atención",
            //   seo: "300% más leads",
            //   users: "90% satisfacción",
            // },
          },
          4: {
            title: "Landing Page de Alto Impacto",
            description:
              "Página de conversión optimizada para campaña de lanzamiento de producto digital.",
            category: "Web",
            // metrics: {
            //   performance: "85% conversión",
            //   seo: "Top 3 Google",
            //   users: "50k+ visitas",
            // },
          },
          5: {
            title: "App Móvil de Delivery",
            description:
              "Aplicación de delivery con geolocalización, pago integrado y sistema de valoración.",
            category: "Móvil",
            // metrics: {
            //   performance: "4.8★ rating",
            //   seo: "100k+ descargas",
            //   users: "500+ restaurantes",
            // },
          },
          6: {
            title: "Automatización de Marketing",
            description:
              "Sistema que integra CRM, email marketing y análisis de datos para maximizar ventas.",
            category: "Automatización",
            // metrics: {
            //   performance: "400% ROI",
            //   seo: "75% menos trabajo manual",
            //   users: "200+ campañas",
            // },
          },
        },
      },
      testimonials: {
        title: "Lo que Dicen los Clientes",
        subtitle:
          "Resultados reales de negocios que confiaron en mi trabajo para transformar su presencia digital.",
        autoplay: "Reproducción automática",
        pause: "Pausar",
        play: "Reproducir",
        previous: "Testimonio anterior",
        next: "Siguiente testimonio",
        goTo: "Ir al testimonio",
        cta: {
          title: "¿Quieres ser el próximo",
          titleHighlight: "caso de éxito",
          subtitle:
            "Conversemos sobre cómo puedo ayudar a tu negocio a alcanzar resultados similares.",
          button: "Empezar Mi Proyecto",
        },
        items: {
          1: {
            name: "María Silva",
            role: "CEO",
            company: "Boutique Elegance",
            content:
              "Rafael transformó completamente nuestra presencia online. Nuestras ventas aumentaron 300% en el primer trimestre después del lanzamiento del sitio. La comunicación fue clara durante todo el proceso.",
          },
          2: {
            name: "Carlos Mendes",
            role: "Director",
            company: "TechSolutions Ltda",
            content:
              "Necesitábamos un sistema complejo de gestión y Rafael entregó más allá de las expectativas. El sistema redujo nuestro tiempo de procesamiento en 50% y el equipo se adaptó rápidamente.",
          },
          3: {
            name: "Ana Costa",
            role: "Fundadora",
            company: "Nutrición Vital",
            content:
              "El chatbot de IA que Rafael desarrolló para nuestra clínica revolucionó la atención. Podemos calificar leads 24/7 y nuestra tasa de conversión se duplicó. ¡Excelente trabajo!",
          },
          4: {
            name: "João Santos",
            role: "Propietario",
            company: "Santos Abogacía",
            content:
              "La landing page desarrollada por Rafael para nuestra campaña de captación de clientes superó todas las métricas. Tasa de conversión del 20% y posicionamiento en el top de Google.",
          },
          5: {
            name: "Patricia Oliveira",
            role: "Gerente de Marketing",
            company: "Digital Agency Pro",
            content:
              "Contratamos a Rafael para optimizar el rendimiento de los sitios de nuestros clientes. Los resultados fueron impresionantes: mejora promedio del 60% en el Lighthouse Score y aumento significativo en el tráfico orgánico.",
          },
        },
      },
      contact: {
        title: "¿Hablamos?",
        titleHighlight: "",
        subtitle:
          "¿Listo para transformar tu idea en realidad? Ponte en contacto y construyamos algo increíble juntos.",
        info: {
          title: "Ponte en",
          titleHighlight: "contacto",
          description:
            "Siempre estoy disponible para discutir nuevos proyectos, asociaciones o simplemente intercambiar ideas sobre tecnología. Elige la forma más conveniente para ti.",
        },
        contactInfo: {
          email: "Email",
          whatsapp: "WhatsApp",
          location: "Ubicación",
          locationValue: "Uruaçu-Goiás, Brasil",
        },
        stats: {
          responseTime: "Tiempo de respuesta",
          deliveredProjects: "Proyectos entregados",
        },
        form: {
          name: "Nombre *",
          namePlaceholder: "Tu nombre completo",
          email: "Email *",
          emailPlaceholder: "tu@email.com",
          phone: "Teléfono",
          phonePlaceholder: "+55 (00) 00000-0000",
          subject: "Asunto *",
          subjectPlaceholder: "¿Sobre qué te gustaría hablar?",
          company: "Empresa",
          companyPlaceholder: "Nombre de tu empresa (opcional)",
          message: "Mensaje *",
          messagePlaceholder: "Cuéntame sobre tu proyecto o idea...",
          send: "Enviar Mensaje",
          sending: "Enviando...",
          guarantee:
            "Respuesta garantizada en 24 horas. Tus datos están protegidos.",
        },
        validation: {
          nameMin: "El nombre debe tener al menos 2 caracteres",
          nameMax: "El nombre debe tener menos de 100 caracteres",
          emailInvalid: "Dirección de email inválida",
          emailMax: "El email debe tener menos de 100 caracteres",
          phoneMax: "El teléfono debe tener menos de 30 caracteres",
          subjectRequired: "El asunto es obligatorio",
          subjectMax: "El asunto debe tener menos de 200 caracteres",
          messageMin: "El mensaje debe tener al menos 10 caracteres",
          messageMax: "El mensaje debe tener menos de 5000 caracteres",
        },
        toast: {
          successTitle: "¡Mensaje enviado con éxito!",
          successDescription: "Me pondré en contacto pronto. ¡Gracias!",
          errorTitle: "Error al enviar mensaje",
          errorDescription: "Intenta nuevamente o contacta directamente.",
        },
      },
      footer: {
        brand: {
          description:
            "Desarrollador especializado en crear soluciones digitales que transforman negocios y generan resultados reales para pequeñas y medianas empresas.",
        },
        cta: {
          title: "¿Listo para empezar tu proyecto?",
          subtitle: "Conversemos sobre cómo puedo ayudar a tu negocio.",
          fillForm: "Llenar Formulario",
          whatsapp: "Hablar en WhatsApp",
        },
        navigation: {
          title: "Navegación",
          about: "Acerca de",
          services: "Servicios",
          projects: "Proyectos",
          contact: "Contacto",
        },
        services: {
          title: "Servicios",
          webSystems: "Sitios & Sistemas",
          performance: "Rendimiento & SEO",
          aiAutomation: "IA & Automatizaciones",
          consulting: "Consultoría Tech",
        },
        contact: {
          title: "Contacto Directo",
          location: "Uruaçu-Goiás, Brasil",
        },
        bottom: {
          rights: "Todos los derechos reservados.",
          madeWith: "Hecho con",
          love: "❤️",
          and: "y mucho",
          coffee: "☕",
          backToTop: "Volver arriba",
        },
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
