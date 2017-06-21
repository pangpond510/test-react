import React from 'react';
import PropTypes from 'prop-types'; 

const ProjEntry =({project}) => (
  <div className="project-entry">
    <a href={project.url}>{project.title}</a>
    <div className="date-text">{project.dates}</div>
    <p><br />{project.description}</p>
    {
      project.images.map((image, index) => (<img className="project-img" src={image} alt="Project images" key={index} />))
    }  
  </div>
);

ProjEntry.propsType = {
  project: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    dates: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.array,
  }).isRequired,
}

export default ProjEntry;
