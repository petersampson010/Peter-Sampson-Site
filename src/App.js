import React, {useState} from 'react';
import './App.scss';
import Profile from './PageSections/Profile';
import Projects from './PageSections/Projects';
import EducationCareer from './PageSections/EducationCareer';
import Contact from './PageSections/Contact';
import Footer from './Components/Footer';



function App() {

  return (
    <div className="App">
      <Profile />
      <Projects />
      <EducationCareer />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
