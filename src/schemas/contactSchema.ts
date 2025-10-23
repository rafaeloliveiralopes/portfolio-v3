import { z } from "zod";
import i18n from "@/lib/i18n";

export const getContactFormSchema = () => {
  return z.object({
    fullName: z
      .string()
      .min(2, { message: i18n.t("contact.validation.nameMin") })
      .max(100, { message: i18n.t("contact.validation.nameMax") }),
    phone: z
      .string()
      .max(30, { message: i18n.t("contact.validation.phoneMax") })
      .optional()
      .or(z.literal("")),
    email: z
      .string()
      .email({ message: i18n.t("contact.validation.emailInvalid") })
      .max(100, { message: i18n.t("contact.validation.emailMax") }),
    subject: z
      .string()
      .min(1, { message: i18n.t("contact.validation.subjectRequired") })
      .max(200, { message: i18n.t("contact.validation.subjectMax") }),
    message: z
      .string()
      .min(10, { message: i18n.t("contact.validation.messageMin") })
      .max(5000, { message: i18n.t("contact.validation.messageMax") }),
  });
};

export type ContactFormData = z.infer<ReturnType<typeof getContactFormSchema>>;
