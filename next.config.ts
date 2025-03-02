import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
	experimental: {
		// NOTE: unable to use these when using the --turbo flag
		// typedRoutes: true,
		// ppr: true,
	},
	eslint: {
		dirs: [
			'app',
			'components',
			'db',
			'drizzle',
			'hooks',
			'lib',
			'tests',
			// Manually include top level files that are not linted
			'./auth.ts',
			'./drizzle.config.ts',
			'./env.ts',
			'./eslint.config.mjs',
			'./postcss.config.mjs',
			'./prettier.config.mjs',
			'./tailwind.config.ts',
		],
	},
};

export default nextConfig;
