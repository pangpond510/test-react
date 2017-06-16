import React from 'react';
import PropTypes from 'prop-types';

const TopContact = ({contacts}) => (
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

TopContact.propsType = {
  contacts: PropTypes.object.isRequired,
}

export default TopContact;
