import React, { Component } from 'react';

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {}

  }

  render() {
    return (
      <div>
        <form>
          Email:<input type='email' name='email' /><br />
          Password:<input type='text' name='password' /><br />
          <button>Submit</button>
        </form>
      </div>
    )
  }

}

