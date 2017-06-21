import React from "react";
import PropTypes from "prop-types";
import EduEntry from "./edu-component/EduEntry";
import "./css-component/Education.css";

const Education = ({ schools }) =>
  <div id="education" className="gray">
    <h2>Education</h2>
    {schools.map((school, index) => <EduEntry school={school} key={index} />)}
  </div>;

Education.propTypes = {
  schools: PropTypes.array.isRequired
};

export default Education;
