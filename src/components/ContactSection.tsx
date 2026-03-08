import { useMemo, useEffect, useRef, useState } from "react";
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

interface ContactInfoItem {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
}

export const ContactSection = () => {
  const { t, i18n } = useTranslation(["contact", "common"]);
  const { toast } = useToast();
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const contactMethodRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const statsRefs = useRef<Array<HTMLDivElement | null>>([]);
  const formCardRef = useRef<HTMLDivElement | null>(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
  const [visibleContactMethods, setVisibleContactMethods] = useState<
    Record<number, boolean>
  >({});
  const [visibleStats, setVisibleStats] = useState<Record<number, boolean>>({});
  const [isFormCardVisible, setIsFormCardVisible] = useState(false);
  const [isAnimationArmed, setIsAnimationArmed] = useState(false);

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

  // Update resolver when language changes and keep user values
  useEffect(() => {
    const currentValues = form.getValues();
    form.clearErrors();
    // Reset with current values to trigger resolver update with new schema
    form.reset(currentValues, {
      keepValues: true,
      keepDirty: true,
      keepTouched: true,
    });
  }, [i18n.language, form, schema]);

  // Ref to scope DOM queries to the phone input container
  const phoneContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      setIsTitleVisible(true);
      setIsSubtitleVisible(true);
      return;
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotionQuery.matches || !("IntersectionObserver" in window)) {
      setIsTitleVisible(true);
      setIsSubtitleVisible(true);
      return;
    }

    setIsAnimationArmed(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === titleRef.current) {
            setIsTitleVisible(true);
          }

          if (entry.target === subtitleRef.current) {
            setIsSubtitleVisible(true);
          }

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.45,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);

    return () => observer.disconnect();
  }, []);

  // A11y patch: ensure country selector button and listbox have accessible names
  useEffect(() => {
    const container = phoneContainerRef.current;
    if (!container) return;

    // 1) Name the trigger button
    const btn =
      container.querySelector<HTMLButtonElement>(
        ".react-international-phone-country-selector button"
      ) ||
      container.querySelector<HTMLButtonElement>(
        ".react-international-phone-country-selector > button"
      );

    if (btn) {
      btn.id = "country-trigger";
      btn.setAttribute("aria-label", t("contact.form.countrySelector"));
      btn.setAttribute("aria-haspopup", "listbox");
      btn.setAttribute("aria-controls", "country-listbox");
    }

    // 2) Name the listbox (it may render/toggle later)
    const applyListboxAttrs = () => {
      const list = container.querySelector<HTMLUListElement>(
        '.react-international-phone-country-selector-dropdown[role="listbox"]'
      );
      if (list) {
        list.id = "country-listbox";
        list.setAttribute("aria-labelledby", "country-trigger");
      }
    };

    // Run initially and whenever subtree changes (dropdown opens/closes)
    const mo = new MutationObserver(applyListboxAttrs);
    mo.observe(container, { childList: true, subtree: true });
    applyListboxAttrs();

    return () => mo.disconnect();
  }, [i18n.language, t]);

  const contactInfo = useMemo<ContactInfoItem[]>(
    () => [
      {
        icon: Mail,
        title: t("contact.contactInfo.email"),
        value: t("common:contacts.email"),
        href: `mailto:${t("common:contacts.email")}`,
      },
      {
        icon: Phone,
        title: t("contact.contactInfo.whatsapp"),
        value: t("common:contacts.phone"),
        href: buildWhatsAppUrl(
          t("common:contacts.phoneFormatted"),
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

  useEffect(() => {
    if (typeof window === "undefined") {
      setVisibleContactMethods(
        Array.from({ length: contactInfo.length }).reduce<
          Record<number, boolean>
        >((acc, _, index) => ({ ...acc, [index]: true }), {}),
      );
      setVisibleStats({ 0: true, 1: true });
      setIsFormCardVisible(true);
      return;
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotionQuery.matches || !("IntersectionObserver" in window)) {
      setVisibleContactMethods(
        Array.from({ length: contactInfo.length }).reduce<
          Record<number, boolean>
        >((acc, _, index) => ({ ...acc, [index]: true }), {}),
      );
      setVisibleStats({ 0: true, 1: true });
      setIsFormCardVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          const revealType = element.dataset.revealType;
          const revealIndex = Number(element.dataset.revealIndex);

          if (revealType === "contact-method" && !Number.isNaN(revealIndex)) {
            setVisibleContactMethods((prev) =>
              prev[revealIndex] ? prev : { ...prev, [revealIndex]: true },
            );
          }

          if (revealType === "stat" && !Number.isNaN(revealIndex)) {
            setVisibleStats((prev) =>
              prev[revealIndex] ? prev : { ...prev, [revealIndex]: true },
            );
          }

          if (revealType === "form-card") {
            setIsFormCardVisible(true);
          }

          observer.unobserve(element);
        });
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    contactMethodRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    statsRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    if (formCardRef.current) observer.observe(formCardRef.current);

    return () => observer.disconnect();
  }, [contactInfo.length]);

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
    <section
      className={`contact-section py-20 relative ${isAnimationArmed ? "contact-animate" : ""}`}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`contact-title-reveal text-4xl md:text-5xl font-bold mb-6 ${
              isTitleVisible ? "is-visible" : ""
            }`}
          >
            <span className="text-foreground">{t("contact.title")} </span>
            <span className="text-gradient-primary">
              {t("contact.titleHighlight")}
            </span>
          </h2>
          <p
            ref={subtitleRef}
            className={`contact-subtitle-reveal text-xl text-zinc-100 max-w-3xl mx-auto ${
              isSubtitleVisible ? "is-visible" : ""
            }`}
          >
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
                    className={`contact-block-up-reveal flex items-center p-4 bg-card border border-border rounded-xl hover:border-primary/90 transition-all duration-300 hover:shadow-glow group ${
                      visibleContactMethods[index] ? "is-visible" : ""
                    }`}
                    data-reveal-type="contact-method"
                    data-reveal-index={index}
                    ref={(element) => {
                      contactMethodRefs.current[index] = element;
                    }}
                  >
                    <div className="p-3 bg-primary/10 text-primary rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-gradient-secondary transition-colors">
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
              <div
                className={`contact-block-up-reveal text-center p-4 bg-card/50 rounded-xl border border-border ${
                  visibleStats[0] ? "is-visible" : ""
                }`}
                data-reveal-type="stat"
                data-reveal-index={0}
                ref={(element) => {
                  statsRefs.current[0] = element;
                }}
              >
                <div className="text-2xl font-bold text-primary mb-1">
                  {t("contact.stats.responseTimeValue")}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("contact.stats.responseTime")}
                </div>
              </div>
              <div
                className={`contact-block-up-reveal text-center p-4 bg-card/50 rounded-xl border border-border ${
                  visibleStats[1] ? "is-visible" : ""
                }`}
                data-reveal-type="stat"
                data-reveal-index={1}
                ref={(element) => {
                  statsRefs.current[1] = element;
                }}
              >
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
          <div
            className={`contact-block-up-reveal bg-card border border-border rounded-2xl p-8 shadow-elegant ${
              isFormCardVisible ? "is-visible" : ""
            }`}
            data-reveal-type="form-card"
            ref={formCardRef}
          >
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
                        <div className="relative" ref={phoneContainerRef}>
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
                            inputProps={{
                              name: "phone",
                              autoComplete: "tel",
                              "aria-invalid": !!form.formState.errors.phone,
                              "aria-describedby": form.formState.errors.phone
                                ? "phone-error"
                                : undefined,
                            }}
                          />
                        </div>
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
