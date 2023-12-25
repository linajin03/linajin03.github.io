import React from "react";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav me-auto">
        <li className="nav-item">
            <a className="nav-link" href="#">
              <img src="/Images/logo.png" alt="logo" width="100%" height="50" />
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="./Pages/Home.js">
              home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              archives
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="https://www.linkedin.com/in/lina-jin-99b5121b0">
              linkedin
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/linajin03">
              github
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              email
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;