import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class Footer extends Component {
  render() {
    const contacts = this.props.contacts;

    return ( 
      <div id="lets-connect" className="dark-gray">
        <h2 className="orange center-text">Let's Connect</h2>
        <ul id="footerContacts" className="flex-box">
        {
          Object.keys(contacts).map((keyName) => {
            return (
              <li className="flex-item" key={keyName}>
                <span className="orange-text">{keyName}</span>
                <span className="white-text">{contacts[keyName]}</span>
              </li>
            );
          })
        }
        </ul>
      </div>
    );
  }
}

Footer.propTypes = {
  contacts: PropTypes.object.isRequired,
}

export default Footer;
