import { combineReducers } from 'redux';
import Authentication from './Authentication';

const RootReducer = combineReducers({
  auth: Authentication,
});

export default RootReducer;
