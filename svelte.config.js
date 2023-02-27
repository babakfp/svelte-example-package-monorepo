import adapter from "@sveltejs/adapter-auto"

/** @type {import("@sveltejs/kit").Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'my-package-name': 'src/package/index.js',
		},
	}
}

export default config
