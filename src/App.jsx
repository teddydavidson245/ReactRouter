import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';

function App() {


  return (
    <>
        <div id="container">
      {/* <h1>Hello React Router!</h1> */}
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/">Home</Link>
      </div>
      <div id="main-section">
        <Routes>
        <Route path="/blue" Component={Blue}/>
        <Route path="/red" Component={Red}/>
        <Route path="/" Component={Home}/>
        </Routes>
      </div>
      <footer className="footer">
          <div className="footer-links">
              <Link to="/blue">Blue</Link>
              <Link to="/red">Red</Link>
              <Link to="/">Home</Link>
          </div>
        </footer>
    </div>
    </>
  )
}

export default App
