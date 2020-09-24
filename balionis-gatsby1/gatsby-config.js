/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Title@Metadata`,
    trademark: `MySide@Metadata`,
    description: `balionis gatsby sandbox...`,
    author: `arvydas balionis`,
  },  
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `balionis-gatsby0`,
        short_name: `balionis-gatsby0`,
        start_url: `/`,
        display: `standalone`,
        icon: `static/favicon.ico`, 
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
