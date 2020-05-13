/** @see https://www.gatsbyjs.org/docs/schema-customization/#creating-type-definitions */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type websiteData implements Node @dontInfer {
      appid: Int
      gameName: String
      description: String
      movies: [Movies]
      packageid: Int
      screenshots: [Screenshots]
      legalNotice: String
      supportInfo: SupportInfo
    }
    type Screenshots {
      alternative_id: ID
      path_thumbnail: String
      path_full: String
    }
    type SupportInfo {
      url: String
      email: String
    }
    type Movies {
      alternative_id: ID
      name: String
      thumbnail: String
      webm: Webm
      highlight: Boolean
    }
    type Webm {
      alternative_480: String
      max: String
    }
  `;
  createTypes(typeDefs);
};
