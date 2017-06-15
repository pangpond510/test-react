import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Skill extends Component {
  render() {
    var skills = this.props.skills;

    return (
      <ul id="skills" className="flex-column">
        {
          skills.map((skill) => {
            return (
              <li className="flex-item" key={skill}>
                <span className="white-text">{skill}</span>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

Skill.propsType = {
  skills: PropTypes.array.isRequired,
}

export default Skill;
