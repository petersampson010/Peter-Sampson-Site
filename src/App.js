import React, {useState} from 'react';
import './App.css';
import Profile from './Pages/Profile'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Footer from './Components/Footer'



function App() {

  return (
    <div className="App">
      <Profile />
      <Page1 />
      <Page2 />
      <Footer/>
    </div>
  );
}

export default App;
