import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-cooparaje.vercel.app',
	integrations: [
		tailwind(),
		react(),
		mdx(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
	],
	vite: {
		optimizeDeps: {
			exclude: ['@resvg/resvg-js'],
		},
	},
});
