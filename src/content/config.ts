import { z, defineCollection } from 'astro:content';
import { AcceptedTags } from './colecciones';


const resoursesCollection = defineCollection({
	schema: z
		.object({
			title: z.string().max(100),
			featuredImg: z.string(),
			tags: z.array(z.enum(AcceptedTags)).optional(),
			url: z.string().url({ message: 'Invalid url' }),
		})
		.strict(),
});

const spacesCollection = defineCollection({
	schema: z
		.object({
			title: z.string(),
			icono: z.string(),
		})
		.strict(),
});

export const collections = {
	recursos: resoursesCollection,
	colecciones: spacesCollection,
};
