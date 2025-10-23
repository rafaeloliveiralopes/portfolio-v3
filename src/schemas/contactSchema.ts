import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  phone: z
    .string()
    .max(30, "Phone must be less than 30 characters")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .email("Invalid email address")
    .max(100, "Email must be less than 100 characters"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be less than 5000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
