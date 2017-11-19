import React, { Component } from 'react';
import { logoutUser } from '../actions/Auth';

const Logout = (props) => {
  props.dispatch(logoutUser());
  return (
    <div>
    </div>
  )        
}

export default Logout;
