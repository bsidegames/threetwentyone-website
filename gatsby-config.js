const STEAM_URL = process.env.STEAM_URL || "https://store.steampowered.com/app/261570/Ori_and_the_Blind_Forest/";
const API_ENDPOINT = process.env.API_ENDPOINT; // || require("./api-endpoint.js").API_ENDPOINT;

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
