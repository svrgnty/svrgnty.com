const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `svrgnty`,
    siteUrl: `https://svrgnty.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        sitemap: 'https://svrgnty.com/sitemap-index.xml',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {      
        output: '/',
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `data`),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`, 
  ],
}
