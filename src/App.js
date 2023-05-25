import {React, useState} from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import About from './components/About';
// import Education from './components/Education';
// import More from './components/More'
import Experience from './components/Experience'
import Hero from './components/Hero'

function App() {
  return (
    <div className="App">
      {/* <Experience inExperience={experience} /> */}
      <Routes>
        <Route exact path='/' element={<Hero />} ></Route> 
        <Route exact path='/portfolio' element={<Experience />} ></Route>  
        <Route exact path='/about' element={<About />} ></Route>
      </Routes> 
      
    </div>
  );
}

export default App;
