import React from "react";
import * as PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import "../styles.css";

const RootWrapper = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:400&display=swap" />
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" />

      </Helmet>
      {children}
    </>
  );
};
RootWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default RootWrapper;
