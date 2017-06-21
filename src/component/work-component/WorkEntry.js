import React from 'react';
import PropTypes from 'prop-types'; 

const WorkEntry = ({job}) => (
  <div className="work-entry">
    <a href={job.url}>{job.employer} - {job.title}</a>
    <div className="date-text">{job.dates}</div>
    <div className="location-text">{job.location}</div>
    <p><br />{job.description}</p>
  </div>
);

WorkEntry.propsType = {
  job: PropTypes.shape({
    url: PropTypes.string,
    employer: PropTypes.string,
    title: PropTypes.string,
    dates: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
}

export default WorkEntry;
