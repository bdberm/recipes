import {connect} from 'react-redux';
import React from 'react';
import {unsaveRecipe} from '../../actions/recipe_actions';
import {removeModal} from '../../actions/ui_actions';
import UnSaveModal from './unsave_modal';


const mapStateToProps = (state) => (
  {
    recipe: state.ui.modal.recipe
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    removeModal: (() => dispatch(removeModal())),
    unsaveRecipe: ((recipeId) => dispatch(unsaveRecipe(recipeId))),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UnSaveModal);
