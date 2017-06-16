import React from 'react';
import PropTypes from 'prop-types'; 
import EduEntry from './EduEntry';

const Education = ({schools}) => (
  <div id="education" className="gray">
    <h2>Education</h2>
    {
      schools.map((school, index) => {
        return (<EduEntry school={school} key={index} />);
      })
    }
  </div>
);

Education.propTypes = {
  schools: PropTypes.array.isRequired,
}

export default Education;
