import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipe} from '../../actions/recipe_actions';
import Feature from './feature';
import {withRouter} from 'react-router-dom';


const mapDispatchToProps = (dispatch) => (
  {
    fetchRecipe: ((recipeId) => dispatch(fetchRecipe(recipeId))),
  }
);

export default withRouter(connect(null, mapDispatchToProps)(Feature));
