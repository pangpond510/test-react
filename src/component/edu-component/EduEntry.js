import React from 'react';
import PropTypes from 'prop-types'; 

const EduEntry = ({school}) => (
  <div className="education-entry">
    <a href={school.url}> {school.name} -- {school.degree}</a>
    <div className="date-text">{school.dates}</div>
    <div className="location-text">{school.location}</div>
    {
      school.majors.map((major) => {
        return (<em key="major" ><br />Major: {major}</em>);
      })
    }        
  </div>
);

EduEntry.propsType = {
  school: PropTypes.object.isRequired,
}

export default EduEntry;
