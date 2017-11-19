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
          User Name:<input type='text' name='userName' /><br />
          Password:<input type='text' name='password' /><br />
        </form>
      </div>
    )
  }

}

