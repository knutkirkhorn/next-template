/** @type {import("prettier").Config} */
module.exports = {
	arrowParens: 'avoid',
	bracketSpacing: false,
	semi: true,
	singleQuote: true,
	quoteProps: 'as-needed',
	trailingComma: 'all',
	printWidth: 80,
	useTabs: true,
	overrides: [
		{
			files: '*.yaml',
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
	importOrder: [
		'^(react/(.*)$)|^(react$)',
		'^(next/(.*)$)|^(next$)',
		'<THIRD_PARTY_MODULES>',
		'',
		'^types$',
		'^@/types/(.*)$',
		'^@/config/(.*)$',
		'^@/lib/(.*)$',
		'^@/hooks/(.*)$',
		'^@/components/ui/(.*)$',
		'^@/components/(.*)$',
		'^@/registry/(.*)$',
		'^@/styles/(.*)$',
		'^@/app/(.*)$',
		'',
		'^[./]',
	],
	plugins: [
		'prettier-plugin-tailwindcss',
		'@ianvs/prettier-plugin-sort-imports',
	],
};
