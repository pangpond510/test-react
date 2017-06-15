import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopContact extends Component {
  render() {
    var contacts = this.props.contacts;
    
    return (
      <ul id="topContacts" className="flex-box">
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
    );
  }
}

TopContact.propsType = {
  contacts: PropTypes.object.isRequired,
}


export default TopContact;
