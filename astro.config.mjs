import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const DEV_PORT = 2121;
const LIVE_URL = 'https://dimassuprianto.github.io/dsuflowbites'

// https://astro.build/config
export default defineConfig({
	site: process.env.CI
		? { 'https://dimassuprianto.github.io/', base: '/dsuflowbites' }
		: `http://localhost:${DEV_PORT}`,
	base: process.env.CI ? '/flowbite-astro-admin-dashboard' : undefined,

	// output: 'server',

	/* Like Vercel, Netlify,… Mimicking for dev. server */
	// trailingSlash: 'always',

	server: {
		/* Dev. server only */
		port: DEV_PORT,
	},

	integrations: [
		//
		sitemap(),
		tailwind(),
	],
});
