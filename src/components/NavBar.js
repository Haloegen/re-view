import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

const NavBar = () => {
  return (
    <Navbar expand="md" fixed='top' className="bg-body-tertiary">
      <Container>
        <NavLink to="/">
        <Navbar.Brand >Re.View()</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink
          exact
          to='/' ><i className="fas fa-home"></i>Home</NavLink>
          <NavLink to="/signin"><i className="fas fa-sign-in-alt"></i>Sign in</NavLink>
          <NavLink to="/signup" ><i className="fas fa-user-plus"></i>Sign up</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar