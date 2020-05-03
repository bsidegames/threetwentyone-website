/** @see https://www.gatsbyjs.org/docs/ssr-apis/ */
import React from "react";
import RootSettings from "./src/components/RootSettings";

/**
 * Apply page wide settings to the Gatsby root element such as styles and tags for <head>.
 */
export const wrapRootElement = ({ element }) => <RootSettings>{element}</RootSettings>;
