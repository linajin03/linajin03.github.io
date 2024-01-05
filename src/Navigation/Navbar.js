import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';


function Navigation() {
  return (
    <>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
      crossorigin="anonymous"
    />
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container className="ms-20 me-20">
        <Navbar.Brand href="#home"><img src="/Images/logo.png" alt="logo" width="50%" height="50" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navbar-font">
            <Nav.Link as={NavLink} to="/">home</Nav.Link>
            <Nav.Link as={NavLink} href="#about-me">about me</Nav.Link>
            <Nav.Link as={NavLink} href="#skills">skills</Nav.Link>
            <Nav.Link as={NavLink} to="/projects">projects</Nav.Link>
            <Nav.Link as={NavLink} to="/archives">archives</Nav.Link>
          </Nav>

          <Nav className="ms-auto navbar-font">
            <Nav.Link href="https://www.linkedin.com/in/lina-jin-99b5121b0">linkedin</Nav.Link>
            <Nav.Link href="https://github.com/linajin03">github</Nav.Link>
            <Nav.Link href="mailto:lina.jin@mail.utoronto.ca">email</Nav.Link>
            {/* <Nav.Link href="#">resume</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
      

    </Navbar>
    </>
  );
};

export default Navigation;