import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GuestNavBar = (props) => {
console.log('in GuestNavBar, props are:', props);
return (
  <div>
    <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img src='/media/call911.jpg' alt='' height='35px' width='55px' />
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem><Link to="/login">Login</Link></NavItem>
          <NavItem><Link to="/register">Register</Link></NavItem>
        </Nav>
      </Navbar>
  </div>
)
}
export default GuestNavBar;
