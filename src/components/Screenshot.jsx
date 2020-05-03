import React from "react";
import * as PropTypes from "prop-types";
import Gallery from 'react-grid-gallery';


const Screenshot = ({ screenshots }) => {

  const images = () => {
    return screenshots.map(el =>(
      {
        src: el.path_full,
        thumbnail: el.path_thumbnail,
        thumbnailWidth: 600,
        thumbnailHeight: 338,
      }
    ))
  }
  const array = images();

  return (
    <section className="screenshot__container">
      <h2 align="center">Screenshots</h2>
      <Gallery images={array}
               enableImageSelection={false}
      />
    </section>
  );
};
Screenshot.propTypes = {
  screenshots: PropTypes.array,
};
export default Screenshot;