import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipe} from '../../actions/recipe_actions';
import RecipeShow from './recipe_show';

const mapStateToProps = (state, ownProps) => {

  const stateRec = state.entities.recipes[ownProps.match.params.recipeId];
  const recipe = stateRec || {title:"", yield: "", minutTime:"", authorName:"",
  ingredients:[], steps:[], id:"" };

  let averageRating;
  let numRatings = 0;
  if (recipe.ratingIds) {
    const allRatings = Object.values(state.entities.ratings);
    const myRatings = allRatings.filter((rating) => (
      recipe.ratingIds.includes(rating.id)
    ));

    const myRatingsSum = myRatings.reduce((sum, rating) => (
      sum + rating.rating
    ),0);

    numRatings = myRatings.length;
    averageRating = myRatingsSum / numRatings;
    
  }


  return {
    recipe,
    numRatings,
    averageRating,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    fetchRecipe: ((recipeId) => dispatch(fetchRecipe(recipeId))),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);
