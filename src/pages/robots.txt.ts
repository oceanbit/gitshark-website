import { buildMode, siteUrl } from "../constants/site-config";

export const get = () => {
	let body = "";
	if (buildMode === "production") {
		body = `
# *
User-agent: *
Allow: /

# Host
Host: ${siteUrl}

# Sitemaps
Sitemap: ${siteUrl}/sitemap.xml
`.trim();
	} else {
		body = `
# *
User-agent: *
Disallow: /

# Host
Host: ${siteUrl}

# Sitemaps
Sitemap: ${siteUrl}/sitemap.xml     
        `.trim();
	}
	return { body };
};
