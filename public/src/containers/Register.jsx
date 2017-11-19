import React, { Component } from 'react';

export default class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {}

  }

  render() {
    return (
      <div>
        <form>
          First Name:<input type='text' name='fname' /><br />
          Last Name:<input type='text' name='lname' /><br />
          Email:<input type='email' name='email' /><br />
          Password:<input type='text' name='password' /><br />
          Confirm Password:<input type='text' name='confirm-password' /><br />
        </form>
      </div>
    )
  }

}
