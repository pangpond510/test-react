import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({skills}) => (
  <ul id="skills" className="flex-column">
    {
      skills.map((skill) => (
        <li className="flex-item" key={skill}>
          <span className="white-text">{skill}</span>
        </li>
      ))
    }
  </ul>
);

Skill.propsType = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Skill;
