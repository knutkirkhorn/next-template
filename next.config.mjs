/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
		ppr: true,
	},
	eslint: {
		dirs: ['app', 'components', 'lib'],
	},
};

export default nextConfig;
