import React from 'react';
import {connect} from 'react-redux';
import RecipeSaveButton from './recipe_save_button';
import {saveRecipe} from '../../actions/recipe_actions';
import {receiveModalWithRecipe} from '../../actions/ui_actions';
import UnsaveModalContainer from '../unsave_modal/unsave_modal_container';

const mapStateToProps = (state, ownProps) => {
    let classStr;
    let buttonStr;
    if (!state.session.currentUser) {
      classStr = "big-save-button";
      buttonStr = "Save To Recipe Box";
    }
    else if (state.session.currentUser.savedRecipeIds.includes(ownProps.recipe.id)) {
      classStr = "big-save-button saved";
      buttonStr = "Saved";
    } else {
      classStr = "big-save-button";
      buttonStr = "Save To Recipe Box";
    }
    return {classStr, buttonStr};
};

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    saveRecipe: ((recipeId) => dispatch(saveRecipe(recipeId))),
    launchUnsaveModal: ((recipe) =>
      dispatch(receiveModalWithRecipe(UnsaveModalContainer, recipe))),
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(RecipeSaveButton);
