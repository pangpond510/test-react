import React from "react";
import PropTypes from "prop-types";
import "./css-component/Footer.css";

const Footer = ({ contacts }) =>
  <div id="lets-connect" className="dark-gray-background">
    <h2 className="orange-background center-text">{"Let's Connect"}</h2>
    <ul id="footerContacts" className="flex-box">
      {Object.entries(contacts).map(([key, value]) =>
        <li className="flex-item" key={key}>
          <span className="orange-text">{key}</span>
          <span className="white-text">{value}</span>
        </li>
      )}
    </ul>
  </div>;

Footer.propTypes = {
  contacts: PropTypes.object.isRequired
};

export default Footer;
