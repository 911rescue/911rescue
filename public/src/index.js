require('babel-polyfill');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="App" />,
    document.body.appendChild(document.createElement('div'))
  )
});
