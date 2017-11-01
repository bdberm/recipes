import {RECEIVE_RECIPE} from '../../actions/recipe_actions';
import {RECEIVE_COMMENT, REMOVE_COMMENT} from
'../../actions/comment_actions';
import merge from 'lodash/merge';

const _defaultState = {};

const CommentsReducer = (oldState = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_RECIPE:
      return merge({}, oldState, action.payload.comments);
    case RECEIVE_COMMENT:
      return merge({}, oldState, {[action.payload.comment.id]: action.payload.comment});
    case REMOVE_COMMENT:
      const newState = merge({}, oldState);
      delete newState[action.payload.comment.id];
      return newState;
    default:
      return oldState;
  }
};

export default CommentsReducer;
