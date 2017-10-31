import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipes} from '../../actions/recipe_actions';
import RecipeIndex from './recipe_index';

const mapStateToProps = (state) => {
  const allRecipes= Object.values(state.entities.recipes);
  let feature = allRecipes.filter((recipe) => (recipe.featured === true))[0];
  feature = feature ||  {};

  return {
    recipes: allRecipes.filter((recipe) => (recipe.featured === false)),
    feature
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    fetchRecipes: (() => dispatch(fetchRecipes()))

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeIndex);
