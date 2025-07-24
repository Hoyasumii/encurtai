/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		API_HOST: process.env.API_HOST,
		VERSION: process.env.VERSION,
		DB_HOST: process.env.DB_HOST,
		DAYS_TO_REMOVE_LINK: process.env.DAYS_TO_REMOVE_LINK,
		CRON_SECRET: process.env.CRON_SECRET,
	},
};

export default nextConfig;
