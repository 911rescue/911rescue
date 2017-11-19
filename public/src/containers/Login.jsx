import React, { Component } from 'react';
import { loginUser } from '../actions/Auth';

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.handleEmail=this.handleEmail.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.LoginUser=this.LoginUser.bind(this);
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  LoginUser(){
    if(this.state.email.length > 6 && this.state.password.length > 6){
      this.props.dispatch(loginUser(this.state, this.props.history))
    }
  }

  render() {
    return this.props.errorMessage.length < 0 ? (
      <div>
        <form>
          Email:<input type='email' name='email' onChange={(e) => {e.preventDefault(); this.handleEmail(e)}} value={ this.state.email }/><br />
          Password:<input type='text' name='password' onChange={(e) => {e.preventDefault(); this.handlePassword(e)}} value={ this.state.password }/><br />
          <button onClick={(e) => {e.preventDefault(); this.LoginUser() }}>Submit</button>
        </form>
      </div>
    ) :
    (
      <div>
        <h1>{this.props.errorMesage}</h1>
        <form>
          Email:<input type='email' name='email' onChange={(e) => {e.preventDefault(); this.handleEmail(e)}} value={ this.state.email }/><br />
          Password:<input type='text' name='password' onChange={(e) => {e.preventDefault(); this.handlePassword(e)}} value={ this.state.password }/><br />
          <button onClick={(e) => {e.preventDefault(); this.LoginUser() }}>Submit</button>
        </form>
      </div>
    )
  }

}

