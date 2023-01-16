import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess'
import importAssets from 'svelte-preprocess-import-assets'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			scss: {
				prependData: '@use "sass:math";\n@use "sass:list";\n@use "sass:color";',
			},
		}),
		importAssets(),
	],
	
	kit: {
		adapter: adapter(),
		
	},
};

export default config;
