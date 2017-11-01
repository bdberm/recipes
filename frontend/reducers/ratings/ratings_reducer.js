import {RECEIVE_RECIPE} from '../../actions/recipe_actions';
import {RECEIVE_RATING, REMOVE_RATING} from '../../actions/rating_actions';
import merge from 'lodash/merge';

const _defaultState = {};

const RatingsReducer = (oldState = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_RECIPE:
      return  merge({}, oldState, action.payload.ratings);
    case RECEIVE_RATING:
      return merge({}, oldState, {[action.payload.rating.id]: action.payload.rating});
    case REMOVE_RATING:
      const newState = merge({}, oldState);
      delete newState[action.payload.rating.id];
      return newState;
    default:
      return oldState;
  }
};

export default RatingsReducer;
