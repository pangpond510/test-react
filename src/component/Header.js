import React, { Component } from 'react';
import Data from './data'
import TopContact from './TopContact'
import Skill from './Skill'

class Header extends Component {
  render() {
    var name = Data.bio.name;
    var role = Data.bio.role;
    var contacts = Data.bio.contacts;
    var biopic = Data.bio.biopic;
    var welcomeMessage = Data.bio.welcomeMessage;
    var skills = Data.bio.skills;

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

export default Header;
