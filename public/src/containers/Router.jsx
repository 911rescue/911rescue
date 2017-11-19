import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
// import Signup from './Logging/Signup';
// import FrontPageUser from './FrontPage/FrontPageUser';
// import FrontPageGuest from './FrontPage/FrontPageGuest';
// import Login from './Logging/Login';


class Router extends Component {
  constructor(props) {
    super();
    this.state = {};
  }


  render() {
    const { dispatch, errorMessage, isAuthenticated, history } = this.props;
    return isAuthenticated === false ? (
      <Switch>
        <Route exact path="/">
          <div>
            <h1>AYOOOOO</h1>
          </div>
        </Route>
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/">
          <div>
            <h1>Yoooo Hi</h1>
          </div>
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
