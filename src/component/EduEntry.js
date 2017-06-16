import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class EduEntry extends Component {
  render() {
    var school = this.props.school;

    return (
      <div className="education-entry">
        <a href={school.url}> {school.name} -- {school.degree}</a>
        <div className="date-text">{school.dates}</div>
        <div className="location-text">{school.location}</div>
        {
          school.majors.map((major, index) => {
            return (<em key="index" ><br />Major: {major}</em>);
          })
        }
        
      </div>
    );
  }
}

EduEntry.propsType = {
  school: PropTypes.object.isRequired,
}

export default EduEntry;
