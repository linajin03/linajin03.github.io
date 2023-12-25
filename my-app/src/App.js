import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home.js";
import Navbar from "./Navigation/Navbar.js";
import React from 'react';
import Collapsible from './Pages/Collapsible.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Home />
        <Collapsible />
      </header>
      
    </div>
  );
}

export default App;
