import React from 'react';
import {connect} from 'react-redux';
import RecipeIndexItemSave from './recipe_index_item_save';

const mapStateToProps = (state, ownProps) => {
    let classStr;
    if (!state.session.currentUser) {
      classStr = "save-from-index";
    }
    else if (state.session.currentUser.savedRecipeIds.includes(ownProps.recipeId)) {
      classStr = "save-from-index saved";
    } else {
      classStr = "save-from-index";
    }
    return {classStr};
};

export default connect(mapStateToProps, null)(RecipeIndexItemSave);
