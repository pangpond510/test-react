import React, { Component } from 'react';
import Header from './component/Header';
import Work from './component/Work';
import Project from './component/Project';
import Education from './component/Education';
import Footer from './component/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Work />
        <Project />
        <Education />
        <Footer />
      </div>
    );
  }
}

export default App;
