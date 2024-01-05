import logo from './logo.svg';
import './App.css';
import './Styling/Card.css';
import Navigation from "./Navigation/Navbar.js";
import React from 'react';
import Footer from './Navigation/Footer.js';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes.js';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation />
      <div className="App-header">
        <Routes>
          {AppRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
