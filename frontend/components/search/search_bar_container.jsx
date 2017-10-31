import {connect} from 'react-redux';
import React from 'react';
import SearchBar from './search_bar';
import {fetchRecipes} from '../../actions/recipe_actions';

const mapStateToProps = (state) => (
  {
    recipes: Object.values(state.entities.recipes)
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchRecipes: (() => dispatch(fetchRecipes())),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
