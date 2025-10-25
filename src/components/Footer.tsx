import { Mail, ExternalLink, ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { buildWhatsAppUrl } from "@/lib/whatsappUtils";

const socialLinks = [
  {
    icon: SiGithub,
    href: "https://github.com/rafaeloliveiralopes",
    label: "GitHub",
  },
  {
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/rafael-lopes-desenvolvedor-fullstack/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:contato@rafaellopes.dev",
    label: "Email",
  },
];

export const Footer = () => {
  const { t } = useTranslation(["common"]);

  // Build the localized WhatsApp URL
  const whatsappUrl = buildWhatsAppUrl(
    t("contacts.phoneFormatted"),
    "whatsapp.ctaMessage",
    {
      name: "Rafael",
    }
  );

  const quickLinks = [
    { name: t("footer.navigation.about"), href: "#about" },
    { name: t("footer.navigation.services"), href: "#services" },
    { name: t("footer.navigation.projects"), href: "#projects" },
    { name: t("footer.navigation.contact"), href: "#contact" },
  ];

  const services = [
    { name: t("footer.services.webSystems"), href: "#services" },
    { name: t("footer.services.performance"), href: "#services" },
    { name: t("footer.services.aiAutomation"), href: "#services" },
    { name: t("footer.services.consulting"), href: "#services" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
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
                  <span className="text-gradient-primary">Lopes</span>
                  <span className="text-secondary">.dev</span>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  {t("footer.brand.description")}
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
                    >
                      <span className="sr-only">{social.label}</span>
                      <Icon
                        className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                      />
                    </a>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <h4 className="font-bold text-lg mb-2 text-foreground">
                  {t("footer.cta.title")}
                </h4>
                <p className="text-muted-foreground mb-4">
                  {t("footer.cta.subtitle")}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-[hsl(var(--primary-cta))] text-[hsl(var(--on-primary-cta))] hover:bg-[hsl(var(--primary-cta-hover))] active:bg-[hsl(var(--primary-cta-active))] focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary)/0.4)]"
                  >
                    {t("footer.cta.fillForm")}
                    <ExternalLink
                      className="w-4 h-4 ml-2"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                    />
                  </Button>

                  <Button
                    asChild
                    className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(180_78%_45%)] active:bg-[hsl(180_78%_40%)] focus-visible:ring-2 focus-visible:ring-[hsl(var(--secondary)/0.4)]"
                  >
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("footer.cta.whatsapp")}
                      <ExternalLink
                        className="w-4 h-4 ml-2"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                      />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-foreground">
                {t("footer.navigation.title")}
              </h4>
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
              <h4 className="font-bold text-lg mb-6 text-foreground">
                {t("footer.services.title")}
              </h4>
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
                <h5 className="font-semibold mb-3 text-foreground">
                  {t("footer.contact.title")}
                </h5>
                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${t("contacts.email")}`}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t("contacts.email")}
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t("contacts.phone")}
                  </a>
                  <span className="block text-muted-foreground">
                    {t("contacts.location")}
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
              © {new Date().getFullYear()} Rafael Lopes.{" "}
              {t("footer.bottom.rights")}
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-sm text-muted-foreground">
                {t("footer.bottom.madeWith")} {t("footer.bottom.love")}{" "}
                {t("footer.bottom.and")} {t("footer.bottom.coffee")}
              </div>

              <button
                onClick={scrollToTop}
                className="p-2 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
                aria-label={t("footer.bottom.backToTop")}
              >
                <span className="sr-only">{t("footer.bottom.backToTop")}</span>
                <ArrowUp
                  className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
