/** @see https://www.gatsbyjs.org/docs/browser-apis/ */
import React from "react";
import RootSettings from "./src/components/RootSettings";

/**
 * Apply page wide settings to the Gatsby root element such as styles and tags for <head>.
 */
export const wrapRootElement = ({ element }) => <RootSettings>{element}</RootSettings>;

/**
 * Trigger reload for service worker when an update is available.
 * @see https://www.gatsbyjs.org/docs/add-offline-support-with-a-service-worker/#displaying-a-message-when-a-service-worker-updates
 */
export const onServiceWorkerUpdateReady = () => window.location.reload();
