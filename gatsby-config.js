module.exports = {
  siteMetadata: {
    title: `DFDS WiFi Portal`,
    description: `A Portal to be used as landing page for WiFi connection`,
    author: `Andreas Soelberg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    //`gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `niq1s6ayg563`,
        accessToken: `j5vesvdUyoYpomYVV4pkySlNsQf4HkjfQ6Rcb4S3w3A`
      }
    },
    `@contentful/gatsby-transformer-contentful-richtext`
  ],
}
