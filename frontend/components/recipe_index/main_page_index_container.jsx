import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipes} from '../../actions/recipe_actions';
import RecipeIndex from './recipe_index';

const mapStateToProps = (state) => (
  {
    recipes: Object.values(state.entities.recipes),
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchRecipes: (() => dispatch(fetchRecipes())),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeIndex);
