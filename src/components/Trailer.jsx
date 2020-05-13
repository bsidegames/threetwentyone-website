import React from "react";
import * as PropTypes from "prop-types";
import ReactPlayer from "react-player";

const playerTagStyle = {
  zIndex: 2,
  position: "relative",
  paddingBottom: "56.25%", /* 16:9 */
  maxWidth: "640px",
  maxHeight: "auto",
};
const videoTagStyle = {
  style: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: "8px",
    width: "100%",
    height: "auto",
  },
};

const Trailer = ({ trailer }) => {
  if (trailer === undefined) return null;
  return (
    <>
      <ReactPlayer style={playerTagStyle}
                   url={trailer.webm.alternative_480}
                   playing
                   loop controls volume={0.8} muted
                   onContextMenu={e => e.preventDefault()}
                   width="100%"
                   height="auto"
                   config={{
                     file: {
                       attributes:
                         {
                           ...videoTagStyle,
                           controlsList: "nodownload",
                           disablePictureInPicture: true,
                         },
                     },
                   }} />
    </>
  );
};
Trailer.defaultProps = {
  trailer: undefined,
};
Trailer.propTypes = {
  trailer: PropTypes.object,
};
export default Trailer;