webpackHotUpdate(0,{

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOGOUT_FAILURE = exports.LOGOUT_SUCCESS = exports.LOGOUT_REQUEST = exports.LOGIN_FAILURE = exports.LOGIN_SUCCESS = exports.LOGIN_REQUEST = undefined;

var _axios = __webpack_require__(124);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOGIN_REQUEST = exports.LOGIN_REQUEST = 'LOGIN_REQUEST';
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_FAILURE = exports.LOGIN_FAILURE = 'LOGIN_FAILURE';
var LOGOUT_REQUEST = exports.LOGOUT_REQUEST = 'LOGOUT_REQUEST';
var LOGOUT_SUCCESS = exports.LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
var LOGOUT_FAILURE = exports.LOGOUT_FAILURE = 'LOGOUT_FAILURE';

var requestLogin = function requestLogin(credentials) {
  return {
    type: 'LOGIN_REQUEST',
    isFetching: true,
    isAuthenticated: false,
    credentials: credentials
  };
};

var receiveLogin = function receiveLogin(user) {
  return {
    type: 'LOGIN_SUCCESS',
    isFetching: false,
    isAuthenticated: true,
    user: user
  };
};

var loginError = function loginError(message) {
  return {
    type: 'LOGIN_FAILURE',
    isFetching: false,
    isAuthenticated: false,
    message: message
  };
};

var requestLogout = function requestLogout() {
  return {
    type: 'LOGOUT_REQUEST',
    isFetching: true,
    isAuthenticated: true
  };
};

var receiveLogout = function receiveLogout() {
  return {
    type: 'LOGOUT_SUCCESS',
    isFetching: false,
    isAuthenticated: false
  };
};

exports.loginUser = function (creds, history) {
  var axiosBod = window.btoa(JSON.stringify({
    params: {
      email: creds.email,
      password: creds.password
    }
  }));
  console.log("AXIOS BOD IS: ", axiosBod);

  return function (dispatch) {
    dispatch(requestLogin(creds));
    return _axios2.default.get('api/login/' + axiosBod).then(function (response) {
      if (response.data.message) {
        dispatch(loginError('Bad Request...'));
        return Promise.reject(response);
      }
      console.log("RESP FROM NODE IS: ", response.data);
      // localStorage.setItem('user_token', response.data.user_token);
      localStorage.setItem('email', response.data.email);
      localStorage.setItem('name', response.data.name);
      var userAttributes = Object.values(response.data).filter(function (element, i) {
        return element !== null;
      });
      var userObject = userAttributes.reduce(function (acc, curr, i) {
        acc[i] = curr;
        return acc;
      }, {});
      console.log("USER OBJECT IS: ", userObject);
      dispatch(receiveLogin(userObject));
      history.push('/');
    }).catch(function (err) {
      console.log('Error: ', err);
    });
  };
};

exports.signupUser = function (creds, history) {
  var body = {
    email: creds.email,
    name: creds.fname + ' ' + creds.lname,
    password: creds.password,
    callbackContactNumber: creds.callbackNum
  };
  console.log('creds info', creds);
  return function (dispatch) {
    dispatch(requestLogin(creds));
    return _axios2.default.post('api/register', body).then(function (response) {
      if (response.statusText !== 'Created') {
        dispatch(loginError('Bad Request...'));
        return Promise.reject(response);
      }

      console.log("OBJECT RETURNED FROM NODE IS: ", response.data);
      // localStorage.setItem('user_token', response.data.user_token);
      localStorage.setItem('email', response.data.email);
      localStorage.setItem('name', response.data.name);
      dispatch(receiveLogin(response.data));
      history.push('/');
    }).catch(function (err) {
      console.log("Error: ", err);
    });
  };
};

exports.logoutUser = function (history) {
  return function (dispatch) {
    dispatch(requestLogout());
    // localStorage.removeItem('user_token');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    dispatch(receiveLogout());
    history.push('/');
  };
};

/***/ })

})
//# sourceMappingURL=0.74be0b8cbd561deb5eef.hot-update.js.map