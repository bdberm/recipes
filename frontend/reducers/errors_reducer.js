import { combineReducers } from 'redux';
import session from './session/session_errors_reducer';
import comments from './comments/comment_errors_reducer';

export default combineReducers({
  session,
  comments,
});
