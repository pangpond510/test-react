import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import EduEntry from './EduEntry';

class Education extends Component {
  render() {
    const schools = this.props.education.schools;

    return (
      <div id="education" className="gray">
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

Education.propTypes = {
  schools: PropTypes.object.isRequired,
}

export default Education;
