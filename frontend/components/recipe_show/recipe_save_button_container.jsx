import React from 'react';
import {connect} from 'react-redux';
import RecipeSaveButton from './recipe_save_button';

const mapStateToProps = (state, ownProps) => {
    let classStr;
    let buttonStr;
    if (!state.session.currentUser) {
      classStr = "big-save-button";
      buttonStr = "Save To Recipe Box";
    }
    else if (state.session.currentUser.savedRecipeIds.includes(ownProps.recipeId)) {
      classStr = "big-save-button saved";
      buttonStr = "Saved";
    } else {
      classStr = "big-save-button";
      buttonStr = "Save To Recipe Box";
    }
    return {classStr, buttonStr};
};



export default connect(mapStateToProps, null)(RecipeSaveButton);
