import {RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER}
from '../../actions/session_actions';
import {RECEIVE_COMMENT, REMOVE_COMMENT} from
'../../actions/comment_actions';
import {RECEIVE_RATING, REMOVE_RATING} from '../../actions/rating_actions';

import {RECEIVE_SAVES} from '../../actions/recipe_actions';


const _defaultState = {currentUser: null};

const SessionReducer = (oldState = _defaultState, action) => {
  let user;
  let index;
  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      return {currentUser: action.user};
    case REMOVE_CURRENT_USER:
      return _defaultState;
    case RECEIVE_SAVES:
      user = oldState.currentUser;
      user.savedRecipeIds = action.payload.savedRecipeIds;
      return {currentUser: user};
    case RECEIVE_COMMENT:
      user = oldState.currentUser;
      user.commentIds.push(action.payload.comment.id);
      return {currentUser: user};
    case REMOVE_COMMENT:
      user = oldState.currentUser;
      index = user.commentIds.indexOf(action.payload.comment.id);
      if (index !== -1) {
        user.commentIds.splice(index, 1);
      }
      return {currentUser: user};
    case RECEIVE_RATING:
      user = oldState.currentUser;
      user.ratedRecipeIds.push(action.payload.rating.recipe_id);
      return {currentUser: user};
    case REMOVE_RATING:
      user = oldState.currentUser;
      index = user.ratedRecipeIds.indexOf(action.payload.rating.recipe_id);
      if (index !== -1) {
        user.ratedRecipeIds.splice(index, 1);
      }
      return {currentUser: user};
    default:
      return oldState;
  }
};

export default SessionReducer;
