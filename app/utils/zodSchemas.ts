import { z } from "zod";

export const siteSchmea = z.object({
  name: z.string().min(1).max(35),
  description: z.string().min(1).max(150),
  subdirectory: z.string().min(1).max(40),
});

export const PostSchema = z.object({
  title: z.string().min(1).max(100),
  slug: z.string().min(1).max(190),
  smallDescription: z.string().min(1).max(200),
  coverImage: z.string().min(1),
  articleContent: z.string().min(1),
});
