import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GuestNavBar = (props) => (
  <div>
    <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <img src='../../media/call911.jpg' alt=''/>
            <Link to="/">911Rescue</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem><Link to="/login">Login</Link></NavItem>
          <NavItem><Link to="/register">Register</Link></NavItem>
        </Nav>
      </Navbar>
  </div>
)

export default GuestNavBar;
