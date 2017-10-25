import {RECEIVE_RECIPES, RECEIVE_RECIPE} from
'../../actions/recipe_actions';
import merge from 'lodash/merge';

const _defaultState = {};

const RecipesReducer = (oldState = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_RECIPES:
      return merge({}, oldState, action.recipes);
    case RECEIVE_RECIPE:
      return merge({}, oldState, {[action.recipe.id]: action.recipe});
    default:
      return oldState;
  }
};

export default RecipesReducer;
