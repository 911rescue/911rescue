import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import GuestNavBar from '../components/GuestNavBar';
import UserNavBar from '../components/UserNavBar';
import Login from './Login';
import Register from './Register';
import SecureProperties from './SecureProperties';
import Logout from '../components/Logout';
import { logoutUser } from '../actions/Auth';
// import Signup from './Logging/Signup';
// import FrontPageUser from './FrontPage/FrontPageUser';
// import FrontPageGuest from './FrontPage/FrontPageGuest';
// import Login from './Logging/Login';


class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logoutUser=this.logoutUser.bind(this);
  }

  logoutUser() {
    this.props.dispatch(logoutUser())  
  }


  render() {
    const { dispatch, errorMessage, isAuthenticated, history } = this.props;
    return isAuthenticated === false ? (
      <Switch>
        <Route exact path="/">
          <div>
            <GuestNavBar
              dispatch={dispatch}
              errorMessage={errorMessage}
              isAuthenticated={isAuthenticated}
              history={history}
            />
          </div>
        </Route>
        <Route exact path="/login">
          <Login
            dispatch={dispatch}
            errorMessage={errorMessage}
            isAuthenticated={isAuthenticated}
            history={history}
          />
        </Route>
        <Route exact path="/register">
          <Register
            dispatch={dispatch}
            errorMessage={errorMessage}
            isAuthenticated={isAuthenticated}
            history={history}
          />          
        </Route>
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/">
          <div>
            <UserNavBar 
              dispatch={dispatch}
              errorMessage={errorMessage}
              isAuthenticated={isAuthenticated}
              history={history}
            />
            <SecureProperties 
              dispatch={dispatch}
              errorMessage={errorMessage}
              isAuthenticated={isAuthenticated}
              history={history}
            />
          </div>
        </Route>
        <Route exact path ="/logout">
          <Logout 
            dispatch={dispatch}
            errorMessage={errorMessage}
            isAuthenticated={isAuthenticated}
            history={history}
          />
        </Route>
      </Switch>
    )
  }
};


const mapStateToProps = (state) => {
  const { auth } = state;
  const { isAuthenticated, errorMessage } = auth;
  return {
    isAuthenticated,
    errorMessage
  };
};

export default withRouter(connect(mapStateToProps)(Router));
