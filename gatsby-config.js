/* This API will be deprecated and replaced after initial release. Until then have fun! */
const API_ENDPOINT = "https://igneous-sandbox-259013.appspot.com/api/website-data/v1";
/* Use environment variables or replace the Steam URL to change the content of your site. */
const STEAM_URL = process.env.STEAM_URL || "https://store.steampowered.com/app/237930/Transistor/";

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
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("autoprefixer")({ overrideBrowserslist: ["> 1%", "last 2 versions"] }),
        ],
      },
    },

    /* --- image --- */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    /* --- source --- */
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: API_ENDPOINT,
        method: "post",
        headers: { "Content-Type": "application/json" },
        data: { url: STEAM_URL },
        name: `websiteData`,
        entityLevel: `data`,
      },
    },
  ],
};
