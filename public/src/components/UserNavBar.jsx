import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/Auth'; 

const UserNavBar = (props) => (
  <div className='titleBar'>
    <Navbar >
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <img src='/media/call911.jpg' alt='' height='35px' width='55px' />
          </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem><Link to="/" onClick={() => props.dispatch(logoutUser(props.history))}>Logout</Link></NavItem>
      </Nav>
    </Navbar>
  </div>
)

export default UserNavBar;
