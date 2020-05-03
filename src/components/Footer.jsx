import React from "react";
import * as PropTypes from "prop-types";



const Footer = ({ legalNotice, supportInfo }) => {


  return (
    <footer className="footer">
      <h2>Say Hello!</h2>
      <p>For business inquiries please contact</p>
      <p>{supportInfo.email}</p>
      <p>{legalNotice}</p>
    </footer>
  );
};
Footer.propTypes = {
  legalNotice: PropTypes.string,
  supportInfo: PropTypes.object,
};
export default Footer;