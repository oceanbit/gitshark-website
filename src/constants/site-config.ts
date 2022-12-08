import getSiteUrlAndBuildMode from "./site-url";
const { siteUrl, buildMode } = getSiteUrlAndBuildMode();
// To set for Twitch
let parent: string;

// Try & Catch to allow for hosts themselves to be passed
// `new URL('domain.com')` will fail/throw, but is a valid host
try {
	const url = new URL(siteUrl);
	// URLs like 'localhost:3000' might not give host.
	// Throw in order to catch in wrapper handler
	if (!url.host) throw new Error();
	parent = url.host;
} catch (_) {
	const url = new URL("https://" + siteUrl);
	parent = url.host;
}

// Twitch embed throws error with strings like 'localhost:3000', but
// those persist with `new URL().host`
if (parent.startsWith("localhost")) {
	parent = "localhost";
}

const siteMetadata = {
	title: `GitShark`,
	description: `Surf through your repos, wherever you go. From changing branches, commiting data, or just navigating Git, GitShark has you covered!`,
	siteUrl,
	repoPath: "oceanbit/gitshark-website",
	keywords:
		"programming,development,mobile,web,game,consulting,software engineering,javascript,angular,react,computer science",
	twitterHandle: "@oceanbit",
};

export { parent, siteUrl, buildMode, siteMetadata };
