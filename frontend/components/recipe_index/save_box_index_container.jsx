import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipes} from '../../actions/recipe_actions';
import RecipeIndex from './recipe_index';

const mapStateToProps = (state) =>  {
  let recipes =  [];
  if (state.session.currentUser) {
    recipes = Object.values(state.entities.recipes)
    .filter((recipe) => {
      return state.session.currentUser.savedRecipeIds.includes(recipe.id);
    });
  }

  return {
    recipes,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    fetchRecipes: (() => dispatch(fetchRecipes()))

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeIndex);
