import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import Landing from './Landing';

export default class SecureProperties extends Component {
  constructor(props) {
    super(props);
    this.state={};
    this.requestEmergencyResponders = this.requestEmergencyResponders.bind(this);
  }

  requestEmergencyResponders(){
    axios.post('/emergency', {user: this.props.user})
      .then(response => {
        console.log("RESPONSE IS: ", response.data);
      })
      .catch(err => console.log('ERROR IS: ', err));
  }

  render() {
    return(
      <div>
        <h1>{this.props.user.name}</h1>
        <Landing />
        <DropdownButton title='Add Property' id='addProp'>
          <MenuItem eventKey='1'>Add Home/Residence</MenuItem>
          <MenuItem eventKey='2'>Add Vehicle</MenuItem>
        </DropdownButton>

        <br/>

        <div>
          <button onClick={(e) => {e.preventDefault(); this.requestEmergencyResponders()}}>HELP</button>
        </div>
      </div>
    )
  }
}
