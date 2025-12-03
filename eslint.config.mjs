import js from '@eslint/js';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
	...nextCoreWebVitals,
	...nextTypescript,
	js.configs.recommended,
	eslintPluginUnicorn.configs.recommended,
	eslintConfigPrettier,
	{
		rules: {
			'no-console': 'off',
			'no-plusplus': 'off',
			'no-await-in-loop': 'off',
			'no-restricted-syntax': 'off',
			'no-param-reassign': ['error'],
			'consistent-return': ['error'],
			'no-else-return': ['error'],

			// `import` is included in the Next.js ESLint config
			'import/extensions': 'off',
			'import/prefer-default-export': 'off',
			'import/no-anonymous-default-export': 'off',

			// `react` is included in the Next.js ESLint config
			'react/jsx-indent': ['error', 'tab'],
			'react/jsx-indent-props': ['error', 'tab'],
			'react/jsx-filename-extension': [
				'error',
				{
					extensions: ['.tsx'],
				},
			],
			'react/prop-types': 'off',
			'react/jsx-props-no-spreading': 'off',
			'react/require-default-props': 'off',
		},
	},
	{
		ignores: [
			'node_modules/**',
			'.next/**',
			'out/**',
			'build/**',
			'next-env.d.ts',
		],
	},
];
