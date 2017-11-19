import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Landing from './Landing';

class App extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      // <Landing />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
};


export default App;
