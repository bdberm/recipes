import {RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER}
from '../../actions/session_actions';

import {RECEIVE_SAVES} from '../../actions/recipe_actions';


const _defaultState = {currentUser: null};

const SessionReducer = (oldState = _defaultState, action) => {

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.user};
    case REMOVE_CURRENT_USER:
      return _defaultState;
    case RECEIVE_SAVES:
      const updateUser = oldState.currentUser;
      updateUser.savedRecipeIds = action.payload.savedRecipeIds;
      return {currentUser: updateUser};
    default:
      return oldState;
  }
};

export default SessionReducer;
