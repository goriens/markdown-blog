import { z } from "zod";

export const BlogFormSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  image_url: z.string().url({
    message: "Invalid URL",
  }),
  content: z.string().min(50, {
    message: "Content must be at least 50 characters.",
  }),
  is_published: z.boolean(),
  is_premium: z.boolean(),
});
