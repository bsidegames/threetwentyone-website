import React from "react";
import * as PropTypes from "prop-types";

const StoreLink = ({ appid, packageid, gameName }) => {
  if (appid === undefined || packageid === undefined) return null;

  const srcUrl = `https://store.steampowered.com/widget/${appid}/${packageid}/`;
  const title = `Buy ${gameName} on Steam`;

  return (
    <div className="store-link__container">
      <iframe src={srcUrl}
              title={title}
              frameBorder="0"
              className="store-link__iframe"
      />
    {/* TODO Create component for small devices to replace Steam's iframe */}
    </div>
  );
};
StoreLink.propTypes = {
  packageid: PropTypes.number,
  appid: PropTypes.number,
  gameName: PropTypes.string,
};
export default StoreLink;