import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipe} from '../../actions/recipe_actions';
import Feature from './feature';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let saved = false;
  if (state.session.currentUser) {
    if (state.session.currentUser.savedRecipeIds.includes(ownProps.recipe.id)) {
      saved = true;
    }
  }

  return {
    saved
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    fetchRecipe: ((recipeId) => dispatch(fetchRecipe(recipeId))),
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Feature));
