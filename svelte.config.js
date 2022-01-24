import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
console.log(process.env);
process.env.VITE_API_BASE = process.env.VITE_API_BASE ? 'http://laravel.test/api' : 'https://api.svelte.dev';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
