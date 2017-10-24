import {RECEIVE_SESSION_ERRORS,
RECEIVE_CURRENT_USER} from '../../actions/session_actions';

const _defaultState = [];

const SessionErrorsReducer = (oldState = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_CURRENT_USER:
      return _defaultState;
    default:
      return oldState;
  }
};

export default SessionErrorsReducer;
