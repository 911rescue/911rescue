import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserNavBar = (props) => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">911Rescue</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem><Link to="/logout">Logout</Link></NavItem>
      </Nav>
    </Navbar>
  </div>
)

export default UserNavBar;
