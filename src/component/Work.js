import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import WorkEntry from './WorkEntry';

class Work extends Component {
  render() {
    const jobs = this.props.work.jobs;

    return (
      <div id="workExperience" className="gray">
        <h2>Work Experience</h2>
        {
          jobs.map((job, index) => {
            return (<WorkEntry job={job} key={index} />);
          })
        }
      </div>
    );
  }
}

Work.propTypes = {
  work: PropTypes.object.isRequired,
}

export default Work;
