/** @see https://www.gatsbyjs.org/docs/ssr-apis/ */
import React from "react";
import RootWrapper from "./src/components/RootWrapper";

/**
 * Apply page wide settings to the Gatsby root element such as styles and tags for <head>.
 */
export const wrapRootElement = ({ element }) => <RootWrapper>{element}</RootWrapper>;
