import { useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  LucideIcon,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  getContactFormSchema,
  type ContactFormData,
} from "@/schemas/contactSchema";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { buildWhatsAppUrl } from "@/lib/whatsappUtils";
import { sendEvent } from "@/lib/analytics";
import i18n from "@/lib/i18n";

interface ContactInfoItem {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
}

export const ContactSection = () => {
  const { t, i18n } = useTranslation(["contact", "common"]);
  const { toast } = useToast();

  // Create schema with current language
  const schema = useMemo(() => getContactFormSchema(t), [t]);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Update resolver when language changes
  useEffect(() => {
    form.clearErrors();
  }, [i18n.language, form]);

  const contactInfo = useMemo<ContactInfoItem[]>(
    () => [
      {
        icon: Mail,
        title: t("contact.contactInfo.email"),
        value: t("contacts.email"),
        href: `mailto:${t("contacts.email")}`,
      },
      {
        icon: Phone,
        title: t("contact.contactInfo.whatsapp"),
        value: t("contacts.phone"),
        href: buildWhatsAppUrl(
          t("contacts.phoneFormatted"),
          "whatsapp.ctaMessage",
          {
            name: "Rafael",
          }
        ),
      },
      {
        icon: MapPin,
        title: t("contact.contactInfo.location"),
        value: t("contact.contactInfo.locationValue"),
      },
    ],
    [t]
  );

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send email");
      }

      // Track successful contact form submission
      sendEvent("contact_submit", {
        method: "email",
        language: i18n.language,
      });

      toast({
        title: t("contact.toast.successTitle"),
        description: t("contact.toast.successDescription"),
      });

      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: t("contact.toast.errorTitle"),
        description: t("contact.toast.errorDescription"),
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 relative">
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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.name")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("contact.form.namePlaceholder")}
                            className="bg-background border-border focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.email")}</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder={t("contact.form.emailPlaceholder")}
                            className="bg-background border-border focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.phone")}</FormLabel>
                      <FormControl>
                        <PhoneInput
                          defaultCountry="br"
                          value={field.value}
                          onChange={(phone) => field.onChange(phone)}
                          className="w-full"
                          style={
                            {
                              "--react-international-phone-background-color":
                                "hsl(var(--background))",
                              "--react-international-phone-text-color":
                                "hsl(var(--foreground))",
                              "--react-international-phone-border-color":
                                "hsl(var(--border))",
                            } as React.CSSProperties
                          }
                          placeholder={t("contact.form.phonePlaceholder")}
                          aria-invalid={!!form.formState.errors.phone}
                          aria-describedby={
                            form.formState.errors.phone
                              ? `phone-error`
                              : undefined
                          }
                        />
                      </FormControl>
                      <FormMessage id="phone-error" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.subject")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("contact.form.subjectPlaceholder")}
                          className="bg-background border-border focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.message")}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("contact.form.messagePlaceholder")}
                          rows={5}
                          className="bg-background border-border focus:border-primary resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full bg-[hsl(var(--primary-cta))] text-[hsl(var(--on-primary-cta))] hover:bg-[hsl(var(--primary-cta-hover))] active:bg-[hsl(var(--primary-cta-active))] focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary)/0.4)] shadow-glow text-lg py-3"
                >
                  {form.formState.isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                      {t("contact.form.sending")}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                      />
                      {t("contact.form.send")}
                    </div>
                  )}
                </Button>
              </form>
            </Form>

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
