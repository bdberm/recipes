import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipes} from '../../actions/recipe_actions';
import RecipeIndex from './recipe_index';
import {searchRecipes} from '../../util/search_util';


const mapStateToProps = (state, ownProps) => {
  
  return {
    recipes: searchRecipes(Object.values(state.entities.recipes), ownProps.match.params.searchQuery),
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    fetchRecipes: (() => dispatch(fetchRecipes()))

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeIndex);
