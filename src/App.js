import {React} from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import About from './components/About';
import Experience from './components/Experience'
import Hero from './components/Hero'
import Details from './components/Details';
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Hero />} ></Route> 
        <Route exact path='/portfolio' element={<Experience />} ></Route>  
        <Route exact path='/about' element={<About />} ></Route>
        <Route exact path='/details/:id' element={<Details />}></Route>
        <Route exact path='/projects' element={<Projects />}></Route>
      </Routes> 
      
    </div>
  );
}

export default App;
