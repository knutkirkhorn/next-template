import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
	experimental: {
		// NOTE: unable to use these when using the --turbo flag
		// typedRoutes: true,
		// ppr: true,
	},
	eslint: {
		dirs: ['app', 'components', 'lib'],
	},
};

export default nextConfig;
