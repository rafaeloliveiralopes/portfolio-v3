import { z } from "zod";

export const Frontmatter = z.object({
  lang: z.enum(["en", "es", "pt"]),
  slug: z.string().min(1),
  title: z.string().min(3),
  description: z.string().min(10),
  date: z.string(), // ISO format
  updated: z.string().optional(),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional(),
  readingTime: z.number().int().positive().optional(),
  translations: z
    .object({
      en: z.string().optional(),
      es: z.string().optional(),
      pt: z.string().optional(),
    })
    .default({}),
  canonical: z.string().optional(),
});

export type FrontmatterT = z.infer<typeof Frontmatter>;
