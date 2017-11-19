import React, { Component } from 'react';

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state={}
  }

  render(){
    return(
      <div>
        <form>
            <input type='text' name='height'>Height</input>
            <input type='text' name='weight'>Weight</input>
            <input type='text' name='race'>Race</input>
            <input type='text' name='hairColor'>Hair Color</input>
            <input type='text' name='eyeColor'>Eye Color</input>
          DropDown of ID Types<br />
          Corresponding ID Field<br />
          List of Emergency Contact<br />
          <button>Add Contact</button>
        </form> 
      </div>    
    )
  }
}