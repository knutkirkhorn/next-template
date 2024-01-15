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
};
