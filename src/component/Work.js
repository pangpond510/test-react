import React from "react";
import PropTypes from "prop-types";
import WorkEntry from "./work-component/WorkEntry";
import "./css-component/Work.css";

const Work = ({ jobs }) =>
  <div id="workExperience" className="gray-background">
    <h2>Work Experience</h2>
    {jobs.map((job, index) => <WorkEntry job={job} key={index} />)}
  </div>;

Work.propTypes = {
  jobs: PropTypes.array.isRequired
};

export default Work;
