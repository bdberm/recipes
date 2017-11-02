import React from 'react';
import {connect} from 'react-redux';
import UserRating from './user_rating';
import {createRating, updateRating} from '../../actions/rating_actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  if (ownProps.currentUserRating) {
    action = ((rating) => dispatch(updateRating(rating)));
  } else {
    action = ((rating) => dispatch(createRating(rating, ownProps.recipeId)));
  }

  return {
    action
  };

};

export default connect(null, mapDispatchToProps)(UserRating);
