import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  LucideIcon,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactInfoItem {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
}

export const ContactSection = () => {
  const { t } = useTranslation();

  const contactInfo = useMemo<ContactInfoItem[]>(
    () => [
      {
        icon: Mail,
        title: t("contact.contactInfo.email"),
        value: "rafaellopes.dev@gmail.com",
        href: "mailto:rafaellopes.dev@gmail.com",
      },
      {
        icon: Phone,
        title: t("contact.contactInfo.whatsapp"),
        value: "+55 (62) 99213-6842",
        href: "https://wa.me/5562992136842",
      },
      {
        icon: MapPin,
        title: t("contact.contactInfo.location"),
        value: t("contact.contactInfo.locationValue"),
      },
    ],
    [t]
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title: t("contact.toast.successTitle"),
        description: t("contact.toast.successDescription"),
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: t("contact.toast.errorTitle"),
        description: t("contact.toast.errorDescription"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{t("contact.title")} </span>
            <span className="text-gradient-primary">
              {t("contact.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-zinc-100 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {t("contact.info.title")}{" "}
                <span className="text-gradient-secondary">
                  {t("contact.info.titleHighlight")}
                </span>
              </h3>
              <p className="text-zinc-100 text-lg leading-relaxed mb-8">
                {t("contact.info.description")}
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-300 hover:shadow-glow group"
                  >
                    <div className="p-3 bg-primary/10 text-primary rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {info.title}
                      </div>
                      <div className="text-muted-foreground">{info.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center p-4 bg-card/50 rounded-xl border border-border">
                <div className="text-2xl font-bold text-primary mb-1">24h</div>
                <div className="text-sm text-muted-foreground">
                  {t("contact.stats.responseTime")}
                </div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-xl border border-border">
                <div className="text-2xl font-bold text-secondary mb-1">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("contact.stats.deliveredProjects")}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.form.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t("contact.form.namePlaceholder")}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.form.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t("contact.form.emailPlaceholder")}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.company")}
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder={t("contact.form.companyPlaceholder")}
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t("contact.form.messagePlaceholder")}
                  rows={5}
                  required
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-lg py-3"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                    {t("contact.form.sending")}
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    {t("contact.form.send")}
                  </div>
                )}
              </Button>
            </form>

            {/* Form Footer */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                <span>{t("contact.form.guarantee")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
