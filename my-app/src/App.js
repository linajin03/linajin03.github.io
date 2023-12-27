import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home.js";
import Navigation from "./Navigation/Navbar.js";
import React from 'react';
import Collapsible from './Components/Collapsible.js';
import Footer from './Navigation/Footer.js';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <Home />
      </header>
      <Footer />
    </div>
  );
}

export default App;
