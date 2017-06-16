import React, { Component } from 'react';
import Data from './data'
import ProjEntry from './ProjEntry';
import './css-component/Project.css';

class Project extends Component {
  render() {
    var projects = Data.projects.projects;

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

export default Project;
