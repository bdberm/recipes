import * as RecipeAPIUtil from '../util/recipe_api_util';

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const RECEIVE_SAVES = 'RECEIVE_SAVES';


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

const receiveSaves = (payload) => (
  {
    type: RECEIVE_SAVES,
    payload
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

export const saveRecipe = (recipeId) => (dispatch) => (
  RecipeAPIUtil.saveRecipe(recipeId).then(
    ((response) => dispatch(receiveSaves(response)))
  )
);

export const unsaveRecipe = (recipeId) => (dispatch) => (
  RecipeAPIUtil.unsaveRecipe(recipeId).then(
    ((response) => dispatch(receiveSaves(response)))
  )
);
