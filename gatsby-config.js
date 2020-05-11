const autoprefixer = require("autoprefixer");

module.exports = {
  siteMetadata: {
    title: `Oberion 16bit Starter`,
    description: `Create your gaming website within 5 minutes for free with Oberion at https://oberion.io`,
  },
  plugins: [
    /* --- meta --- */
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,

    /* --- CSS --- */
    // `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          autoprefixer({ overrideBrowserslist: ["> 1%", "last 2 versions"] }),
        ],
      },
    },

    /* --- image --- */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
