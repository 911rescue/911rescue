import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/Auth'; 

const UserNavBar = (props) => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <img src='https://github.com/911rescue/911rescue/tree/master/media/call911.jpg' alt=''/>
          <Link to="/">911Rescue</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem><Link to="/" onClick={() => props.dispatch(logoutUser(props.history))}>Logout</Link></NavItem>
      </Nav>
    </Navbar>
  </div>
)

export default UserNavBar;
