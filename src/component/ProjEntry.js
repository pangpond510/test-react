import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class ProjEntry extends Component {
  render() {
    var project = this.props.project;

    return (
      <div className="project-entry">
        <a href={project.url}>{project.title}</a>
        <div className="proj-date-text">{project.dates}</div>
        <p>{project.description}</p>
        {
          project.images.map((image, index) => {
              return (<img className="project-img" src={image} alt="Project images" key={index} />);
          })
        }
      </div>
    );
  }
}

ProjEntry.propsType = {
  project: PropTypes.object.isRequired,
}

export default ProjEntry;
