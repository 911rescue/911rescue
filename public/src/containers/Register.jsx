import React, { Component } from 'react';
import { signUpUser } from '../actions/Auth';

export default class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPwd: ''     
    }

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
          <button>Submit</button>
        </form>
      </div>
    )
  }

}
