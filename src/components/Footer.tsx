import { Github, Linkedin, Mail, ExternalLink, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/rafaellopes",
    label: "GitHub"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/rafaellopes",
    label: "LinkedIn"
  },
  {
    icon: Mail,
    href: "mailto:contato@rafaellopes.dev",
    label: "Email"
  }
];

const quickLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Serviços", href: "#serviços" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" }
];

const services = [
  { name: "Sites & Sistemas", href: "#serviços" },
  { name: "Performance & SEO", href: "#serviços" },
  { name: "IA & Automações", href: "#serviços" },
  { name: "Consultoria Tech", href: "#serviços" }
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="text-3xl font-bold mb-4">
                  <span className="text-foreground">Rafael</span>
                  <span className="text-gradient-primary">.Lopes</span>
                  <span className="text-secondary">.dev</span>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  Desenvolvedor especializado em criar soluções digitais que 
                  transformam negócios e geram resultados reais para pequenas 
                  e médias empresas.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <h4 className="font-bold text-lg mb-2 text-foreground">
                  Pronto para começar seu projeto?
                </h4>
                <p className="text-muted-foreground mb-4">
                  Vamos conversar sobre como posso ajudar seu negócio.
                </p>
                <Button 
                  onClick={() => scrollToSection("contato")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Falar Comigo
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-foreground">Navegação</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors hover-underline"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-foreground">Serviços</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <button
                      onClick={() => scrollToSection(service.href)}
                      className="text-muted-foreground hover:text-primary transition-colors hover-underline"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="mt-8">
                <h5 className="font-semibold mb-3 text-foreground">Contato Direto</h5>
                <div className="space-y-2 text-sm">
                  <a 
                    href="mailto:contato@rafaellopes.dev"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    contato@rafaellopes.dev
                  </a>
                  <a 
                    href="https://wa.me/5511999999999"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    +55 (11) 99999-9999
                  </a>
                  <span className="block text-muted-foreground">
                    São Paulo, Brasil
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Rafael Lopes. Todos os direitos reservados.
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-sm text-muted-foreground">
                Feito com ❤️ e muito ☕
              </div>
              
              <button
                onClick={scrollToTop}
                className="p-2 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};