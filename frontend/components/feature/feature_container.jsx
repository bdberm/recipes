import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipe} from '../../actions/recipe_actions';
import Feature from './feature';


const mapDispatchToProps = (dispatch) => (
  {
    fetchRecipe: ((recipeId) => dispatch(fetchRecipe(recipeId))),
  }
);

export default connect(null, mapDispatchToProps)(Feature);
