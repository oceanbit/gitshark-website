module.exports = {
  siteMetadata: {
    title: `GitShark`,
    description: `A Git client for mobile. Surf through your repos, wherever you go.`
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
        icon: `src/assets/gitshark_logo.png`
      }
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
          include: /assets/ // See below to configure properly
        }
      }
    }
  ],
}
