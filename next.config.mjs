/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['lh3.googleusercontent.com'],
	  },
	compiler: {
		reactRemoveProperties: true,
		styledComponents: true,
	},
};

export default  nextConfig;
