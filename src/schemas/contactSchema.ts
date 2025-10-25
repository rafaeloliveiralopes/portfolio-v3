import { z } from "zod";
import type { TFunction } from "i18next";

export const getContactFormSchema = (t: TFunction) => {
  return z.object({
    fullName: z
      .string()
      .min(2, { message: t("contact.validation.nameMin") })
      .max(100, { message: t("contact.validation.nameMax") }),
    phone: z
      .string()
      .max(30, { message: t("contact.validation.phoneMax") })
      .optional()
      .or(z.literal("")),
    email: z
      .string()
      .email({ message: t("contact.validation.emailInvalid") })
      .max(100, { message: t("contact.validation.emailMax") }),
    subject: z
      .string()
      .min(1, { message: t("contact.validation.subjectRequired") })
      .max(200, { message: t("contact.validation.subjectMax") }),
    message: z
      .string()
      .min(10, { message: t("contact.validation.messageMin") })
      .max(5000, { message: t("contact.validation.messageMax") }),
  });
};

export type ContactFormData = z.infer<ReturnType<typeof getContactFormSchema>>;
