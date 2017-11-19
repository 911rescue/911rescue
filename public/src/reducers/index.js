import { combineReducers } from 'redux';
import Authentication from './Authentication';
import Emergency from './Emergency';

const RootReducer = combineReducers({
  auth: Authentication,
  emergency: Emergency,
});

export default RootReducer;
