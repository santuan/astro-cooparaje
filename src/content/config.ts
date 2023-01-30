import { z, defineCollection } from 'astro:content';


const resoursesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    featuredImg: z.string(),
    tags: z.array(z.string()).optional(),
    url: z.string().url({ message: "Invalid url" }),
  }),
});

export const collections = {
  'recursos': resoursesCollection,
};