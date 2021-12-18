import './global/App.scss';
import './global/index.scss';
import './global/colors.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home, Contact, AboutMe, Portfolio} from './pages'
import Navbar from './components/navbar/Navbar'
import React from 'react';

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
