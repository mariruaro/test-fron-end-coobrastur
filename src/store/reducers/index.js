import { combineReducers } from 'redux';
import usersReducer from '../ducks/users';

const rootReducer = combineReducers({ user: usersReducer });

export default rootReducer;
