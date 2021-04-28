import React from 'react';
import './App.scss';
import Profile from './PageSections/Profile';
import Projects from './PageSections/Projects';
import EducationCareer from './PageSections/EducationCareer';
import Contact from './PageSections/Contact';



function App() {

  return (
    <div className="App">
      <Profile />
      <Projects />
      <EducationCareer />
      <Contact/>
    </div>
  );
}

export default App;
