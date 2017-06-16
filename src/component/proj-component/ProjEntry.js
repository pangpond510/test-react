import React from 'react';
import PropTypes from 'prop-types'; 

const ProjEntry =({project}) => (
  <div className="project-entry">
    <a href={project.url}>{project.title}</a>
    <div className="date-text">{project.dates}</div>
    <p><br />{project.description}</p>
    {
      project.images.map((image, index) => {
        return (<img className="project-img" src={image} alt="Project images" key={index} />);
      })
    }  
  </div>
);

ProjEntry.propsType = {
  project: PropTypes.object.isRequired,
}

export default ProjEntry;
