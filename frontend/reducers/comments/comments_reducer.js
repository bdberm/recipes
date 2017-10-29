import {RECEIVE_RECIPE} from '../../actions/recipe_actions';
import merge from 'lodash/merge';

const _defaultState = {};

const CommentsReducer = (oldState = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_RECIPE:
      return merge({}, oldState, action.payload.comments);
    default:
      return oldState;

  }
};

export default CommentsReducer;
