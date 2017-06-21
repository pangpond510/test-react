import React , {Component} from 'react';
import Header from './component/Header';
import Work from './component/Work';
import Project from './component/Project';
import Education from './component/Education';
import Footer from './component/Footer';
import Data from './data'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {data: Data}
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Header name={data.bio.name} role={data.bio.role} contacts={data.bio.contacts} biopic={data.bio.biopic} welcomeMsg={data.bio.welcomeMessage} skills={data.bio.skills} />
        <Work jobs={data.work.jobs} />
        <Project  projects={data.projects.projects} />
        <Education schools={data.education.schools} />
        <Footer contacts={data.bio.contacts} />
      </div>
    )
  }
}

export default App;
