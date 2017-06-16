import React, { Component } from 'react';
import Header from './component/Header';
import Work from './component/Work';
import Project from './component/Project';
import Education from './component/Education';
import Footer from './component/Footer';
import Data from './data'
import './App.css';

class App extends Component {
  render() {
    const bio = Data.bio;
    const work = Data.work;
    const edu = Data.education;
    const proj = Data.projects;

    return (
      <div>
        <Header bio={bio} />
        <Work work={work} />
        <Project  projects={proj} />
        <Education education={edu} />
        <Footer contacts={bio.contacts} />
      </div>
    );
  }
}

export default App;
