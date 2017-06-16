import React, { Component } from 'react';
import Data from './data'
import WorkEntry from './WorkEntry'
import './css-component/Work.css'

class Work extends Component {
  render() {
    var jobs = Data.work.jobs;

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

export default Work;
