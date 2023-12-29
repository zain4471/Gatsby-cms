/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `GATSBY_CMS`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `pkc8od7g9jjq`,
        accessToken: `_U8HynuS6od0Xm9F-m00aL4TwbxLff4E9ACU8dzL7G0`,
      },
    },
    `gatsby-plugin-image`,
  ],
};
