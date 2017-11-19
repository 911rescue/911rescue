import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class SecureProperties extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  render() {
    return(
      <div>
        <DropdownButton title='Add Property' id='addProp'>
          <MenuItem eventKey='1'>Add Home/Residence</MenuItem>
          <MenuItem eventKey='2'>Add Vehicle</MenuItem>
        </DropdownButton>
      </div>
    )
  }
}
