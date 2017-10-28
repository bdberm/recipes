import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipe} from '../../actions/recipe_actions';
import RecipeShow from './recipe_show';

const mapStateToProps = (state, ownProps) => {

  const stateRec = state.entities.recipes[ownProps.match.params.recipeId];
  const recipe = stateRec || {title:"", yield: "", minutTime:"", authorName:"",
  ingredients:[], steps:[], id:"" };
  return {
    recipe,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    fetchRecipe: ((recipeId) => dispatch(fetchRecipe(recipeId))),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);
