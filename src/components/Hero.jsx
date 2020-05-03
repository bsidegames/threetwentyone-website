import React from "react";
import * as PropTypes from "prop-types";

const Hero = ({ heroImg, children }) => {
  return (
    <div className="hero__container hero__container--image hero__container--fade-out"
         style={{ backgroundImage: `url(${heroImg}` }}>
      {children}
    </div>
  );
};

Hero.propTypes = {
  heroImg: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Hero;