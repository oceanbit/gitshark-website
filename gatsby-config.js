const buildMode = process.env.BUILD_ENV || "production"
const siteUrl =
  process.env.SITE_URL ||
  (buildMode === "production"
    ? "https://gitshark.dev"
    : "https://beta.gitshark.dev")

console.log(`Building for ${buildMode} at ${siteUrl}`)

module.exports = {
  siteMetadata: {
    title: `GitShark - A Git client for mobile`,
    siteUrl,
    description: `Surf through your repos, wherever you go. From changing branches, commiting data, or just navigating Git, GitShark has you covered!`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GitShark`,
        short_name: `GitShark`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#002BFF`,
        display: `minimal-ui`,
        icon: `src/assets/gitshark_logo.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [`Roboto Mono:400`, `Rubik:400,500,700`],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-165366849-1",
        head: false,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/terms`, `/privacy`],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        resolveEnv: () => buildMode,
        env: {
          development: {
            policy: [
              {
                userAgent: "*",
                disallow: "/",
              },
            ],
          },
          production: {
            policy: [
              {
                userAgent: "*",
                allow: "/",
                disallow: ["/terms", "/privacy"],
              },
            ],
          },
        },
      },
    },
  ],
}
