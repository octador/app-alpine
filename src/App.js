import './App.css';

import Home from './components/Homepage/Home.jsx';
import Color from './components/Color.jsx';
import Configurator from './components/Configurator.jsx';
import Nav from './components/Nav.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Homepage/Footer.jsx';


function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/configurator" element={<Configurator/>}></Route>
      <Route exact path="/configurator/1" element={<Color/>}></Route>
      <Route exact path="/configurator/2" element={<Color/>}></Route>
    </Routes>
    <Footer />
  
    </BrowserRouter>
  );
}

export default App;
