/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
				// hostname: "cloud.appwrite.io",
				pathname: "**",
			},
		],
	},
};

export default nextConfig;
