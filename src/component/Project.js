import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import ProjEntry from './ProjEntry';

class Project extends Component {
  render() {
    const projects = this.props.projects.projects;

    return (
      <div id="projects">
        <h2>Projects</h2>
        {
          projects.map((project, index) => {
            return (<ProjEntry project={project} key={index} />);
          })
        }
      </div>
    );
  }
}

Project.propTypes = {
  projects: PropTypes.object.isRequired,
}

export default Project;
