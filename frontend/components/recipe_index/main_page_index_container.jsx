import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipes} from '../../actions/recipe_actions';
import RecipeIndex from './recipe_index';
import {receiveModal} from '../../actions/ui_actions';

const mapStateToProps = (state) => {
  const loggedIn = (state.currentUser) ? true : false;
  return {
    recipes: Object.values(state.entities.recipes),
    loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    fetchRecipes: (() => dispatch(fetchRecipes())),
    recieveModal: ((component) => dispatch(receiveModal(component))),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeIndex);
