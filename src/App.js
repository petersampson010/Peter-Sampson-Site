import React, {useState} from 'react';
import './App.css';
import Profile from './Pages/Profile'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Contact from './Pages/Contact'


function App() {

  return (
    <div className="App">
      <Profile />
      <Page1 />
      <Page2 />
      <Contact />
    </div>
  );
}

export default App;
