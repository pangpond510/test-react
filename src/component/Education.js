import React, { Component } from 'react';
import Data from './data'
import EduEntry from './EduEntry'
import './css-component/Education.css'

class Education extends Component {
  render() {
    var schools = Data.education.schools;

    return (
      <div id="education" className="gray-background">
        <h2>Education</h2>
        {
          schools.map((school, index) => {
            return (<EduEntry school={school} key={index} />);
          })
        }
      </div>
    );
  }
}

export default Education;
