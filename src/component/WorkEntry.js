import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class WorkEntry extends Component {
  render() {
    var job = this.props.job;

    return (
      <div className="work-entry">
        <a href={job.url}>{job.employer} - {job.title}</a>
        <div className="date-text">{job.dates}</div>
        <div className="location-text">{job.location}</div>
        <p><br />{job.description}</p>
      </div>
    );
  }
}

WorkEntry.propsType = {
  job: PropTypes.object.isRequired,
}

export default WorkEntry;
