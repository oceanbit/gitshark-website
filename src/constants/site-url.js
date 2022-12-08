export default () => {
	const buildMode = process.env.BUILD_ENV || "production";
	let siteUrl = process.env.SITE_URL || process.env.VERCEL_URL || "";

	if (!siteUrl) {
		switch (buildMode) {
			case "production":
				siteUrl = "https://gitshark.dev";
				break;
			case "development":
				siteUrl = "http://localhost:3000";
				break;
			default:
				siteUrl = "https://beta.gitshark.dev";
		}
	}

	return {
		buildMode,
		siteUrl,
	};
};
