import { combineReducers } from 'redux';
import users from './users';
import issues from './issues';

const reducer = combineReducers({
  users,
  issues,
});

export default reducer;