import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';


const requestLogin = credentials => ({
  type: 'LOGIN_REQUEST',
  isFetching: true,
  isAuthenticated: false,
  credentials
});


const receiveLogin = user => ({
  type: 'LOGIN_SUCCESS',
  isFetching: false,
  isAuthenticated: true,
  user
});


const loginError = message => ({
  type: 'LOGIN_FAILURE',
  isFetching: false,
  isAuthenticated: false,
  message,
});


const requestLogout = () => ({
  type: 'LOGOUT_REQUEST',
  isFetching: true,
  isAuthenticated: true,
});


const receiveLogout = () => ({
  type: 'LOGOUT_SUCCESS',
  isFetching: false,
  isAuthenticated: false,
});


exports.loginUser = (creds, history) => {
  let axiosBod = window.btoa(JSON.stringify({
    params: {
      email: creds.email,
      password: creds.password
    }
  }));
  console.log("AXIOS BOD IS: ", axiosBod);

  return (dispatch) => {
    dispatch(requestLogin(creds));
    return axios.get(`api/login/${axiosBod}`)
      .then(response => {
        if(response.data.message){
          dispatch(loginError('Bad Request...'));
          return Promise.reject(response);
        }
        console.log("RESP FROM NODE IS: ", response.data);
        // localStorage.setItem('user_token', response.data.user_token);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('name', response.data.name);
        let userAttributes = Object.values(response.data).filter((element, i) => element !== null);
        let userObject = userAttributes.reduce((acc, curr, i) => {
          acc[i] = curr;
          return acc;
        }, {});
        console.log("USER OBJECT IS: woot owot: ", userObject);
        dispatch(receiveLogin(userObject));
        history.push('/');
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  };
};


exports.signupUser = (creds, history) => {
  const body = {
    email: creds.email,
    name: creds.fname + ' ' + creds.lname,
    password: creds.password,
    callbackContactNumber: creds.callbackNum
  };
  console.log('creds info', creds);
  return (dispatch) => {
    dispatch(requestLogin(creds));
    return axios.post('api/register', body)
      .then(response => {
        if (response.statusText !== 'Created') {
          dispatch(loginError('Bad Request...'));
          return Promise.reject(response);
        }

        console.log("OBJECT RETURNED FROM NODE IS: ", response.data)
        // localStorage.setItem('user_token', response.data.user_token);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('name', response.data.name);
        dispatch(receiveLogin(response.data));
        history.push('/');
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };
};


exports.logoutUser = (history) => (dispatch) => {
  dispatch(requestLogout());
  // localStorage.removeItem('user_token');
  localStorage.removeItem('email');
  localStorage.removeItem('name');
  dispatch(receiveLogout());
  history.push('/');
};
