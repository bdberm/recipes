import {RECEIVE_RECIPES, RECEIVE_RECIPE} from
'../../actions/recipe_actions';
import {RECEIVE_COMMENT, REMOVE_COMMENT} from
'../../actions/comment_actions';
import merge from 'lodash/merge';

const _defaultState = {};

const RecipesReducer = (oldState = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_RECIPES:
      return merge({}, oldState, action.recipes);
    case RECEIVE_RECIPE:
      return merge({}, oldState, {[action.payload.recipe.id]: action.payload.recipe});
    case RECEIVE_COMMENT:
      return merge({}, oldState, {[action.payload.recipe.id]: action.payload.recipe});
    case REMOVE_COMMENT:
      return merge({}, oldState, {[action.payload.recipe.id]: action.payload.recipe});

    default:
      return oldState;
  }
};

export default RecipesReducer;
