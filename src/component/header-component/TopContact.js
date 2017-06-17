import React from 'react';
import PropTypes from 'prop-types';

const TopContact = ({contacts}) => (
  <ul id="topContacts" className="flex-box">
    {
      Object.entries(contacts).map(([key,value]) => (
        <li className="flex-item" key={key}>
          <span className="orange-text">{key}</span>
          <span className="white-text">{value}</span>
        </li>
      ))
    }
  </ul>
);

TopContact.propsType = {
  contacts: PropTypes.object.isRequired,
}

export default TopContact;
