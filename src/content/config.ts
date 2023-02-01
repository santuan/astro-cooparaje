import { z, defineCollection } from 'astro:content';

const AcceptedTags = [
	"animación",
	"aprendizaje",
	"arte",
	"audios",
	"buscadores",
	"ciencia",
	"clima",
	"colecciones",
	"colores",
	"cuentos",
	"descargas",
	"diagramas",
	"dibujar",
	"diseño",
	"fauna",
	"flora",
	"fotografía",
	"generadores",
	"gradientes",
	"hardware",
	"herramientas",
	"historia",
	"iconos",
	"ilustraciones",
	"imágenes",
	"inspiración",
	"inteligencia artificial",
	"internet",
	"juegos",
	"libre",
	"librerias",
	"libros",
	"literatura",
	"mandalas",
	"mapas",
	"matemática",
	"modelado 3d",
	"museos",
	"música",
	"paises",
	"patrones",
	"países",
	"permacultura",
	"plástico",
	"privacidad",
	"programación",
	"programas",
	"radios",
	"reciclar",
	"reparación",
	"restauración",
	"salud",
	"texturas",
	"tierra",
	"tipografías",
	"universo",
	"ventana",
	"viajar",
	"videos",
	"wiki"
] as const;

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
