import './App.css';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Navbar from './components/Navbar.js';
import Adout from './components/About.js';
import Notfound from './components/Notfound.js'
import Card from './components/Card.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" Component={Login} />
          <Route path='home' Component={Home} />
          <Route path='/card' Component={Card} />
          <Route path='about' Component={Adout} />
          <Route path='*' Component={Notfound} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;

