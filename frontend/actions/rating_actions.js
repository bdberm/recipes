import * as RatingAPIUtil from '../util/rating_api_util';

export const RECEIVE_RATING = "RECEIVE_RATING";
export const REMOVE_RATING = "REMOVE RATING";

const receiveRating = (payload) => (
  {
    type: RECEIVE_RATING,
    payload
  }
);

const removeRating = (payload) => (
  {
    type: REMOVE_RATING,
    payload
  }
);

export const createRating = (rating, recipeId) => (dispatch) => (
  RatingAPIUtil.createRating(rating, recipeId).then (
    (response) => dispatch(receiveRating(response))
  )
);


export const deleteRating = (ratingId) => (dispatch) => (
  RatingAPIUtil.deleteRating(ratingId).then(
    (response) => dispatch(removeRating(response))
  )
);

export const updateRating = (rating) => (dispatch) => (
  RatingAPIUtil.updateRating(rating).then(
    (response) => dispatch(receiveRating(response))
  )
);
