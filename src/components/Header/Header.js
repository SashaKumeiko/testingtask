import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../assets/logo.svg';

import './header.scss';

const Header = () => {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="navbar justify-content-between pt-2 pb-2"
    >
      <Navbar.Brand href="#home" className="navbar__brand ">
        <img src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
        <Nav className="mr-auto">
          <div className="navbar__line d-lg-none" />
          <Nav.Link href="#registration" className="navbar__navlink">
            About me
          </Nav.Link>
          <Nav.Link href="#registration" className="navbar__navlink">
            Relationships
          </Nav.Link>
          <Nav.Link
            href="#registration"
            className="navbar__navlink d-none d-lg-flex"
          >
            Requirements
          </Nav.Link>
          <Nav.Link href="#registration" className="navbar__navlink">
            Users
          </Nav.Link>
          <Nav.Link href="#registration" className="navbar__navlink">
            Sign Up
          </Nav.Link>
          <Nav.Link href="#registration" className="navbar__navlink d-lg-none">
            Terms and Conditions
          </Nav.Link>
          <div className="navbar__line d-lg-none line-pos" />
          <Nav.Link href="#registration" className="navbar__navlink d-lg-none">
            How it works
          </Nav.Link>
          <Nav.Link href="#registration" className="navbar__navlink d-lg-none">
            Partnership
          </Nav.Link>
          <Nav.Link href="#registration" className="navbar__navlink  d-lg-none">
            Help
          </Nav.Link>
          <Nav.Link href="#registration" className="navbar__navlink d-lg-none">
            Live testimonial
          </Nav.Link>
          <Nav.Link href="#registration" className="navbar__navlink d-lg-none">
            Contact us
          </Nav.Link>
          <div className="navbar__line d-lg-none line-pos" />
          <Nav.Link href="#registration" className="navbar__navlink d-lg-none">
            Articles
          </Nav.Link>
          <Nav.Link href="#registration" className="navbar__navlink d-lg-none">
            Our news
          </Nav.Link>
          <Nav.Link href="#registration" className="navbar__navlink d-md-none">
            Testimonials
          </Nav.Link>
          <Nav.Link href="#registration" className="navbar__navlink d-lg-none">
            Licenses
          </Nav.Link>
          <Nav.Link href="#registration" className="navbar__navlink d-lg-none">
            Privacy policy
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
