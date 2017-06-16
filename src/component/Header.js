import React from 'react';
import PropTypes from 'prop-types'; 
import TopContact from './header-component/TopContact';
import Skill from './header-component/Skill';

const Header = ({name, role, contacts, biopic, welcomeMsg, skills}) => (
  <div id="header" className="center-content clear-fix">
    <h1 id="name">{name}</h1>
    <span>{role}</span><hr />
    <TopContact contacts={contacts} />
    <img src={biopic} alt="myPic" className="biopic" />
    <span className="welcome-message">{welcomeMsg}</span>
    <h3 id="skills-h3">Skills at a Glance:</h3>
    <Skill skills={skills} />
  </div>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  contacts: PropTypes.object.isRequired,
  biopic: PropTypes.string.isRequired,
  welcomeMsg: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
}

export default Header;
