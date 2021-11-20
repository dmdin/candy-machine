module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	// TODO refactor ignored modules
	ignorePatterns: [
		'*.cjs',
		'src/lib/metaplex/*',
		'src/lib/metaplex/index',
		'picoplayer.js',
		'phantom',
	],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript'),
	},
	rules: {
		'@typescript-eslint/ban-ts-comment': 'off',
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019,
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
};
