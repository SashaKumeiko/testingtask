import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

import './header.scss'

const Header = () => {
  return (
    <div className='header'>
      <Navbar expand="lg"  className="navbar justify-content-between">
        <Navbar.Brand href="#home">TESTTASK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
          <Nav className="mr-auto">
            <Nav.Link href="#registration" className="navbar__navlink">About me</Nav.Link>
            <Nav.Link href="#registration" className="navbar__navlink">Relationships</Nav.Link>
            <Nav.Link href="#registration" className="navbar__navlink">Requirements</Nav.Link>
            <Nav.Link href="#registration" className="navbar__navlink">Users</Nav.Link>
            <Nav.Link href="#registration" className="navbar__navlink">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
