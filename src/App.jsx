import React from 'react';
import { Routes, Route } from 'react-router-dom';
import First from './pages/First';
import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Details';
import Info from './pages/Info';
import Submissions from './pages/Submissions';

const App = () => (
  
  <Routes>
    <Route path="/" element={<First />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/submissions" element={<Submissions />} />
    <Route path="/details" element={<Details />} />
    <Route path="/info" element={<Info />} />
  </Routes>
);

    
export default App;
