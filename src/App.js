import React from 'react';
import Header from './component/Header';
import Work from './component/Work';
import Project from './component/Project';
import Education from './component/Education';
import Footer from './component/Footer';
import Data from './data'
import './App.css';

const App = (props) => (
  <div>
    <Header name={Data.bio.name} role={Data.bio.role} contacts={Data.bio.contacts} biopic={Data.bio.biopic} welcomeMsg={Data.bio.welcomeMessage} skills={Data.bio.skills} />
    <Work jobs={Data.work.jobs} />
    <Project  projects={Data.projects.projects} />
    <Education schools={Data.education.schools} />
    <Footer contacts={Data.bio.contacts} />
  </div>
);

export default App;
