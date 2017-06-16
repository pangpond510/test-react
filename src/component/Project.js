import React from 'react';
import PropTypes from 'prop-types'; 
import ProjEntry from './proj-component/ProjEntry';

const Project = ({projects}) => (
  <div id="projects">
    <h2>Projects</h2>
    {
      projects.map((project, index) => {
        return (<ProjEntry project={project} key={index} />);
      })
    }
  </div>
);

Project.propTypes = {
  projects: PropTypes.array.isRequired,
}

export default Project;
