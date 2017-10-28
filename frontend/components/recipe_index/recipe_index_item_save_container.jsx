import React from 'react';
import {connect} from 'react-redux';
import RecipeIndexItemSave from './recipe_index_item_save';
import {saveRecipe} from '../../actions/recipe_actions';
import {receiveModal, receiveModalWithRecipe} from '../../actions/ui_actions';
import LoginFormContainer from '../session_forms/login_form_container';
import UnsaveModalContainer from '../unsave_modal/unsave_modal_container';

const mapStateToProps = (state, ownProps) => {
    let classStr;
    let recipeSaved;
    if (!state.session.currentUser) {
      classStr = "save-from-index";
      recipeSaved = "No User";
    }
    else if (state.session.currentUser.savedRecipeIds.includes(ownProps.recipe.id)) {
      classStr = "save-from-index saved";
      recipeSaved = true;
    } else {
      classStr = "save-from-index";
      recipeSaved = false;
    }
    return {classStr, recipeSaved};
};

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    launchLogin: (() => dispatch(receiveModal(LoginFormContainer))),
    saveRecipe: ((recipeId) => dispatch(saveRecipe(recipeId))),
    launchUnsaveModal: ((recipe) =>
      dispatch(receiveModalWithRecipe(UnsaveModalContainer, recipe))),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeIndexItemSave);
