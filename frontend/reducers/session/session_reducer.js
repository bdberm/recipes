import {RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER}
from '../../actions/session_actions';


const _defaultState = {currentUser: null};

const SessionReducer = (oldState = _defaultState, action) => {
  debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.user};
    case REMOVE_CURRENT_USER:
      return _defaultState;
    default:
      return oldState;
  }
};

export default SessionReducer;
