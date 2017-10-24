import { combineReducers } from 'redux';
import errors from './errors_reducer';
import session from './session/session_reducer';
import ui from './ui/ui_reducer';

export default combineReducers({
  session,
  errors,

});
