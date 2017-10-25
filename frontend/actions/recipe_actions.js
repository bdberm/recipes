import * as RecipeAPIUtil from '../util/recipe_api_util';

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';

const receiveRecipes = (recipes) => (
  {
    type: RECEIVE_RECIPES,
    recipes
  }
);

const receiveRecipe = (recipe) => (
  {
    type: RECEIVE_RECIPE,
    recipe
  }
);

export const fetchRecipes = () => (dispatch) => (
  RecipeAPIUtil.fetchRecipes().then(
    ((recipes) => dispatch(receiveRecipes(recipes)))
  )
);


export const fetchRecipe = (recipeId) => (dispatch) => (
  RecipeAPIUtil.fetchRecipe(recipeId).then(
    ((recipe) => dispatch(receiveRecipe(recipe)))
  )
);
