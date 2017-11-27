import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import GuestNavBar from '../components/GuestNavBar';
import UserNavBar from '../components/UserNavBar';
import Login from './Login';
import Register from './Register';
import SecureProperties from './SecureProperties';
// import Profile from './Profile';
import { logoutUser } from '../actions/Auth';
import Landing from './Landing';
// import Signup from './Logging/Signup';
// import FrontPageUser from './FrontPage/FrontPageUser';
// import FrontPageGuest from './FrontPage/FrontPageGuest';
// import Login from './Logging/Login';


class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    console.log("props are: ", this.props);
    const { dispatch, errorMessage, isAuthenticated, history, user } = this.props;
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
            <Landing />
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
              user={user}
            />
            {/* <Profile 
              dispatch={dispatch}
              errorMessage={errorMessage}
              isAuthenticated={isAuthenticated}
              history={history}
            /> */}
            <SecureProperties 
              dispatch={dispatch}
              errorMessage={errorMessage}
              isAuthenticated={isAuthenticated}
              history={history}
              user={user}
            />
          </div>
        </Route>
      </Switch>
    )
  }
};


const mapStateToProps = (state) => {
  console.log('state to map: ', state);
  const { auth } = state;
  const { isAuthenticated, errorMessage, user } = auth;
  return {
    isAuthenticated,
    errorMessage,
    user
  };
};

export default withRouter(connect(mapStateToProps)(Router));
