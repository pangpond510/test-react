import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import TopContact from './TopContact';
import Skill from './Skill';

class Header extends Component {
  render() {
    const name = this.props.bio.name;
    const role = this.props.bio.role;
    const contacts = this.props.bio.contacts;
    const biopic = this.props.bio.biopic;
    const welcomeMessage = this.props.bio.welcomeMessage;
    const skills = this.props.bio.skills;

    return (
      <div id="header" className="center-content clear-fix">
        <h1 id="name">{name}</h1>
        <span>{role}</span><hr />
        <TopContact contacts={contacts} />
        <img src={biopic} alt="myPic" className="biopic" />
        <span className="welcome-message">{welcomeMessage}</span>
        <h3 id="skills-h3">Skills at a Glance:</h3>
        <Skill skills={skills} />
      </div>
    );
  }
}

Header.propTypes = {
  bio: PropTypes.object.isRequired,
}

export default Header;
