import {connect} from 'react-redux';
import React from 'react';
import SearchBar from './search_bar';
import {fetchRecipes} from '../../actions/recipe_actions';
import {withRouter} from 'react-router-dom';

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
