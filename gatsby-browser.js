/** @see https://www.gatsbyjs.org/docs/browser-apis/ */
import React from "react";
import RootWrapper from "./src/components/RootWrapper";

/**
 * Apply page wide settings to the Gatsby root element such as styles and tags for <head>.
 */
export const wrapRootElement = ({ element }) => <RootWrapper>{element}</RootWrapper>;

/**
 * Trigger reload for service worker when an update is available.
 * @see https://www.gatsbyjs.org/docs/add-offline-support-with-a-service-worker/#displaying-a-message-when-a-service-worker-updates
 */
export const onServiceWorkerUpdateReady = () => window.location.reload();
