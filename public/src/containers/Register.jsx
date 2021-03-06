import React, { Component } from 'react';
import { signupUser } from '../actions/Auth';

export default class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      fname: '',
      lname: '',
      email: '',
      callbackNum: '',
      password: '',
      confirmPwd: ''     
    }
    this.handleFname=this.handleFname.bind(this);
    this.handleLname=this.handleLname.bind(this);
    this.handleEmail=this.handleEmail.bind(this);
    this.handleCallbackNum=this.handleCallbackNum.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleConfirmPwd=this.handleConfirmPwd.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleFname(e) {
    this.setState({ fname: e.target.value });
  }

  handleLname(e) {
    this.setState({ lname: e.target.value });
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleCallbackNum(e) {
    this.setState({ callbackNum: e.target.value });
  }
  
  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleConfirmPwd(e) {
    this.setState({ confirmPwd: e.target.value });
  }

  handleSubmit() {
    if (this.state.password === this.state.confirmPwd) {
    //if true, signupUser
      console.log('*** request signUp ***')
      this.props.dispatch(signupUser(this.state, this.props.history))      
    } else {
      console.log('password mismatch');
    }
  }

  render() {
    return (!this.props.errorMessage || this.props.errorMessage.length < 0) ? (
      <div>
        <h2>New User Registration</h2>
        <form>
          <label class='register'>First Name:</label><input type='text' name='fname' onChange={(e) => {e.preventDefault(); this.handleFname(e)}} value={this.state.fname}/><br />
          <label class='register'>Last Name:</label><input type='text' name='lname' onChange={(e) => {e.preventDefault(); this.handleLname(e)}} value={this.state.lname}/><br />
          <label class='register'>Email:</label><input type='email' name='email' onChange={(e) => {e.preventDefault(); this.handleEmail(e)}} value={this.state.email}/><br />
          <label class='register'>Callback Phone Number:</label><input type='tel' name='callback' onChange={(e) => {e.preventDefault(); this.handleCallbackNum(e)}} value={this.state.callbackNum}/><br />
          <label class='register'>Password:</label><input type='text' name='password' onChange={(e) => {e.preventDefault(); this.handlePassword(e)}} value={this.state.password}/><br />
          <label class='register'>Confirm Password:</label><input type='text' name='confirm-password' onChange={(e) => {e.preventDefault(); this.handleConfirmPwd(e)}} value={this.state.confirmPwd}/><br />
          <button onClick={(e) => {e.preventDefault(); this.handleSubmit()}}>Submit</button>
        </form>
      </div>
    ) :
    (
      <div>
        <h1>{this.props.errorMessage}</h1>
        <h2>New User Registration</h2>
        <form>
          <label class='register'>First Name:</label><input type='text' name='fname' onChange={(e) => {e.preventDefault(); this.handleFname(e)}} value={this.state.fname}/><br />
          <label class='register'>Last Name:</label><input type='text' name='lname' onChange={(e) => {e.preventDefault(); this.handleLname(e)}} value={this.state.lname}/><br />
          <label class='register'>Email:</label><input type='email' name='email' onChange={(e) => {e.preventDefault(); this.handleEmail(e)}} value={this.state.email}/><br />
          <label class='register'>Callback Phone Number:</label><input type='tel' name='callback' onChange={(e) => {e.preventDefault(); this.handleCallbackNum(e)}} value={this.state.callbackNum}/><br />
          <label class='register'>Password:</label><input type='text' name='password' onChange={(e) => {e.preventDefault(); this.handlePassword(e)}} value={this.state.password}/><br />
          <label class='register'>Confirm Password:</label><input type='text' name='confirm-password' onChange={(e) => {e.preventDefault(); this.handleConfirmPwd(e)}} value={this.state.confirmPwd}/><br />
          <button onClick={(e) => {e.preventDefault(); this.handleSubmit()}}>Submit</button>
        </form>
      </div>
    )
  }

}
